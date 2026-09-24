import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, ArrowRight, ShieldCheck, Copy, Check } from 'lucide-react';
import { PROJECT_TYPES, BUDGET_OPTIONS, CONSULTATION_METHODS } from '../data/content';

/**
 * HOSTINGER / STATIC FRONTEND CONFIGURATION:
 * Configure this endpoint URL when connecting to your form processor
 * (such as Formspree, Formkeep, Basin, or your custom PHP mailer on Hostinger).
 */
export const CONSULTATION_API_ENDPOINT: string | null = null; // e.g. "/api/inquire" or "https://formspree.io/f/your_form_id"

interface ConsultationFormSectionProps {
  prefilledService?: string;
  prefilledProject?: string;
  onExploreWork: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budget: string;
  consultationMethod: string;
  description: string;
  privacyConsent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export const ConsultationFormSection: React.FC<ConsultationFormSectionProps> = ({
  prefilledService,
  prefilledProject,
  onExploreWork
}) => {
  const [formData, setFormData] = useState<FormData>({
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

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        projectType: prefilledService.includes('Residential')
          ? 'Residential Interior Design'
          : prefilledService.includes('Commercial')
          ? 'Commercial Interior Design'
          : prefilledService.includes('Lighting')
          ? 'Lighting Design'
          : prefilledService.includes('Furniture')
          ? 'Furniture & Styling'
          : prev.projectType
      }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledProject) {
      setFormData((prev) => ({
        ...prev,
        description: `I am interested in designing a space with aesthetic inspiration from "${prefilledProject}".\n`
      }));
    }
  }, [prefilledProject]);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.description.trim()) {
      errs.description = 'Please share a brief summary of your project or vision.';
    } else if (formData.description.trim().length < 15) {
      errs.description = 'Please provide at least 15 characters describing your ideas.';
    }

    if (!formData.privacyConsent) {
      errs.privacyConsent = 'You must acknowledge our privacy terms to submit an inquiry.';
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
        // Real endpoint configured for production deployment
        const response = await fetch(CONSULTATION_API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Network error sending inquiry');
        }
      } else {
        // High fidelity simulated frontend client verification for static deployment
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setSubmittedData({ ...formData });
      setIsSuccess(true);
      setErrors({});
    } catch {
      setErrors({ form: 'An error occurred transmitting your inquiry. Please verify your connection or try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    const text = `NOIR & OAK CONSULTATION INQUIRY
Name: ${submittedData.fullName}
Email: ${submittedData.email}
Phone: ${submittedData.phone || 'N/A'}
Project Type: ${submittedData.projectType}
Budget: ${submittedData.budget}
Location: ${submittedData.location || 'N/A'}
Preferred Method: ${submittedData.consultationMethod}
Details: ${submittedData.description}`;

    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmittedData(null);
    setFormData({
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
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#0B0C0F] relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121419] via-[#0B0C0F] to-[#0B0C0F] -z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Conversion CTA Intro Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-16 border border-[#D9B66F]/25 bg-[#121419]">
          <div className="absolute inset-0 z-0">
            <img
              src="/src/assets/images/cta_dining_interior_1790149692369.jpg"
              alt="Noir & Oak dining interior lighting"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0F] via-[#0B0C0F]/90 to-[#0B0C0F]/80" />
            <div className="absolute inset-0 bg-[#0B0C0F]/40 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 p-8 sm:p-14 lg:p-20 max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#D9B66F]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#D9B66F] font-semibold">
                YOUR NEXT CHAPTER BEGINS HERE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F1E9] font-normal tracking-tight mb-6">
              Let's Create Something Extraordinary.
            </h2>

            <p className="text-base sm:text-lg text-[#B9B7B2] font-light leading-relaxed mb-8">
              Whether you're reimagining a single room or planning an entire property, we'd love to hear about your vision. Tell us about your space, your ideas, and what you'd love to create.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#inquiry-form"
                className="bg-[#D9B66F] hover:bg-[#F3D59A] text-[#0B0C0F] text-xs uppercase tracking-[0.18em] font-semibold px-8 py-4 transition-colors inline-flex items-center gap-2"
              >
                <span>Book Your Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onExploreWork}
                className="border border-[#D9B66F]/40 hover:border-[#D9B66F] hover:bg-[#D9B66F]/10 text-[#F5F1E9] text-xs uppercase tracking-[0.18em] font-medium px-8 py-4 transition-colors"
              >
                Explore Our Work
              </button>
            </div>
          </div>
        </div>

        {/* The Consultation Form Card */}
        <div id="inquiry-form" className="max-w-4xl mx-auto bg-[#121419] border border-[#D9B66F]/30 rounded-xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center mb-10 pb-6 border-b border-[#202228]">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E9] font-normal mb-2">
              Private Design Consultation Request
            </h3>
            <p className="text-sm text-[#85858A] font-light">
              Direct inquiry form for residential, commercial, lighting, and bespoke interior inquiries.
            </p>
          </div>

          {isSuccess && submittedData ? (
            /* Success State */
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 bg-[#D9B66F]/10 border border-[#D9B66F] rounded-full flex items-center justify-center mx-auto text-[#D9B66F]">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-2xl sm:text-3xl text-[#F5F1E9]">
                  Thank You, {submittedData.fullName}
                </h4>
                <p className="text-sm text-[#B9B7B2] font-light max-w-lg mx-auto">
                  Your inquiry regarding <strong className="text-[#F3D59A] font-medium">{submittedData.projectType}</strong> has been received. Our senior design team will review your project notes and contact you via <span className="text-[#F5F1E9]">{submittedData.email}</span> within 1–2 business days.
                </p>
              </div>

              {/* Inquiry Summary Box */}
              <div className="bg-[#191B20] border border-[#202228] rounded-lg p-6 max-w-xl mx-auto text-left text-xs space-y-2 text-[#B9B7B2]">
                <div className="flex justify-between items-center pb-2 border-b border-[#202228]">
                  <span className="uppercase tracking-wider text-[#D9B66F] font-semibold">Consultation Summary</span>
                  <button
                    onClick={handleCopySummary}
                    className="flex items-center gap-1.5 text-[#F5F1E9] hover:text-[#D9B66F] transition-colors"
                  >
                    {copiedSummary ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSummary ? 'Copied' : 'Copy Summary'}</span>
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div><strong className="text-[#F5F1E9]">Preferred Method:</strong> {submittedData.consultationMethod}</div>
                  <div><strong className="text-[#F5F1E9]">Budget:</strong> {submittedData.budget}</div>
                  {submittedData.location && <div><strong className="text-[#F5F1E9]">Location:</strong> {submittedData.location}</div>}
                  {submittedData.phone && <div><strong className="text-[#F5F1E9]">Phone:</strong> {submittedData.phone}</div>}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="border border-[#D9B66F]/40 hover:border-[#D9B66F] text-[#F5F1E9] text-xs uppercase tracking-widest px-6 py-3 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Active Form */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {errors.form && (
                <div className="p-4 bg-red-950/40 border border-red-500/40 text-red-200 text-xs rounded">
                  {errors.form}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-[#B9B7B2] mb-2 font-medium">
                    Full Name <span className="text-[#D9B66F]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Julian Montgomery"
                    className={`w-full bg-[#191B20] border ${
                      errors.fullName ? 'border-red-400' : 'border-[#202228] focus:border-[#D9B66F]'
                    } rounded px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#85858A] focus:outline-none transition-colors`}
                  />
                  {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#B9B7B2] mb-2 font-medium">
                    Email Address <span className="text-[#D9B66F]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. j.montgomery@example.com"
                    className={`w-full bg-[#191B20] border ${
                      errors.email ? 'border-red-400' : 'border-[#202228] focus:border-[#D9B66F]'
                    } rounded px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#85858A] focus:outline-none transition-colors`}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone Number (Optional) */}
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#B9B7B2] mb-2 font-medium">
                    Phone Number <span className="text-[#85858A] text-[10px] lowercase font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +1 (555) 234-5678"
                    className="w-full bg-[#191B20] border border-[#202228] focus:border-[#D9B66F] rounded px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#85858A] focus:outline-none transition-colors"
                  />
                </div>

                {/* Project Location (Optional) */}
                <div>
                  <label htmlFor="location" className="block text-xs uppercase tracking-wider text-[#B9B7B2] mb-2 font-medium">
                    Project Location / City <span className="text-[#85858A] text-[10px] lowercase font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Los Angeles, CA or New York, NY"
                    className="w-full bg-[#191B20] border border-[#202228] focus:border-[#D9B66F] rounded px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#85858A] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-xs uppercase tracking-wider text-[#B9B7B2] mb-2 font-medium">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#191B20] border border-[#202228] focus:border-[#D9B66F] rounded px-4 py-3 text-sm text-[#F5F1E9] focus:outline-none transition-colors"
                  >
                    {PROJECT_TYPES.map((pt) => (
                      <option key={pt} value={pt} className="bg-[#121419] text-[#F5F1E9]">
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Estimated Budget */}
                <div>
                  <label htmlFor="budget" className="block text-xs uppercase tracking-wider text-[#B9B7B2] mb-2 font-medium">
                    Estimated Budget Range
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#191B20] border border-[#202228] focus:border-[#D9B66F] rounded px-4 py-3 text-sm text-[#F5F1E9] focus:outline-none transition-colors"
                  >
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#121419] text-[#F5F1E9]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Consultation Method */}
                <div>
                  <label htmlFor="method" className="block text-xs uppercase tracking-wider text-[#B9B7B2] mb-2 font-medium">
                    Preferred Meeting
                  </label>
                  <select
                    id="method"
                    value={formData.consultationMethod}
                    onChange={(e) => setFormData({ ...formData, consultationMethod: e.target.value })}
                    className="w-full bg-[#191B20] border border-[#202228] focus:border-[#D9B66F] rounded px-4 py-3 text-sm text-[#F5F1E9] focus:outline-none transition-colors"
                  >
                    {CONSULTATION_METHODS.map((m) => (
                      <option key={m} value={m} className="bg-[#121419] text-[#F5F1E9]">
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="description" className="block text-xs uppercase tracking-wider text-[#B9B7B2] mb-2 font-medium">
                  Project Description &amp; Vision <span className="text-[#D9B66F]">*</span>
                </label>
                <textarea
                  id="description"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Share details about the property, rooms involved, target timeline, aesthetic aspirations, or specific materials you admire..."
                  className={`w-full bg-[#191B20] border ${
                    errors.description ? 'border-red-400' : 'border-[#202228] focus:border-[#D9B66F]'
                  } rounded px-4 py-3 text-sm text-[#F5F1E9] placeholder-[#85858A] focus:outline-none transition-colors`}
                />
                {errors.description && <p className="text-xs text-red-400 mt-1">{errors.description}</p>}
              </div>

              {/* Privacy Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.privacyConsent}
                    onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-[#D9B66F]/40 text-[#D9B66F] focus:ring-[#D9B66F] bg-[#191B20] accent-[#D9B66F]"
                  />
                  <span className="text-xs text-[#85858A] leading-relaxed">
                    I acknowledge that Noir &amp; Oak Interiors will handle my details confidentially to coordinate our design consultation. No marketing spam will ever be sent.
                  </span>
                </label>
                {errors.privacyConsent && <p className="text-xs text-red-400 mt-1">{errors.privacyConsent}</p>}
              </div>

              {/* Submit Button & Security Note */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#85858A]">
                  <ShieldCheck className="w-4 h-4 text-[#D9B66F]" />
                  <span>Strict Confidentiality · Studio Response within 48h</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#D9B66F] hover:bg-[#F3D59A] disabled:bg-[#80643A] text-[#0B0C0F] text-xs uppercase tracking-[0.2em] font-semibold px-10 py-4 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#0B0C0F]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F3D59A]"
                >
                  {isSubmitting ? (
                    <span>Transmitting Vision...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <Send className="w-4 h-4 text-[#0B0C0F]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
