'use client';

import React, { useState } from 'react';
import {
  HelpCircle,
  ShieldCheck,
  ShieldAlert,
  Mail,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react';

const FAQS = [
  {
    q: "What is the difference between music tuned to 432 Hz and a 432 Hz pure tone?",
    a: "A 432 Hz pure tone is a single continuous sine frequency (the pitch of the note A4). Music tuned to A4 = 432 Hz means every note across all octaves and musical scales is calibrated proportionally to that reference. In equal temperament, this corresponds to shifting every note down by exactly 31.766 cents (pitch ratio of 432/440 ≈ 0.981818)."
  },
  {
    q: "Does 432 Hz music cure medical conditions, infections, or cancer?",
    a: "No. Claims that acoustic audio files cure physical diseases or repair DNA are scientifically unfounded and dangerous. Legitimate peer-reviewed studies (such as Calamassi & Pomponi 2019) show that 432 Hz music can promote subjective relaxation, reduce acute anxiety, and slightly slow heart rate. It is a supportive wellness modality, not a medical treatment."
  },
  {
    q: "How do you verify that a track is genuinely tuned to 432 Hz?",
    a: "We do not guess. Our studio utilizes automated Constant-Q Transform (CQT) and Fast Fourier Transform (FFT) algorithms via librosa and scipy. Every track is spectrally analyzed to calculate its fundamental pitch relative to standard A440, ensuring verified -31.8 cent calibration before mastering."
  },
  {
    q: "Can I use Soma Resonance tracks for my yoga studio or breathwork classes?",
    a: "Yes! Subscribers on our Sanctuary Pro and Master Patron tiers receive royalty-cleared commercial performance licenses for background ambience in public yoga classes, meditation groups, and wellness clinics."
  },
  {
    q: "What formats are provided for download?",
    a: "All master recordings are available as 24-bit 44.1kHz / 96kHz lossless uncompressed WAV and FLAC files, ensuring no MP3 compression artifacts compromise acoustic harmonic overtones."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [formSent, setFormSent] = useState(false);

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-mono">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>TRANSPARENCY & INQUIRIES</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
          Clear, evidence-grounded answers regarding acoustic tuning, medical boundaries, licensing, and audio formats.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {FAQS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-[#10141A] rounded-2xl border border-white/5 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-white hover:text-[#D4AF37] transition-colors"
              >
                <span>{item.q}</span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-[#D4AF37] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
                )}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Contact Form Card */}
      <div className="bg-[#11171E] rounded-3xl p-8 border border-[#D4AF37]/30 shadow-2xl space-y-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#D4AF37]" />
            Direct Studio Inquiry
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Have a question about custom 432 Hz composition, research collaboration, or bulk institutional licenses?
          </p>
        </div>

        {formSent ? (
          <div className="bg-emerald-950/40 border border-emerald-500/40 p-4 rounded-xl text-emerald-300 text-xs font-mono">
            Thank you! Your message has been received by our sound engineering team. We typically respond within 24 business hours.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setFormSent(true);
            }}
            className="space-y-4 text-xs"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 mb-1">Your Name</label>
                <input
                  required
                  type="text"
                  placeholder="Dr. Eleanor Vance"
                  className="w-full bg-[#0A0D11] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="eleanor@sanctuarysound.org"
                  className="w-full bg-[#0A0D11] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-1">Inquiry / Question</label>
              <textarea
                required
                rows={4}
                placeholder="Inquire about clinical audio studies, custom singing bowl master recordings, or licensing..."
                className="w-full bg-[#0A0D11] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#c49f30] text-black font-semibold text-xs shadow-lg shadow-[#D4AF37]/20 transition-all"
            >
              Send Studio Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
