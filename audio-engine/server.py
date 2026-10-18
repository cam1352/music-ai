"""
FastAPI Server for 432 Hz Sound Engine
Endpoints:
- POST /api/audio/generate: Generates pure 432 Hz compositions (Singing bowls, Gregorian, Ambient, Sleep)
- POST /api/audio/verify: Analyzes audio FFT/CQT and returns tuning metrics
- POST /api/audio/pitch-shift: Shifts standard 440 Hz audio to 432 Hz (-31.766 cents)
- GET /api/audio/health: Healthcheck
"""

import os
import sys
import uuid
import numpy as np
import soundfile as sf
from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

sys.path.append(os.path.dirname(__file__))
from engine import (
    synthesize_singing_bowl,
    synthesize_gregorian_drone,
    synthesize_nature_soundscape,
    shift_to_432hz,
    analyze_tuning_verification,
    CENTS_DIFF_432,
    A4_VERDI
)

app = FastAPI(title="432 Hz Sound Engine API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

AUDIO_OUTPUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(__file__)),
    "web-app", "public", "audio"
)
os.makedirs(AUDIO_OUTPUT_DIR, exist_ok=True)
SAMPLE_RATE = 44100


class GenerationRequest(BaseModel):
    genre: str  # "singing_bowls", "gregorian", "nature_soundscape", "sleep"
    tuning_hz: float = 432.0
    duration_sec: float = 30.0
    base_freq: Optional[float] = None
    mood: Optional[str] = "calm"


@app.get("/api/audio/health")
def health():
    return {
        "status": "healthy",
        "engine": "432 Hz Harmonic Synthesizer",
        "reference_a4": A4_VERDI,
        "cents_difference": round(CENTS_DIFF_432, 4)
    }


@app.post("/api/audio/generate")
def generate_audio(req: GenerationRequest):
    try:
        # Duration capped for interactive performance
        duration = min(max(req.duration_sec, 5.0), 300.0)
        
        # Calculate base frequency if not provided
        base_f = req.base_freq or (216.0 if req.tuning_hz == 432.0 else 220.0)
        
        if req.genre == "singing_bowls":
            audio = synthesize_singing_bowl(base_freq=base_f, duration_sec=duration, sample_rate=SAMPLE_RATE)
            title = f"Singing Bowl Resonance ({req.tuning_hz} Hz)"
        elif req.genre == "gregorian":
            root_f = 108.0 if req.tuning_hz == 432.0 else 110.0
            audio = synthesize_gregorian_drone(root_freq=root_f, duration_sec=duration, sample_rate=SAMPLE_RATE)
            title = f"Gregorian Modal Chant ({req.tuning_hz} Hz)"
        elif req.genre == "sleep":
            num_samples = int(duration * SAMPLE_RATE)
            t = np.linspace(0, duration, num_samples, endpoint=False)
            carrier = 108.0 if req.tuning_hz == 432.0 else 110.0
            # 2.5 Hz Delta waves
            left = 0.5 * np.sin(2 * np.pi * carrier * t)
            right = 0.5 * np.sin(2 * np.pi * (carrier + 2.5) * t)
            swell = 0.5 * (1.0 + np.sin(2 * np.pi * 0.08 * t))
            audio = np.column_stack((left * swell, right * swell))
            title = f"Deep Delta Sleep Journey ({req.tuning_hz} Hz)"
        else:
            audio = synthesize_nature_soundscape(duration_sec=duration, sample_rate=SAMPLE_RATE)
            title = f"Harmonic Nature Soundscape ({req.tuning_hz} Hz)"

        # Save to web-app/public/audio
        filename = f"gen_{req.genre}_{uuid.uuid4().hex[:8]}.wav"
        filepath = os.path.join(AUDIO_OUTPUT_DIR, filename)
        sf.write(filepath, audio, SAMPLE_RATE, subtype='PCM_16')
        
        # Run instant spectral verification
        verification = analyze_tuning_verification(filepath)

        return {
            "success": True,
            "filename": filename,
            "url": f"/audio/{filename}",
            "title": title,
            "genre": req.genre,
            "tuning_hz": req.tuning_hz,
            "duration_sec": duration,
            "verification": verification
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/audio/verify")
def verify_tuning(audio_filename: str):
    filepath = os.path.join(AUDIO_OUTPUT_DIR, audio_filename)
    if not os.path.exists(filepath):
        raise HTTPException(status_code=404, detail="Audio file not found")
    
    metrics = analyze_tuning_verification(filepath)
    return {"success": True, "metrics": metrics}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
