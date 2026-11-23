import React from "react";
import Link from "next/link";
import { PhoneCall, Mail, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
}

export default function CTASection({
  title = "Building a Safer and Better Food Industry Together.",
  subtitle = "Whether you are a food manufacturing plant seeking HACCP or GMP compliance, a university department planning student skill certifications, or a commercial kitchen wanting independent hygiene audits — Haridra is your trusted technical partner.",
  primaryBtnText = "Request a Technical Consultation",
  primaryBtnLink = "/contact",
  secondaryBtnText = "Contact Our Education Team",
  secondaryBtnLink = "/contact?type=training"
}: CTASectionProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#14244E] text-white border-t border-[#233874]">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#1c326c] filter blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#4CAF50] filter blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c326c] border border-[#2a4a9c] text-xs font-semibold text-[#81C784]">
          <ShieldCheck className="w-4 h-4 text-[#4CAF50]" />
          <span>Institutional Food Safety & Quality Excellence</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-white leading-tight max-w-3xl mx-auto">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Value pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs text-slate-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
            <span>Science-Driven Methodologies</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
            <span>EOSH-Accredited Initiatives</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
            <span>Strict Client Confidentiality</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryBtnLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#4CAF50] hover:bg-[#388e3c] text-white font-bold px-8 py-3.5 rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all text-sm"
          >
            <PhoneCall className="w-4 h-4 text-white" />
            <span>{primaryBtnText}</span>
          </Link>

          <Link
            href={secondaryBtnLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#1c326c] border border-[#2a4a9c] hover:border-[#81C784] text-white font-semibold px-7 py-3.5 rounded-xl transition-all text-sm hover:bg-[#233f88]"
          >
            <Mail className="w-4 h-4 text-[#81C784]" />
            <span>{secondaryBtnText}</span>
          </Link>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#20bd5a] transition-all text-sm shadow-soft-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Direct Desk</span>
          </a>
        </div>
      </div>
    </section>
  );
}
