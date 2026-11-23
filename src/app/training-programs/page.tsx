import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/ui/CTASection";
import CourseCatalog from "@/components/training/CourseCatalog";
import { api } from "@/lib/api";
import {
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Training Programs & Certifications | EOSH Scope",
  description:
    "Explore certified food safety training: HACCP Implementation, Internal Auditor certification, GMP & sanitary design, and verified EOSH UK accredited qualifications.",
};

export const revalidate = 60;

export default async function TrainingProgramsPage() {
  const courses = await api.getCourses();

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Platform Hero: Proper Clean White with All Black Text */}
        <section className="bg-white py-14 sm:py-18 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8fafc] border border-slate-300 text-xs font-bold text-black shadow-sm">
                <GraduationCap className="w-4 h-4 text-[#4CAF50]" />
                <span>Professional Education & Capacity Building</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-black">
                Food Safety Training & Technical Certifications
              </h1>
              <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                Practical, industry-oriented certifications and accredited modules designed to bridge academic education with factory-floor compliance realities.
              </p>
            </div>
          </div>
        </section>

        {/* EOSH UK Accreditation Transparency Box */}
        <section className="bg-white border-b border-surface-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-forest-subtle/40 border border-forest/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2e7d32] font-heading">
                  <Award className="w-4 h-4" />
                  <span>Verified EOSH UK Accreditation Scope</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-black">
                  Accreditation Notice & Verifiable Standard
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Haridra Food Safety Assurance Pvt. Ltd. is an accredited training initiative partner with <strong>EOSH (European Organization for Safety and Health, UK)</strong> for specific food safety and hygiene qualifications. Please note: accreditation applies strictly to designated course modules meeting verified EOSH standards and does not imply that every Haridra course is an EOSH certification. All credentials awarded under this scope are verifiable through official channels.
                </p>
              </div>

              <Link
                href="/training-programs/eosh-food-safety-hygiene-practitioner"
                className="inline-flex items-center gap-2 bg-[#2e7d32] text-white text-xs font-semibold px-5 py-3 rounded-xl hover:bg-[#1b5e20] transition-colors shadow-soft-sm shrink-0 whitespace-nowrap"
              >
                <span>View EOSH Course Details</span>
                <ArrowRight className="w-4 h-4 text-fresh" />
              </Link>
            </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section className="py-16 sm:py-20 bg-surface-offwhite border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CourseCatalog initialCourses={courses} />
          </div>
        </section>

        {/* Custom Corporate & Institutional Cohorts */}
        <section className="py-20 bg-white border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#004B87] font-heading">
                  Custom Cohorts
                </span>
                <h2 className="text-2xl sm:text-4xl font-heading font-black text-black">
                  Tailored Training for Enterprises & Universities
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Need to train an entire production shift, internal QA audit team, or graduating college batch? We build tailored syllabi incorporating your facility&apos;s specific product categories, equipment layouts, and standard operating procedures.
                </p>

                <div className="space-y-2 text-xs text-text-secondary pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>On-site plant workshops or live interactive remote cohorts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>Dedicated student fee concessions for academic MoU partners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                    <span>Comprehensive post-training competency assessments and records</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact?type=training"
                    className="inline-flex items-center gap-2 bg-navy-900 text-white text-xs font-semibold px-6 py-3.5 rounded-xl hover:bg-corporate transition-colors shadow-soft-sm"
                  >
                    <span>Request Corporate Cohort Proposal</span>
                    <ArrowRight className="w-4 h-4 text-fresh" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 p-8 rounded-3xl bg-surface-offwhite border border-surface-border space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-text-muted">
                  Institutional Training Tracks
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white border border-surface-border">
                    <div className="font-bold text-sm text-navy-900">Corporate Quality & Production Squads</div>
                    <div className="text-xs text-text-secondary mt-0.5">Focusing on deviation investigations, GMP enforcement, and audit defense.</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-surface-border">
                    <div className="font-bold text-sm text-navy-900">Hospitality & Culinary Teams</div>
                    <div className="text-xs text-text-secondary mt-0.5">Practical temperature logs, allergen cross-contact, and hygiene ratings.</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-surface-border">
                    <div className="font-bold text-sm text-navy-900">College Student Campus Bootcamps</div>
                    <div className="text-xs text-text-secondary mt-0.5">Resume-ready industrial skills designed to boost placement outcomes.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Elevate Your Team's Food Safety Competence"
          subtitle="Join hundreds of practitioners and students trained in practical, audit-ready hygiene and quality management systems."
        />
      </main>

      <Footer />
    </>
  );
}
