import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { NAV_ITEMS, PIXEL_PETAL_LOGO_PATH, SHEEJA_LINKEDIN_URL, SHEEJA_INSTAGRAM_URL } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-stone-300 pt-16 pb-12 relative overflow-hidden border-t border-black/20">
      
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-amber-800 to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Upper Footer: Logo, Brand Statement, Main Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left border-b border-stone-800 pb-10">
          
          {/* Sheeja Brand Info & Social Links */}
          <div className="space-y-3 max-w-md">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
              SHEEJA R NAIR
            </h3>
            <p className="text-[10px] text-amber-400 font-bold uppercase tracking-[0.2em]">
              Storyteller • Educator • Language Trainer • Teacher Mentor
            </p>
            <p className="text-sm text-stone-400 italic font-serif">
              “Turning language into confidence, and learning into stories.”
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href={SHEEJA_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-stone-300 hover:text-amber-400 transition-colors bg-stone-800/80 hover:bg-stone-800 px-3.5 py-1.5 rounded-full border border-stone-700/60"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-amber-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={SHEEJA_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-stone-300 hover:text-amber-400 transition-colors bg-stone-800/80 hover:bg-stone-800 px-3.5 py-1.5 rounded-full border border-stone-700/60"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-3.5 h-3.5 text-amber-400" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Center Call to Action */}
          <div className="bg-stone-900/90 p-6 rounded-2xl border border-stone-800 max-w-md w-full space-y-3 text-center">
            <p className="text-sm text-stone-200 font-serif">
              Have a story to tell? Let’s create a learning experience.
            </p>
            <a
              href="mailto:sheejarnair@gmail.com"
              className="inline-flex items-center gap-2 bg-amber-800 hover:bg-amber-900 text-white text-[11px] font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-[11px] font-bold uppercase tracking-widest text-stone-400">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-amber-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-stone-800" />

        {/* Lower Footer: Pixel & Petal Official Branding Signature */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2 text-xs text-stone-400">
          
          {/* Pixel & Petal Logo Container */}
          <div className="flex items-center gap-3 bg-stone-900/90 px-4 py-2.5 rounded-xl border border-stone-800/80">
            <img
              src={PIXEL_PETAL_LOGO_PATH}
              alt="Pixel & Petal - Web Design & Development"
              className="h-7 w-auto object-contain rounded-sm"
              referrerPolicy="no-referrer"
            />
            <div className="text-left border-l border-stone-800 pl-3">
              <p className="text-[11px] text-stone-300 font-medium">
                Website designed &amp; developed by Pixel &amp; Petal
              </p>
            </div>
          </div>

          {/* Copyright & Creator Credit */}
          <div className="text-center sm:text-right space-y-1">
            <p className="text-stone-300 font-medium text-xs">
              © 2026 Pixel &amp; Petal &middot; Crafted with ♡ by Shilpa 🌸
            </p>
            <p className="text-[10px] text-stone-500">
              All rights reserved &middot; Sheeja R Nair Official Website
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};
