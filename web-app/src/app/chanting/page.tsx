'use client';

import React from 'react';
import Link from 'next/link';
import { useAudio } from '@/context/AudioContext';
import { TRACK_CATALOG } from '@/data/tracks';
import {
  Sparkles,
  Play,
  Pause,
  BookOpen,
  ShieldCheck,
  Flame,
  ArrowRight
} from 'lucide-react';

export default function GregorianChantingPage() {
  const { playTrack, currentTrack, isPlaying } = useAudio();
  const track = TRACK_CATALOG[1]; // Gregorian track
  const isCurrentlyPlaying = currentTrack?.id === track.id && isPlaying;

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Hero */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SACRED MONOPHONIC & MODAL CHANT</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
          Gregorian-Inspired Chanting
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Sacred vocal drones and modal harmonies crafted in Just Intonation. Experience contemplative breath pacing and cathedral acoustics tuned to 432 Hz.
        </p>
      </div>

      {/* Featured Master Audio Player Card */}
      <div className="bg-[#10141B] rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl flex flex-col md:flex-row items-center gap-8">
        <img
          src={track.coverUrl}
          alt={track.title}
          className="w-full md:w-64 h-64 rounded-2xl object-cover border border-purple-500/20 shadow-xl"
        />
        <div className="space-y-4 flex-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-purple-400 bg-purple-950/40 px-2.5 py-1 rounded border border-purple-500/30">
              {track.tuning} Just Intonation
            </span>
            <span className="text-xs text-gray-400 font-mono">Duration: {track.duration}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            {track.title}
          </h2>
          <p className="text-xs text-gray-400 font-mono">{track.artist}</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            {track.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => playTrack(track)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-purple-900/30 hover:scale-105 transition-all flex items-center gap-2"
            >
              {isCurrentlyPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-white" /> Pause Chant
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" /> Play Sanctuary Master
                </>
              )}
            </button>
            <a
              href={track.audioUrl}
              download
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs border border-white/10 transition-colors"
            >
              Download Lossless Master (.WAV)
            </a>
          </div>
        </div>
      </div>

      {/* Acoustic & Physiological Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#10141A] p-6 rounded-2xl border border-white/5 space-y-3">
          <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
            <Flame className="w-4 h-4 text-purple-400" />
            Respiratory Resonance Pacing
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Gregorian chants feature long, steady vocal phrases that naturally guide the listener's breathing rate toward approximately 6 breaths per minute (0.1 Hz). This frequency synchronizes cardiac rhythms and maximizes heart rate variability (HRV).
          </p>
        </div>

        <div className="bg-[#10141A] p-6 rounded-2xl border border-white/5 space-y-3">
          <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            Just Intonation & Pure Fifths
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Unlike standard modern equal temperament which slightly compromises fifths (making them 2 cents flat), our Gregorian drones use pure mathematical ratios (3:2 frequency ratio). When tuned to 432 Hz, the notes blend without acoustic beating.
          </p>
        </div>
      </div>
    </main>
  );
}
