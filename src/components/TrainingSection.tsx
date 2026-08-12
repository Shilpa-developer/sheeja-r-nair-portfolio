import React, { useState } from 'react';
import { BookOpen, GraduationCap, MessageSquare, Briefcase, Award, Check, Sparkles, Send } from 'lucide-react';
import { TRAINING_PROGRAMS } from '../data/portfolioData';

interface TrainingSectionProps {
  onOpenInvite: () => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({ onOpenInvite }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredPrograms = filter === 'all'
    ? TRAINING_PROGRAMS
    : TRAINING_PROGRAMS.filter(p => p.category === filter);

  const getCardIcon = (id: string) => {
    switch (id) {
      case 'students': return <BookOpen className="w-5 h-5 text-amber-800" />;
      case 'teachers': return <GraduationCap className="w-5 h-5 text-amber-800" />;
      case 'language': return <MessageSquare className="w-5 h-5 text-amber-800" />;
      case 'corporate': return <Briefcase className="w-5 h-5 text-amber-800" />;
      default: return <BookOpen className="w-5 h-5 text-amber-800" />;
    }
  };

  return (
    <section id="training" className="py-20 lg:py-28 bg-[#EFECE6] relative border-y border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-amber-800 text-[11px] font-bold tracking-[0.3em] uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>What She Does</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Learning spaces she brings to <span className="italic text-amber-800">life.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed max-w-2xl mx-auto">
            Custom-designed educational, language, and communication programmes tailored for diverse learning groups and institutions.
          </p>
          <div className="w-16 h-0.5 bg-amber-800 mx-auto" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#1A1A1A] text-white shadow-xs'
                : 'bg-[#F9F7F2] text-[#1A1A1A]/70 border border-black/10 hover:bg-[#EFECE6]'
            }`}
          >
            All Programmes
          </button>
          <button
            onClick={() => setFilter('students')}
            className={`px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all cursor-pointer ${
              filter === 'students'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'bg-[#F9F7F2] text-[#1A1A1A]/70 border border-black/10 hover:bg-[#EFECE6]'
            }`}
          >
            For Students
          </button>
          <button
            onClick={() => setFilter('teachers')}
            className={`px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all cursor-pointer ${
              filter === 'teachers'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'bg-[#F9F7F2] text-[#1A1A1A]/70 border border-black/10 hover:bg-[#EFECE6]'
            }`}
          >
            Teacher Training
          </button>
          <button
            onClick={() => setFilter('language')}
            className={`px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all cursor-pointer ${
              filter === 'language'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'bg-[#F9F7F2] text-[#1A1A1A]/70 border border-black/10 hover:bg-[#EFECE6]'
            }`}
          >
            Language Fluency
          </button>
          <button
            onClick={() => setFilter('corporate')}
            className={`px-4 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all cursor-pointer ${
              filter === 'corporate'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'bg-[#F9F7F2] text-[#1A1A1A]/70 border border-black/10 hover:bg-[#EFECE6]'
            }`}
          >
            Corporate
          </button>
        </div>

        {/* Main Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-[#F9F7F2] p-8 rounded-3xl border border-black/10 editorial-shadow-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-800/10 flex items-center justify-center">
                    {getCardIcon(program.id)}
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-[#EFECE6] text-[#1A1A1A]/80 px-3 py-1 rounded-full border border-black/5">
                    {program.audience}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-1">
                  {program.title}
                </h3>
                <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-4">
                  {program.subtitle}
                </p>

                <p className="text-sm text-[#1A1A1A]/80 leading-relaxed mb-6">
                  {program.description}
                </p>

                <div className="space-y-2 mb-6">
                  {program.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1A1A1A]/80">
                      <Check className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenInvite}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#EFECE6] hover:bg-amber-800 text-[#1A1A1A] hover:text-white text-xs font-bold uppercase tracking-widest py-3 rounded-full border border-black/5 transition-all duration-200 group cursor-pointer"
              >
                <span>Request Session Info</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Featured Cambridge English Training Highlight Card */}
        <div className="relative rounded-3xl bg-[#1A1A1A] p-8 sm:p-12 text-white shadow-xl overflow-hidden border border-black/10">
          
          {/* Subtle Graphic Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-800/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-800/20 border border-amber-800/40 text-amber-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                <Award className="w-4 h-4 text-amber-400" />
                <span>CAMBRIDGE ENGLISH CERTIFICATION</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                CAMBRIDGE ENGLISH TRAINING
              </h3>

              <p className="font-serif italic text-lg text-amber-200">
                “Cambridge English trainer for PET, B1, B2 and C1 learners.”
              </p>

              <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
                She has extensive experience helping learners develop their language skills through structured and engaging learning methods, guiding candidates systematically toward Cambridge international qualification standards.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="bg-stone-900/90 p-6 rounded-2xl border border-stone-800 w-full space-y-3">
                <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" /> Exam Target Levels
                </div>
                <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold">
                  <div className="bg-stone-800 p-2.5 rounded-lg border border-stone-700 text-stone-200">
                    PET (Preliminary)
                  </div>
                  <div className="bg-stone-800 p-2.5 rounded-lg border border-stone-700 text-stone-200">
                    B1 Threshold
                  </div>
                  <div className="bg-stone-800 p-2.5 rounded-lg border border-stone-700 text-stone-200">
                    B2 Vantage
                  </div>
                  <div className="bg-stone-800 p-2.5 rounded-lg border border-stone-700 text-stone-200">
                    C1 Advanced
                  </div>
                </div>
                <button
                  onClick={onOpenInvite}
                  className="w-full mt-2 bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold uppercase tracking-widest py-3 rounded-full transition-all text-center cursor-pointer"
                >
                  Inquire Cambridge Prep
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
