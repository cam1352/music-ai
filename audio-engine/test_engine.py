"""
Test suite for 432 Hz DSP Engine
Validates:
1. Exact cents calculation for 432 Hz vs 440 Hz (-31.7666 cents).
2. Frequency formula for Verdi A4 = 432 Hz.
3. Audio generation dimensions and non-empty output.
4. Pitch shifter integration and preservation of duration.
"""

import math
import numpy as np
import pytest
import sys
import os

sys.path.append(os.path.dirname(__file__))
from engine import (
    A4_VERDI,
    A4_STANDARD,
    PITCH_RATIO_432,
    CENTS_DIFF_432,
    get_tuning_frequency,
    synthesize_singing_bowl,
    synthesize_gregorian_drone,
    shift_to_432hz
)


def test_pitch_ratio_and_cents():
    expected_ratio = 432.0 / 440.0
    assert math.isclose(PITCH_RATIO_432, expected_ratio, rel_tol=1e-6)
    
    # 1200 * log2(432/440) ≈ -31.76665
    assert -31.8 < CENTS_DIFF_432 < -31.7


def test_note_frequencies():
    # A4 in 432Hz must equal 432.0 Hz
    assert math.isclose(get_tuning_frequency(0, a4_ref=432.0), 432.0)
    # A3 (one octave below) must equal 216.0 Hz
    assert math.isclose(get_tuning_frequency(-12, a4_ref=432.0), 216.0)
    # A5 (one octave above) must equal 864.0 Hz
    assert math.isclose(get_tuning_frequency(12, a4_ref=432.0), 864.0)


def test_singing_bowl_synthesis():
    sr = 22050
    dur = 2.0
    audio = synthesize_singing_bowl(base_freq=216.0, duration_sec=dur, sample_rate=sr)
    assert audio.ndim == 2
    assert audio.shape[0] == int(dur * sr)
    assert audio.shape[1] == 2
    # Ensure no clipping
    assert np.max(np.abs(audio)) <= 1.0
    # Ensure non-silent
    assert np.max(np.abs(audio)) > 0.1


def test_gregorian_drone_synthesis():
    sr = 22050
    dur = 3.0
    audio = synthesize_gregorian_drone(root_freq=108.0, duration_sec=dur, sample_rate=sr)
    assert audio.ndim == 2
    assert audio.shape[0] == int(dur * sr)
    assert np.max(np.abs(audio)) <= 1.0
    assert np.max(np.abs(audio)) > 0.1


def test_pitch_shift_duration_preservation():
    sr = 22050
    t = np.linspace(0, 1.0, sr, endpoint=False)
    sine_440 = np.sin(2 * np.pi * 440.0 * t)
    shifted, stats = shift_to_432hz(sine_440, sr)
    assert len(shifted) == len(sine_440)
    assert stats["cents_applied"] < 0
