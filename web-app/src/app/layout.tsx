import type { Metadata } from "next";
import "./globals.css";
import { AudioProvider } from "@/context/AudioContext";
import GlobalAudioPlayer from "@/components/GlobalAudioPlayer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ULTRASOUND RECORDS | The Autonomous 432 Hz Sound & Record Label",
  description: "Premier AI-powered autonomous record label and acoustic studio. Calibrated to verified A4=432 Hz Verdi tuning, featuring virtual artists, algorithmic masters, and automated 4K YouTube distribution.",
  keywords: ["Ultrasound Records", "ultrasoundlabel.com", "432 Hz record label", "autonomous music studio", "AI music distribution", "singing bowls 432Hz"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#05070B] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB] relative overflow-x-hidden antialiased">
        
        {/* Dynamic Multi-layered Ambient Light & Grid System */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Top Gold Horizon Glow */}
          <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#D4AF37]/18 via-purple-600/12 to-transparent rounded-[100%] blur-[160px] animate-glow" />
          
          {/* Left Violet Ambient Orb */}
          <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-purple-700/12 rounded-full blur-[180px] animate-float" />
          
          {/* Right Cyan Ambient Accent */}
          <div className="absolute top-1/2 -right-48 w-[650px] h-[650px] bg-cyan-600/10 rounded-full blur-[190px]" />
          
          {/* Bottom Deep Amber Grounding Glow */}
          <div className="absolute -bottom-48 left-1/3 w-[800px] h-[500px] bg-amber-600/10 rounded-full blur-[200px]" />

          {/* Precision Cybernetic Acoustic Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_15%,#000_65%,transparent_100%)] opacity-70" />
        </div>

        <AudioProvider>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 pb-24">
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
