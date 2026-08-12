import React from 'react';
import { Mail, Send, Sparkles, Linkedin, Instagram } from 'lucide-react';
import { SHEEJA_LINKEDIN_URL, SHEEJA_INSTAGRAM_URL } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenInvite: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInvite }) => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#EFECE6] relative border-t border-black/10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="bg-[#F9F7F2] rounded-3xl p-8 sm:p-14 border border-black/10 editorial-shadow max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 text-amber-800 text-[11px] font-bold tracking-[0.3em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start a Conversation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
            Have a story to tell? <br />
            <span className="text-amber-800 italic font-normal">
              Let’s create a learning experience.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#1A1A1A]/80 leading-relaxed max-w-2xl mx-auto">
            Whether it is a storytelling session, teacher-training programme, English language workshop, Cambridge preparation or corporate communication training, Sheeja brings experience, creativity and a people-first approach to every learning space.
          </p>

          {/* Contact Details Card */}
          <div className="bg-[#EFECE6] p-6 rounded-2xl border border-black/10 inline-block max-w-md w-full text-center space-y-2">
            <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
              Sheeja R Nair
            </h3>
            <p className="text-[11px] font-bold uppercase tracking-widest text-amber-800">
              English Language &amp; Teacher Trainer • Freelance Trainer
            </p>
            <div className="pt-2 flex items-center justify-center gap-2 text-sm text-[#1A1A1A]">
              <Mail className="w-4 h-4 text-amber-800" />
              <a
                href="mailto:sheejarnair@gmail.com"
                className="font-semibold underline decoration-amber-800/40 hover:text-amber-800 transition-colors"
              >
                sheejarnair@gmail.com
              </a>
            </div>

            {/* Social Media Links */}
            <div className="pt-3 flex items-center justify-center gap-3">
              <a
                href={SHEEJA_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F9F7F2] hover:bg-amber-800 hover:text-white border border-black/10 rounded-full text-xs font-semibold text-[#1A1A1A] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={SHEEJA_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F9F7F2] hover:bg-amber-800 hover:text-white border border-black/10 rounded-full text-xs font-semibold text-[#1A1A1A] transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:sheejarnair@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-md hover:-translate-y-0.5"
              id="contact-email-btn"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Get in Touch</span>
            </a>

            <button
              onClick={onOpenInvite}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
              id="contact-invite-btn"
            >
              <span>Invite Sheeja</span>
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
