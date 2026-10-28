'use client';

import React from 'react';
import Link from 'next/link';
import { useAudio } from '@/context/AudioContext';
import { TRACK_CATALOG } from '@/data/tracks';
import {
  Waves,
  Play,
  Pause,
  Moon,
  ShieldCheck,
  Headphones,
  CheckCircle2
} from 'lucide-react';

export default function SleepMusicPage() {
  const { playTrack, currentTrack, isPlaying } = useAudio();
  const track = TRACK_CATALOG[4]; // Sleep delta track
  const isCurrentlyPlaying = currentTrack?.id === track.id && isPlaying;

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Hero */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-mono">
          <Moon className="w-3.5 h-3.5" />
          <span>CIRCADIAN & DELTA ENTRAINMENT</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
          432 Hz Sleep & Nocturnal Restoration
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Designed for sleep latency reduction and deep slow-wave delta states. Featuring 432 Hz warm harmonic drones intertwined with gentle binaural differentials.
        </p>
      </div>

      {/* Featured Master Audio Player Card */}
      <div className="bg-[#10141B] rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl flex flex-col md:flex-row items-center gap-8">
        <img
          src={track.coverUrl}
          alt={track.title}
          className="w-full md:w-64 h-64 rounded-2xl object-cover border border-blue-500/20 shadow-xl"
        />
        <div className="space-y-4 flex-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-blue-400 bg-blue-950/40 px-2.5 py-1 rounded border border-blue-500/30">
              {track.tuning} / 2.5 Hz Delta Carrier
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
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold text-sm shadow-lg shadow-blue-900/30 hover:scale-105 transition-all flex items-center gap-2"
            >
              {isCurrentlyPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-white" /> Pause Stream
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" /> Play Delta Journey
                </>
              )}
            </button>
            <a
              href={track.audioUrl}
              download
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs border border-white/10 transition-colors"
            >
              Download Master (.WAV)
            </a>
          </div>
        </div>
      </div>

      {/* Sleep Protocol Tips */}
      <div className="bg-[#0B0F13] p-8 rounded-3xl border border-white/5 space-y-4">
        <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
          <Headphones className="w-5 h-5 text-blue-400" />
          Optimal Listening Protocol for Delta Sleep
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-400 pt-2">
          <li className="bg-[#10141B] p-4 rounded-xl border border-white/5 space-y-1">
            <strong className="text-white block">1. Stereo Headphones Required</strong>
            Binaural delta entrainment (2.5 Hz difference) requires separate audio delivery to each ear to evoke neurological phase locking.
          </li>
          <li className="bg-[#10141B] p-4 rounded-xl border border-white/5 space-y-1">
            <strong className="text-white block">2. Low Decibel Level (30-40 dB)</strong>
            Keep volume barely audible to prevent sensory arousal. The music should wash gently in the background without commanding cognitive attention.
          </li>
          <li className="bg-[#10141B] p-4 rounded-xl border border-white/5 space-y-1">
            <strong className="text-white block">3. 30 Minutes Pre-Sleep</strong>
            Initiate playback 20 to 30 minutes before sleep to facilitate transition from beta/alpha daytime brainwaves into theta relaxation.
          </li>
        </ul>
      </div>
    </main>
  );
}
