import React from 'react';
import { Globe, ShieldCheck, Heart, Users2, Building, GraduationCap, Sparkles } from 'lucide-react';

export const ResourceAndCommunity: React.FC = () => {
  return (
    <section id="community" className="py-20 lg:py-28 bg-[#EFECE6] relative border-y border-black/10 overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Part 1: Resource Person Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 text-amber-800 text-[11px] font-bold tracking-[0.3em] uppercase">
              <Globe className="w-3.5 h-3.5" />
              <span>Collaborative Engagements</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
              From classrooms to <span className="italic text-amber-800">communities.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed max-w-3xl mx-auto">
              Today, Sheeja works as a resource person, collaborating with different schools and learning communities. Her work extends beyond traditional classrooms — supporting teachers, engaging students, conducting language programmes and creating learning experiences that encourage confidence and communication.
            </p>
            <div className="w-16 h-0.5 bg-amber-800 mx-auto" />
          </div>

          {/* Visual Map / Node Network Layout */}
          <div className="bg-[#F9F7F2] p-8 sm:p-12 rounded-3xl border border-black/10 editorial-shadow max-w-5xl mx-auto text-center">
            <span className="text-[10px] font-bold text-[#1A1A1A]/60 uppercase tracking-[0.2em] block mb-6">
              REACH &amp; COLLABORATION ECOSYSTEM
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4 rounded-2xl bg-[#EFECE6] border border-black/5 hover:border-amber-800 transition-colors flex flex-col items-center gap-2">
                <GraduationCap className="w-6 h-6 text-amber-800" />
                <span className="font-serif text-sm font-bold text-[#1A1A1A]">Schools</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#EFECE6] border border-black/5 hover:border-amber-800 transition-colors flex flex-col items-center gap-2">
                <Users2 className="w-6 h-6 text-amber-800" />
                <span className="font-serif text-sm font-bold text-[#1A1A1A]">Teachers</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#EFECE6] border border-black/5 hover:border-amber-800 transition-colors flex flex-col items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-800" />
                <span className="font-serif text-sm font-bold text-[#1A1A1A]">Students</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#EFECE6] border border-black/5 hover:border-amber-800 transition-colors flex flex-col items-center gap-2">
                <Users2 className="w-6 h-6 text-amber-800" />
                <span className="font-serif text-sm font-bold text-[#1A1A1A]">Adults</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#EFECE6] border border-black/5 hover:border-amber-800 transition-colors flex flex-col items-center gap-2">
                <Heart className="w-6 h-6 text-amber-800" />
                <span className="font-serif text-sm font-bold text-[#1A1A1A]">Communities</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#EFECE6] border border-black/5 hover:border-amber-800 transition-colors flex flex-col items-center gap-2">
                <Building className="w-6 h-6 text-[#1A1A1A]" />
                <span className="font-serif text-sm font-bold text-[#1A1A1A]">Corporates</span>
              </div>
            </div>

            <p className="mt-8 text-xs text-[#1A1A1A]/60 italic">
              Connecting educational frameworks across regional cities in and around Tamil Nadu.
            </p>
          </div>
        </div>

        {/* Part 2: Community Reach Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 text-amber-800 text-[11px] font-bold tracking-[0.3em] uppercase">
              <Heart className="w-3.5 h-3.5" />
              <span>Social Impact &amp; Advocacy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
              Learning that reaches beyond the <span className="italic text-amber-800">classroom.</span>
            </h2>
            <div className="w-16 h-0.5 bg-amber-800 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Community Card 1 */}
            <div className="bg-[#F9F7F2] p-8 rounded-3xl border border-black/10 editorial-shadow-hover space-y-4">
              <div className="w-12 h-12 rounded-full bg-amber-800/10 flex items-center justify-center text-amber-800">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                Government School Educators
              </h3>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Conducted training sessions for Government school teachers and young adults to improve conversational English and modern classroom interaction techniques.
              </p>
            </div>

            {/* Community Card 2 */}
            <div className="bg-[#F9F7F2] p-8 rounded-3xl border border-black/10 editorial-shadow-hover space-y-4">
              <div className="w-12 h-12 rounded-full bg-amber-800/10 flex items-center justify-center text-amber-800">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                Local Community Initiatives
              </h3>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Reached out to local communities through awareness initiatives, social campaigns and community projects that cultivate social literacy and confidence.
              </p>
            </div>

            {/* Community Card 3 */}
            <div className="bg-[#F9F7F2] p-8 rounded-3xl border border-black/10 editorial-shadow-hover space-y-4">
              <div className="w-12 h-12 rounded-full bg-amber-800/10 flex items-center justify-center text-amber-800">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                Child Safety &amp; Awareness
              </h3>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                Created educational sessions around child safety, including good touch, bad touch and bullying awareness for primary school groups in a sensitive, supportive environment.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
