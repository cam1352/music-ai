'use client';

import React from 'react';
import Link from 'next/link';
import { useAudio } from '@/context/AudioContext';
import { TRACK_CATALOG } from '@/data/tracks';
import {
  Waves,
  Play,
  Pause,
  Sparkles,
  ShieldCheck,
  Compass,
  ArrowRight
} from 'lucide-react';

export default function MeditationRelaxationPage() {
  const { playTrack, currentTrack, isPlaying } = useAudio();
  const forestTrack = TRACK_CATALOG[2]; // Harmonic forest
  const isPlayingForest = currentTrack?.id === forestTrack.id && isPlaying;

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PSYCHOACOUSTIC RELAXATION & NATURE WASH</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
          Meditation & Harmonic Soundscapes
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Atmospheric acoustic textures combining organic environmental field recordings with 432 Hz sub-harmonic drones to cultivate mental stillness.
        </p>
      </div>

      {/* Featured Master Audio Player Card */}
      <div className="bg-[#10141B] rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl flex flex-col md:flex-row items-center gap-8">
        <img
          src={forestTrack.coverUrl}
          alt={forestTrack.title}
          className="w-full md:w-64 h-64 rounded-2xl object-cover border border-emerald-500/20 shadow-xl"
        />
        <div className="space-y-4 flex-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/30">
              {forestTrack.tuning} / Earth Harmonic
            </span>
            <span className="text-xs text-gray-400 font-mono">Duration: {forestTrack.duration}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            {forestTrack.title}
          </h2>
          <p className="text-xs text-gray-400 font-mono">{forestTrack.artist}</p>
          <p className="text-sm text-gray-300 leading-relaxed">
            {forestTrack.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => playTrack(forestTrack)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold text-sm shadow-lg shadow-emerald-900/30 hover:scale-105 transition-all flex items-center gap-2"
            >
              {isPlayingForest ? (
                <>
                  <Pause className="w-4 h-4 fill-white" /> Pause Soundscape
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" /> Play Soundscape
                </>
              )}
            </button>
            <Link
              href="/listen"
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs border border-white/10 transition-colors"
            >
              Browse All Meditation Masters
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
