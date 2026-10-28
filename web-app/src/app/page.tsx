'use client';

import React from 'react';
import Link from 'next/link';
import { useAudio } from '@/context/AudioContext';
import { TRACK_CATALOG } from '@/data/tracks';
import {
  Play,
  Pause,
  Sparkles,
  ShieldCheck,
  Disc,
  ArrowRight,
  Radio,
  Video,
  Send,
  Zap,
  CheckCircle2,
  Lock,
  Globe2
} from 'lucide-react';

export default function HomePage() {
  const { playTrack, currentTrack, isPlaying } = useAudio();
  const featured = TRACK_CATALOG.slice(0, 4);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/20">
        
        {/* Dynamic Glassmorphic Glow Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-purple-600/10 via-[#D4AF37]/15 to-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-purple-500/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono tracking-wider shadow-lg">
            <Radio className="w-3.5 h-3.5 animate-pulse text-red-400" />
            <span>AUTONOMOUS AI RECORD LABEL & 432 HZ ACOUSTIC STUDIO</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-black tracking-tight text-white leading-none">
            ULTRASOUND{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFF2B2] to-[#B38F2C]">
              RECORDS
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-xl text-gray-300 leading-relaxed font-light">
            The world's first autonomous AI record label specializing in verified A4 = 432 Hz frequency architecture, virtual artist personas, and automated multi-channel YouTube 4K publishing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/label"
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#B38F2C] text-black font-bold text-sm shadow-xl shadow-[#D4AF37]/25 hover:scale-105 transition-all flex items-center gap-2.5"
            >
              <Radio className="w-4 h-4" />
              Launch Record Label Suite
            </Link>
            <button
              onClick={() => playTrack(featured[0])}
              className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all flex items-center gap-2.5 backdrop-blur-md"
            >
              <Play className="w-4 h-4 fill-white" />
              Stream Master 432 Hz Audio
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 border-t border-white/10 max-w-4xl mx-auto text-left">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
              <span className="text-2xl font-serif font-bold text-[#D4AF37]">432.0 Hz</span>
              <p className="text-xs text-gray-400">Verdi Tuning Standard</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
              <span className="text-2xl font-serif font-bold text-red-400 flex items-center gap-1.5">
                <Video className="w-5 h-5" /> 4K Video
              </span>
              <p className="text-xs text-gray-400">Automated YouTube Engine</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
              <span className="text-2xl font-serif font-bold text-emerald-400">100%</span>
              <p className="text-xs text-gray-400">Royalty-Cleared Masters</p>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
              <span className="text-2xl font-serif font-bold text-purple-400">HITL Gate</span>
              <p className="text-xs text-gray-400">Human-Assisted Bot</p>
            </div>
          </div>
        </div>
      </section>

      {/* Autonomous Label Workflow Feature */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#121820] to-[#0A0D12] rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          <div className="space-y-4 max-w-2xl mb-8">
            <span className="text-xs font-mono text-red-400 uppercase tracking-widest flex items-center gap-2">
              <Radio className="w-4 h-4 animate-pulse" />
              FULL AUTONOMOUS LABEL OPERATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Everything a Modern Record Label Does — Automated
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Ultrasound Records operates as an intelligent label assistant: generating original 432 Hz releases, rendering 4K hypnotic YouTube videos, preparing viral social copy, and queuing releases for your final human approval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A0D11] p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">1. YouTube Auto-Rendering</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Automatically combines lossless 432 Hz master audio with animated sacred geometry artwork into 4K YouTube uploads with SEO tags and chapter markers.
              </p>
            </div>

            <div className="bg-[#0A0D11] p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-bold">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">2. Multi-Platform Syndication</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Syndicates across YouTube, SoundCloud, Spotify metadata queues, and TikTok audio stems with tailored copy matching the virtual artist persona.
              </p>
            </div>

            <div className="bg-[#0A0D11] p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">3. Human-In-The-Loop Sign-Off</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Zero spam. An authorized human must click <strong>Approve & Send</strong> in the studio dashboard before any video or social post goes live.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              href="/label"
              className="px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#c9a330] text-black font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-[#D4AF37]/20"
            >
              Open Label Manager & YouTube Pipeline <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Master Audio Tracks */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Ultrasound Records Master Roster
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Pure 432 Hz releases verified through Constant-Q Transform spectral pitch estimation.
            </p>
          </div>
          <Link
            href="/listen"
            className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 mt-2 sm:mt-0 font-medium"
          >
            Explore Complete Catalogue ({TRACK_CATALOG.length}) <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((track) => {
            const isCurrentlyPlaying = currentTrack?.id === track.id && isPlaying;
            return (
              <div
                key={track.id}
                className="bg-[#0E131A] rounded-2xl p-4 border border-white/10 hover:border-[#D4AF37]/50 transition-all group flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <img
                      src={track.coverUrl}
                      alt={track.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => playTrack(track)}
                        className="w-12 h-12 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform"
                      >
                        {isCurrentlyPlaying ? (
                          <Pause className="w-5 h-5 fill-black" />
                        ) : (
                          <Play className="w-5 h-5 fill-black ml-0.5" />
                        )}
                      </button>
                    </div>
                    <span className="absolute top-2 left-2 text-[10px] bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[#D4AF37] font-mono border border-[#D4AF37]/30">
                      {track.tuning}
                    </span>
                  </div>

                  <h3 className="font-semibold text-sm text-white group-hover:text-[#D4AF37] transition-colors truncate">
                    {track.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2 truncate">{track.artist}</p>
                  <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed mb-3">
                    {track.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Verified 432 Hz
                  </span>
                  <button
                    onClick={() => playTrack(track)}
                    className="text-xs font-semibold text-[#D4AF37] hover:underline"
                  >
                    {isCurrentlyPlaying ? 'Pause' : 'Stream Track'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
