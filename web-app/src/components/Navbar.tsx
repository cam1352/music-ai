'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  Music,
  Waves,
  Sparkles,
  BookOpen,
  DollarSign,
  User,
  Sliders,
  Menu,
  X,
  Disc,
  Radio,
  Video,
  Tv
} from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home', icon: Compass },
  { href: '/label', label: 'Record Label', icon: Radio },
  { href: '/listen', label: 'Catalogue', icon: Music },
  { href: '/432hz', label: '432 Hz Tuning', icon: Disc },
  { href: '/singing-bowls', label: 'Singing Bowls', icon: Waves },
  { href: '/chanting', label: 'Gregorian', icon: Sparkles },
  { href: '/sleep', label: 'Sleep Music', icon: Waves },
  { href: '/marketplace', label: 'Marketplace', icon: DollarSign },
  { href: '/science', label: 'Science', icon: BookOpen },
  { href: '/pricing', label: 'Pricing', icon: DollarSign },
  { href: '/dashboard', label: 'Dashboard', icon: User },
  { href: '/admin', label: 'Studio Engine', icon: Sliders },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-[#07090D]/85 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo - ULTRASOUND RECORDS */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#8C6D23] flex items-center justify-center text-black font-extrabold shadow-lg shadow-[#D4AF37]/30 group-hover:scale-105 transition-transform">
              <span className="font-serif text-xl tracking-tighter">US</span>
            </div>
            <div>
              <span className="text-xl font-serif font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-[#D4AF37]">
                ULTRASOUND
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] font-mono">
                RECORDS & 432 HZ STUDIOS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {NAV_LINKS.slice(0, 8).map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 shadow-sm'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 opacity-80" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              href="/label"
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/30 flex items-center gap-1.5 transition-colors"
            >
              <Video className="w-3.5 h-3.5 text-red-400" />
              YouTube Release Pipeline
            </Link>
            <Link
              href="/admin"
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B38F2C] text-black hover:opacity-90 shadow-md shadow-[#D4AF37]/25 transition-all flex items-center gap-1.5"
            >
              <Sliders className="w-3.5 h-3.5" />
              Studio Engine
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-[#07090D] border-b border-[#D4AF37]/20 px-4 pt-2 pb-6 space-y-1">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
