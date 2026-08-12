import React from 'react';
import { BookOpen, Users, Building2, Quote, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#EFECE6] relative border-y border-black/10 overflow-hidden">
      
      {/* Decorative subtle ambient motif */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-amber-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-amber-800 text-[11px] font-bold tracking-[0.3em] uppercase">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Her Purpose &amp; Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            More than a teacher, a <span className="italic text-amber-800">storyteller.</span>
          </h2>
          <div className="w-16 h-0.5 bg-amber-800 mx-auto" />
        </div>

        {/* Grid: Story Narrative & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Prose Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#1A1A1A]/85 text-base sm:text-lg leading-relaxed">
            
            <p className="first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-amber-800 first-letter:mr-3 first-letter:float-left">
              Sheeja R Nair is a dedicated educator, storyteller and English language trainer with around 20 years of experience working with learners across different ages and backgrounds.
            </p>

            <p className="bg-[#F9F7F2] p-5 rounded-xl border-l-4 border-amber-800">
              Her journey has taken her from classrooms to teacher-training programmes, storytelling sessions, Cambridge English preparation, community initiatives and corporate training spaces.
            </p>

            <p>
              She has worked with school students, teachers, young adults and working professionals, adapting her approach to meet the needs of every learner.
            </p>

            <div className="relative p-6 rounded-2xl bg-[#F9F7F2] border border-black/10 shadow-xs my-6">
              <Quote className="w-8 h-8 text-amber-800/20 absolute top-4 left-4" />
              <p className="font-serif text-lg sm:text-xl text-[#1A1A1A] font-medium leading-relaxed italic relative z-10 pl-4">
                “At the heart of her work is a simple belief: when people connect with a language through stories, experiences and conversation, learning becomes something they remember.”
              </p>
            </div>

          </div>

          {/* Visual Statistics Column */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Stat Card 1 */}
            <div className="bg-[#F9F7F2] p-6 rounded-2xl border border-black/10 editorial-shadow-hover transition-all flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-amber-800/10 flex items-center justify-center text-amber-800 shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
                  20+
                </span>
                <p className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mt-0.5">
                  Years of experience
                </p>
                <p className="text-xs text-[#1A1A1A]/70 mt-1">
                  Dedicated to language acquisition, storytelling pedagogy, and educator development.
                </p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-[#F9F7F2] p-6 rounded-2xl border border-black/10 editorial-shadow-hover transition-all flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-amber-800/10 flex items-center justify-center text-amber-800 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-[#1A1A1A] block italic">
                  Students &middot; Teachers &middot; Adults
                </span>
                <p className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mt-0.5">
                  Learners across age groups
                </p>
                <p className="text-xs text-[#1A1A1A]/70 mt-1">
                  Customizing learning environments for early learners, government educators, and working adults.
                </p>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-[#F9F7F2] p-6 rounded-2xl border border-black/10 editorial-shadow-hover transition-all flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-amber-800/10 flex items-center justify-center text-amber-800 shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-[#1A1A1A] block italic">
                  Schools &middot; Communities &middot; Corporates
                </span>
                <p className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mt-0.5">
                  Learning beyond the classroom
                </p>
                <p className="text-xs text-[#1A1A1A]/70 mt-1">
                  Bringing storytelling and language fluency into varied institutional and social spaces.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
