import React, { useState } from 'react';
import { BookOpen, Users, Sparkles, Palette, Mic, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { STORYTELLING_METHODS } from '../data/portfolioData';

export const StorytellerSection: React.FC = () => {
  const [activeMethodId, setActiveMethodId] = useState<string>('storytelling');

  const getMethodIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Mic': return <Mic className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const selectedMethod = STORYTELLING_METHODS.find(m => m.id === activeMethodId) || STORYTELLING_METHODS[0];

  return (
    <section id="storytelling" className="py-20 lg:py-28 bg-[#F9F7F2] relative overflow-hidden">
      
      {/* Background Decorative Accent Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-stone-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-amber-800 text-[11px] font-bold tracking-[0.3em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Art of Storytelling</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Stories are more than <span className="italic text-amber-800">stories.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed max-w-2xl mx-auto">
            For Sheeja, storytelling is not simply entertainment. It is a powerful way to develop language, confidence, imagination, communication and critical thinking.
          </p>
          <div className="w-16 h-0.5 bg-amber-800 mx-auto" />
        </div>

        {/* Storytelling Pedagogy Overview Text Box */}
        <div className="bg-[#EFECE6] p-8 rounded-3xl border border-black/10 mb-16 max-w-4xl mx-auto text-center editorial-shadow">
          <p className="text-base sm:text-lg text-[#1A1A1A]/85 leading-relaxed">
            She has designed and conducted storytelling sessions for students and teachers across different age groups and educational backgrounds, bringing together <span className="font-semibold text-[#1A1A1A]">storytelling, role play and theatre techniques</span> to make language learning active and engaging.
          </p>

          {/* Quick list of her key storytelling approaches */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
            <span className="bg-[#F9F7F2] px-3.5 py-1.5 rounded-full border border-black/5">
              • Role play
            </span>
            <span className="bg-[#F9F7F2] px-3.5 py-1.5 rounded-full border border-black/5">
              • Draw &amp; Tell
            </span>
            <span className="bg-[#F9F7F2] px-3.5 py-1.5 rounded-full border border-black/5">
              • Voice-over narration
            </span>
            <span className="bg-[#F9F7F2] px-3.5 py-1.5 rounded-full border border-black/5">
              • Interactive storytelling
            </span>
            <span className="bg-[#F9F7F2] px-3.5 py-1.5 rounded-full border border-black/5">
              • Story-based language activities
            </span>
            <span className="bg-[#F9F7F2] px-3.5 py-1.5 rounded-full border border-black/5">
              • Theatre techniques
            </span>
          </div>
        </div>

        {/* Visually Interesting Method Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {STORYTELLING_METHODS.map((method) => {
            const isSelected = activeMethodId === method.id;
            return (
              <button
                key={method.id}
                onClick={() => setActiveMethodId(method.id)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md -translate-y-1'
                    : 'bg-[#EFECE6] text-[#1A1A1A] border-black/5 hover:bg-[#F9F7F2] hover:border-amber-800/40'
                }`}
                id={`method-card-${method.id}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors ${
                  isSelected ? 'bg-amber-800 text-white' : 'bg-amber-800/10 text-amber-800'
                }`}>
                  {getMethodIcon(method.iconName)}
                </div>
                <h3 className="font-serif text-lg font-bold mb-1">
                  {method.title}
                </h3>
                <p className={`text-xs ${isSelected ? 'text-stone-300' : 'text-[#1A1A1A]/70'}`}>
                  {method.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Method Details Panel */}
        <div className="bg-[#EFECE6] p-8 sm:p-10 rounded-3xl border border-black/10 editorial-shadow mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-bold tracking-[0.2em] text-amber-800 uppercase">
                FEATURED METHODOLOGY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                {selectedMethod.title}
              </h3>
              <p className="text-base text-[#1A1A1A]/80 leading-relaxed">
                {selectedMethod.description}
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#F9F7F2] p-6 rounded-2xl border border-black/10 space-y-3">
              <h4 className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-[0.2em] mb-4 border-b border-black/10 pb-2">
                Key Learning Outcomes
              </h4>
              {selectedMethod.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1A1A1A]">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Statement / Quote Section */}
        <div className="relative max-w-4xl mx-auto rounded-3xl bg-[#1A1A1A] p-10 sm:p-14 text-center text-white shadow-xl overflow-hidden">
          
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-800/20 rounded-full blur-3xl pointer-events-none" />

          <MessageSquareQuote className="w-12 h-12 text-amber-800 mx-auto mb-6 opacity-90" />
          
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-relaxed text-stone-100 max-w-3xl mx-auto italic">
            “Every learner has a story. The right story can help them find their voice.”
          </blockquote>

          <div className="mt-8 pt-6 border-t border-stone-800 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-amber-800" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">
              Sheeja R Nair &middot; Teaching Philosophy
            </span>
            <span className="w-8 h-px bg-amber-800" />
          </div>

        </div>

      </div>
    </section>
  );
};
