'use client';

import React, { useState } from 'react';
import { useAudio } from '@/context/AudioContext';
import { TRACK_CATALOG } from '@/data/tracks';
import {
  Disc,
  Play,
  Pause,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export default function TuningDeepDivePage() {
  const { playTrack, currentTrack, isPlaying } = useAudio();
  const [activeTab, setActiveTab] = useState<'432' | '440'>('432');

  const track432 = TRACK_CATALOG[5]; // Verdi triad
  const track440 = TRACK_CATALOG[6]; // ISO 16 triad

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-mono">
          <Disc className="w-3.5 h-3.5" />
          <span>ACOUSTIC PHYSICS & PITCH STANDARDS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
          The Science of A4 = 432 Hz
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Demystifying the math, history, and physiological impact of Verdi’s philosophical pitch standard versus modern concert pitch (A4 = 440 Hz).
        </p>
      </div>

      {/* Interactive A/B Listening Lab */}
      <div className="bg-[#10141B] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <h2 className="text-xl font-serif font-bold text-white">
              Live A/B Harmonic Comparison Lab
            </h2>
            <p className="text-xs text-gray-400">
              Listen to identically formulated harmonic triads generated at 432 Hz and 440 Hz.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setActiveTab('432');
                playTrack(track432);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === '432'
                  ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 scale-105'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              A4 = 432 Hz (Verdi)
            </button>
            <button
              onClick={() => {
                setActiveTab('440');
                playTrack(track440);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === '440'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              A4 = 440 Hz (ISO Standard)
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* 432 Hz Specs */}
          <div className="bg-[#0B0F13] p-5 rounded-2xl border border-[#D4AF37]/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-serif font-bold text-[#D4AF37]">
                A4 = 432.0 Hz (Philosophical Pitch)
              </span>
              <span className="text-[10px] font-mono bg-[#D4AF37]/15 text-[#D4AF37] px-2 py-0.5 rounded">
                -31.77 Cents
              </span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Advocated by Italian composer Giuseppe Verdi in 1884. Every C note is a power of 2 in Just Intonation (C4 = 256 Hz), giving it the name "Scientific Pitch".
            </p>
            <ul className="text-xs text-gray-400 space-y-1.5 pt-2 border-t border-white/5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Root Note: 432.0 Hz (A4)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Octave Below: 216.0 Hz (A3)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Sub-bass Root: 108.0 Hz (A2)
              </li>
            </ul>
          </div>

          {/* 440 Hz Specs */}
          <div className="bg-[#0B0F13] p-5 rounded-2xl border border-blue-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-serif font-bold text-blue-300">
                A4 = 440.0 Hz (ISO 16 Concert Pitch)
              </span>
              <span className="text-[10px] font-mono bg-blue-500/15 text-blue-300 px-2 py-0.5 rounded">
                0.00 Cents
              </span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Adopted by the International Organization for Standardization (ISO) in 1955. Created to standardize concert hall performances across Europe and America.
            </p>
            <ul className="text-xs text-gray-400 space-y-1.5 pt-2 border-t border-white/5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Root Note: 440.0 Hz (A4)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Octave Below: 220.0 Hz (A3)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Sub-bass Root: 110.0 Hz (A2)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vital Clarification: 432 Hz Pure Tone vs 432 Hz Tuned Music */}
      <div className="bg-gradient-to-r from-amber-950/20 to-transparent border-l-4 border-[#D4AF37] p-6 rounded-r-2xl space-y-3">
        <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-[#D4AF37]" />
          Essential Distinction: Pure Tone vs Tuned Scale
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          Many audio sites mistakenly play a continuous <strong>432 Hz sine tone</strong> and call it music. A pure 432 Hz tone is merely one specific pitch (the note A4). 
          <strong>Music tuned to A4 = 432 Hz</strong> means every single note across the entire musical scale (C, D, E, F, G, A, B) is tuned proportionally relative to that reference. In equal temperament, this corresponds to shifting every note down by exactly <strong>31.766 cents</strong> (a pitch ratio of 0.981818).
        </p>
      </div>

      {/* The Math & Physics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#10141A] p-6 rounded-2xl border border-white/5 space-y-2">
          <span className="text-xs font-mono text-[#D4AF37]">FORMULA 01</span>
          <h4 className="text-base font-bold text-white">Pitch Shift Cents</h4>
          <p className="text-xs text-gray-400 leading-relaxed font-mono">
            Δ cents = 1200 × log₂(432 / 440) ≈ -31.7666 ¢
          </p>
          <p className="text-xs text-gray-400 pt-2">
            Every semitone has 100 cents. 432 Hz tuning is approximately 1/3 of a semitone lower than 440 Hz.
          </p>
        </div>

        <div className="bg-[#10141A] p-6 rounded-2xl border border-white/5 space-y-2">
          <span className="text-xs font-mono text-emerald-400">FORMULA 02</span>
          <h4 className="text-base font-bold text-white">Frequency Scale</h4>
          <p className="text-xs text-gray-400 leading-relaxed font-mono">
            f(n) = 432 × 2^(n / 12)
          </p>
          <p className="text-xs text-gray-400 pt-2">
            Calculates exact harmonic frequencies across all 88 keys of an equal-tempered instrument tuned to 432 Hz.
          </p>
        </div>

        <div className="bg-[#10141A] p-6 rounded-2xl border border-white/5 space-y-2">
          <span className="text-xs font-mono text-purple-400">FORMULA 03</span>
          <h4 className="text-base font-bold text-white">Singing Bowl Partials</h4>
          <p className="text-xs text-gray-400 leading-relaxed font-mono">
            f_modes = [1.0, 2.76, 5.40, 8.93] × f₀
          </p>
          <p className="text-xs text-gray-400 pt-2">
            Unlike strings or flutes, singing bowls exhibit non-harmonic overtones based on circular plate vibrational mechanics.
          </p>
        </div>
      </div>
    </main>
  );
}
