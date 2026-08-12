import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { InquiryFormData } from '../types';

interface InviteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InviteModal: React.FC<InviteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    organization: '',
    programType: 'Storytelling for Students',
    targetAudience: 'Students (Primary/Secondary)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle body scroll lock and Escape key press
  useEffect(() => {
    if (!isOpen) return;

    // Prevent background scrolling while modal is open
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto URL
    const subject = encodeURIComponent(`Session Inquiry: ${formData.programType} - ${formData.organization || formData.name}`);
    const body = encodeURIComponent(
      `Hello Sheeja,\n\nI would like to invite you for a workshop / session.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Organization / Community: ${formData.organization || 'Individual'}\n` +
      `Program Interest: ${formData.programType}\n` +
      `Target Audience: ${formData.targetAudience}\n\n` +
      `Message Details:\n${formData.message}\n\n` +
      `Warm regards,\n${formData.name}`
    );

    window.location.href = `mailto:sheejarnair@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-hidden"
      onClick={onClose}
    >
      <div 
        className="bg-[#F9F7F2] rounded-3xl border border-black/10 max-w-lg w-full max-h-[90vh] flex flex-col relative shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#EFECE6] hover:bg-stone-200 border border-black/10 flex items-center justify-center text-[#1A1A1A]/80 hover:text-[#1A1A1A] transition-colors cursor-pointer shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Modal Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1 space-y-4">
          {!submitted ? (
            <div>
              <div className="space-y-1.5 mb-5 pr-8">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-800">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>WORKSHOP &amp; INVITATION INQUIRY</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                  Invite Sheeja R Nair
                </h3>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                  Connect directly for storytelling sessions, teacher workshops, corporate training, or language programs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anitha Sharma"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#EFECE6] border border-black/10 rounded-xl px-3.5 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-amber-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#EFECE6] border border-black/10 rounded-xl px-3.5 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-amber-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-1">
                      School / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Academy or Company"
                      value={formData.organization}
                      onChange={e => setFormData({...formData, organization: e.target.value})}
                      className="w-full bg-[#EFECE6] border border-black/10 rounded-xl px-3.5 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-amber-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-1">
                      Program Interest
                    </label>
                    <select
                      value={formData.programType}
                      onChange={e => setFormData({...formData, programType: e.target.value})}
                      className="w-full bg-[#EFECE6] border border-black/10 rounded-xl px-3 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-amber-800"
                    >
                      <option value="Storytelling for Students">Storytelling for Students</option>
                      <option value="Teacher Training">Teacher Training</option>
                      <option value="English Language Training">English Language Training</option>
                      <option value="Corporate Language Training">Corporate Language Training</option>
                      <option value="Cambridge Preparation">Cambridge Preparation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-1">
                      Target Audience
                    </label>
                    <select
                      value={formData.targetAudience}
                      onChange={e => setFormData({...formData, targetAudience: e.target.value})}
                      className="w-full bg-[#EFECE6] border border-black/10 rounded-xl px-3 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-amber-800"
                    >
                      <option value="Primary / High School Students">Primary / High School Students</option>
                      <option value="School Educators & Staff">School Educators & Staff</option>
                      <option value="Working Professionals / Corporate">Working Professionals / Corporate</option>
                      <option value="Community / Adult Learners">Community / Adult Learners</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] mb-1">
                    Message / Details
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Share any specific requirements or proposed dates..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#EFECE6] border border-black/10 rounded-xl px-3.5 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-amber-800"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Email Inquiry to Sheeja</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-800/10 border border-amber-800/30 flex items-center justify-center text-amber-800 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                Inquiry Drafted
              </h3>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed max-w-xs mx-auto">
                Your email client has been opened with your inquiry formatted for <span className="font-semibold text-[#1A1A1A]">sheejarnair@gmail.com</span>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full cursor-pointer"
              >
                Return to Website
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
