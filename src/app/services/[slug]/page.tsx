import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/ui/CTASection";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { api, ServiceItem } from "@/lib/api";
import {
  ShieldCheck,
  ClipboardCheck,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Users,
  ArrowRight,
  AlertTriangle,
  Layers,
  Sparkles,
  HelpCircle,
  Building,
  Check
} from "lucide-react";

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const services = await api.getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const service = await api.getServiceBySlug(params.slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: `${service.title} | Haridra Food Safety Assurance`,
    description: service.short_description,
  };
}

export const revalidate = 60;

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = await api.getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    ClipboardCheck,
    CheckCircle2,
    Cpu,
    GraduationCap,
    Users,
  };

  const IconComponent = iconMap[service.icon_name] || ShieldCheck;

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Service Hero - Clean White with Solid Black Text */}
        <section className="bg-white text-black py-14 sm:py-20 border-b border-slate-200 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-bold text-black">
                <IconComponent className="w-4 h-4 text-[#004B87]" />
                <span>Service 0{service.order} • {service.category.replace('_', ' ').toUpperCase()}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-black leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                {service.tagline}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-black">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
                  <span>Customized Technical Protocol</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
                  <span>Confidential Advisory</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
                  <span>Audit-Verified Methodology</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content & Layout Grid */}
        <section className="py-20 bg-surface-offwhite border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Comprehensive Service Data */}
              <div className="lg:col-span-7 space-y-12">
                {/* Introduction */}
                <div className="bg-white rounded-3xl p-8 border border-surface-border shadow-soft-sm space-y-4">
                  <h2 className="text-xl font-heading font-bold text-black">
                    Service Overview
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {service.full_description}
                  </p>
                </div>

                {/* Problems Addressed */}
                {service.problems_addressed && service.problems_addressed.length > 0 && (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-heading">
                        Critical Operational Challenges
                      </span>
                      <h3 className="text-xl font-heading font-bold text-navy-900">
                        Operational Vulnerabilities We Resolve
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {service.problems_addressed.map((problem, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-white border border-surface-border flex items-start gap-3 shadow-soft-sm"
                        >
                          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-text-primary leading-relaxed">{problem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Scope of Services */}
                {service.scope_of_services && service.scope_of_services.length > 0 && (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-forest font-heading">
                        Deliverables & Action Items
                      </span>
                      <h3 className="text-xl font-heading font-bold text-navy-900">
                        Scope of Implementation
                      </h3>
                    </div>

                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft-sm space-y-3">
                      {service.scope_of_services.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 py-2 border-b border-slate-100 last:border-none">
                          <div className="p-1 rounded-full bg-forest-subtle text-forest shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4-Stage Process / Workflow */}
                {service.process_workflow && service.process_workflow.length > 0 && (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-corporate font-heading">
                        Systematic Execution
                      </span>
                      <h3 className="text-xl font-heading font-bold text-navy-900">
                        Engagement Workflow
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.process_workflow.map((step, idx) => (
                        <div
                          key={idx}
                          className="p-6 rounded-3xl bg-white border border-surface-border shadow-soft-sm space-y-2"
                        >
                          <div className="text-xl font-mono font-extrabold text-corporate">
                            {step.step}
                          </div>
                          <div className="text-sm font-bold text-navy-900">
                            {step.title}
                          </div>
                          <div className="text-xs text-text-secondary leading-relaxed">
                            {step.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Benefits */}
                {service.benefits && service.benefits.length > 0 && (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-fresh font-heading">
                        Measurable Impact
                      </span>
                      <h3 className="text-xl font-heading font-bold text-navy-900">
                        Tangible Business Benefits
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-forest-subtle/40 border border-forest/15 flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-text-primary leading-relaxed font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Target Audience */}
                {service.target_audience && service.target_audience.length > 0 && (
                  <div className="p-6 rounded-3xl bg-white border border-surface-border space-y-3">
                    <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider">
                      Ideal Target Facilities & Sectors:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.target_audience.map((aud, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-3 py-1.5 rounded-xl bg-surface-offwhite border border-surface-border text-navy-900"
                        >
                          {aud}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* FAQs */}
                {service.faqs && service.faqs.length > 0 && (
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-text-muted font-heading">
                        Common Clarifications
                      </span>
                      <h3 className="text-xl font-heading font-bold text-navy-900">
                        Frequently Asked Questions
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {service.faqs.map((faq, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-white border border-surface-border shadow-soft-sm space-y-2"
                        >
                          <div className="flex items-start gap-2.5 text-sm font-bold text-navy-900">
                            <HelpCircle className="w-4 h-4 text-corporate shrink-0 mt-0.5" />
                            <span>{faq.q}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed pl-6">
                            {faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Pre-populated Consultation Enquiry Form */}
              <div className="lg:col-span-5">
                <div className="sticky top-28 space-y-6">
                  <EnquiryForm
                    defaultType={service.category as any}
                    defaultSubject={`Consultation Request: ${service.title}`}
                    sourceContext={service.title}
                  />

                  {/* Secondary Quick Dial Box */}
                  <div className="p-5 rounded-2xl bg-navy-900 text-white text-xs space-y-2">
                    <div className="font-bold text-fresh uppercase tracking-wider">
                      Need Immediate Technical Scoping?
                    </div>
                    <p className="text-slate-300">
                      Our lead food safety consultants are available for immediate scoping discussions and plant walkthrough scheduling.
                    </p>
                    <div className="pt-1">
                      <a
                        href="tel:+919876543210"
                        className="font-bold text-white hover:text-fresh underline"
                      >
                        Call Direct Desk: +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>
              </div>

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
