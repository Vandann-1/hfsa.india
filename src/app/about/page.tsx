import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/ui/CTASection";
import { api } from "@/lib/api";
import {
  ShieldCheck,
  Target,
  Compass,
  CheckCircle2,
  Users,
  Award,
  ArrowRight,
  UserCheck,
  HeartHandshake,
  Lightbulb,
  Building2
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Institutional Profile & Quality Mission",
  description:
    "Learn about Haridra Food Safety Assurance Pvt. Ltd., our mission to elevate food industry standards, our core values, leadership team, and scientific approach.",
};

export const revalidate = 60;

export default async function AboutPage() {
  const team = await api.getTeam();

  const coreValues = [
    {
      name: "Integrity",
      description: "Uncompromising honesty, impartiality in auditing, and transparent reporting without commercial dilution.",
      icon: ShieldCheck,
    },
    {
      name: "Quality",
      description: "Excellence in every standard operating procedure, hazard analysis, and educational curriculum we design.",
      icon: Award,
    },
    {
      name: "Professionalism",
      description: "Scientific rigor, respect for operational timelines, and strict adherence to client confidentiality.",
      icon: UserCheck,
    },
    {
      name: "Innovation",
      description: "Leveraging modern food processing technology, digital temperature monitoring, and interactive learning methodologies.",
      icon: Lightbulb,
    },
    {
      name: "Food Safety Excellence",
      description: "Treating food safety not merely as a regulatory requirement, but as an ethical duty to consumers and society.",
      icon: HeartHandshake,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Page Header: Proper Clean White with All Black Text */}
        <section className="bg-white py-14 sm:py-18 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8fafc] border border-slate-300 text-xs font-bold text-black shadow-sm">
                <Building2 className="w-4 h-4 text-[#4CAF50]" />
                <span>Institutional Profile</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-black">
                About Haridra Food Safety Assurance
              </h1>
              <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                A dedicated food safety consultancy, quality assurance, technical training, and professional education organization.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1 & 2: Overview & Our Story */}
        <section className="py-20 bg-white border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#004B87] font-heading">
                  Our Background & Mandate
                </span>
                <h2 className="text-2xl sm:text-4xl font-heading font-black text-black leading-tight">
                  Bridging the Critical Chasm Between Academic Theory and Industrial Reality
                </h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Haridra Food Safety Assurance Pvt. Ltd. was founded on a fundamental conviction: food safety is not simply a checklist to pass an inspection, but an ethical responsibility towards every consumer, family, and community served by the food industry.
                </p>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Across food manufacturing plants, hospitality establishments, and catering commissaries, quality managers continually struggle with operational inconsistencies and audit readiness. Simultaneously, thousands of food science and biotechnology graduates enter the workforce each year with strong theoretical knowledge but limited practical understanding of industrial HACCP, root-cause CAPA, and prerequisite programs.
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  Haridra serves as the bridge: equipping food operations with robust preventative quality systems while delivering rigorous, accredited education that turns ambitious students into skilled food safety professionals.
                </p>
              </div>

              <div className="lg:col-span-5 p-8 rounded-3xl bg-surface-offwhite border border-surface-border space-y-6">
                <div className="p-4 rounded-2xl bg-white border border-surface-border space-y-2">
                  <div className="text-xs font-bold text-forest uppercase tracking-wider">
                    Official Company Name
                  </div>
                  <div className="text-base font-bold text-navy-900">
                    Haridra Food Safety Assurance Pvt. Ltd.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-surface-border space-y-2">
                  <div className="text-xs font-bold text-corporate uppercase tracking-wider">
                    Core Business Domain
                  </div>
                  <div className="text-xs text-text-secondary leading-relaxed">
                    Food Safety Education • Technical Consultancy • Hygiene Audits • Quality Assurance Solutions • Industry-Academia Collaboration
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-surface-border space-y-2">
                  <div className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                    Transparency Declaration
                  </div>
                  <div className="text-xs text-text-muted leading-relaxed">
                    Haridra is an independent professional consulting and technical education organization. We do not represent government statutory authorities or claim unverified certifications.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Vision & Mission */}
        <section className="py-20 bg-surface-offwhite border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-navy-900 text-white space-y-4 shadow-soft-lg">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-fresh flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">
                  Our Corporate Vision
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  To become a globally trusted, benchmark organization in food safety education, quality assurance engineering and professional skill development across the entire food supply ecosystem.
                </p>
              </div>

              {/* Mission Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-surface-border text-navy-900 space-y-4 shadow-soft-md">
                <div className="w-12 h-12 rounded-2xl bg-forest-subtle text-forest flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-navy-900">
                  Our Strategic Mission
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-fresh shrink-0 mt-0.5" />
                    <span>Promote food safety awareness and hygienic culture across all sectors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-fresh shrink-0 mt-0.5" />
                    <span>Develop practically skilled, audit-ready food safety professionals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-fresh shrink-0 mt-0.5" />
                    <span>Support food businesses in implementing robust regulatory compliance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-fresh shrink-0 mt-0.5" />
                    <span>Build sustainable industry-academia partnerships with higher education.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-fresh shrink-0 mt-0.5" />
                    <span>Encourage continuous professional development (CPD) in food operations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Core Values */}
        <section className="py-20 bg-white border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#004B87] font-heading">
                Guiding Principles
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-black">
                Our Core Values
              </h2>
              <p className="text-sm sm:text-base text-text-secondary">
                The institutional pillars that define every audit we conduct, system we author, and course we teach.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-surface-offwhite border border-surface-border text-center space-y-3 hover:border-corporate/40 transition-all hover:shadow-soft-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white mx-auto border border-surface-border flex items-center justify-center text-forest shadow-soft-sm">
                    <val.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-black">
                    {val.name}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Leadership Team (Editable Placeholders as strictly mandated) */}
        <section className="py-20 bg-surface-offwhite border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Users className="w-3.5 h-3.5" />
                <span>Governance & Advisory</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-black">
                Leadership Team & Advisory Board
              </h2>
              <p className="text-xs sm:text-sm text-text-muted">
                Official verified profiles will be published following final organizational sign-off. Representative leadership designations are shown below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="p-7 rounded-3xl bg-white border border-surface-border shadow-soft-sm space-y-4 relative"
                >
                  {member.is_placeholder && (
                    <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                      Profile Pending Official Verification
                    </span>
                  )}
                  <div>
                    <h3 className="text-lg font-heading font-bold text-black">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#004B87] mt-0.5">
                      {member.role}
                    </div>
                    {member.qualification && (
                      <div className="text-[11px] text-text-muted mt-0.5">
                        {member.qualification}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Commitment to Food Safety */}
        <section className="py-20 bg-white border-b border-surface-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2e7d32] font-heading">
              Our Institutional Pledge
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-black leading-tight">
              Our Uncompromising Commitment to Food Safety
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl mx-auto">
              We pledge to never compromise scientific rigor for commercial expediency. Every audit finding we document is objective; every training module we deliver is grounded in real manufacturing science; and every partnership we form is dedicated to safeguarding consumer health.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-navy-900 text-white text-xs font-semibold px-6 py-3.5 rounded-xl hover:bg-corporate transition-colors shadow-soft-sm"
              >
                <span>Explore Advisory Offerings</span>
                <ArrowRight className="w-4 h-4 text-fresh" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-slate-200 bg-surface-offwhite text-navy-900 text-xs font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <span>Contact Leadership Desk</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
