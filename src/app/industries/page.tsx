import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/ui/CTASection";
import { api } from "@/lib/api";
import {
  Factory,
  Flame,
  Building,
  Utensils,
  Truck,
  Store,
  School,
  AlertCircle,
  FileCheck2,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | Sector-Specific Food Safety Assurance",
  description:
    "Tailored food safety systems and hygiene audit solutions for Food Manufacturing, Processing, Hospitality, Restaurants, Catering, Retail, and Educational Institutions.",
};

export const revalidate = 60;

const iconMap: Record<string, React.ElementType> = {
  "food-manufacturing": Factory,
  "food-processing": Flame,
  "hospitality-hotels": Building,
  "restaurants-cloud-kitchens": Utensils,
  "catering-services": Truck,
  "food-retail": Store,
  "educational-institutions": School,
};

export default async function IndustriesPage() {
  const industries = await api.getIndustries();

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Header: Proper Clean White with All Black Text */}
        <section className="bg-white py-14 sm:py-18 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8fafc] border border-slate-300 text-xs font-bold text-black shadow-sm">
                <Factory className="w-4 h-4 text-[#4CAF50]" />
                <span>Sector-Specific Advisory</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-black">
                Industries We Support
              </h1>
              <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                Food safety vulnerabilities vary profoundly between an automated processing plant, a luxury hotel banquet, and a university dining hall. We engineer sector-specific hazard controls.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Detailed Sections */}
        <section className="py-20 bg-surface-offwhite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {industries.map((ind) => {
              const Icon = iconMap[ind.slug] || Factory;

              return (
                <div
                  key={ind.id}
                  id={ind.slug}
                  className="bg-white rounded-3xl p-8 sm:p-12 border border-surface-border shadow-soft-sm scroll-mt-24 space-y-8"
                >
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-corporate to-forest text-white flex items-center justify-center shadow-soft-sm shrink-0">
                        <Icon className="w-7 h-7 text-fresh" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-corporate">
                          Sector 0{ind.order}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-heading font-black text-black">
                          {ind.name}
                        </h2>
                      </div>
                    </div>

                    <Link
                      href={`/contact?type=consultancy`}
                      className="inline-flex items-center gap-2 bg-navy-900 text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-corporate transition-colors shrink-0"
                    >
                      <span>Consult for {ind.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-fresh" />
                    </Link>
                  </div>

                  {/* Headline & Description */}
                  <div className="space-y-2">
                    <div className="text-base font-bold text-forest">{ind.headline}</div>
                    <p className="text-sm text-text-secondary leading-relaxed max-w-4xl">
                      {ind.description}
                    </p>
                  </div>

                  {/* 3 Columns: Challenges, Standards, How Haridra Helps */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    {/* Challenges */}
                    <div className="p-6 rounded-2xl bg-surface-offwhite border border-surface-border space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                        <AlertCircle className="w-4 h-4 text-amber-500" />
                        <span>Sector Challenges</span>
                      </div>
                      <ul className="space-y-2 text-xs text-text-secondary">
                        {ind.challenges.map((c, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Standards */}
                    <div className="p-6 rounded-2xl bg-surface-offwhite border border-surface-border space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-900">
                        <FileCheck2 className="w-4 h-4 text-corporate" />
                        <span>Regulatory Standards</span>
                      </div>
                      <ul className="space-y-2 text-xs text-text-secondary">
                        {ind.standards_and_regulations.map((s, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-corporate mt-1.5 shrink-0" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How Haridra Helps */}
                    <div className="p-6 rounded-2xl bg-forest-subtle/40 border border-forest/20 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest">
                        <CheckCircle2 className="w-4 h-4 text-forest" />
                        <span>Haridra&apos;s Solution</span>
                      </div>
                      <ul className="space-y-2 text-xs text-text-secondary">
                        {ind.how_haridra_helps.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-forest mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Customized Compliance for Your Sector"
          subtitle="Speak with our sector lead consultants to discuss audit requirements, layout reviews, or team training."
        />
      </main>

      <Footer />
    </>
  );
}
