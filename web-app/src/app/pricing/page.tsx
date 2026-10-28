'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  ShieldCheck,
  Sparkles,
  Zap,
  Download,
  CreditCard,
  Lock
} from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [isProcessing, setIsProcessing] = useState<string | null>(null);
  const [successPlan, setSuccessPlan] = useState<string | null>(null);

  const handleCheckout = (planId: string) => {
    setIsProcessing(planId);
    // Simulates Stripe Checkout session creation / webhook handler
    setTimeout(() => {
      setIsProcessing(null);
      setSuccessPlan(planId);
      if (typeof window !== 'undefined') {
        localStorage.setItem('soma_432_membership', planId);
      }
    }, 1800);
  };

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TRANSPARENT MEMBERSHIP & OWNERSHIP</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
          Sovereign Audio Studio Plans
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Support ongoing acoustic research and master recording creation. Access high-fidelity 432 Hz streaming and uncompressed 24-bit studio master downloads.
        </p>

        {/* Billing Switcher */}
        <div className="inline-flex items-center bg-[#10141B] p-1.5 rounded-xl border border-white/10 mt-6">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
              billingCycle === 'monthly'
                ? 'bg-[#D4AF37] text-black font-semibold shadow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              billingCycle === 'annual'
                ? 'bg-[#D4AF37] text-black font-semibold shadow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span>Annual Billing</span>
            <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-1.5 py-0.5 rounded font-mono">
              Save 25%
            </span>
          </button>
        </div>
      </div>

      {/* Success Notification Modal */}
      {successPlan && (
        <div className="bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-2xl flex items-center justify-between text-emerald-300 text-xs font-mono animate-fade-in">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Active Subscription: <strong>{successPlan.toUpperCase()}</strong>. Unlocked lossless master downloads!</span>
          </div>
          <Link href="/dashboard" className="underline hover:text-white">
            Go to Member Dashboard &rarr;
          </Link>
        </div>
      )}

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Tier 1: Free Practitioner */}
        <div className="bg-[#10141A] rounded-3xl p-8 border border-white/5 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-1">
              Practitioner Free
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Begin exploring verified 432 Hz music with standard audio streaming.
            </p>
            <div className="text-3xl font-serif font-bold text-white mb-6">
              $0 <span className="text-xs font-sans text-gray-500 font-normal">/ forever</span>
            </div>

            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Standard 320kbps streaming
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Access to core 432 Hz catalog
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Web Audio live FFT spectrum visualizer
              </li>
              <li className="flex items-center gap-2.5 text-gray-500">
                <Lock className="w-4 h-4 shrink-0 text-gray-600" />
                Lossless FLAC/WAV downloads
              </li>
            </ul>
          </div>

          <Link
            href="/listen"
            className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs text-center border border-white/10 transition-colors"
          >
            Start Listening Free
          </Link>
        </div>

        {/* Tier 2: Studio Member (Featured) */}
        <div className="bg-[#11171E] rounded-3xl p-8 border-2 border-[#D4AF37] relative flex flex-col justify-between space-y-6 shadow-2xl shadow-[#D4AF37]/10">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full shadow-md">
            RECOMMENDED FOR PRACTITIONERS
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-1">
              Sanctuary Pro
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Full uncompressed catalog access, continuous 60-min journeys, and offline use.
            </p>
            <div className="text-4xl font-serif font-bold text-[#D4AF37] mb-6">
              {billingCycle === 'annual' ? '$89' : '$9.99'}{' '}
              <span className="text-xs font-sans text-gray-400 font-normal">
                {billingCycle === 'annual' ? '/ year' : '/ month'}
              </span>
            </div>

            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                Unlimited 24-bit 96kHz Lossless FLAC/WAV
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                Continuous 60-minute loopable sleep journeys
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                Studio Engine AI generator credits (50/mo)
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                Commercial rights for yoga & breathwork classes
              </li>
            </ul>
          </div>

          <button
            onClick={() => handleCheckout('sanctuary-pro')}
            disabled={isProcessing === 'sanctuary-pro'}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C49F30] hover:opacity-95 text-black font-semibold text-xs shadow-lg shadow-[#D4AF37]/20 transition-all flex items-center justify-center gap-2"
          >
            {isProcessing === 'sanctuary-pro' ? (
              <span className="animate-pulse">Connecting to Stripe...</span>
            ) : (
              <>
                <CreditCard className="w-4 h-4" />
                Start 7-Day Free Trial
              </>
            )}
          </button>
        </div>

        {/* Tier 3: Lifetime Master Patron */}
        <div className="bg-[#10141A] rounded-3xl p-8 border border-white/5 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-1">
              Master Patron
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              One-time investment. Lifetime access to all current and future 432 Hz master archives.
            </p>
            <div className="text-3xl font-serif font-bold text-white mb-6">
              $299 <span className="text-xs font-sans text-gray-500 font-normal">/ lifetime</span>
            </div>

            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Lifetime master catalog ownership
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Unlimited Studio Engine AI procedural generations
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                All stem separation & raw multi-tracks
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                Direct priority access to new research releases
              </li>
            </ul>
          </div>

          <button
            onClick={() => handleCheckout('master-patron')}
            disabled={isProcessing === 'master-patron'}
            className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs border border-white/15 transition-colors flex items-center justify-center gap-2"
          >
            {isProcessing === 'master-patron' ? (
              <span className="animate-pulse">Connecting to Stripe...</span>
            ) : (
              'Acquire Lifetime Access'
            )}
          </button>
        </div>

      </div>
    </main>
  );
}
