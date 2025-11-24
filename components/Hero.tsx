import React, { useEffect, useState } from 'react';
import { generatePhilosophyTopic } from '../services/geminiService';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartReading: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartReading }) => {
  const [suggestion, setSuggestion] = useState<{title: string, summary: string} | null>(null);

  useEffect(() => {
    const fetchIdea = async () => {
        const text = await generatePhilosophyTopic();
        const [title, summary] = text.split('|');
        setSuggestion({ 
            title: title?.trim() || "Bilinmeyen Gerçek", 
            summary: summary?.trim() || "Düşüncenin sınırlarında gezinin." 
        });
    };
    fetchIdea();
  }, []);

  return (
    <div className="relative overflow-hidden bg-paper">
      <div className="absolute inset-0 z-0 opacity-5">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-stone-100 text-amber-700 text-xs font-bold tracking-widest uppercase mb-6 border border-stone-200">
            Düşüncenin Evi
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-ink mb-8 leading-tight">
            Sorgulanmamış hayat,<br/>
            <span className="text-stone-500 italic">yaşanmaya değmez.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-stone-600 font-light leading-relaxed">
            Felsefenin derin sularına dalın. Antik bilgelikten modern ikilemlere, zihninizi genişletecek makaleler ve yapay zeka destekli tartışmalar.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onStartReading}
              className="px-8 py-4 rounded-lg bg-ink text-white font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Okumaya Başla</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 rounded-lg bg-white border border-stone-200 text-stone-700 font-medium hover:bg-stone-50 transition-all flex items-center justify-center space-x-2">
              <span>Hakkımızda</span>
            </button>
          </div>

          {suggestion && (
            <div className="mt-16 animate-fade-in-up">
              <p className="text-sm text-stone-400 mb-2 flex items-center justify-center gap-1">
                 <Sparkles className="w-3 h-3 text-amber-500" />
                 <span>Günün Düşünce Tohumu</span>
              </p>
              <div className="inline-block bg-white p-6 rounded-xl border border-stone-100 shadow-sm max-w-lg">
                <h3 className="font-serif font-bold text-lg text-ink mb-1">{suggestion.title}</h3>
                <p className="text-stone-500 text-sm">{suggestion.summary}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
