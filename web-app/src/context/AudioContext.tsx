'use client';

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Track, TRACK_CATALOG } from '@/data/tracks';

interface AudioContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  playTrack: (track: Track) => void;
  pauseTrack: () => void;
  togglePlay: () => void;
  currentTime: number;
  duration: number;
  seek: (time: number) => void;
  volume: number;
  setVolume: (v: number) => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  frequencyData: Uint8Array | null;
  history: string[];
  playbackError: string | null;
}

const AudioPlayerContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(TRACK_CATALOG[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolumeState] = useState<number>(0.9);
  const [favorites, setFavorites] = useState<string[]>(['tibetan-bowl-resonance']);
  const [history, setHistory] = useState<string[]>(['tibetan-bowl-resonance']);
  const [frequencyData, setFrequencyData] = useState<Uint8Array | null>(null);
  const [playbackError, setPlaybackError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFavs = localStorage.getItem('soma_432_favorites');
      if (savedFavs) {
        try { setFavorites(JSON.parse(savedFavs)); } catch (e) {}
      }
    }
  }, []);

  // Safe Web Audio initialization (without blocking standard audio playback)
  const initWebAudio = () => {
    if (typeof window === 'undefined') return;
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
          const ctx = new AudioContextClass();
          const analyser = ctx.createAnalyser();
          analyser.fftSize = 128;
          audioCtxRef.current = ctx;
          analyserRef.current = analyser;

          // Connect media element if not already connected
          if (audioRef.current && !(audioRef.current as any).__connectedToWebAudio) {
            try {
              const source = ctx.createMediaElementSource(audioRef.current);
              source.connect(analyser);
              analyser.connect(ctx.destination);
              (audioRef.current as any).__connectedToWebAudio = true;
            } catch (err) {
              console.warn('Media element source already attached or cross-origin restricted:', err);
            }
          }

          const updateFFT = () => {
            if (analyserRef.current) {
              const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
              analyserRef.current.getByteFrequencyData(dataArray);
              setFrequencyData(dataArray);
            }
            animFrameRef.current = requestAnimationFrame(updateFFT);
          };
          updateFFT();
        }
      }

      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
    } catch (e) {
      console.warn('Web Audio FFT optional visualization skipped:', e);
    }
  };

  const playTrack = (track: Track) => {
    setPlaybackError(null);
    initWebAudio();

    if (!audioRef.current) return;

    if (currentTrack?.id !== track.id) {
      setCurrentTrack(track);
      audioRef.current.src = track.audioUrl;
      audioRef.current.load();

      if (!history.includes(track.id)) {
        setHistory(prev => [track.id, ...prev.slice(0, 9)]);
      }

      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(err => {
            console.warn('Playback deferred by browser policy:', err);
            setPlaybackError('Click Play button to initiate sound output.');
          });
      }
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(err => {
            console.warn('Playback resume issue:', err);
            setPlaybackError('Click Play button to initiate sound output.');
          });
      }
    }
  };

  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseTrack();
    } else if (currentTrack) {
      playTrack(currentTrack);
    }
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const setVolume = (v: number) => {
    setVolumeState(v);
    if (audioRef.current) {
      audioRef.current.volume = v;
    }
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const next = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      if (typeof window !== 'undefined') {
        localStorage.setItem('soma_432_favorites', JSON.stringify(next));
      }
      return next;
    });
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        playTrack,
        pauseTrack,
        togglePlay,
        currentTime,
        duration,
        seek,
        volume,
        setVolume,
        audioRef,
        favorites,
        toggleFavorite,
        frequencyData,
        history,
        playbackError
      }}
    >
      <audio
        ref={audioRef}
        src={currentTrack?.audioUrl || '/audio/tibetan_bowl_432hz.wav'}
        preload="auto"
        onTimeUpdate={() => audioRef.current && setCurrentTime(audioRef.current.currentTime)}
        onLoadedMetadata={() => audioRef.current && setDuration(audioRef.current.duration)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={(e) => {
          console.error('Audio element error:', e);
          setPlaybackError('Audio load error: file missing or format unsupported.');
        }}
      />
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
