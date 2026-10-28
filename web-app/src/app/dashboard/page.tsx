'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAudio } from '@/context/AudioContext';
import { TRACK_CATALOG } from '@/data/tracks';
import {
  User,
  Heart,
  Clock,
  Download,
  CreditCard,
  ShieldCheck,
  Play,
  Pause,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function MemberDashboardPage() {
  const { playTrack, currentTrack, isPlaying, favorites, history } = useAudio();
  const [membership, setMembership] = useState<string>('Sanctuary Pro Member');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('soma_432_membership');
      if (saved) {
        setMembership(saved === 'master-patron' ? 'Master Patron (Lifetime)' : 'Sanctuary Pro (Annual)');
      }
    }
  }, []);

  const favoriteTracks = TRACK_CATALOG.filter(t => favorites.includes(t.id));
  const historyTracks = TRACK_CATALOG.filter(t => history.includes(t.id));

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#121921] to-[#0D1217] rounded-3xl p-8 border border-[#D4AF37]/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#8C6D23] flex items-center justify-center text-black font-serif text-2xl font-bold shadow-lg shadow-[#D4AF37]/20">
            SR
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-serif font-bold text-white">Practitioner Sanctuary</h1>
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
                Active Tier
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1 font-mono">
              Account Status: <span className="text-[#D4AF37] font-semibold">{membership}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/listen"
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs border border-white/10 transition-colors"
          >
            Browse Catalog
          </Link>
          <Link
            href="/admin"
            className="px-4 py-2.5 rounded-xl bg-[#D4AF37] text-black font-semibold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" /> Launch Studio Engine
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Saved Favorites */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h2 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              Saved Sanctuary Favorites ({favoriteTracks.length})
            </h2>
            <Link href="/listen" className="text-xs text-[#D4AF37] hover:underline">
              Add more
            </Link>
          </div>

          <div className="space-y-3">
            {favoriteTracks.length === 0 ? (
              <p className="text-xs text-gray-500 py-6 text-center">No favorites saved yet.</p>
            ) : (
              favoriteTracks.map(track => {
                const isCurrent = currentTrack?.id === track.id && isPlaying;
                return (
                  <div
                    key={track.id}
                    className="bg-[#10141A] p-4 rounded-xl border border-white/5 hover:border-[#D4AF37]/30 transition-all flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3 truncate">
                      <button
                        onClick={() => playTrack(track)}
                        className="w-10 h-10 rounded-lg bg-[#D4AF37] text-black flex items-center justify-center shrink-0 shadow-md"
                      >
                        {isCurrent ? (
                          <Pause className="w-4 h-4 fill-black" />
                        ) : (
                          <Play className="w-4 h-4 fill-black ml-0.5" />
                        )}
                      </button>
                      <div className="truncate">
                        <h4 className="text-sm font-semibold text-white truncate">{track.title}</h4>
                        <span className="text-[11px] text-gray-400 font-mono">{track.tuning} • {track.duration}</span>
                      </div>
                    </div>

                    <a
                      href={track.audioUrl}
                      download
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#D4AF37] border border-white/10 transition-colors"
                      title="Download Master WAV"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                );
              })
            )}
          </div>

          {/* Recently Played */}
          <div className="pt-6">
            <h2 className="text-lg font-serif font-bold text-white flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-emerald-400" />
              Listening History
            </h2>
            <div className="space-y-2">
              {historyTracks.map(track => (
                <div
                  key={track.id}
                  onClick={() => playTrack(track)}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors flex items-center justify-between text-xs"
                >
                  <span className="text-gray-300 font-medium truncate">{track.title}</span>
                  <span className="text-gray-500 font-mono">{track.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Account Details & Entitlements */}
        <div className="space-y-6">
          <div className="bg-[#10141A] p-6 rounded-2xl border border-white/5 space-y-4">
            <h3 className="text-base font-serif font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              Member Entitlements
            </h3>
            <ul className="text-xs text-gray-300 space-y-2.5">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Lossless 24-Bit FLAC/WAV Master Downloads
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Unrestricted Commercial Classroom License
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Continuous 60-Minute Looping Mode
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Audio Synthesis & CQT Tuning Verification Engine
              </li>
            </ul>
          </div>

          <div className="bg-[#10141A] p-6 rounded-2xl border border-white/5 space-y-3">
            <h3 className="text-base font-serif font-bold text-white flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-blue-400" />
              Billing Management
            </h3>
            <p className="text-xs text-gray-400">
              Payments processed securely via Stripe. Next renewal: 1 Year from activation.
            </p>
            <Link
              href="/pricing"
              className="inline-block w-full text-center py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs text-gray-300 border border-white/10 transition-colors"
            >
              Change Tier or Payment Method
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
