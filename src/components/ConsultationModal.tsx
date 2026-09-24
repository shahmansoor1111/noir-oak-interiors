import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, ShieldCheck, Copy, Check } from 'lucide-react';
import { PROJECT_TYPES, BUDGET_OPTIONS, CONSULTATION_METHODS } from '../data/content';
import { CONSULTATION_API_ENDPOINT } from './ConsultationFormSection';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialProject?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialProject
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Residential Interior Design',
    location: '',
    budget: 'Prefer to discuss',
    consultationMethod: 'Virtual Video Consultation',
    description: '',
    privacyConsent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialService.includes('Residential')
          ? 'Residential Interior Design'
          : initialService.includes('Commercial')
          ? 'Commercial Interior Design'
          : initialService.includes('Lighting')
          ? 'Lighting Design'
          : initialService.includes('Furniture')
          ? 'Furniture & Styling'
          : prev.projectType
      }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialProject) {
      setFormData((prev) => ({
        ...prev,
        description: `I am interested in designing a space inspired by "${initialProject}".\n`
      }));
    }
  }, [initialProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email.';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please provide a brief description of your project.';
    }
    if (!formData.privacyConsent) {
      errs.privacyConsent = 'Please agree to our privacy policy.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      if (CONSULTATION_API_ENDPOINT) {
        await fetch(CONSULTATION_API_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } else {
        await new Promise((res) => setTimeout(res, 700));
      }
      setIsSuccess(true);
    } catch {
      setErrors({ form: 'Transmission error. Please verify your connection or try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopySummary = () => {
    const summary = `NOIR & OAK CONSULTATION REQUEST
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Type: ${formData.projectType}
Budget: ${formData.budget}
Method: ${formData.consultationMethod}
Notes: ${formData.description}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0B0C0F]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-[#121419] border border-[#D9B66F]/40 max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-6 sm:p-10 shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#85858A] hover:text-[#F5F1E9] p-2 bg-[#191B20] border border-[#D9B66F]/20 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#D9B66F]/10 border border-[#D9B66F] rounded-full flex items-center justify-center mx-auto text-[#D9B66F]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-3xl text-[#F5F1E9] mb-2">
                Consultation Requested
              </h3>
              <p className="text-sm text-[#B9B7B2] font-light max-w-md mx-auto">
                Thank you, <strong className="text-[#F3D59A]">{formData.fullName}</strong>. Our studio principal will review your inquiry regarding <span className="text-[#F5F1E9] font-medium">{formData.projectType}</span> and reach out within 24–48 hours.
              </p>
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={handleCopySummary}
                className="inline-flex items-center gap-2 border border-[#D9B66F]/40 hover:border-[#D9B66F] px-4 py-2 text-xs uppercase tracking-wider text-[#F5F1E9] rounded transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Summary Copied' : 'Copy Summary'}</span>
              </button>
              <button
                onClick={onClose}
                className="bg-[#D9B66F] hover:bg-[#F3D59A] text-[#0B0C0F] px-6 py-2 text-xs uppercase tracking-wider font-semibold rounded transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#D9B66F] font-semibold">
                NOIR &amp; OAK · BESPOKE INTERIORS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E9] font-normal mt-1">
                Schedule a Design Consultation
              </h3>
              <p className="text-xs text-[#85858A] mt-1">
                Share your property requirements and preferred design direction.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B9B7B2] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#191B20] border border-[#202228] focus:border-[#D9B66F] rounded px-3 py-2.5 text-sm text-[#F5F1E9] focus:outline-none"
                    placeholder="Full name"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400 mt-0.5">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B9B7B2] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#191B20] border border-[#202228] focus:border-[#D9B66F] rounded px-3 py-2.5 text-sm text-[#F5F1E9] focus:outline-none"
                    placeholder="email@domain.com"
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-0.5">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B9B7B2] mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#191B20] border border-[#202228] focus:border-[#D9B66F] rounded px-3 py-2.5 text-sm text-[#F5F1E9] focus:outline-none"
                  >
                    {PROJECT_TYPES.map((pt) => (
                      <option key={pt} value={pt} className="bg-[#121419]">{pt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B9B7B2] mb-1">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#191B20] border border-[#202228] focus:border-[#D9B66F] rounded px-3 py-2.5 text-sm text-[#F5F1E9] focus:outline-none"
                  >
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#121419]">{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B9B7B2] mb-1">
                  Project Notes &amp; Ideas *
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-[#191B20] border border-[#202228] focus:border-[#D9B66F] rounded px-3 py-2.5 text-sm text-[#F5F1E9] focus:outline-none"
                  placeholder="Tell us about the property, rooms, timeline..."
                />
                {errors.description && <p className="text-[11px] text-red-400 mt-0.5">{errors.description}</p>}
              </div>

              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.privacyConsent}
                    onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                    className="mt-1 h-3.5 w-3.5 rounded border-[#D9B66F]/40 text-[#D9B66F] bg-[#191B20]"
                  />
                  <span className="text-[11px] text-[#85858A]">
                    I agree to the confidential processing of my details for this consultation.
                  </span>
                </label>
                {errors.privacyConsent && <p className="text-[11px] text-red-400 mt-0.5">{errors.privacyConsent}</p>}
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-[#85858A]/30 text-xs uppercase tracking-wider text-[#B9B7B2]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#D9B66F] hover:bg-[#F3D59A] text-[#0B0C0F] text-xs uppercase tracking-[0.16em] font-semibold px-6 py-2.5 flex items-center gap-2"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
