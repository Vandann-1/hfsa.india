import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/ui/CTASection";
import ServiceCard from "@/components/ui/ServiceCard";
import { api } from "@/lib/api";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Advisory & Technical Services | Food Safety Consultancy & Audits",
  description:
    "Explore Haridra's 6 core technical offerings: Food Safety Consultancy, Independent Audits, Quality Assurance, Technical Advisory, Professional Training, and Academic Collaborations.",
};

export const revalidate = 60;

export default async function ServicesPage() {
  const services = await api.getServices();

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Header Banner: Proper Clean White with All Black Text */}
        <section className="bg-white py-14 sm:py-18 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8fafc] border border-slate-300 text-xs font-bold text-black shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#4CAF50]" />
                <span>Enterprise Technical Advisory Solutions</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-black">
                Our Core Services & Solutions
              </h1>
              <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                Structured, science-backed consulting, auditing, quality assurance, and capacity building tailored for food manufacturers, hospitality groups, and educational institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-surface-offwhite border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2e7d32] font-heading">
                Specialized Practice Areas
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-black">
                End-to-End Food Quality & Compliance Architecture
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} featured={index === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Matrix & Transparency Notice */}
        <section className="py-20 bg-white border-b border-surface-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#004B87] font-heading">
                Scope & Transparency
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-black">
                Understanding Haridra&apos;s Technical Advisory Scope
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary max-w-2xl mx-auto">
                We believe in complete transparency. Review how our advisory, preparation, and auditing support interacts with statutory regulatory requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
              <div className="p-6 rounded-3xl bg-surface-offwhite border border-surface-border space-y-3">
                <div className="flex items-center gap-2 font-bold text-navy-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                  <span>What Haridra Delivers</span>
                </div>
                <ul className="space-y-2 text-text-secondary pl-6 list-disc">
                  <li>Comprehensive diagnostic gap analysis against national and Codex standards</li>
                  <li>Formulating and validating facility-specific HACCP plans and CCP limits</li>
                  <li>Designing SOPs, SSOPs, pest control schedules, and personnel hygiene systems</li>
                  <li>Independent first-party and second-party vendor hygiene inspection audits</li>
                  <li>Accredited training modules within verified EOSH UK scopes</li>
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-surface-offwhite border border-surface-border space-y-3">
                <div className="flex items-center gap-2 font-bold text-navy-900 text-sm">
                  <ShieldCheck className="w-4 h-4 text-corporate shrink-0" />
                  <span>Regulatory Boundaries</span>
                </div>
                <ul className="space-y-2 text-text-secondary pl-6 list-disc">
                  <li>Haridra prepares, guides, trains, and audits facilities to achieve compliance</li>
                  <li>Official statutory food licenses and legal permits are granted by statutory authorities</li>
                  <li>External third-party certification is issued by accredited certification bodies</li>
                  <li>We maintain complete independence from government enforcement agencies</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-navy-900 to-corporate text-white font-semibold text-xs py-3 px-6 rounded-xl hover:opacity-95 shadow-soft-sm transition-all"
              >
                <span>Request a Scoping Call for Your Plant</span>
                <ArrowRight className="w-4 h-4 text-fresh" />
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
