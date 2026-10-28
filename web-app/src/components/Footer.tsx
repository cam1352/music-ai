import Link from 'next/link';
import { ShieldCheck, Sparkles, BookOpen, Radio, Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#05070A] border-t border-[#D4AF37]/20 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 pb-28 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#8C6D23] flex items-center justify-center text-black font-serif font-black text-sm shadow-md shadow-[#D4AF37]/20">
              US
            </div>
            <span className="font-serif text-lg font-black text-white tracking-wider">
              ULTRASOUND RECORDS
            </span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Autonomous AI Record Label & 432 Hz Sound Studio. Automating YouTube 4K distribution, virtual artist management, and lossless 24-bit audio mastering.
          </p>
          <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% Mathematically Verified 432 Hz Tuning
          </div>
        </div>

        {/* Record Label Operations */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
            Record Label Operations
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/label" className="hover:text-white transition-colors flex items-center gap-1.5"><Video className="w-3 h-3 text-red-400" /> YouTube 4K Pipeline</Link></li>
            <li><Link href="/marketplace" className="hover:text-white transition-colors">Virtual Artist Marketplace</Link></li>
            <li><Link href="/admin" className="hover:text-white transition-colors">Studio Synthesis Engine</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">Label Pro SaaS & Royalties</Link></li>
          </ul>
        </div>

        {/* Music Catalogue */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-3">
            Music Catalogue
          </h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/singing-bowls" className="hover:text-white transition-colors">Singing Bowls & Bells</Link></li>
            <li><Link href="/chanting" className="hover:text-white transition-colors">Gregorian & Vocal Drones</Link></li>
            <li><Link href="/sleep" className="hover:text-white transition-colors">Delta Sleep Journeys</Link></li>
            <li><Link href="/432hz" className="hover:text-white transition-colors">A/B 432 Hz vs 440 Hz Test</Link></li>
            <li><Link href="/science" className="hover:text-white transition-colors">Science & Transparency</Link></li>
          </ul>
        </div>

        {/* Scientific Ethics Notice */}
        <div className="bg-[#0A0D12] p-4 rounded-xl border border-white/5 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37]">
            <BookOpen className="w-3.5 h-3.5" />
            Evidence-Based Transparency
          </div>
          <p className="text-[11px] text-gray-400 leading-normal">
            Ultrasound Records distinguishes psychoacoustic 432 Hz relaxation from clinical medical ultrasound. We adhere strictly to ethical guidelines and human-in-the-loop review.
          </p>
          <div className="text-[10px] text-gray-500 pt-2 border-t border-white/5">
            © {new Date().getFullYear()} Ultrasound Records LLC. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
