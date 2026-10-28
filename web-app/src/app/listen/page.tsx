'use client';

import React, { useState, useMemo } from 'react';
import { useAudio } from '@/context/AudioContext';
import { TRACK_CATALOG, Track } from '@/data/tracks';
import {
  Search,
  Filter,
  Play,
  Pause,
  ShieldCheck,
  Heart,
  Download,
  Clock,
  Sparkles,
  Disc
} from 'lucide-react';

export default function AudioLibraryPage() {
  const { playTrack, currentTrack, isPlaying, favorites, toggleFavorite } = useAudio();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [selectedTuning, setSelectedTuning] = useState<string>('all');
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  const filteredTracks = useMemo(() => {
    return TRACK_CATALOG.filter(track => {
      const matchesSearch =
        track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.artist.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesGenre = selectedGenre === 'all' || track.genre === selectedGenre;
      const matchesTuning = selectedTuning === 'all' || track.tuning === selectedTuning;
      const matchesFav = !onlyFavorites || favorites.includes(track.id);

      return matchesSearch && matchesGenre && matchesTuning && matchesFav;
    });
  }, [searchQuery, selectedGenre, selectedTuning, onlyFavorites, favorites]);

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="border-b border-white/10 pb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-mono">
          <Disc className="w-3.5 h-3.5" />
          <span>MASTER ARCHIVE & REPERTOIRE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
          The 432 Hz Sound Library
        </h1>
        <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
          Explore our fully cleared, original studio master recordings. Filter by acoustic tuning reference, meditation genre, or intended somatic context.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#10141A] p-6 rounded-2xl border border-white/5 shadow-xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Search Input */}
          <div className="relative md:col-span-2">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, frequency, or somatic state..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#090C0F] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Genre Dropdown */}
          <div>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full bg-[#090C0F] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="all">All Disciplines</option>
              <option value="singing-bowls">Singing Bowls</option>
              <option value="gregorian">Gregorian Chanting</option>
              <option value="soundscapes">Ambient Soundscapes</option>
              <option value="sleep">Sleep & Delta Waves</option>
              <option value="meditation">Meditation Reference</option>
            </select>
          </div>

          {/* Tuning Dropdown */}
          <div>
            <select
              value={selectedTuning}
              onChange={(e) => setSelectedTuning(e.target.value)}
              className="w-full bg-[#090C0F] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="all">All Tunings</option>
              <option value="432 Hz">A4 = 432 Hz (Verdi)</option>
              <option value="440 Hz">A4 = 440 Hz (Standard)</option>
            </select>
          </div>
        </div>

        {/* Quick Filter Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedGenre('all')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedGenre === 'all'
                  ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedGenre('singing-bowls')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedGenre === 'singing-bowls'
                  ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              Singing Bowls
            </button>
            <button
              onClick={() => setSelectedGenre('gregorian')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedGenre === 'gregorian'
                  ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              Gregorian
            </button>
            <button
              onClick={() => setSelectedGenre('soundscapes')}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                selectedGenre === 'soundscapes'
                  ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              Soundscapes
            </button>
          </div>

          <button
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-colors ${
              onlyFavorites
                ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-rose-400' : ''}`} />
            Favorites Only ({favorites.length})
          </button>
        </div>
      </div>

      {/* Track List */}
      <div className="space-y-3">
        {filteredTracks.length === 0 ? (
          <div className="text-center py-16 bg-[#10141A] rounded-2xl border border-white/5 text-gray-400">
            No tracks match the selected filters.
          </div>
        ) : (
          filteredTracks.map((track) => {
            const isCurrentlyPlaying = currentTrack?.id === track.id && isPlaying;
            const isFav = favorites.includes(track.id);

            return (
              <div
                key={track.id}
                className="bg-[#10141A] rounded-2xl p-4 sm:p-5 border border-white/5 hover:border-[#D4AF37]/40 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group shadow-md"
              >
                {/* Left: Play button, Cover, Title */}
                <div className="flex items-center gap-4 w-full md:w-5/12">
                  <button
                    onClick={() => playTrack(track)}
                    className="w-12 h-12 rounded-xl bg-[#D4AF37] hover:bg-[#c49f30] text-black flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform"
                    aria-label={isCurrentlyPlaying ? 'Pause' : 'Play'}
                  >
                    {isCurrentlyPlaying ? (
                      <Pause className="w-5 h-5 fill-black" />
                    ) : (
                      <Play className="w-5 h-5 fill-black ml-0.5" />
                    )}
                  </button>

                  <img
                    src={track.coverUrl}
                    alt={track.title}
                    className="w-12 h-12 rounded-lg object-cover border border-white/10 shrink-0"
                  />

                  <div className="truncate">
                    <h3 className="font-semibold text-sm text-white group-hover:text-[#D4AF37] transition-colors truncate">
                      {track.title}
                    </h3>
                    <p className="text-xs text-gray-400 truncate">{track.artist}</p>
                    <span className="text-[10px] text-gray-500 font-mono mt-0.5 block truncate">
                      {track.frequencyFocus}
                    </span>
                  </div>
                </div>

                {/* Center: Context & Scientific Tag */}
                <div className="hidden lg:block w-4/12 text-xs text-gray-400">
                  <p className="line-clamp-1 text-gray-300 font-medium">{track.intendedContext}</p>
                  <p className="text-[11px] text-emerald-400/90 font-mono flex items-center gap-1 mt-1">
                    <ShieldCheck className="w-3 h-3" />
                    {track.scientificTag}
                  </p>
                </div>

                {/* Right: Tuning Badge, Duration, Fav, Download */}
                <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-3/12 border-t md:border-t-0 pt-3 md:pt-0 border-white/5">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${
                      track.tuning === '432 Hz'
                        ? 'bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30'
                        : 'bg-blue-900/20 text-blue-300 border-blue-500/30'
                    }`}
                  >
                    {track.tuning}
                  </span>

                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {track.duration}
                  </span>

                  <button
                    onClick={() => toggleFavorite(track.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      isFav ? 'text-rose-500 fill-rose-500' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500' : ''}`} />
                  </button>

                  <a
                    href={track.audioUrl}
                    download
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-[#D4AF37] border border-white/10 transition-colors"
                    title="Download 24-Bit FLAC/WAV Master"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}
