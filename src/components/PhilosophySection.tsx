import React from 'react';
import { Sparkles, Quote, Ear, Zap, Lightbulb, UserCheck } from 'lucide-react';
import { PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  const getPrincipleIcon = (word: string) => {
    switch (word) {
      case 'LISTEN': return <Ear className="w-5 h-5 text-amber-800" />;
      case 'ENGAGE': return <Zap className="w-5 h-5 text-amber-800" />;
      case 'IMAGINE': return <Lightbulb className="w-5 h-5 text-amber-800" />;
      case 'EMPOWER': return <UserCheck className="w-5 h-5 text-amber-800" />;
      default: return <Sparkles className="w-5 h-5 text-amber-800" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F9F7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Belief Feature Block */}
        <div className="bg-[#EFECE6] rounded-3xl p-8 sm:p-14 border border-black/10 editorial-shadow mb-16 relative">
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-amber-800 text-[11px] font-bold tracking-[0.3em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Teaching Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
              My belief
            </h2>

            <div className="relative py-4">
              <Quote className="w-10 h-10 text-amber-800/20 mx-auto mb-2" />
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#1A1A1A] leading-tight italic">
                “I believe learning should feel inviting. It should make people curious enough to participate, comfortable enough to make mistakes and confident enough to find their own voice.”
              </p>
            </div>

            <div className="w-16 h-0.5 bg-amber-800 mx-auto my-6" />

            <p className="text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed max-w-3xl mx-auto">
              I believe in creating enjoyable, dynamic and inclusive learning environments. My teaching approach combines structured language development with creativity, storytelling, role play and practical communication.
            </p>
          </div>

        </div>

        {/* 4 Core Principles Cards */}
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
            My Core Approach
          </h3>
          <p className="text-[10px] font-bold text-[#1A1A1A]/60 uppercase tracking-[0.2em] mt-1">
            4 Guiding Pillars of Learning
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHILOSOPHY_PRINCIPLES.map((principle) => (
            <div
              key={principle.id}
              className="bg-[#EFECE6] p-6 rounded-2xl border border-black/10 editorial-shadow-hover transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#F9F7F2] border border-black/5 flex items-center justify-center">
                {getPrincipleIcon(principle.word)}
              </div>

              <span className="block font-serif text-2xl font-bold text-[#1A1A1A] tracking-wider">
                {principle.word}
              </span>

              <span className="block text-[11px] font-bold uppercase tracking-widest text-amber-800">
                {principle.meaning}
              </span>

              <p className="text-xs text-[#1A1A1A]/80 leading-relaxed pt-1 border-t border-black/10">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
