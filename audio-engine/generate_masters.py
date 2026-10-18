"""
Batch Audio Generator: Creates verified 432 Hz master recordings for the studio library.
Generates:
1. tibetan_bowl_432hz.wav
2. gregorian_sanctus_drone_432hz.wav
3. harmonic_forest_432hz.wav
4. quartz_crystal_harmony_432hz.wav
5. sleep_delta_ocean_432hz.wav
6. comparison_a4_440hz.wav & comparison_a4_432hz.wav (for scientific A/B test)
"""

import os
import sys
import numpy as np
import soundfile as sf

# Add parent directory
sys.path.append(os.path.dirname(__file__))
from engine import (
    synthesize_singing_bowl,
    synthesize_gregorian_drone,
    synthesize_nature_soundscape,
    analyze_tuning_verification,
    A4_VERDI,
    A4_STANDARD
)

OUTPUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(__file__)),
    "web-app", "public", "audio"
)
os.makedirs(OUTPUT_DIR, exist_ok=True)
SAMPLE_RATE = 44100


def build_track(filename, data):
    path = os.path.join(OUTPUT_DIR, filename)
    sf.write(path, data, SAMPLE_RATE, subtype='PCM_16')
    print(f"Generated: {filename} ({len(data)/SAMPLE_RATE:.1f}s)")
    return path


def main():
    print("Generating Verified 432 Hz Audio Masters...")
    
    # 1. Tibetan Singing Bowl (Rooted at 216 Hz = A3 in 432Hz tuning)
    bowl_a = synthesize_singing_bowl(base_freq=216.0, duration_sec=18.0, sample_rate=SAMPLE_RATE)
    build_track("tibetan_bowl_432hz.wav", bowl_a)

    # 2. Gregorian Sanctus Vocal Drone (Rooted at 108 Hz = A2 in 432Hz tuning, with 162 Hz fifth)
    gregorian = synthesize_gregorian_drone(root_freq=108.0, duration_sec=22.0, sample_rate=SAMPLE_RATE)
    build_track("gregorian_sanctus_drone_432hz.wav", gregorian)

    # 3. Harmonic Forest & Schumann Resonance (432 Hz earth harmonic)
    forest = synthesize_nature_soundscape(duration_sec=20.0, sample_rate=SAMPLE_RATE)
    build_track("harmonic_forest_432hz.wav", forest)

    # 4. Quartz Crystal Singing Bowl (Rooted at 432.0 Hz = A4 Verdi pure mode)
    crystal = synthesize_singing_bowl(base_freq=432.0, duration_sec=16.0, sample_rate=SAMPLE_RATE)
    build_track("quartz_crystal_harmony_432hz.wav", crystal)

    # 5. Sleep Delta / Deep Theta Ocean (54 Hz sub-drone + slow wave)
    num_samples = int(24.0 * SAMPLE_RATE)
    t = np.linspace(0, 24.0, num_samples, endpoint=False)
    # 3.0 Hz delta binaural pulsation across stereo channels
    left_carrier = 0.5 * np.sin(2 * np.pi * 108.0 * t) + 0.3 * np.sin(2 * np.pi * 216.0 * t)
    right_carrier = 0.5 * np.sin(2 * np.pi * (108.0 + 3.0) * t) + 0.3 * np.sin(2 * np.pi * (216.0 + 3.0) * t)
    # Warm ocean swell
    swell = 0.5 * (1.0 + np.sin(2 * np.pi * 0.1 * t))
    left_sleep = left_carrier * swell * 0.7
    right_sleep = right_carrier * swell * 0.7
    build_track("sleep_delta_ocean_432hz.wav", np.column_stack((left_sleep, right_sleep)))

    # 6. A/B Comparison Tones (440 Hz Standard vs 432 Hz Verdi Tuning)
    t_comp = np.linspace(0, 10.0, int(10.0 * SAMPLE_RATE), endpoint=False)
    fade_comp = np.ones_like(t_comp)
    fade_len = int(0.5 * SAMPLE_RATE)
    fade_comp[:fade_len] = np.linspace(0, 1, fade_len)
    fade_comp[-fade_len:] = np.linspace(1, 0, fade_len)
    
    # 440 Hz Tone & Triad (A440, C#554.37, E659.25)
    triad_440 = (
        0.5 * np.sin(2 * np.pi * 440.0 * t_comp) +
        0.3 * np.sin(2 * np.pi * 554.37 * t_comp) +
        0.3 * np.sin(2 * np.pi * 659.25 * t_comp)
    ) * fade_comp * 0.5
    build_track("comparison_a4_440hz.wav", np.column_stack((triad_440, triad_440)))

    # 432 Hz Tone & Triad (A432, C#544.29, E647.27)
    triad_432 = (
        0.5 * np.sin(2 * np.pi * 432.0 * t_comp) +
        0.3 * np.sin(2 * np.pi * (432.0 * 2**(4/12)) * t_comp) +
        0.3 * np.sin(2 * np.pi * (432.0 * 2**(7/12)) * t_comp)
    ) * fade_comp * 0.5
    build_track("comparison_a4_432hz.wav", np.column_stack((triad_432, triad_432)))

    # Verification of generated masters
    print("\nRunning Spectral Tuning Verification...")
    for f in ["tibetan_bowl_432hz.wav", "comparison_a4_432hz.wav", "comparison_a4_440hz.wav"]:
        p = os.path.join(OUTPUT_DIR, f)
        res = analyze_tuning_verification(p)
        print(f" -> {f}: Est A4 = {res['estimatedA4Hz']} Hz, CentsFrom440 = {res['centsFromStandard440']} cents, Status = {res['tuningStatus']}")

    print("\nMaster library generation complete.")


if __name__ == "__main__":
    main()
