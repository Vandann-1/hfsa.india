import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/ui/CTASection";
import EnquiryForm from "@/components/forms/EnquiryForm";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Consultation Desk | Haridra Food Safety Assurance",
  description:
    "What's on your mind? Connect with Haridra Food Safety Assurance Pvt. Ltd. for technical consultancy, hygiene audits, corporate training cohorts, and university collaborations.",
};

interface ContactPageProps {
  searchParams: {
    type?: string;
    course?: string;
  };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const enquiryType = (searchParams?.type as any) || "consultancy";
  const courseName = searchParams?.course || "";

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-surface-offwhite">
        {/* CUSTOM HERO BANNER: Clean White Background with Crisp Black Text & Food Safety Specialist */}
        <section className="relative overflow-hidden bg-white text-black border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading, Subheading & Trust Highlights - All Solid Black Text */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-xs font-black text-black w-fit">
                  <Headphones className="w-3.5 h-3.5 text-[#004B87]" />
                  <span>Direct Advisory & Client Desk</span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-black leading-tight">
                    Contact Us
                  </h1>
                  <p className="text-lg sm:text-2xl font-bold text-black max-w-lg leading-snug">
                    What&apos;s on your mind? How can we help you today? We&apos;re here for you.
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-700 max-w-md leading-relaxed font-normal">
                  Whether you are planning a plant HACCP rollout, scheduling an independent hygiene audit, or arranging student certifications, our senior lead auditors and technical consultants are ready to assist.
                </p>

                {/* Quick Trust Badges with Crisp Black Text */}
                <div className="pt-2 flex flex-wrap items-center gap-5 text-xs sm:text-sm font-bold text-black">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
                    <span>Average Response: &lt; 2 Hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4CAF50]" />
                    <span>Zero Obligation Scoping Call</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Distinct Professional Food Safety Consultant Photo */}
              <div className="lg:col-span-6 relative">
                <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden shadow-soft-xl border border-slate-200">
                  {/* Professional Consultant Image */}
                  <Image
                    src="/images/food-safety-consultant.jpg"
                    alt="Professional Haridra food safety consultant and lead auditor at modern advisory desk"
                    fill
                    className="object-cover object-center"
                    priority
                  />

                  {/* Clean gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Live Desk Badge */}
                  <div className="absolute bottom-5 right-5 z-20 bg-white/95 backdrop-blur-md text-black px-4 py-2.5 rounded-2xl shadow-lg border border-slate-200 flex items-center gap-3 max-w-xs">
                    <span className="w-3 h-3 rounded-full bg-[#4CAF50] ring-4 ring-[#4CAF50]/20 animate-pulse shrink-0" />
                    <div className="text-xs leading-tight">
                      <div className="font-black text-black">Technical Advisory Online</div>
                      <div className="text-slate-600 text-[11px] font-medium">Lead Auditors & QA Specialists Available</div>
                    </div>
                  </div>

                  {/* Clean Official Logo Badge in top left corner */}
                  <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-slate-200 flex items-center gap-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0">
                      <Image
                        src="/images/haridra-logo.jpg"
                        alt="Haridra Logo"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[11px] font-black text-black">HARIDRA ADVISORY</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Information & Form Grid */}
        <section className="py-16 sm:py-20 bg-surface-offwhite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* Left Column: Contact Cards & Info */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#004B87] font-heading">
                    Direct Technical Desk
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-black text-black mt-1">
                    Connect With Our Advisors
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">
                    Choose your preferred communication channel for instant assistance.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="p-6 rounded-3xl bg-white border border-surface-border shadow-soft-sm flex items-start gap-4 hover:border-[#004B87]/40 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-[#e8f5e9] text-[#2e7d32] flex items-center justify-center shrink-0 shadow-soft-sm">
                      <Phone className="w-6 h-6 text-[#4CAF50]" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
                          Direct Consultation Hotline
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#e8f5e9] text-[#2e7d32]">
                          Direct Dial
                        </span>
                      </div>
                      <a href="tel:+919876543210" className="text-base font-bold text-[#004B87] hover:text-[#4CAF50] transition-colors block">
                        +91 98765 43210
                      </a>
                      <p className="text-xs text-text-secondary">
                        Direct connection to our client scoping and consulting desk.
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-6 rounded-3xl bg-white border border-surface-border shadow-soft-sm flex items-start gap-4 hover:border-[#004B87]/40 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-[#e8f5e9] text-[#2e7d32] flex items-center justify-center shrink-0 shadow-soft-sm">
                      <Mail className="w-6 h-6 text-[#4CAF50]" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="text-xs font-bold text-text-muted uppercase tracking-wider">
                        Official Correspondence
                      </div>
                      <a href="mailto:contact@haridrafoodsafety.com" className="text-sm sm:text-base font-bold text-[#004B87] hover:text-[#4CAF50] transition-colors block">
                        contact@haridrafoodsafety.com
                      </a>
                      <a href="mailto:training@haridrafoodsafety.com" className="text-xs text-[#2e7d32] font-semibold hover:underline block">
                        training@haridrafoodsafety.com (Education Desk)
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="p-6 rounded-3xl bg-white border border-surface-border shadow-soft-sm flex items-start gap-4 hover:border-[#4CAF50]/40 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-soft-sm">
                      <MessageSquare className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
                          WhatsApp Quick Desk
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          Fastest Reply
                        </span>
                      </div>
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-emerald-700 hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>+91 98765 43210</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <p className="text-xs text-text-secondary">
                        Fast turnaround for training schedules, batch inquiries, and audit quotes.
                      </p>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="p-6 rounded-3xl bg-white border border-surface-border shadow-soft-sm flex items-start gap-4 hover:border-[#004B87]/40 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 shadow-soft-sm">
                      <MapPin className="w-6 h-6 text-[#004B87]" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="text-xs font-bold text-text-muted uppercase tracking-wider">
                        Registered Corporate Address
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-black leading-relaxed">
                        Corporate Suite 402, Food & Bio-Innovation Park,<br />
                        Bangalore, Karnataka - 560001, India
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="p-4 rounded-2xl bg-[#e8f5e9]/70 border border-fresh-200 text-xs text-slate-800 font-medium flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#2e7d32] shrink-0" />
                    <span><strong className="text-black font-bold">Operating Hours:</strong> Monday to Saturday, 09:30 AM – 06:30 PM IST</span>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="rounded-3xl bg-white border border-surface-border p-4 shadow-soft-sm space-y-2">
                  <div className="flex items-center justify-between text-xs font-black text-black px-2">
                    <span>Office Location Map</span>
                    <span className="text-[11px] text-text-muted font-normal">Bangalore Central Innovation Hub</span>
                  </div>
                  <div className="w-full h-48 rounded-2xl bg-slate-100 relative overflow-hidden flex items-center justify-center border border-slate-200">
                    <iframe
                      title="Haridra Office Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.893664778148!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>

              {/* Right Column: Comprehensive Interactive Form */}
              <div className="lg:col-span-7">
                <EnquiryForm
                  defaultType={enquiryType}
                  defaultCourseName={courseName}
                  defaultSubject={courseName ? `Course Enrollment: ${courseName}` : ""}
                />
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
