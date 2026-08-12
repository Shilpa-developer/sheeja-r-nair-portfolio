import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { StorytellerSection } from './components/StorytellerSection';
import { TrainingSection } from './components/TrainingSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ResourceAndCommunity } from './components/ResourceAndCommunity';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InviteModal } from './components/InviteModal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1C1917] flex flex-col font-sans selection:bg-[#F3E2D8] selection:text-[#8C3A23]">
      
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#C25E40] via-[#D97706] to-[#0F766E] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Bar */}
      <Navbar onOpenInvite={() => setInviteModalOpen(true)} />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Hero onOpenInvite={() => setInviteModalOpen(true)} />
        <AboutSection />
        <StorytellerSection />
        <TrainingSection onOpenInvite={() => setInviteModalOpen(true)} />
        <ExperienceSection />
        <ResourceAndCommunity />
        <PhilosophySection />
        <ContactSection onOpenInvite={() => setInviteModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Workshop Inquiry Modal */}
      <InviteModal
        isOpen={inviteModalOpen}
        onClose={() => setInviteModalOpen(false)}
      />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#1C1917] hover:bg-[#C25E40] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
          aria-label="Scroll to top"
          id="scroll-to-top-btn"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
