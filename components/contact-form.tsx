"use client";

import { useState } from "react";
import {
  IconSend,
  IconCheck,
  IconShieldLock,
  IconSparkles,
  IconRefresh,
} from "@tabler/icons-react";

const projectTypes = [
  "Turnkey Microbrewery (Braupagode 500L - 2,000L)",
  "Handcrafted Copper Brewhouse (Showpiece Taproom)",
  "Industrial Stainless Steel Brewhouse (Commercial Scale)",
  "Commercial Production Brewhouse (20HL - 100HL+)",
  "Cellar Expansion (Fermenters / Unitanks / BBTs)",
  "Beverage Formulation (Beer, Kombucha, Seltzers)",
  "Thermal Vapor Recompression Retrofit",
  "General Equipment & Parts Inquiry",
];

const batchVolumes = [
  "Under 500 Liters (Pilot / Nanobrewery)",
  "1,000 Liters (Standard Braupagode)",
  "2,000 – 5,000 Liters",
  "5,000+ Liters (Production Scale)",
  "Still Evaluating / Need Guidance",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: projectTypes[0],
    batchVolume: batchVolumes[1],
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim()) {
      setErrorMessage("Please provide your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Please provide your contact phone / WhatsApp number.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please tell us a little about your project or requirements.");
      return;
    }

    setIsSubmitting(true);

    // Simulate clean async dispatch
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again or email us directly at contact@braumitraa.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      projectType: projectTypes[0],
      batchVolume: batchVolumes[1],
      location: "",
      message: "",
    });
    setIsSubmitted(false);
    setErrorMessage("");
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#D49B44]/40 shadow-md text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-[#D49B44]/15 border border-[#D49B44] text-[#D49B44] flex items-center justify-center mx-auto">
          <IconCheck className="w-8 h-8 stroke-[2.5]" />
        </div>
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
            INQUIRY DISPATCHED
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1A18] font-bold">
            Thank you, {formData.fullName}!
          </h3>
          <p className="text-sm sm:text-base text-[#42403B] max-w-lg mx-auto leading-relaxed">
            Your project brief has been sent directly to founders Abhay Jhaveri,
            Rainer Kruppa, and Rüdiger Stolle.
          </p>
        </div>

        <div className="bg-[#F4EFE6] rounded-2xl p-6 text-left max-w-md mx-auto border border-[#E5DFD5] space-y-2 text-xs text-[#76736A]">
          <div className="flex justify-between border-b border-[#E5DFD5]/80 pb-2">
            <span className="font-semibold text-[#1A1A18]">Project Type:</span>
            <span className="text-right text-[#42403B]">{formData.projectType}</span>
          </div>
          <div className="flex justify-between border-b border-[#E5DFD5]/80 pb-2">
            <span className="font-semibold text-[#1A1A18]">Target Volume:</span>
            <span className="text-right text-[#42403B]">{formData.batchVolume}</span>
          </div>
          {formData.location && (
            <div className="flex justify-between border-b border-[#E5DFD5]/80 pb-2">
              <span className="font-semibold text-[#1A1A18]">Target Location:</span>
              <span className="text-right text-[#42403B]">{formData.location}</span>
            </div>
          )}
          <div className="flex justify-between pt-1">
            <span className="font-semibold text-[#1A1A18]">Response Window:</span>
            <span className="text-[#D49B44] font-semibold">Within 24 business hours</span>
          </div>
        </div>

        <p className="text-xs text-[#76736A] max-w-md mx-auto">
          Need immediate assistance? You can also connect directly via phone or WhatsApp at{" "}
          <a
            href="tel:+919826055100"
            className="text-[#1A1A18] font-semibold underline hover:text-[#D49B44]"
          >
            +91 98260 55100
          </a>
          .
        </p>

        <div className="pt-2">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 text-xs font-semibold px-6 py-3 rounded-full bg-[#1A1A18] hover:bg-[#33312E] text-white transition-colors"
          >
            <IconRefresh className="w-4 h-4" />
            <span>Submit Another Project Inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E5DFD5] shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Error notification */}
        {errorMessage && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
            {errorMessage}
          </div>
        )}

        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="block text-xs uppercase tracking-wider font-bold text-[#1A1A18]"
            >
              Full Name <span className="text-[#D49B44]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Marcus Weber or Rahul Sharma"
              className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E5DFD5] text-[#1A1A18] text-sm placeholder:text-[#9A968D] focus:outline-none focus:ring-2 focus:ring-[#D49B44] focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-wider font-bold text-[#1A1A18]"
            >
              Work / Direct Email <span className="text-[#D49B44]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@brewery.com"
              className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E5DFD5] text-[#1A1A18] text-sm placeholder:text-[#9A968D] focus:outline-none focus:ring-2 focus:ring-[#D49B44] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Row 2: Phone & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="block text-xs uppercase tracking-wider font-bold text-[#1A1A18]"
            >
              Phone / WhatsApp <span className="text-[#D49B44]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98260 00000 or +49 171 000000"
              className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E5DFD5] text-[#1A1A18] text-sm placeholder:text-[#9A968D] focus:outline-none focus:ring-2 focus:ring-[#D49B44] focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="company"
              className="block text-xs uppercase tracking-wider font-bold text-[#1A1A18]"
            >
              Company / Proposed Brewery Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Apex Craft Brewing Ltd."
              className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E5DFD5] text-[#1A1A18] text-sm placeholder:text-[#9A968D] focus:outline-none focus:ring-2 focus:ring-[#D49B44] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Row 3: Project Type & Volume */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="projectType"
              className="block text-xs uppercase tracking-wider font-bold text-[#1A1A18]"
            >
              Primary Project Focus
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E5DFD5] text-[#1A1A18] text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B44] focus:border-transparent transition-all cursor-pointer"
            >
              {projectTypes.map((type, idx) => (
                <option key={idx} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="batchVolume"
              className="block text-xs uppercase tracking-wider font-bold text-[#1A1A18]"
            >
              Target Batch Scale
            </label>
            <select
              id="batchVolume"
              name="batchVolume"
              value={formData.batchVolume}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E5DFD5] text-[#1A1A18] text-sm focus:outline-none focus:ring-2 focus:ring-[#D49B44] focus:border-transparent transition-all cursor-pointer"
            >
              {batchVolumes.map((vol, idx) => (
                <option key={idx} value={vol}>
                  {vol}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4: Location */}
        <div className="space-y-2">
          <label
            htmlFor="location"
            className="block text-xs uppercase tracking-wider font-bold text-[#1A1A18]"
          >
            Project Location (City / Region / Country)
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Bengaluru, Pune, Goa, Munich, or Singapore"
            className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E5DFD5] text-[#1A1A18] text-sm placeholder:text-[#9A968D] focus:outline-none focus:ring-2 focus:ring-[#D49B44] focus:border-transparent transition-all"
          />
        </div>

        {/* Row 5: Message */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-wider font-bold text-[#1A1A18]"
          >
            Project Scope & Questions <span className="text-[#D49B44]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your proposed site dimensions, timeline, utility setup (steam / electric), desired beverage styles, or any technical questions..."
            className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#E5DFD5] text-[#1A1A18] text-sm placeholder:text-[#9A968D] focus:outline-none focus:ring-2 focus:ring-[#D49B44] focus:border-transparent transition-all leading-relaxed"
          />
        </div>

        {/* Bottom Submission Bar */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#E5DFD5]">
          <div className="flex items-center gap-2 text-xs text-[#76736A]">
            <IconShieldLock className="w-4 h-4 text-[#D49B44] shrink-0" />
            <span>Strict NDA Guarantee: Your drawings & IP remain confidential.</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 bg-[#D49B44] hover:bg-[#c08a38] text-white text-sm font-semibold px-8 py-3.5 rounded-full shadow transition-all duration-200 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Dispatching Inquiry...</span>
              </>
            ) : (
              <>
                <span>Connect With Our Founders</span>
                <IconSend className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

