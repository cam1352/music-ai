"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function MarketplacePage() {
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [purchased, setPurchased] = useState(false);

  const handlePurchase = (artistName: string) => {
    setSelectedArtist(artistName);
    setIsProcessing(true);
    
    // Simulate smart contract / stripe checkout
    setTimeout(() => {
      setIsProcessing(false);
      setPurchased(true);
      setTimeout(() => {
        setSelectedArtist(null);
        setPurchased(false);
      }, 3000);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center relative">
      {/* Checkout Modal Overlay */}
      {selectedArtist && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center animate-fade-in-up">
            {isProcessing ? (
              <div className="space-y-6">
                <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <h3 className="text-xl font-bold">Processing Transaction...</h3>
                <p className="text-gray-400 text-sm">Securely transferring ownership rights for {selectedArtist}.</p>
              </div>
            ) : purchased ? (
              <div className="space-y-6">
                <span className="text-6xl block">🎉</span>
                <h3 className="text-xl font-bold text-green-400">Transaction Complete!</h3>
                <p className="text-gray-300 text-sm">You are now the exclusive owner of {selectedArtist}. They have been added to your Virtual Label Agency.</p>
              </div>
            ) : null}
          </div>
        </div>
      )}

      <div className="w-full max-w-6xl">
        <Link href="/" className="text-yellow-400 hover:text-yellow-300 mb-8 inline-block transition-colors">
          &larr; Back to Home
        </Link>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Virtual Artist Marketplace
            </h1>
            <p className="text-gray-400 mt-4 text-lg max-w-2xl">
              Buy exclusive rights to fully-trained AI personas. Each purchase includes their unique generative voice model, visual aesthetic, social media handles, and backstory.
            </p>
          </div>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors transform hover:scale-105">
            Connect Wallet / Card
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Artist For Sale 1 */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl group hover:border-yellow-500 transition-all cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              <span className="text-6xl group-hover:scale-125 transition-transform duration-500">🌌</span>
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-yellow-400 border border-yellow-500/50">
                $4,999
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-1">Lumina Void</h3>
              <p className="text-sm text-yellow-500 font-semibold mb-4">Genre: Ethereal Techno</p>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                A cyber-mystic born in the databanks of a supercomputer. Known for haunting melodies mixed with driving 140bpm basslines.
              </p>
              <ul className="text-xs text-gray-500 space-y-2 mb-6">
                <li className="flex items-center gap-2"><span className="text-green-500">✅</span> Exclusive Voice Model Rights</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✅</span> @LuminaVoid (Twitter, Insta)</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✅</span> 3D Avatar Base Mesh</li>
              </ul>
              <button 
                onClick={() => handlePurchase('Lumina Void')}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-xl transition-colors transform group-hover:-translate-y-1"
              >
                Acquire Artist
              </button>
            </div>
          </div>

          {/* Artist For Sale 2 */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl group hover:border-yellow-500 transition-all cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-red-900 to-orange-900 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              <span className="text-6xl group-hover:scale-125 transition-transform duration-500">🎸</span>
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-yellow-400 border border-yellow-500/50">
                $2,500
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-1">The Rusty Cords</h3>
              <p className="text-sm text-yellow-500 font-semibold mb-4">Genre: AI Garage Rock</p>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                A gritty, 90s-inspired rock duo. Their AI model is fine-tuned on lo-fi distortion and angst. Perfect for a retro-revival label.
              </p>
              <ul className="text-xs text-gray-500 space-y-2 mb-6">
                <li className="flex items-center gap-2"><span className="text-green-500">✅</span> Exclusive Voice Model Rights</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✅</span> @RustyCordsBand (Twitter, TikTok)</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✅</span> 10 Pre-generated Covers</li>
              </ul>
              <button 
                onClick={() => handlePurchase('The Rusty Cords')}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 rounded-xl transition-colors transform group-hover:-translate-y-1"
              >
                Acquire Artist
              </button>
            </div>
          </div>

          {/* Create Custom */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden border-2 border-dashed border-gray-600 shadow-2xl flex flex-col items-center justify-center p-8 text-center hover:border-yellow-500 transition-all cursor-pointer group">
            <span className="text-5xl mb-4 group-hover:rotate-180 transition-transform duration-700">⚙️</span>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">Commission Custom Artist</h3>
            <p className="text-gray-400 text-sm mb-8">
              Work with our AI engine to generate a bespoke Virtual Artist tailored perfectly to your brand and desired genre.
            </p>
            <button className="bg-white text-black font-bold py-3 px-8 rounded-xl hover:bg-gray-200 transition-colors transform group-hover:scale-105">
              Start Commission
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}
