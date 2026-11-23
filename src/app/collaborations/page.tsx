import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/ui/CTASection";
import EnquiryForm from "@/components/forms/EnquiryForm";
import {
  Users,
  GraduationCap,
  Building2,
  Award,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Briefcase,
  FileCheck2,
  Handshake
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industry-Academia Collaborations | University MoUs & Training",
  description:
    "Explore Haridra's institutional partnerships, academic programs, student skill development bootcamps, and faculty development initiatives.",
};

export const revalidate = 60;

export default function CollaborationsPage() {
  const initiatives = [
    {
      title: "Institutional MoUs with Universities",
      description: "Structured multi-year memorandums of understanding with science and engineering colleges to integrate practical food safety modules into final-year curricula.",
      icon: Handshake,
    },
    {
      title: "On-Campus Certification Bootcamps",
      description: "Intensive 2-to-3 week bootcamps delivering verifiable practitioner skills in HACCP, GMP, and food plant hygiene for graduating students.",
      icon: GraduationCap,
    },
    {
      title: "Faculty Development Programs (FDP)",
      description: "Equipping professors and departmental lecturers with current industrial auditing protocols, Codex updates, and statutory inspection frameworks.",
      icon: BookOpen,
    },
    {
      title: "Student Industrial Project Guidance",
      description: "Mentoring students on authentic factory problem-solving, shelf-life verification protocols, and microbial root-cause investigations.",
      icon: Briefcase,
    },
    {
      title: "Campus Dining Hygiene Audits",
      description: "Objective hygiene ratings and water safety inspections of university dining halls and student hostels to protect campus health.",
      icon: Building2,
    },
    {
      title: "Corporate Talent Pipeline Bridging",
      description: "Connecting our certified student alumni with hiring food processors seeking audit-ready QA/QC and production personnel.",
      icon: Award,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Header: Proper Clean White with All Black Text */}
        <section className="bg-white py-14 sm:py-18 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8fafc] border border-slate-300 text-xs font-bold text-black shadow-sm">
                <Users className="w-4 h-4 text-[#4CAF50]" />
                <span>Industry-Academia Synergy</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-black">
                Collaborations & Institutional Partnerships
              </h1>
              <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                Empowering universities, colleges, and food enterprises through joint skill development initiatives, accredited technical programs, and research exchanges.
              </p>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-20 bg-surface-offwhite border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2e7d32] font-heading">
                Our Collaborative Model
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-black">
                Bridging Higher Education With Industrial Excellence
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                We believe that elevating industry standards starts in the classroom. Our partnerships give students the exact practical competencies corporate QA managers require.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {initiatives.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-surface-border shadow-soft-sm hover:border-corporate/40 transition-all hover:shadow-soft-md space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-corporate-subtle text-corporate flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-black">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-[#2e7d32] uppercase tracking-wider">
                      Initiative 0{idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Transparency & Application Form */}
        <section className="py-20 bg-white border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Guidelines & Framework */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#004B87] font-heading">
                  Partnership Guidelines
                </span>
                <h2 className="text-2xl sm:text-4xl font-heading font-black text-black">
                  How Institutions Can Partner With Haridra
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  We collaborate with recognized universities, autonomous institutions, and colleges offering degrees in Food Technology, Biotechnology, Microbiology, Nutrition, and Hospitality Management.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-2xl bg-surface-offwhite border border-surface-border space-y-1">
                    <div className="text-sm font-bold text-navy-900">1. Consultative Scoping</div>
                    <div className="text-xs text-text-secondary">
                      Our academic liaison team meets with Department Heads and Deans to evaluate curriculum goals and identify certification needs.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-offwhite border border-surface-border space-y-1">
                    <div className="text-sm font-bold text-navy-900">2. Formal MoU Signing</div>
                    <div className="text-xs text-text-secondary">
                      Clear definition of annual cohort sizes, value-added certification courses, and subsidized student fees.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-offwhite border border-surface-border space-y-1">
                    <div className="text-sm font-bold text-navy-900">3. Co-Branded Academic Delivery</div>
                    <div className="text-xs text-text-secondary">
                      Workshops delivered by seasoned lead auditors with comprehensive toolkits, case studies, and examination credentials.
                    </div>
                  </div>
                </div>

                {/* Transparency notice */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="font-bold">Institutional Transparency Policy</div>
                  <p>
                    Haridra displays formal partner logos and institutional affiliations only after formal MoU execution and reciprocal authorization. Unverified affiliations are not published.
                  </p>
                </div>
              </div>

              {/* Right Column: Institutional Inquiry Form */}
              <div className="lg:col-span-6">
                <EnquiryForm
                  defaultType="collaboration"
                  defaultSubject="Institutional Collaboration / University MoU Inquiry"
                  sourceContext="Academic Collaboration"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Empower Your Students With Industry-Ready Food Safety Skills"
          subtitle="Join our academic collaboration network to offer certified HACCP and quality management training on campus."
        />
      </main>

      <Footer />
    </>
  );
}
