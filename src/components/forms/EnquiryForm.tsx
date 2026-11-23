"use client";

import React, { useState } from "react";
import { api, EnquiryInput } from "@/lib/api";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
  MessageSquare
} from "lucide-react";

interface EnquiryFormProps {
  defaultType?: EnquiryInput['enquiry_type'];
  defaultSubject?: string;
  defaultCourseName?: string;
  sourceContext?: string;
  className?: string;
}

export default function EnquiryForm({
  defaultType = "consultancy",
  defaultSubject = "",
  defaultCourseName = "",
  sourceContext = "",
  className = "",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState<EnquiryInput>({
    full_name: "",
    email: "",
    phone: "",
    organization: "",
    enquiry_type: defaultType,
    course_name: defaultCourseName,
    subject: defaultSubject || (defaultCourseName ? `Enquiry regarding ${defaultCourseName}` : ""),
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.full_name.trim()) errors.full_name = "Full name is required.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errors.email = "Please enter a valid corporate or professional email.";
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errors.phone = "Please enter a valid contact phone number.";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required.";
    if (!formData.message.trim() || formData.message.length < 10) {
      errors.message = "Please provide details regarding your requirements (minimum 10 characters).";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validate()) return;

    setLoading(true);
    try {
      const response = await api.submitEnquiry(formData);
      if (response.success) {
        setSuccess(true);
      } else {
        setErrorMessage(response.message || "An error occurred while submitting.");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Unable to submit enquiry at this time.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Haridra Food Safety Assurance team, I am inquiring regarding ${
      formData.enquiry_type
    } (${formData.course_name || formData.organization || 'Corporate Enquiry'}). My name is ${
      formData.full_name || 'Visitor'
    }.`
  );

  if (success) {
    return (
      <div className={`p-8 bg-surface-white rounded-3xl border border-surface-border shadow-soft-lg text-center space-y-5 animate-in fade-in duration-300 ${className}`}>
        <div className="w-16 h-16 bg-forest-subtle text-forest rounded-full mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-heading font-bold text-navy-900">
            Consultation Request Received
          </h3>
          <p className="text-sm text-text-secondary max-w-md mx-auto">
            Thank you, <strong className="text-navy-900">{formData.full_name}</strong>. Your enquiry regarding{" "}
            <span className="font-medium text-corporate">{formData.enquiry_type.replace('_', ' ')}</span> has been securely logged with our technical advisory desk.
          </p>
        </div>

        <div className="p-4 bg-surface-light rounded-2xl text-xs text-text-secondary max-w-md mx-auto text-left space-y-1">
          <div><strong>Confirmation Ref:</strong> HFSA-REQ-{Date.now().toString().slice(-6)}</div>
          <div><strong>Contact Email:</strong> {formData.email}</div>
          <div><strong>Estimated Response:</strong> Within 1 business day</div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              setSuccess(false);
              setFormData({
                full_name: "",
                email: "",
                phone: "",
                organization: "",
                enquiry_type: defaultType,
                course_name: "",
                subject: "",
                message: "",
              });
            }}
            className="text-xs font-semibold text-text-secondary hover:text-navy-900 py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
          >
            Submit Another Request
          </button>

          <a
            href={`https://wa.me/919876543210?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-semibold py-2.5 px-4 rounded-xl hover:bg-[#20bd5a] transition-colors shadow-soft-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl border border-surface-border shadow-soft-lg p-6 sm:p-8 ${className}`}>
      <div className="mb-6 space-y-1">
        <span className="text-xs font-bold uppercase tracking-wider text-[#004B87] font-heading">
          {sourceContext ? `Inquiry for ${sourceContext}` : "Technical Consultation & Advisory Desk"}
        </span>
        <h3 className="text-xl sm:text-2xl font-heading font-black text-black">
          Request Expert Assistance
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 font-medium">
          Connect directly with our food safety specialists and training counselors.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-black mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. Rajesh Kumar"
              value={formData.full_name}
              onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
              className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-surface-offwhite focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                validationErrors.full_name
                  ? "border-red-300 focus:ring-red-400"
                  : "border-surface-border focus:ring-corporate/30 focus:border-corporate"
              }`}
            />
            {validationErrors.full_name && (
              <span className="text-[11px] text-red-500 mt-1 block">{validationErrors.full_name}</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-black mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="e.g. rajesh@enterprise.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-surface-offwhite focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                validationErrors.email
                  ? "border-red-300 focus:ring-red-400"
                  : "border-surface-border focus:ring-corporate/30 focus:border-corporate"
              }`}
            />
            {validationErrors.email && (
              <span className="text-[11px] text-red-500 mt-1 block">{validationErrors.email}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone */}
          <div>
            <label className="block text-xs font-bold text-black mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-surface-offwhite focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                validationErrors.phone
                  ? "border-red-300 focus:ring-red-400"
                  : "border-surface-border focus:ring-corporate/30 focus:border-corporate"
              }`}
            />
            {validationErrors.phone && (
              <span className="text-[11px] text-red-500 mt-1 block">{validationErrors.phone}</span>
            )}
          </div>

          {/* Organization */}
          <div>
            <label className="block text-xs font-bold text-black mb-1.5">
              Organization / University (Optional)
            </label>
            <input
              type="text"
              placeholder="Company or College name"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-surface-border bg-surface-offwhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate/30 focus:border-corporate transition-all"
            />
          </div>
        </div>

        {/* Enquiry Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-black mb-1.5">
              Enquiry Nature <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.enquiry_type}
              onChange={(e) => setFormData({ ...formData, enquiry_type: e.target.value as any })}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-surface-border bg-surface-offwhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate/30 focus:border-corporate transition-all"
            >
              <option value="consultancy">Food Safety Consultancy (HACCP/GMP)</option>
              <option value="audit">Food Safety & Hygiene Audit</option>
              <option value="quality_assurance">Quality Assurance Solutions</option>
              <option value="technical_consultancy">Technical Advisory & Plant Design</option>
              <option value="training">Training & Certification Programs</option>
              <option value="collaboration">Institutional / Academic Collaboration</option>
              <option value="general">General Corporate Inquiry</option>
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-bold text-black mb-1.5">
              Subject Line <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Internal Audit scope for 2 facilities"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-surface-offwhite focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                validationErrors.subject
                  ? "border-red-300 focus:ring-red-400"
                  : "border-surface-border focus:ring-corporate/30 focus:border-corporate"
              }`}
            />
            {validationErrors.subject && (
              <span className="text-[11px] text-red-500 mt-1 block">{validationErrors.subject}</span>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-black mb-1.5">
            Operational Requirements or Message <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            required
            placeholder="Please detail your facility type, product category, desired training batch size or compliance timeline..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-surface-offwhite focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              validationErrors.message
                ? "border-red-300 focus:ring-red-400"
                : "border-surface-border focus:ring-corporate/30 focus:border-corporate"
            }`}
          />
          {validationErrors.message && (
            <span className="text-[11px] text-red-500 mt-1 block">{validationErrors.message}</span>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#4CAF50] hover:bg-[#388e3c] text-white font-bold py-3.5 px-6 rounded-xl shadow-soft-md hover:shadow-soft-lg transition-all disabled:opacity-50 text-sm"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Submitting to Advisory Desk...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-white" />
                <span>Submit Consultation Request</span>
              </>
            )}
          </button>

          <a
            href={`https://wa.me/919876543210?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#1b5e20] text-xs font-bold py-3.5 px-5 rounded-xl hover:bg-[#e8f5e9] transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Direct WhatsApp</span>
          </a>
        </div>

        <p className="text-[11px] text-text-muted text-center pt-1">
          Confidentiality assured. We strictly protect your organizational and operational data.
        </p>
      </form>
    </div>
  );
}
