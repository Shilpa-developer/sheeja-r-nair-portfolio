import React from 'react';
import { ArrowDown, Compass, Mail, Sparkles, Award, GraduationCap } from 'lucide-react';
import { SHEEJA_PORTRAIT_PATH } from '../data/portfolioData';

interface HeroProps {
  onOpenInvite: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInvite }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden bg-paper-pattern">
      {/* Soft background atmospheric accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-stone-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 text-amber-800 text-[11px] font-bold tracking-[0.3em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-800" />
              <span>Meet Sheeja R Nair</span>
            </div>

            {/* Main Bold Editorial Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight font-medium text-[#1A1A1A]">
              Where language <br className="hidden sm:inline" />
              becomes a <span className="italic text-amber-800">story.</span>
            </h1>

            {/* Alternative Supporting Line */}
            <p className="text-base sm:text-lg font-serif italic text-amber-900/80 tracking-wide border-l-2 border-amber-800 pl-4 py-0.5">
              Educator &middot; Storyteller &middot; Language Trainer &middot; Teacher Mentor
            </p>

            {/* Hero Paragraph */}
            <p className="text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed max-w-2xl">
              With two decades of experience across classrooms, schools, communities and corporate spaces, Sheeja brings together the magic of storytelling to make learning meaningful, engaging, and memorable.
            </p>

            {/* Feature Highlights Pills */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-[#1A1A1A]/80">
              <span className="bg-[#EFECE6] px-3.5 py-1.5 rounded-full border border-black/5 inline-flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-amber-800" /> 20+ Years Experience
              </span>
              <span className="bg-[#EFECE6] px-3.5 py-1.5 rounded-full border border-black/5 inline-flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-800" /> Cambridge English Trainer
              </span>
              <span className="bg-[#EFECE6] px-3.5 py-1.5 rounded-full border border-black/5 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-800" /> Storytelling Pedagogy
              </span>
            </div>

            {/* CTA Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <a
                href="#about"
                className="border-b-2 border-amber-800 pb-1 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#1A1A1A] hover:text-amber-800 transition-colors inline-flex items-center gap-2"
                id="hero-explore-btn"
              >
                <span>Explore Her Journey</span>
                <Compass className="w-4 h-4 text-amber-800" />
              </a>

              <span className="opacity-20 hidden sm:inline">|</span>

              <button
                onClick={onOpenInvite}
                className="bg-amber-800 hover:bg-amber-900 text-white px-7 py-3 rounded-full text-xs sm:text-sm uppercase tracking-widest font-bold transition-all shadow-sm hover:shadow-md cursor-pointer inline-flex items-center gap-2"
                id="hero-work-btn"
              >
                <span>Work With Sheeja</span>
                <Mail className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="mt-10 pt-8 border-t border-black/10 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A] mb-1">20+</div>
                <div className="text-[10px] uppercase tracking-wider opacity-70 leading-tight">Years of Professional Experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-bold italic text-amber-800 mb-1">Global</div>
                <div className="text-[10px] uppercase tracking-wider opacity-70 leading-tight">Cambridge English Trainer</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A] mb-1">∞</div>
                <div className="text-[10px] uppercase tracking-wider opacity-70 leading-tight">Stories Shared Across Tamil Nadu</div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md">
              
              {/* Organic/Decorative Shape Background */}
              <div className="absolute -inset-4 border border-amber-800/15 rounded-full scale-105 opacity-60 pointer-events-none" />
              
              {/* Main Portrait Container */}
              <div className="relative bg-[#EFECE6] p-3 sm:p-4 rounded-3xl border border-black/10 shadow-xl overflow-hidden">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-stone-300">
                  <img
                    src={SHEEJA_PORTRAIT_PATH}
                    alt="Sheeja R Nair"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle Dark Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                  {/* Caption on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-serif text-xl font-bold tracking-wide italic">
                      Sheeja R Nair
                    </p>
                    <p className="text-xs text-stone-300 font-light tracking-wider uppercase">
                      Educator &amp; Storyteller
                    </p>
                  </div>
                </div>

                {/* Editorial Quote Stamp Below Photo */}
                <div className="mt-3 p-3 bg-[#F9F7F2] rounded-xl border border-black/5 flex items-center justify-between text-xs text-[#1A1A1A]/80">
                  <span className="font-serif italic text-[#1A1A1A]">
                    “The right story can help every learner find their voice.”
                  </span>
                  <span className="text-amber-800 font-bold tracking-wider text-[10px] uppercase ml-2 shrink-0">
                    MY BELIEF
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="pt-8 text-center flex flex-col items-center justify-center gap-1 text-[#1A1A1A]/40">
        <a href="#about" className="group inline-flex flex-col items-center gap-1 text-[11px] font-bold tracking-[0.2em] uppercase hover:text-amber-800 transition-colors">
          <span>Scroll to Discover</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-amber-800" />
        </a>
      </div>
    </section>
  );
};
