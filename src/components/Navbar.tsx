import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send } from 'lucide-react';
import { NAV_ITEMS, PIXEL_PETAL_LOGO_PATH, NAVBAR_PIXEL_PETAL_LOGO_PATH } from '../data/portfolioData';

interface NavbarProps {
  onOpenInvite: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInvite }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Intersection tracking for nav highlighting
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F9F7F2]/95 backdrop-blur-md border-b border-black/5 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand & Name */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
            id="nav-brand-link"
          >
            <img
              src={NAVBAR_PIXEL_PETAL_LOGO_PATH}
              alt="Pixel & Petal"
              className="h-9 w-auto max-w-[36px] object-contain rounded-md shrink-0"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tighter italic text-[#1A1A1A] group-hover:text-amber-800 transition-colors">
                Sheeja R Nair
              </span>
              <span className="block text-[10px] text-amber-800 font-bold tracking-[0.2em] uppercase">
                Storyteller • Educator
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6 bg-[#EFECE6]/80 px-5 py-2 rounded-full border border-black/5 text-[11px] uppercase tracking-widest font-semibold">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-800 text-white font-bold shadow-xs'
                      : 'text-[#1A1A1A]/70 hover:text-amber-800 hover:bg-[#F9F7F2]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Pixel & Petal subtle designer badge */}
            <div className="hidden lg:flex items-center gap-2 bg-[#1A1A1A] px-2.5 py-1 rounded-lg border border-black/10 text-[10px] text-stone-300 shadow-xs" title="Website designed & developed by Pixel & Petal">
              <span className="text-stone-400 font-light">By</span>
              <img
                src={PIXEL_PETAL_LOGO_PATH}
                alt="Pixel & Petal"
                className="h-3.5 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <button
              onClick={onOpenInvite}
              className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-2.5 rounded-full text-[11px] uppercase tracking-widest font-bold transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer flex items-center gap-2"
              id="nav-invite-btn"
            >
              <span>Invite Sheeja</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenInvite}
              className="bg-amber-800 text-white text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full"
            >
              Invite
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A1A1A] hover:text-amber-800 focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F9F7F2] border-b border-black/10 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-base font-serif font-medium text-[#1A1A1A] hover:bg-[#EFECE6] hover:text-amber-800 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 border-t border-black/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInvite();
                }}
                className="w-full text-center bg-amber-800 text-white text-xs uppercase tracking-widest font-bold py-3 rounded-full shadow-sm"
              >
                Invite Sheeja R Nair
              </button>

              <div className="flex items-center justify-center gap-2 bg-[#1A1A1A] p-2.5 rounded-xl text-xs text-stone-300">
                <span>Designed & developed by</span>
                <img
                  src={PIXEL_PETAL_LOGO_PATH}
                  alt="Pixel & Petal Logo"
                  className="h-4 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
