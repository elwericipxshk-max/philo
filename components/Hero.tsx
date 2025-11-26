import React, { useEffect, useState } from 'react';
import { generatePhilosophyTopic } from '../services/geminiService';
import { ArrowRight, Sparkles, PlayCircle } from 'lucide-react';

interface HeroProps {
  onStartReading: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartReading }) => {
  const [suggestion, setSuggestion] = useState<{title: string, summary: string} | null>(null);

  useEffect(() => {
    const fetchIdea = async () => {
        setSuggestion({ 
            title: "Simülasyon ve Gerçeklik", 
            summary: "Gördüklerin sadece zihninin bir yansıması mı?" 
        });
        try {
          const text = await generatePhilosophyTopic();
          const [title, summary] = text.split('|');
          if (title && summary) setSuggestion({ title: title.trim(), summary: summary.trim() });
        } catch (e) {}
    };
    fetchIdea();
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center justify-center pt-20">
      
      {/* Video Arka Plan */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Karartma biraz azaltıldı (40%) */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* ALT GEÇİŞ: Siyah değil, PAPER rengine (krem) geçiş */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-paper to-transparent z-10"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-20 w-full text-center">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/20 text-white text-sm font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md border border-white/30">
              <Sparkles className="w-4 h-4" />
              Dijital Agora
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-xl animate-fade-in-up">
            Kaosun içindeki<br/>
            <span className="italic text-amber-200">düzeni keşfet.</span>
          </h1>
          
          <div className="mt-12 flex justify-center gap-6 animate-fade-in-up">
            <button onClick={onStartReading} className="px-10 py-5 rounded-full bg-amber-600 text-white text-lg font-bold hover:bg-amber-500 transition-all flex items-center gap-3 shadow-xl hover:scale-105 transform duration-300">
              <span>Yolculuğa Başla</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
      </div>
    </div>
  );
};
