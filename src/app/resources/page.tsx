import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/ui/CTASection";
import ResourceCatalog from "@/components/resources/ResourceCatalog";
import { api } from "@/lib/api";
import {
  BookOpen,
  Sparkles,
  Newspaper,
  ShieldCheck,
  FileCheck2,
  ArrowRight,
  Download,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

export const metadata: Metadata = {
  title: "Food Safety Knowledge Hub | Technical Articles & Hygiene Guidelines",
  description:
    "Expert technical articles, regulatory updates, HACCP implementation guidance, and factory hygiene insights by Haridra Food Safety Assurance.",
};

export const revalidate = 60;

export default async function ResourcesPage() {
  const articles = await api.getArticles();

  const auditTools = [
    {
      title: "HACCP 12-Step Implementation Checklist",
      desc: "Comprehensive diagnostic framework covering product description, verified flow diagrams, hazard identification, and CCP limit records.",
      format: "PDF Protocol Reference",
      category: "Advisory Template"
    },
    {
      title: "Cold-Chain & Food Danger Zone Temperature Log",
      desc: "Standardized shift monitoring check sheet for chillers (0-4°C), freezers (-18°C), and hot-holding bain-maries (63°C+).",
      format: "Excel / PDF Check Sheet",
      category: "Daily Operations"
    },
    {
      title: "Personal Hygiene & Health Declaration SOP",
      desc: "Mandatory sanitary rules for food handlers: handwashing steps, clean apron zoning, wound care, and illness reporting protocols.",
      format: "SSOP Standard Document",
      category: "Plant Sanitation"
    },
    {
      title: "Pre-Audit Statutory Walkthrough Checklist",
      desc: "Self-assessment checklist designed to identify pest ingress risks, drainage dead-legs, lighting lux levels, and calibration certificates.",
      format: "Audit Preparedness",
      category: "Compliance Ready"
    }
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
                <BookOpen className="w-4 h-4 text-[#4CAF50]" />
                <span>Knowledge & Research Desk</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-black">
                Food Safety Knowledge Hub
              </h1>
              <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                Science-backed guidance, plant hygiene best practices, regulatory compliance analyses, and continuing education tools for food manufacturing and hospitality.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Editorial Banner */}
        <section className="bg-white py-10 border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#e8f5e9] to-white border border-[#c8e6c9] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#4CAF50] text-white">
                  Featured Comparative Guide
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-black text-black">
                  Food Safety vs Food Quality: Essential Differences & Compliance Framework
                </h2>
                <p className="text-xs sm:text-sm text-text-secondary max-w-2xl">
                  Learn how mandatory statutory standards differ from commercial customer specifications, and how to build a unified FSQMS.
                </p>
              </div>
              <Link
                href="/resources/food-safety-vs-food-quality-standards-compliance-framework"
                className="inline-flex items-center gap-2 bg-[#004B87] hover:bg-[#003866] text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-soft-sm shrink-0"
              >
                <span>Read Full Analysis</span>
                <ArrowRight className="w-4 h-4 text-[#81C784]" />
              </Link>
            </div>
          </div>
        </section>

        {/* Articles Catalog */}
        <section className="py-16 sm:py-20 bg-surface-offwhite border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ResourceCatalog initialArticles={articles} />
          </div>
        </section>

        {/* SECTION: AUDIT TOOLS & SOP CHECKLISTS (#tools) */}
        <section id="tools" className="py-16 sm:py-20 bg-white border-b border-surface-border scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2e7d32] font-heading">
                Operational Reference Tools
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-black">
                Audit SOP Checklists & Compliance Templates
              </h2>
              <p className="text-sm text-text-secondary">
                Actionable inspection frameworks formulated by Haridra lead auditors to help operations streamline daily monitoring and inspection readiness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {auditTools.map((tool, tIdx) => (
                <div
                  key={tIdx}
                  className="p-6 rounded-3xl bg-[#f8faf8] border border-surface-border hover:border-[#4CAF50]/60 transition-all hover:shadow-soft-md flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#e8f5e9] text-[#2e7d32]">
                        {tool.category}
                      </span>
                      <span className="text-[11px] font-mono font-medium text-text-muted">
                        {tool.format}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-navy-900">
                      {tool.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 mt-4 flex items-center justify-between">
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4CAF50]" />
                      <span>Compliant with FSSAI & Codex guidelines</span>
                    </span>
                    <Link
                      href="/contact?type=tools"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004B87] hover:text-[#4CAF50] transition-colors"
                    >
                      <span>Request Template Access</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#4CAF50]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Stay Ahead of Evolving Food Standards"
          subtitle="Explore our certified training programs or consult with our technical specialists to benchmark your facility."
        />
      </main>

      <Footer />
    </>
  );
}
