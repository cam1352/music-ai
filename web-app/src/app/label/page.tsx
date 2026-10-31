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
  DollarSign,
  Plus,
  Trash2,
  Key,
  Globe2,
  ExternalLink,
  AlertCircle
} from 'lucide-react';

interface YouTubeAccount {
  id: string;
  channelName: string;
  handle: string;
  subscriberCount: string;
  avatarUrl: string;
  privacyStatus: 'public' | 'unlisted' | 'private';
  connectedAt: string;
  isPrimary: boolean;
}

export default function RecordLabelPage() {
  const { playTrack } = useAudio();

  // Navigation tabs
  const [activeTab, setActiveTab] = useState<'queue' | 'youtube' | 'roster' | 'analytics'>('queue');

  // YouTube Channel Management State
  const [youtubeAccounts, setYoutubeAccounts] = useState<YouTubeAccount[]>([
    {
      id: 'yt-1',
      channelName: 'Ultrasound Records Official (432 Hz)',
      handle: '@UltrasoundRecords',
      subscriberCount: '128.4K',
      avatarUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=200&q=80',
      privacyStatus: 'public',
      connectedAt: 'Active (OAuth 2.0 Connected)',
      isPrimary: true
    },
    {
      id: 'yt-2',
      channelName: 'Soma Sanctum Meditations',
      handle: '@SomaSanctum432',
      subscriberCount: '44.2K',
      avatarUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&q=80',
      privacyStatus: 'public',
      connectedAt: 'Active (OAuth 2.0 Connected)',
      isPrimary: false
    }
  ]);

  // Modal for adding a new YouTube channel
  const [showAddModal, setShowAddModal] = useState(false);
  const [newChannelName, setNewChannelName] = useState('');
  const [newChannelHandle, setNewChannelHandle] = useState('');
  const [newApiKey, setNewApiKey] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  // Dispatch / Publishing states
  const [selectedChannelId, setSelectedChannelId] = useState<string>('yt-1');
  const [isPublishing, setIsPublishing] = useState(false);
  const [published, setPublished] = useState(false);

  const handleAddChannel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChannelName) return;

    setIsConnecting(true);
    setTimeout(() => {
      const newAcc: YouTubeAccount = {
        id: `yt-${Date.now()}`,
        channelName: newChannelName,
        handle: newChannelHandle.startsWith('@') ? newChannelHandle : `@${newChannelHandle || 'Channel'}`,
        subscriberCount: '0 (New)',
        avatarUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80',
        privacyStatus: 'public',
        connectedAt: 'Connected (OAuth 2.0 Authorized)',
        isPrimary: false
      };
      setYoutubeAccounts([...youtubeAccounts, newAcc]);
      setIsConnecting(false);
      setShowAddModal(false);
      setNewChannelName('');
      setNewChannelHandle('');
      setNewApiKey('');
    }, 1500);
  };

  const removeChannel = (id: string) => {
    setYoutubeAccounts(youtubeAccounts.filter(a => a.id !== id));
  };

  const handleApprove = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      setPublished(true);
    }, 2800);
  };

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Header Banner */}
      <div className="glass-card rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/35 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/15 text-red-400 text-xs font-mono border border-red-500/30">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>ULTRASOUND RECORDS AUTONOMOUS HEADQUARTERS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
            Autonomous AI Record Label Suite
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl leading-relaxed font-light">
            Connect and manage your YouTube accounts, automate 4K frequency video broadcasts, syndicate metadata, and approve releases via Human-In-The-Loop review.
          </p>
        </div>

        {/* Global Label Stats */}
        <div className="flex flex-wrap gap-3">
          <div className="bg-black/60 p-4 rounded-2xl border border-white/10 text-center min-w-[110px] backdrop-blur-xl">
            <span className="text-2xl font-serif font-bold text-red-400 flex items-center justify-center gap-1">
              <Video className="w-4 h-4" /> {youtubeAccounts.length}
            </span>
            <p className="text-[11px] text-gray-400">YouTube Accounts</p>
          </div>
          <div className="bg-black/60 p-4 rounded-2xl border border-white/10 text-center min-w-[110px] backdrop-blur-xl">
            <span className="text-2xl font-serif font-bold text-[#D4AF37]">3</span>
            <p className="text-[11px] text-gray-400">Signed AI Artists</p>
          </div>
          <div className="bg-black/60 p-4 rounded-2xl border border-white/10 text-center min-w-[110px] backdrop-blur-xl">
            <span className="text-2xl font-serif font-bold text-emerald-400">$12,850</span>
            <p className="text-[11px] text-gray-400">Monthly AdSense</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4 text-xs font-medium">
        <button
          onClick={() => setActiveTab('queue')}
          className={`px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
            activeTab === 'queue'
              ? 'bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/25'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          <Video className="w-4 h-4" />
          <span>Release Queue & YouTube Dispatch</span>
          {!published && (
            <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.2 rounded-full font-mono">1</span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('youtube')}
          className={`px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
            activeTab === 'youtube'
              ? 'bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/25'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          <Settings className="w-4 h-4" />
          <span>YouTube Channel Manager</span>
          <span className="bg-red-500/20 text-red-400 text-[10px] px-1.5 py-0.5 rounded font-mono border border-red-500/30">
            {youtubeAccounts.length} Connected
          </span>
        </button>

        <button
          onClick={() => setActiveTab('roster')}
          className={`px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
            activeTab === 'roster'
              ? 'bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/25'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          <Radio className="w-4 h-4" />
          <span>Virtual Artist Roster</span>
        </button>

        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
            activeTab === 'analytics'
              ? 'bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/25'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Streaming & Royalties</span>
        </button>
      </div>

      {/* Tab: YouTube Channel Manager (NEW) */}
      {activeTab === 'youtube' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                <Video className="w-5 h-5 text-red-500" />
                Connected YouTube Channels & Publishing Targets
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Authorize channels where Ultrasound Records will automatically upload and syndicate 4K 60FPS frequency videos.
              </p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="gold-gradient-btn px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
            >
              <Plus className="w-4 h-4 text-black" />
              <span>Connect YouTube Account</span>
            </button>
          </div>

          {/* YouTube Accounts Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {youtubeAccounts.map((account) => (
              <div
                key={account.id}
                className="glass-card p-6 rounded-2xl border border-white/10 space-y-4 hover:border-red-500/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={account.avatarUrl}
                      alt={account.channelName}
                      className="w-14 h-14 rounded-2xl object-cover border border-white/10 shadow-md"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-white text-base">{account.channelName}</h3>
                        {account.isPrimary && (
                          <span className="text-[10px] bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-0.5 rounded font-mono border border-[#D4AF37]/40">
                            Primary
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-red-400 font-mono mt-0.5">{account.handle}</p>
                      <p className="text-[11px] text-gray-400 font-mono mt-1">
                        Subscribers: <strong className="text-white">{account.subscriberCount}</strong>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeChannel(account.id)}
                    className="p-2 text-gray-500 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors"
                    title="Disconnect Channel"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-mono flex items-center gap-1.5 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {account.connectedAt}
                  </span>
                  <span className="text-gray-400 text-[11px] font-mono">
                    Upload Privacy: <strong className="text-white uppercase">{account.privacyStatus}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Info Box */}
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 flex items-start gap-3.5 text-xs text-gray-300">
            <AlertCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-white">YouTube Data API v3 & Automated Video Encoding</strong>
              <p className="text-gray-400 leading-relaxed text-[11px]">
                Ultrasound Records uses direct OAuth 2.0 tokens to publish completed 4K hypnotic frequency renders directly into your channel's upload queue. You can select which connected channel receives each release in the Release Dispatch queue.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Release Queue & Dispatch */}
      {activeTab === 'queue' && (
        <div className="space-y-6">
          {!published ? (
            <div className="glass-card rounded-3xl border border-[#D4AF37]/40 shadow-2xl overflow-hidden">
              
              {/* Card Header */}
              <div className="bg-black/60 p-5 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      Pending 4K YouTube Video & Worldwide DSP Distribution
                    </h3>
                    <p className="text-xs text-gray-400">
                      Target Channel:{' '}
                      <strong className="text-[#D4AF37]">
                        {youtubeAccounts.find(a => a.id === selectedChannelId)?.channelName || 'Primary YouTube Channel'}
                      </strong>
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

                  {/* Channel Selector for this release */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                      Select Target YouTube Account
                    </label>
                    <select
                      value={selectedChannelId}
                      onChange={(e) => setSelectedChannelId(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    >
                      {youtubeAccounts.map(a => (
                        <option key={a.id} value={a.id}>
                          {a.channelName} ({a.handle})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Metadata & Description Generator */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-2">
                      Automated YouTube Title & SEO Description
                    </label>
                    <div className="bg-black/50 p-4 rounded-2xl border border-white/10 space-y-3">
                      <input
                        type="text"
                        defaultValue="432 Hz Aura of Silence | Authentic Tibetan Singing Bowl Deep Meditation [4K 60FPS]"
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                      <textarea
                        rows={4}
                        defaultValue={`Experience deep somatic calm with this master recording tuned to A4 = 432 Hz (Verdi Tuning, -31.77 cents). 

Recorded with authentic seven-metal Tibetan singing bowls with resonant overtones at 216 Hz, 595 Hz, and 1167 Hz.

🎵 Stream lossless on Ultrasound Records: https://ultrasoundlabel.com
✨ Tuning: Mathematically Verified A4 = 432 Hz
#432Hz #SingingBowls #MeditationMusic #UltrasoundRecords #DeepSleep`}
                        className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-gray-300 leading-relaxed focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  {/* Multi-channel Syndication */}
                  <div>
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-2">
                      Syndication Targets
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div className="p-3 bg-black/50 rounded-xl border border-red-500/30 flex items-center gap-2">
                        <Video className="w-4 h-4 text-red-500" />
                        <span className="text-white font-medium">YouTube 4K</span>
                      </div>
                      <div className="p-3 bg-black/50 rounded-xl border border-white/10 flex items-center gap-2">
                        <Radio className="w-4 h-4 text-orange-400" />
                        <span className="text-white font-medium">SoundCloud</span>
                      </div>
                      <div className="p-3 bg-black/50 rounded-xl border border-white/10 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-white font-medium">Spotify Pre-save</span>
                      </div>
                      <div className="p-3 bg-black/50 rounded-xl border border-white/10 flex items-center gap-2">
                        <Share2 className="w-4 h-4 text-blue-400" />
                        <span className="text-white font-medium">Instagram & TikTok</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons with Human-In-The-Loop Approval */}
              <div className="bg-black/60 p-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Human-assisted bot: Distribution is paused until your explicit approval.</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-semibold text-xs transition-colors">
                    Edit Video Parameters
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
                Release Successfully Dispatched to YouTube!
              </h3>
              <p className="text-xs text-gray-300 max-w-xl mx-auto leading-relaxed">
                "Aura of Silence (Tibetan Master Bowl)" is now processing on <strong>{youtubeAccounts.find(a => a.id === selectedChannelId)?.channelName}</strong> in 4K 60FPS. Metadata synced across streaming queues.
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

      {/* Tab: Virtual Artist Roster */}
      {activeTab === 'roster' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-3xl shadow-lg">
              🪐
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Schola Cantorum 432</h3>
              <p className="text-xs text-[#D4AF37] font-mono">Gregorian Sacred Vocalist AI</p>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Virtual choir performing modal harmonies and sacred Latin phonemes in Just Intonation. 14.8k monthly YouTube streams.
            </p>
            <div className="pt-2 border-t border-white/5 flex justify-between text-xs text-gray-400">
              <span>Catalog: 12 Releases</span>
              <span className="text-emerald-400">Active Royalty Split</span>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-amber-700 flex items-center justify-center text-3xl shadow-lg">
              🥣
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Soma Sanctum</h3>
              <p className="text-xs text-[#D4AF37] font-mono">Acoustic Metallurgic Resonance</p>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Specializing in seven-metal alloy Tibetan singing bowls and pure quartz crystal vortexes. 28.3k monthly YouTube streams.
            </p>
            <div className="pt-2 border-t border-white/5 flex justify-between text-xs text-gray-400">
              <span>Catalog: 18 Releases</span>
              <span className="text-emerald-400">Active Royalty Split</span>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-700 flex items-center justify-center text-3xl shadow-lg">
              🌊
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Circadian Harmonics</h3>
              <p className="text-xs text-[#D4AF37] font-mono">Psychoacoustic Sleep & Delta</p>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Binaural slow-wave sleep journeys and Earth Schumann resonance field recordings. 41.5k monthly YouTube streams.
            </p>
            <div className="pt-2 border-t border-white/5 flex justify-between text-xs text-gray-400">
              <span>Catalog: 22 Releases</span>
              <span className="text-emerald-400">Active Royalty Split</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Royalties & Analytics */}
      {activeTab === 'analytics' && (
        <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
          <h3 className="text-xl font-serif font-bold text-white">
            Label Revenue & Distribution Breakdown
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/50 p-5 rounded-2xl border border-white/5">
              <span className="text-xs text-gray-400">YouTube Monetization & AdSense</span>
              <div className="text-2xl font-bold text-red-400 mt-1">$4,120.00</div>
              <p className="text-[11px] text-gray-500 mt-1">420,000 Verified Views</p>
            </div>
            <div className="bg-black/50 p-5 rounded-2xl border border-white/5">
              <span className="text-xs text-gray-400">Sanctuary Pro Subscriptions</span>
              <div className="text-2xl font-bold text-[#D4AF37] mt-1">$3,480.00</div>
              <p className="text-[11px] text-gray-500 mt-1">348 Active Annual/Monthly Members</p>
            </div>
            <div className="bg-black/50 p-5 rounded-2xl border border-white/5">
              <span className="text-xs text-gray-400">24-Bit Master FLAC Downloads</span>
              <div className="text-2xl font-bold text-emerald-400 mt-1">$850.00</div>
              <p className="text-[11px] text-gray-500 mt-1">Commercial Licenses Cleared</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Connect New YouTube Channel */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card rounded-3xl p-8 max-w-lg w-full border border-[#D4AF37]/40 space-y-6 animate-float">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                <Video className="w-5 h-5 text-red-500" />
                Connect YouTube Channel
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddChannel} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-medium mb-1">Channel Display Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ultrasound Records Chill Beats"
                  value={newChannelName}
                  onChange={(e) => setNewChannelName(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1">YouTube Handle</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. @UltrasoundChill"
                  value={newChannelHandle}
                  onChange={(e) => setNewChannelHandle(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1">OAuth 2.0 Client ID or API Key (Optional)</label>
                <input
                  type="password"
                  placeholder="AIzaSy... (leave blank to use OAuth single-click)"
                  value={newApiKey}
                  onChange={(e) => setNewApiKey(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isConnecting}
                  className="gold-gradient-btn px-6 py-2.5 rounded-xl font-bold flex items-center gap-2"
                >
                  {isConnecting ? (
                    <span>Authorizing OAuth...</span>
                  ) : (
                    <>
                      <Key className="w-3.5 h-3.5 text-black" />
                      <span>Authorize & Connect</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}
