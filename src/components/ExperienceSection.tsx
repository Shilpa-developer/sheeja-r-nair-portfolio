import React from 'react';
import { Clock, Compass } from 'lucide-react';
import { TIMELINE_ITEMS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F9F7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-amber-800 text-[11px] font-bold tracking-[0.3em] uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Milestones &amp; Pedagogy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            A journey shaped by people and <span className="italic text-amber-800">stories.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed max-w-2xl mx-auto">
            Two decades of dedication across classrooms, regional teacher workshops, community outreach, and corporate spaces.
          </p>
          <div className="w-16 h-0.5 bg-amber-800 mx-auto" />
        </div>

        {/* Editorial Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-black/10 -translate-x-1/2" />

          <div className="space-y-10 sm:space-y-12">
            {TIMELINE_ITEMS.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Center Node Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#EFECE6] border-2 border-amber-800 flex items-center justify-center z-10 shadow-xs">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-800" />
                  </div>

                  {/* Content Box */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${
                    isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                  }`}>
                    <div className="bg-[#EFECE6] p-6 rounded-2xl border border-black/10 editorial-shadow-hover inline-block w-full">
                      
                      {item.period && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-800/10 text-amber-800 text-[10px] font-bold uppercase tracking-widest mb-2">
                          <Clock className="w-3 h-3" />
                          {item.period}
                        </span>
                      )}

                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A] mb-2 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#1A1A1A]/80 leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
