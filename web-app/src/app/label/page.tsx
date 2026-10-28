'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAudio } from '@/context/AudioContext';
import {
  Radio,
  Video,
  Send,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Play,
  Share2,
  Tv,
  Eye,
  Settings,
  ChevronRight,
  TrendingUp,
  DollarSign
} from 'lucide-react';

export default function RecordLabelPage() {
  const { playTrack } = useAudio();

  // Publishing states
  const [isPublishing, setIsPublishing] = useState(false);
  const [published, setPublished] = useState(false);
  const [activeTab, setActiveTab] = useState<'queue' | 'roster' | 'analytics' | 'settings'>('queue');

  // Human approval trigger
  const handleApprove = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      setPublished(true);
    }, 2800);
  };

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#141B24] via-[#0E131A] to-[#0A0D12] rounded-3xl p-8 border border-[#D4AF37]/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 text-red-400 text-xs font-mono border border-red-500/30">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>ULTRASOUND RECORDS AUTONOMOUS HEADQUARTERS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            Autonomous AI Record Label Suite
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
            Manage your roster of virtual 432 Hz artists, auto-render 4K hypnotic YouTube videos, syndicate social metadata, and review pending releases with Human-in-the-Loop approval.
          </p>
        </div>

        {/* Global Label Stats */}
        <div className="flex gap-4">
          <div className="bg-[#080B0F] p-4 rounded-2xl border border-white/10 text-center min-w-[110px]">
            <span className="text-2xl font-serif font-bold text-[#D4AF37]">3</span>
            <p className="text-[11px] text-gray-400">Signed AI Artists</p>
          </div>
          <div className="bg-[#080B0F] p-4 rounded-2xl border border-white/10 text-center min-w-[110px]">
            <span className="text-2xl font-serif font-bold text-red-400">1</span>
            <p className="text-[11px] text-gray-400">Pending Approval</p>
          </div>
          <div className="bg-[#080B0F] p-4 rounded-2xl border border-white/10 text-center min-w-[110px]">
            <span className="text-2xl font-serif font-bold text-emerald-400">$8,450</span>
            <p className="text-[11px] text-gray-400">Monthly Royalties</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 border-b border-white/10 pb-4 text-xs font-medium">
        <button
          onClick={() => setActiveTab('queue')}
          className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
            activeTab === 'queue'
              ? 'bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/20'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          <Video className="w-4 h-4" />
          Release Queue & YouTube Dispatch
          {!published && (
            <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.2 rounded-full font-mono">1</span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('roster')}
          className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
            activeTab === 'roster'
              ? 'bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/20'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          Virtual Artist Roster
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
            activeTab === 'analytics'
              ? 'bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/20'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          Streaming & Royalties
        </button>
      </div>

      {/* Tab 1: Action Queue & YouTube Dispatch */}
      {activeTab === 'queue' && (
        <div className="space-y-6">
          {!published ? (
            <div className="bg-[#10151D] rounded-3xl border border-[#D4AF37]/40 shadow-2xl overflow-hidden">
              
              {/* Card Header */}
              <div className="bg-[#0B0F15] p-5 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      Pending 4K YouTube Video & Worldwide DSP Distribution
                    </h3>
                    <p className="text-xs text-gray-400">
                      Artist: <strong className="text-white">Soma Sanctum</strong> • Release: <strong className="text-white">Aura of Silence (Tibetan 432 Hz Master)</strong>
                    </p>
                  </div>
                </div>
                <span className="bg-amber-500/20 text-amber-300 text-xs px-3 py-1 rounded-full font-mono border border-amber-500/40 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Awaiting Human Approval
                </span>
              </div>

              {/* Card Content Grid */}
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Visual Artwork & YouTube Preview */}
                <div className="space-y-4">
                  <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                    Rendered 4K Video Artwork
                  </label>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80"
                      alt="Tibetan Bowl 432 Hz"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                      <span className="text-[10px] font-mono text-[#D4AF37] bg-black/60 px-2 py-0.5 rounded w-fit mb-1">
                        4K 60FPS Video Ready
                      </span>
                      <h4 className="text-sm font-bold text-white truncate">Aura of Silence (Tibetan Master Bowl)</h4>
                    </div>
                  </div>

                  <div className="bg-[#090D12] p-4 rounded-xl border border-white/5 space-y-2 text-xs">
                    <div className="flex justify-between text-gray-400">
                      <span>Audio Encoding:</span>
                      <span className="text-white font-mono">24-Bit 96kHz Lossless</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Tuning Reference:</span>
                      <span className="text-emerald-400 font-mono">Verified A4 = 432.0 Hz</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Visual Motion:</span>
                      <span className="text-purple-300 font-mono">Sacred Geometry Particle Ripple</span>
                    </div>
                  </div>
                </div>

                {/* Metadata & Description Generator */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-2">
                      Automated YouTube Title & SEO Description
                    </label>
                    <div className="bg-[#090D12] p-4 rounded-2xl border border-white/10 space-y-3">
                      <input
                        type="text"
                        defaultValue="432 Hz Aura of Silence | Authentic Tibetan Singing Bowl Deep Meditation [4K 60FPS]"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                      <textarea
                        rows={4}
                        defaultValue={`Experience deep somatic calm with this master recording tuned to A4 = 432 Hz (Verdi Tuning, -31.77 cents). 

Recorded with authentic seven-metal Tibetan singing bowls with resonant overtones at 216 Hz, 595 Hz, and 1167 Hz.

🎵 Stream lossless on Ultrasound Records: https://ultrasoundrecords.com
✨ Tuning: Mathematically Verified A4 = 432 Hz
#432Hz #SingingBowls #MeditationMusic #UltrasoundRecords #DeepSleep`}
                        className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-gray-300 leading-relaxed focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  {/* Syndication Targets */}
                  <div>
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-2">
                      Syndication Channels
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div className="p-3 bg-[#090D12] rounded-xl border border-red-500/30 flex items-center gap-2">
                        <Video className="w-4 h-4 text-red-500" />
                        <span className="text-white font-medium">YouTube 4K</span>
                      </div>
                      <div className="p-3 bg-[#090D12] rounded-xl border border-white/10 flex items-center gap-2">
                        <Radio className="w-4 h-4 text-orange-400" />
                        <span className="text-white font-medium">SoundCloud</span>
                      </div>
                      <div className="p-3 bg-[#090D12] rounded-xl border border-white/10 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-white font-medium">Spotify Pre-save</span>
                      </div>
                      <div className="p-3 bg-[#090D12] rounded-xl border border-white/10 flex items-center gap-2">
                        <Share2 className="w-4 h-4 text-blue-400" />
                        <span className="text-white font-medium">Instagram & TikTok</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons with Human-In-The-Loop Approval */}
              <div className="bg-[#090D12] p-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Human-assisted bot: Distribution is paused until your explicit approval.</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-semibold text-xs transition-colors">
                    Edit Content
                  </button>
                  <button
                    onClick={handleApprove}
                    disabled={isPublishing}
                    className={`flex-1 sm:flex-none px-8 py-3.5 rounded-xl font-bold text-xs transition-all shadow-xl flex items-center justify-center gap-2.5 ${
                      isPublishing
                        ? 'bg-red-700 text-white cursor-wait'
                        : 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white shadow-red-900/40 hover:scale-105'
                    }`}
                  >
                    {isPublishing ? (
                      <>
                        <span className="animate-spin text-lg">⏳</span>
                        <span>Dispatching to YouTube & DSPs...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>APPROVE & DISPATCH TO YOUTUBE</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          ) : (
            /* Published Success Card */
            <div className="bg-emerald-950/20 border border-emerald-500/50 rounded-3xl p-8 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Release Successfully Dispatched to YouTube & DSPs!
              </h3>
              <p className="text-xs text-gray-300 max-w-xl mx-auto leading-relaxed">
                "Aura of Silence (Tibetan Master Bowl)" is now processing on Ultrasound Records YouTube Channel in 4K 60FPS. Metadata synced across streaming queues.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => setPublished(false)}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs border border-white/15"
                >
                  Load Next Track in Queue
                </button>
                <Link
                  href="/listen"
                  className="px-5 py-2.5 rounded-xl bg-[#D4AF37] text-black font-semibold text-xs"
                >
                  View in Master Catalogue
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Virtual Artist Roster */}
      {activeTab === 'roster' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#10141A] rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-3xl shadow-lg">
              🪐
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Schola Cantorum 432</h3>
              <p className="text-xs text-[#D4AF37] font-mono">Gregorian Sacred Vocalist AI</p>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Virtual choir performing modal harmonies and sacred Latin phonemes in Just Intonation. 14.8k monthly YouTube streams.
            </p>
            <div className="pt-2 border-t border-white/5 flex justify-between text-xs text-gray-400">
              <span>Catalog: 12 Releases</span>
              <span className="text-emerald-400">Active Royalty Split</span>
            </div>
          </div>

          <div className="bg-[#10141A] rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-amber-700 flex items-center justify-center text-3xl shadow-lg">
              🥣
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Soma Sanctum</h3>
              <p className="text-xs text-[#D4AF37] font-mono">Acoustic Metallurgic Resonance</p>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Specializing in seven-metal alloy Tibetan singing bowls and pure quartz crystal vortexes. 28.3k monthly YouTube streams.
            </p>
            <div className="pt-2 border-t border-white/5 flex justify-between text-xs text-gray-400">
              <span>Catalog: 18 Releases</span>
              <span className="text-emerald-400">Active Royalty Split</span>
            </div>
          </div>

          <div className="bg-[#10141A] rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-700 flex items-center justify-center text-3xl shadow-lg">
              🌊
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Circadian Harmonics</h3>
              <p className="text-xs text-[#D4AF37] font-mono">Psychoacoustic Sleep & Delta</p>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Binaural slow-wave sleep journeys and Earth Schumann resonance field recordings. 41.5k monthly YouTube streams.
            </p>
            <div className="pt-2 border-t border-white/5 flex justify-between text-xs text-gray-400">
              <span>Catalog: 22 Releases</span>
              <span className="text-emerald-400">Active Royalty Split</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Royalties & Analytics */}
      {activeTab === 'analytics' && (
        <div className="bg-[#10141A] rounded-3xl p-8 border border-white/10 space-y-6">
          <h3 className="text-xl font-serif font-bold text-white">
            Label Revenue & Distribution Breakdown
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A0D11] p-5 rounded-2xl border border-white/5">
              <span className="text-xs text-gray-400">YouTube Monetization & AdSense</span>
              <div className="text-2xl font-bold text-red-400 mt-1">$4,120.00</div>
              <p className="text-[11px] text-gray-500 mt-1">420,000 Verified Views</p>
            </div>
            <div className="bg-[#0A0D11] p-5 rounded-2xl border border-white/5">
              <span className="text-xs text-gray-400">Sanctuary Pro Subscriptions</span>
              <div className="text-2xl font-bold text-[#D4AF37] mt-1">$3,480.00</div>
              <p className="text-[11px] text-gray-500 mt-1">348 Active Annual/Monthly Members</p>
            </div>
            <div className="bg-[#0A0D11] p-5 rounded-2xl border border-white/5">
              <span className="text-xs text-gray-400">24-Bit Master FLAC Downloads</span>
              <div className="text-2xl font-bold text-emerald-400 mt-1">$850.00</div>
              <p className="text-[11px] text-gray-500 mt-1">Commercial Licenses Cleared</p>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
