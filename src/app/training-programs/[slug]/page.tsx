import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { api } from "@/lib/api";
import {
  Award,
  ShieldCheck,
  Users,
  Check,
  Clock,
  Laptop,
  GraduationCap,
  Briefcase,
  Layers,
  ArrowRight,
  BookOpen,
  FileCheck2
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
    return { title: "Program Not Found | Haridra Food Safety Assurance" };
  }
  return {
    title: `${course.title} (${course.code}) | Training & Education | Haridra`,
    description: course.short_description,
  };
}

export const revalidate = 60;

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = await api.getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  const allCourses = await api.getCourses();
  const relatedCourses = allCourses
    .filter((c) => c.slug !== course.slug && (c.category_name === course.category_name || c.program_type === course.program_type))
    .slice(0, 3);

  const isStudentSubject = course.program_type === "student_subject";

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-white text-[#253443]">
        {/* =========================================================================
            SECTION 1 — COURSE HEADER BANNER
            ========================================================================= */}
        <section className="bg-gradient-to-b from-[#F2F7FB] via-white to-white py-14 sm:py-20 border-b border-slate-200 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl space-y-5">
              {/* Badges Bar: Strict rule - NO course levels displayed */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#E5F1FA] text-[#153653] border border-[#347EB7]/30">
                  {course.code}
                </span>

                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F5F7F9] text-[#253443] border border-slate-200">
                  {course.category_name || (isStudentSubject ? "Academic Specialization" : "Professional Food Safety Training")}
                </span>

                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#153653] border border-slate-300">
                  {isStudentSubject ? "Academic Subject Module" : "Professional Award Program"}
                </span>

                {course.is_eosh_accredited && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-[#E5F1FA] text-[#153653] border border-[#347EB7]/40">
                    <Award className="w-3.5 h-3.5 text-[#347EB7]" />
                    <span>EOSH UK Accredited Scope</span>
                  </span>
                )}
              </div>

              {/* Title & Short Description */}
              <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-black leading-tight">
                {course.title}
              </h1>

              <p className="text-base sm:text-lg text-[#253443] leading-relaxed">
                {course.short_description}
              </p>

              {/* Quick Specs Bar (NO Levels, honest consultative placeholders) */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <div className="text-[#687786] text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#347EB7]" />
                    <span>Duration & Schedule</span>
                  </div>
                  <div className="font-bold text-black text-xs sm:text-sm">
                    {course.duration || "Subject to cohort schedule"}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <div className="text-[#687786] text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5 text-[#347EB7]" />
                    <span>Delivery Format</span>
                  </div>
                  <div className="font-bold text-black text-xs sm:text-sm">
                    {course.delivery_mode || "Classroom / Online / Corporate"}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
                  <div className="text-[#687786] text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#347EB7]" />
                    <span>Program Scope</span>
                  </div>
                  <div className="font-bold text-black text-xs sm:text-sm">
                    {isStudentSubject ? "Academic Bridging" : "Professional Qualification"}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#E5F1FA] border border-[#347EB7]/30 shadow-sm space-y-1">
                  <div className="text-[#153653] text-[10px] uppercase font-bold tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#347EB7]" />
                    <span>Fee Structure</span>
                  </div>
                  <div className="font-bold text-[#153653] text-xs sm:text-sm">
                    Concessions Available
                  </div>
                </div>
              </div>

              {/* Academic Transparency Note for Student Subjects */}
              {isStudentSubject && (
                <div className="p-4 rounded-xl bg-white border-l-4 border-[#347EB7] shadow-sm text-xs text-[#687786] space-y-1">
                  <span className="font-bold text-[#153653] block">Academic Transparency Notice:</span>
                  <p>
                    Haridra Food Safety Assurance Pvt. Ltd. provides specialized industry-oriented training and enrichment modules to complement university curricula. Haridra does not award university degrees.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2-10 — MAIN CONTENT & APPLICATION GRID
            ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column (Span 7): Curriculum, Scope, Applications */}
              <div className="lg:col-span-7 space-y-10">

                {/* SECTION 2 — PROGRAM OVERVIEW */}
                <div className="bg-[#F5F7F9] rounded-2xl p-7 border border-slate-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#347EB7]">
                    <BookOpen className="w-4 h-4" />
                    <span>Program Overview</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-heading font-black text-black">
                    Comprehensive Subject Understanding
                  </h2>
                  <p className="text-sm text-[#253443] leading-relaxed">
                    {course.full_description || course.short_description}
                  </p>
                </div>

                {/* SECTION 3 — WHO SHOULD ATTEND / TARGET AUDIENCE */}
                {course.target_audience && course.target_audience.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#347EB7]">
                      <Users className="w-4 h-4" />
                      <span>Target Audience</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading font-black text-black">
                      Who Should Attend This Program
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.target_audience.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-sm hover:border-[#347EB7]/40 transition-colors"
                        >
                          <Check className="w-4 h-4 text-[#347EB7] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-[#253443] font-medium leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SECTION 4 — WHAT YOU WILL LEARN / CORE COMPETENCIES */}
                {course.learning_outcomes && course.learning_outcomes.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#347EB7]">
                      <GraduationCap className="w-4 h-4" />
                      <span>Core Competencies</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading font-black text-black">
                      What You Will Learn
                    </h3>
                    <div className="p-6 rounded-2xl bg-[#F5F7F9] border border-slate-200 space-y-3">
                      {course.learning_outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-3 py-2 border-b border-slate-200/80 last:border-none">
                          <div className="w-5 h-5 rounded-full bg-[#E5F1FA] text-[#153653] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-[#347EB7]" />
                          </div>
                          <span className="text-xs sm:text-sm text-[#253443] font-medium leading-relaxed">
                            {outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SECTION 5 — PRACTICAL INDUSTRY APPLICATIONS */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#347EB7]">
                    <Briefcase className="w-4 h-4" />
                    <span>Workplace Impact</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-black text-black">
                    Practical Industry Applications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                      <h4 className="text-sm font-bold text-black flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#347EB7]"></span>
                        <span>Factory & Facility Compliance</span>
                      </h4>
                      <p className="text-xs text-[#687786] leading-relaxed">
                        Direct application to pre-operational hygiene audits, CCP log verification, and handling health department inspections.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                      <h4 className="text-sm font-bold text-black flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#347EB7]"></span>
                        <span>Quality Assurance & Testing</span>
                      </h4>
                      <p className="text-xs text-[#687786] leading-relaxed">
                        Execution of microbiological swab plans, raw material intake verification, and Certificate of Analysis (COA) reviews.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SECTION 6 & 7 — DELIVERY FORMAT & SCHEDULE PLACEHOLDER */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="p-6 rounded-2xl bg-[#F5F7F9] border border-slate-200 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#153653] flex items-center gap-1.5">
                      <Laptop className="w-4 h-4 text-[#347EB7]" />
                      <span>Delivery Formats</span>
                    </h4>
                    <p className="text-xs text-[#253443] leading-relaxed">
                      Available through Interactive Online Classrooms, On-Campus University Workshops, and Tailored On-Site Corporate Sessions for processing plants.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F5F7F9] border border-slate-200 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#153653] flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#347EB7]" />
                      <span>Schedule & Duration</span>
                    </h4>
                    <p className="text-xs text-[#253443] leading-relaxed">
                      {course.duration || "Subject to cohort schedule. Contact training coordinators for the upcoming academic calendar and corporate batch timelines."}
                    </p>
                  </div>
                </div>

                {/* SECTION 8 — ASSESSMENT & VERIFICATION */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
                  <h4 className="text-sm font-heading font-black text-black flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-[#347EB7]" />
                    <span>Assessment & Evaluation Standards</span>
                  </h4>
                  <p className="text-xs text-[#687786] leading-relaxed">
                    Participants undergo continuous case-based assignments, practical hazard identification simulations, and an objective end-of-module assessment to verify applied competency.
                  </p>
                </div>

                {/* SECTION 9 — CERTIFICATION & CREDENTIAL TRANSPARENCY */}
                <div className="p-6 rounded-2xl bg-[#E5F1FA] border border-[#347EB7]/30 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#153653]">
                    <Award className="w-4 h-4 text-[#347EB7]" />
                    <span>Certification Transparency</span>
                  </div>
                  <h4 className="text-base font-heading font-black text-black">
                    Credential Award & Verification Scope
                  </h4>
                  <p className="text-xs text-[#253443] leading-relaxed">
                    {course.certificate_details || "A verifiable Certificate of Completion is awarded by Haridra Food Safety Assurance Pvt. Ltd. upon meeting course evaluation criteria."}
                  </p>
                  {course.is_eosh_accredited ? (
                    <div className="pt-2 text-xs text-[#153653] border-t border-[#347EB7]/20">
                      <strong>EOSH UK Accredited:</strong> Issued under official European Organization for Safety and Health (UK) accredited scope. Candidate credentials can be authenticated via the official registry.
                    </div>
                  ) : (
                    <div className="pt-2 text-xs text-[#687786] border-t border-[#347EB7]/20">
                      <strong>Haridra Technical Award:</strong> Conferred under Haridra Industry Standards for Food Safety & Hygiene Assurance.
                    </div>
                  )}
                </div>

                {/* SECTION 10 — RELATED PROGRAMS */}
                {relatedCourses.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    <h3 className="text-lg font-heading font-black text-black">
                      Related Training Modules
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {relatedCourses.map((rel) => (
                        <Link
                          key={rel.id}
                          href={`/training-programs/${rel.slug}`}
                          className="group p-4 rounded-xl bg-[#F5F7F9] border border-slate-200 hover:border-[#347EB7] transition-all flex flex-col justify-between"
                        >
                          <div className="space-y-1.5">
                            <span className="text-[10px] font-mono font-bold text-[#153653]">{rel.code}</span>
                            <h5 className="text-xs font-bold text-black group-hover:text-[#347EB7] line-clamp-2 leading-snug">
                              {rel.title}
                            </h5>
                          </div>
                          <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-[#347EB7]">
                            <span>Details</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Right Column (Span 5): SECTION 11 — DIRECT COURSE ENQUIRY FORM */}
              <div className="lg:col-span-5">
                <div className="sticky top-28 space-y-6">
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
                    <div className="space-y-1.5 border-b border-slate-200 pb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#347EB7] font-heading">
                        Direct Application
                      </span>
                      <h3 className="text-xl font-heading font-black text-black">
                        Enquire About This Program
                      </h3>
                      <p className="text-xs text-[#687786]">
                        Submit your details to receive the comprehensive syllabus, cohort schedule, and concession terms.
                      </p>
                    </div>

                    <EnquiryForm
                      defaultType={isStudentSubject ? "training" : "training"}
                      defaultCourseName={course.title}
                      defaultSubject={`Enquiry: ${course.code} - ${course.title}`}
                      sourceContext={course.code}
                    />

                    {/* Concessions Notice */}
                    <div className="p-4 rounded-xl bg-[#F5F7F9] border border-slate-200 text-xs text-[#687786] space-y-1">
                      <div className="font-bold text-[#153653]">Institutional & Group Concessions</div>
                      <p>
                        Concessional fee structures apply for accredited university student batches, corporate team nominations (5+ seats), and institutional partner colleges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
