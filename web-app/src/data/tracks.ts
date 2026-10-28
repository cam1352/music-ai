export interface Track {
  id: string;
  title: string;
  artist: string;
  genre: 'singing-bowls' | 'gregorian' | 'soundscapes' | 'sleep' | 'meditation';
  tuning: '432 Hz' | '440 Hz';
  duration: string;
  audioUrl: string;
  coverUrl: string;
  description: string;
  intendedContext: string;
  isPremium: boolean;
  frequencyFocus: string;
  verificationStatus: 'Verified A4=432 Hz' | 'Standard A4=440 Hz';
  scientificTag: string;
}

export const TRACK_CATALOG: Track[] = [
  {
    id: 'tibetan-bowl-resonance',
    title: 'Aura of Silence (Tibetan Master Bowl)',
    artist: 'Soma Sanctum & Sound Labs',
    genre: 'singing-bowls',
    tuning: '432 Hz',
    duration: '0:18',
    audioUrl: '/audio/tibetan_bowl_432hz.wav',
    coverUrl: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80',
    description: 'Forged from seven-metal alloys with fundamental tuned to A3 = 216 Hz and verified overtone partials at 595 Hz (ratio 2.76) and 1167 Hz.',
    intendedContext: 'Deep meditation, somatic nervous system settling, focused stillness.',
    isPremium: false,
    frequencyFocus: '216 Hz Fundamental / 432 Hz Octave Ring',
    verificationStatus: 'Verified A4=432 Hz',
    scientificTag: 'Vagal Nerve Relaxation & Heart Rate Coherence'
  },
  {
    id: 'gregorian-sanctus-drone',
    title: 'Kyrie Lucis (Gregorian Sanctuary Drone)',
    artist: 'Schola Cantorum 432',
    genre: 'gregorian',
    tuning: '432 Hz',
    duration: '0:22',
    audioUrl: '/audio/gregorian_sanctus_drone_432hz.wav',
    coverUrl: 'https://images.unsplash.com/photo-1548625361-195feee18370?auto=format&fit=crop&w=600&q=80',
    description: 'Resonant modal choral chant in Just Intonation. Rooted in A2 (108 Hz) with open Pythagorean fifths (162 Hz) creating acoustic spaciousness.',
    intendedContext: 'Sacred contemplation, journaling, respiratory rhythm pacing.',
    isPremium: false,
    frequencyFocus: '108 Hz Bass Drone / Formant Vowel Resonance',
    verificationStatus: 'Verified A4=432 Hz',
    scientificTag: 'Resonance Breathing (~6 breaths/min)'
  },
  {
    id: 'harmonic-forest-schumann',
    title: 'Biophony & Earth Resonance',
    artist: 'Aethelgard Ambient',
    genre: 'soundscapes',
    tuning: '432 Hz',
    duration: '0:20',
    audioUrl: '/audio/harmonic_forest_432hz.wav',
    coverUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
    description: 'Organic stream bed acoustics intertwined with subtle sub-harmonic waves aligned with the 432 Hz harmonic spectrum.',
    intendedContext: 'Deep work, study, ambient stress reduction.',
    isPremium: true,
    frequencyFocus: '54 Hz Sub-harmonic / 432 Hz Ambient Layer',
    verificationStatus: 'Verified A4=432 Hz',
    scientificTag: 'Cortisol Reduction & Mental Restoration'
  },
  {
    id: 'quartz-crystal-harmony',
    title: 'Alchemical Quartz Cathedral',
    artist: 'Soma Sanctum',
    genre: 'singing-bowls',
    tuning: '432 Hz',
    duration: '0:16',
    audioUrl: '/audio/quartz_crystal_harmony_432hz.wav',
    coverUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    description: 'Pure quartz singing bowl generating an ultra-stable 432.0 Hz acoustic vortex with spatial rotary interference.',
    intendedContext: 'Crown alignment, energetic clarity, morning mindfulness.',
    isPremium: false,
    frequencyFocus: '432.0 Hz Exact Fundamental',
    verificationStatus: 'Verified A4=432 Hz',
    scientificTag: 'Acoustic Entrainment'
  },
  {
    id: 'sleep-delta-ocean',
    title: 'Theta to Delta Deep Sleep Journey',
    artist: 'Circadian Harmonics',
    genre: 'sleep',
    tuning: '432 Hz',
    duration: '0:24',
    audioUrl: '/audio/sleep_delta_ocean_432hz.wav',
    coverUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80',
    description: 'Slow oceanic swell paired with a precise 2.5 Hz binaural delta pulsation across a 108 Hz warm carrier drone.',
    intendedContext: 'Sleep initiation, insomnia relief, nocturnal restoration.',
    isPremium: true,
    frequencyFocus: '2.5 Hz Delta Differential / 108 Hz Base',
    verificationStatus: 'Verified A4=432 Hz',
    scientificTag: 'Slow-Wave Sleep Promotion'
  },
  {
    id: 'scientific-comparison-432',
    title: 'Verdi Reference Triad (A4 = 432 Hz)',
    artist: 'Acoustic Verification Lab',
    genre: 'meditation',
    tuning: '432 Hz',
    duration: '0:10',
    audioUrl: '/audio/comparison_a4_432hz.wav',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    description: 'A mathematical harmonic triad based on A4 = 432 Hz (A: 432 Hz, C#: 544.29 Hz, E: 647.27 Hz). Exact -31.77 cents shift from standard tuning.',
    intendedContext: 'Scientific A/B evaluation against 440 Hz standard.',
    isPremium: false,
    frequencyFocus: 'A4 = 432.0 Hz Exact',
    verificationStatus: 'Verified A4=432 Hz',
    scientificTag: 'Comparative Perceptual Acoustics'
  },
  {
    id: 'scientific-comparison-440',
    title: 'ISO 16 Reference Triad (A4 = 440 Hz)',
    artist: 'Acoustic Verification Lab',
    genre: 'meditation',
    tuning: '440 Hz',
    duration: '0:10',
    audioUrl: '/audio/comparison_a4_440hz.wav',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
    description: 'Standard international concert pitch (ISO 16) reference triad (A: 440 Hz, C#: 554.37 Hz, E: 659.25 Hz).',
    intendedContext: 'Reference comparison listening test.',
    isPremium: false,
    frequencyFocus: 'A4 = 440.0 Hz Standard',
    verificationStatus: 'Standard A4=440 Hz',
    scientificTag: 'ISO 16 International Standard'
  }
];
