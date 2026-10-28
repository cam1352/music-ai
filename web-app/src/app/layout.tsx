import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/context/AudioContext";
import GlobalAudioPlayer from "@/components/GlobalAudioPlayer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ULTRASOUND RECORDS | Autonomous AI 432 Hz Sound & Record Label",
  description: "Next-generation autonomous record label & studio specializing in verified A4=432 Hz music, virtual artists, automated YouTube 4K distribution, and royalty governance.",
  keywords: ["Ultrasound Records", "432 Hz record label", "autonomous label", "AI music distribution", "singing bowls", "Gregorian chanting"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} dark`}>
      <body className="bg-[#07090D] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB] relative overflow-x-hidden">
        {/* Dynamic Glowing Aurora Background Effect */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <AudioProvider>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 pb-20">
              {children}
            </div>
            <Footer />
            <GlobalAudioPlayer />
          </div>
        </AudioProvider>
      </body>
    </html>
  );
}
