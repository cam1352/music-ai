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
  Globe2,
  TrendingUp,
  Cpu,
  Waves
} from 'lucide-react';

export default function HomePage() {
  const { playTrack, currentTrack, isPlaying } = useAudio();
  const featured = TRACK_CATALOG.slice(0, 4);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 sm:pt-36 sm:pb-32 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-8">
          
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 border border-[#D4AF37]/35 shadow-[0_0_25px_rgba(212,175,55,0.2)] backdrop-blur-xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono tracking-wider text-gray-200">
              AUTONOMOUS ENGINE ACTIVE • <strong className="text-[#D4AF37]">A4 = 432.0 HZ VERDI CALIBRATION</strong>
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-black tracking-tight leading-[1.05] text-white">
              ULTRASOUND <br className="hidden sm:inline" />
              <span className="gold-gradient-text drop-shadow-[0_10px_35px_rgba(212,175,55,0.25)]">
                RECORDS
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-xl text-gray-300 font-light leading-relaxed">
              The world’s first autonomous AI record label and acoustic wellness sanctuary. Generating verified 432 Hz frequency masterworks, managing virtual artist personas, and syndicating 4K hypnotic YouTube broadcasts with human-assisted verification.
            </p>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/label"
              className="gold-gradient-btn px-8 py-4 rounded-2xl font-bold text-sm flex items-center gap-3 transition-all"
            >
              <Radio className="w-4 h-4 text-black" />
              <span>Launch Autonomous Label Suite</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
            <button
              onClick={() => playTrack(featured[0])}
              className="px-7 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 transition-all flex items-center gap-3 backdrop-blur-xl hover:border-[#D4AF37]/40 shadow-xl"
            >
              <Play className="w-4 h-4 fill-white text-white" />
              <span>Stream Live 432 Hz Master (Tibetan Bowl)</span>
            </button>
          </div>

          {/* Real-time Telemetry Dashboard Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-5xl mx-auto text-left">
            <div className="glass-card p-5 rounded-2xl space-y-1">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                <Disc className="w-3.5 h-3.5 text-[#D4AF37]" /> Harmonic Standard
              </span>
              <div className="text-2xl font-serif font-bold text-white">432.0 Hz</div>
              <p className="text-[11px] text-emerald-400 font-mono">-31.77 ¢ CQT Certified</p>
            </div>

            <div className="glass-card p-5 rounded-2xl space-y-1">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-red-400" /> Automated Pipeline
              </span>
              <div className="text-2xl font-serif font-bold text-white">4K YouTube</div>
              <p className="text-[11px] text-gray-400 font-mono">Sacred Geometry Video Engine</p>
            </div>

            <div className="glass-card p-5 rounded-2xl space-y-1">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-purple-400" /> Virtual Personas
              </span>
              <div className="text-2xl font-serif font-bold text-white">3 Signed AI</div>
              <p className="text-[11px] text-purple-300 font-mono">Autonomous Social Identities</p>
            </div>

            <div className="glass-card p-5 rounded-2xl space-y-1">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Governance
              </span>
              <div className="text-2xl font-serif font-bold text-white">HITL Gate</div>
              <p className="text-[11px] text-gray-400 font-mono">Human Approval Required</p>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive A/B Harmonic Tuner Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest flex items-center gap-2">
              <Waves className="w-4 h-4" /> PSYCHOACOUSTIC VERIFICATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Hear the Physical Shift: 432 Hz vs 440 Hz
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              Conventional commercial music is recorded at A4 = 440 Hz. Ultrasound Records recalibrates the entire acoustic spectrum down by 31.77 cents to Verdi’s philosophical pitch, matching the natural relaxation cycles of the nervous system.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/432hz"
                className="px-5 py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs hover:bg-[#c9a330] transition-colors flex items-center gap-2"
              >
                <span>Launch A/B Listening Lab</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/science"
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs border border-white/10 transition-colors"
              >
                Review Clinical Trials
              </Link>
            </div>
          </div>

          {/* Interactive Dual Pods */}
          <div className="bg-black/60 p-6 rounded-2xl border border-white/10 w-full lg:w-96 space-y-4 text-center backdrop-blur-xl">
            <span className="text-xs font-mono text-gray-400">Harmonic Triad Sound Test</span>
            <div className="flex gap-3">
              <button
                onClick={() => playTrack(TRACK_CATALOG[5])}
                className="flex-1 py-3.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/40 text-xs font-bold text-purple-200 transition-all hover:scale-105"
              >
                ▶ 432 Hz Verdi (-31.8¢)
              </button>
              <button
                onClick={() => playTrack(TRACK_CATALOG[6])}
                className="flex-1 py-3.5 rounded-xl bg-blue-950/40 hover:bg-blue-900/60 border border-blue-500/40 text-xs font-bold text-blue-200 transition-all hover:scale-105"
              >
                ▶ 440 Hz ISO (0.0¢)
              </button>
            </div>
            <p className="text-[11px] text-gray-400 font-mono">
              Notice the expanded somatic spatial warmth of 432 Hz versus standard pitch.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Master Repertoire */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block mb-1">
              CURRENT SIGNED CATALOGUE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Ultrasound Records Master Audio Repertoire
            </h2>
          </div>
          <Link
            href="/listen"
            className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1.5 mt-2 sm:mt-0 font-mono"
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
                className="glass-card rounded-2xl p-4 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/5">
                    <img
                      src={track.coverUrl}
                      alt={track.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                      <button
                        onClick={() => playTrack(track)}
                        className="w-12 h-12 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform"
                      >
                        {isCurrentlyPlaying ? (
                          <Pause className="w-5 h-5 fill-black" />
                        ) : (
                          <Play className="w-5 h-5 fill-black ml-0.5" />
                        )}
                      </button>
                    </div>
                    <span className="absolute top-2 left-2 text-[10px] bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded text-[#D4AF37] font-mono border border-[#D4AF37]/40 shadow-sm">
                      {track.tuning}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-white group-hover:text-[#D4AF37] transition-colors truncate">
                    {track.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2 truncate font-mono">{track.artist}</p>
                  <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed mb-3">
                    {track.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> CQT Verified
                  </span>
                  <button
                    onClick={() => playTrack(track)}
                    className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1"
                  >
                    {isCurrentlyPlaying ? 'Pause' : 'Stream Now'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Autonomous Label Workflow Feature */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-white/10 space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono text-red-400 uppercase tracking-widest flex items-center gap-2">
              <Radio className="w-4 h-4 animate-pulse" /> RECORD LABEL OPERATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Autonomous Video, Social & Royalties Architecture
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              Ultrasound Records is not just a player—it's an autonomous publishing engine that automates the entire lifecycle of music releases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/50 p-6 rounded-2xl border border-white/10 space-y-3 hover:border-red-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-500/15 text-red-400 flex items-center justify-center font-bold">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">1. 4K Hypnotic YouTube Rendering</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                The engine binds uncompressed 432 Hz audio masters to sacred geometry canvas loops, outputs 4K 60FPS videos, and prepares metadata tags and timecodes.
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-2xl border border-white/10 space-y-3 hover:border-purple-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center font-bold">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">2. Virtual Artist Personas</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Every release belongs to an autonomous digital artist with unique visual aesthetics, lore backstories, and dedicated social media distribution channels.
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-2xl border border-white/10 space-y-3 hover:border-[#D4AF37]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">3. Human-Assisted Bot (HITL)</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Guaranteed quality control. The AI drafts releases, previews artwork, and configures tags—waiting for your single click on <strong>Approve & Dispatch</strong>.
              </p>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <Link
              href="/label"
              className="gold-gradient-btn px-7 py-3.5 rounded-xl font-bold text-xs flex items-center gap-2"
            >
              <span>Open Label Headquarters</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
