'use client';

import React, { useRef, useEffect } from 'react';
import { useAudio } from '@/context/AudioContext';
import { Play, Pause, Volume2, Heart, Download, ShieldCheck, Activity } from 'lucide-react';

export default function GlobalAudioPlayer() {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    currentTime,
    duration,
    seek,
    volume,
    setVolume,
    favorites,
    toggleFavorite,
    frequencyData
  } = useAudio();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Draw real-time FFT frequency spectrum visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (frequencyData && isPlaying) {
      const barWidth = (canvas.width / 32) - 1;
      let x = 0;
      for (let i = 0; i < 32; i++) {
        const val = frequencyData[i * 2] || 0;
        const barHeight = (val / 255) * canvas.height;

        const grad = ctx.createLinearGradient(0, canvas.height, 0, 0);
        grad.addColorStop(0, '#D4AF37'); // Warm Gold
        grad.addColorStop(1, '#6EE7B7'); // Emerald glow

        ctx.fillStyle = grad;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    } else {
      // Idle wave
      ctx.fillStyle = '#374151';
      for (let i = 0; i < 32; i++) {
        const h = Math.sin(i * 0.4) * 4 + 6;
        ctx.fillRect(i * 4, (canvas.height - h) / 2, 2.5, h);
      }
    }
  }, [frequencyData, isPlaying]);

  if (!currentTrack) return null;

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const isFav = favorites.includes(currentTrack.id);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0c1117]/95 backdrop-blur-md border-t border-[#D4AF37]/20 px-4 py-3 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Track Metadata */}
        <div className="flex items-center gap-3 w-full md:w-1/4">
          <img
            src={currentTrack.coverUrl}
            alt={currentTrack.title}
            className="w-12 h-12 rounded-lg object-cover border border-[#D4AF37]/30 shadow-md"
          />
          <div className="truncate">
            <h4 className="text-sm font-semibold text-white truncate flex items-center gap-1.5">
              {currentTrack.title}
              {currentTrack.tuning === '432 Hz' && (
                <span className="text-[10px] bg-[#D4AF37]/20 text-[#D4AF37] px-1.5 py-0.5 rounded font-mono border border-[#D4AF37]/40 flex items-center gap-0.5">
                  <ShieldCheck className="w-2.5 h-2.5" /> 432Hz
                </span>
              )}
            </h4>
            <p className="text-xs text-gray-400 truncate">{currentTrack.artist}</p>
          </div>
          <button
            onClick={() => toggleFavorite(currentTrack.id)}
            className={`p-1.5 rounded-full transition-colors ml-1 ${
              isFav ? 'text-rose-500 fill-rose-500' : 'text-gray-400 hover:text-white'
            }`}
            title={isFav ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500' : ''}`} />
          </button>
        </div>

        {/* Center Controls & Progress */}
        <div className="flex flex-col items-center w-full md:w-2/4 max-w-xl">
          <div className="flex items-center gap-4 mb-1">
            <canvas
              ref={canvasRef}
              width={128}
              height={22}
              className="hidden sm:block opacity-85"
            />
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-black flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-[#D4AF37]/20"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-black" /> : <Play className="w-5 h-5 fill-black ml-0.5" />}
            </button>
            <div className="text-[11px] font-mono text-emerald-400/90 hidden sm:flex items-center gap-1">
              <Activity className="w-3 h-3 animate-pulse" />
              <span>{currentTrack.verificationStatus}</span>
            </div>
          </div>

          {/* Time scrubber */}
          <div className="w-full flex items-center gap-2 text-xs text-gray-400">
            <span className="w-8 text-right font-mono">{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={(e) => seek(Number(e.target.value))}
              className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
            />
            <span className="w-8 font-mono">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume & Download Actions */}
        <div className="flex items-center justify-end gap-3 w-full md:w-1/4">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-gray-400" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-16 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
            />
          </div>

          <a
            href={currentTrack.audioUrl}
            download
            className="p-1.5 text-gray-300 hover:text-[#D4AF37] bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 flex items-center gap-1 text-xs"
            title="Download Master Audio File"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden lg:inline text-[11px]">Lossless</span>
          </a>
        </div>

      </div>
    </div>
  );
}
