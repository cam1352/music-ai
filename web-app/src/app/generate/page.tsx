"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generatedAudio, setGeneratedAudio] = useState(false);

  const handleGenerate = () => {
    if (!prompt) return;
    setIsGenerating(true);
    setProgress(0);
    setGeneratedAudio(false);

    // Simulate AI generation progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          setGeneratedAudio(true);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <Link href="/" className="text-purple-400 hover:text-purple-300 mb-8 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Generate Music
        </h1>
        
        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl transition-all duration-300">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Prompt (Describe your song)
          </label>
          <textarea 
            className="w-full bg-gray-900 border border-gray-600 rounded-lg p-4 text-white focus:outline-none focus:border-purple-500 mb-6 transition-colors"
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="An upbeat electronic dance track with a heavy bassline and bright synth melodies..."
          ></textarea>
          
          <div className="flex gap-4 mb-8">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
              <select className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500">
                <option>15 seconds (Preview)</option>
                <option>30 seconds (Standard)</option>
                <option>120 seconds (Full Track)</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-2">Model</label>
              <select className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500">
                <option>YuE (State of the Art)</option>
                <option>MusicGen (Audiocraft)</option>
              </select>
            </div>
          </div>
          
          {!isGenerating && !generatedAudio && (
            <button 
              onClick={handleGenerate}
              disabled={!prompt}
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all shadow-lg ${
                prompt 
                  ? 'bg-purple-600 hover:bg-purple-700 shadow-purple-900/50 cursor-pointer transform hover:scale-[1.02]' 
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              Generate Audio ✨
            </button>
          )}

          {isGenerating && (
            <div className="w-full space-y-4">
              <div className="flex justify-between text-sm text-purple-400 font-bold">
                <span>Generating your track...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-200 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {generatedAudio && (
            <div className="w-full bg-gray-900 border border-purple-500/50 rounded-xl p-6 mt-4 animate-fade-in-up">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                ✅ Generation Complete!
              </h3>
              <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
                <button className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/50">
                  ▶️
                </button>
                <div className="flex-1">
                  <div className="h-2 bg-gray-700 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-1/3"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>0:00</span>
                    <span>0:30</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 rounded-lg font-semibold transition-colors">
                  Download .WAV
                </button>
                <button className="flex-1 bg-green-600 hover:bg-green-700 py-2 rounded-lg font-semibold transition-colors shadow-lg shadow-green-900/50">
                  Send to Label Manager
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
