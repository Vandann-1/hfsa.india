import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/ui/CTASection";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { api } from "@/lib/api";
import {
  Award,
  ShieldCheck,
  Users,
  Check
} from "lucide-react";

interface CourseDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const courses = await api.getCourses();
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  const course = await api.getCourseBySlug(params.slug);
  if (!course) {
    return { title: "Program Not Found" };
  }
  return {
    title: `${course.title} (${course.code}) | Training & Certification`,
    description: course.short_description,
  };
}

export const revalidate = 60;

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = await api.getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Course Header Banner - Clean White Background with Solid Black Text */}
        <section className="bg-white text-black py-14 sm:py-20 border-b border-slate-200 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-black">
                  {course.code}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#e8f5e9] text-[#1b5e20] border border-[#c8e6c9]">
                  {course.category_name || "Food Safety Training"}
                </span>
                {course.is_eosh_accredited && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-[#e8f5e9] text-[#1b5e20] border border-[#81C784]">
                    <Award className="w-3.5 h-3.5 text-[#4CAF50]" />
                    <span>EOSH UK Accredited Qualification</span>
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-black leading-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                {course.short_description}
              </p>

              {/* Quick Specs Bar */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-black">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-soft-sm">
                  <div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Duration</div>
                  <div className="font-black text-black text-sm mt-0.5">{course.duration}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-soft-sm">
                  <div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Delivery Mode</div>
                  <div className="font-black text-black text-sm mt-0.5">{course.delivery_mode}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-soft-sm">
                  <div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Competency Level</div>
                  <div className="font-black text-black text-sm mt-0.5">{course.level}</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#e8f5e9] border border-[#c8e6c9] shadow-soft-sm">
                  <div className="text-[#1b5e20] text-[10px] uppercase font-bold tracking-wider">Course Fee</div>
                  <div className="font-black text-[#1b5e20] text-sm mt-0.5">{course.fee.split('(')[0]}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content & Layout Grid */}
        <section className="py-20 bg-surface-offwhite border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Course Syllabus, Objectives, and Scope */}
              <div className="lg:col-span-7 space-y-12">
                
                {/* Accreditation Scope Details */}
                {course.is_eosh_accredited ? (
                  <div className="p-6 rounded-3xl bg-forest-subtle/40 border border-forest/30 space-y-3">
                    <div className="flex items-center gap-2 text-forest font-bold text-xs uppercase tracking-wider">
                      <Award className="w-4 h-4" />
                      <span>Official Verified Accreditation Details</span>
                    </div>
                    <h3 className="text-base font-bold text-black">
                      EOSH UK Accredited Qualification Framework
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {course.accreditation_details}
                    </p>
                    <div className="pt-1 text-[11px] text-text-muted">
                      Accrediting Authority: European Organization for Safety and Health (UK). Verification available via the official EOSH UK candidate verification database upon course completion.
                    </div>
                  </div>
                ) : (
                  <div className="p-5 rounded-2xl bg-white border border-surface-border text-xs text-text-secondary flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#004B87] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-black">Awarding Standard:</strong> {course.accreditation_details || "Awarded by Haridra Food Safety Assurance Pvt. Ltd. Industry Technical Certificate."}
                    </div>
                  </div>
                )}

                {/* Program Overview */}
                <div className="bg-white rounded-3xl p-8 border border-surface-border shadow-soft-sm space-y-4">
                  <h2 className="text-xl font-heading font-black text-black">
                    Program Overview
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {course.full_description || course.short_description}
                  </p>
                </div>

                {/* Who Should Attend */}
                {course.target_audience && course.target_audience.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-black text-black">
                      Who Should Attend
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.target_audience.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-white border border-surface-border flex items-start gap-3 shadow-soft-sm"
                        >
                          <Users className="w-4 h-4 text-corporate shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-text-primary leading-relaxed font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Learning Outcomes */}
                {course.learning_outcomes && course.learning_outcomes.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-bold text-navy-900">
                      Learning Outcomes & Core Competencies
                    </h3>
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft-sm space-y-3">
                      {course.learning_outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-3 py-2 border-b border-slate-100 last:border-none">
                          <div className="p-1 rounded-full bg-forest-subtle text-forest shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium">
                            {outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Curriculum / Modules */}
                {course.curriculum && course.curriculum.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-heading font-bold text-navy-900">
                        Detailed Curriculum Breakdown
                      </h3>
                      <span className="text-xs font-semibold text-text-muted">
                        {course.curriculum.length} Core Modules
                      </span>
                    </div>

                    <div className="space-y-4">
                      {course.curriculum.map((mod, idx) => (
                        <div
                          key={idx}
                          className="p-6 rounded-3xl bg-white border border-surface-border shadow-soft-sm space-y-3"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold text-corporate uppercase tracking-wider">
                              {mod.module}
                            </span>
                          </div>
                          <h4 className="text-base font-heading font-bold text-navy-900">
                            {mod.title}
                          </h4>
                          <div className="pt-2 border-t border-slate-100 space-y-1.5">
                            {mod.topics.map((topic, tIdx) => (
                              <div key={tIdx} className="flex items-start gap-2 text-xs text-text-secondary">
                                <span className="w-1.5 h-1.5 rounded-full bg-forest mt-1.5 shrink-0" />
                                <span>{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Eligibility & Certificate Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-3xl bg-white border border-surface-border space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                      Eligibility & Prerequisites
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {course.eligibility}
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-white border border-surface-border space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-forest">
                      Certificate & Credential Award
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {course.certificate_details}
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column: Pre-populated Application & Enquiry Form */}
              <div className="lg:col-span-5">
                <div className="sticky top-28 space-y-6">
                  <EnquiryForm
                    defaultType="training"
                    defaultCourseName={course.title}
                    defaultSubject={`Enrollment Enquiry: ${course.code} - ${course.title}`}
                    sourceContext={course.code}
                  />

                  {/* Fee & Concession Note */}
                  <div className="p-5 rounded-2xl bg-surface-light border border-surface-border text-xs text-text-secondary space-y-1">
                    <div className="font-bold text-navy-900">Institutional & Student Concessions</div>
                    <p>
                      Special group fees apply for university student cohorts, corporate team nominations (5+ seats), and academic MoU partner colleges.
                    </p>
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
