'use client';

import React from 'react';
import { useAudio } from '@/context/AudioContext';
import { TRACK_CATALOG } from '@/data/tracks';
import {
  Waves,
  Play,
  Pause,
  ShieldCheck,
  Disc,
  Sparkles
} from 'lucide-react';

export default function SingingBowlsPage() {
  const { playTrack, currentTrack, isPlaying } = useAudio();
  const tibetanTrack = TRACK_CATALOG[0];
  const crystalTrack = TRACK_CATALOG[3];

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-mono">
          <Waves className="w-3.5 h-3.5" />
          <span>METALLURGIC & QUARTZ CRYSTAL HARMONICS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
          Singing Bowls & Harmonic Soundscapes
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Acoustic physical modeling and high-resolution master recordings of authentic Tibetan singing bowls and alchemical quartz crystal resonators calibrated to 432 Hz.
        </p>
      </div>

      {/* Two Master Showcase Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tibetan Master */}
        <div className="bg-[#10141B] rounded-3xl p-6 border border-[#D4AF37]/30 shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <img src={tibetanTrack.coverUrl} alt={tibetanTrack.title} className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 text-[10px] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[#D4AF37] font-mono border border-[#D4AF37]/30">
                A3 = 216 Hz / 432 Hz Octave
              </span>
            </div>
            <h2 className="text-xl font-serif font-bold text-white">
              {tibetanTrack.title}
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              {tibetanTrack.description}
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified 432 Hz
            </span>
            <button
              onClick={() => playTrack(tibetanTrack)}
              className="px-5 py-2.5 rounded-xl bg-[#D4AF37] text-black font-semibold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2"
            >
              {currentTrack?.id === tibetanTrack.id && isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-black" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-black" /> Play Bowl
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quartz Crystal Master */}
        <div className="bg-[#10141B] rounded-3xl p-6 border border-emerald-500/30 shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <img src={crystalTrack.coverUrl} alt={crystalTrack.title} className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 text-[10px] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-emerald-400 font-mono border border-emerald-500/30">
                A4 = 432.0 Hz Exact
              </span>
            </div>
            <h2 className="text-xl font-serif font-bold text-white">
              {crystalTrack.title}
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              {crystalTrack.description}
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified 432 Hz
            </span>
            <button
              onClick={() => playTrack(crystalTrack)}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2"
            >
              {currentTrack?.id === crystalTrack.id && isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-black" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-black" /> Play Crystal
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
