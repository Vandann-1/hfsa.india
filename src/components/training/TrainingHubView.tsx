"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AcademicCategory,
  CourseItem,
  EnquiryInput
} from "@/lib/api";
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
  Search,
  Check,
  Compass,
  ChevronRight,
  Clock,
  Layers,
  Send,
  AlertCircle
} from "lucide-react";

interface TrainingHubViewProps {
  categories: AcademicCategory[];
  professionalAwards: CourseItem[];
}

export default function TrainingHubView({
  categories,
  professionalAwards,
}: TrainingHubViewProps) {
  // Search & filter for professional awards
  const [awardSearch, setAwardSearch] = useState("");

  // Category tab for Academic categories
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>(
    categories[0]?.id || "cat-btech-food-tech"
  );

  // Dual Enquiry Form State
  const [enquiryPathway, setEnquiryPathway] = useState<"student" | "professional">("student");
  const [formData, setFormData] = useState<Partial<EnquiryInput>>({
    full_name: "",
    email: "",
    phone: "",
    organization: "",
    academic_background: "B.Tech Food Science and Technology",
    institution_name: "",
    year_of_study: "Final Year",
    course_name: "",
    designation: "",
    participants_count: "1 - 5 participants",
    preferred_mode: "Hybrid / Campus Workshop",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const activeCategory = categories.find((c) => c.id === selectedCategoryTab) || categories[0];

  const filteredAwards = professionalAwards.filter((award) => {
    if (!awardSearch.trim()) return true;
    const q = awardSearch.toLowerCase();
    return (
      award.title.toLowerCase().includes(q) ||
      award.short_description.toLowerCase().includes(q) ||
      award.code.toLowerCase().includes(q)
    );
  });

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setStatusMessage("");

    try {
      const payload: EnquiryInput = {
        full_name: formData.full_name || "",
        email: formData.email || "",
        phone: formData.phone || "",
        organization: enquiryPathway === "student" ? formData.institution_name : formData.organization,
        enquiry_type: enquiryPathway === "student" ? "student_training" : "professional_training",
        course_name: formData.course_name || (enquiryPathway === "student" ? "Student Academic Subject" : "Professional Award"),
        subject: `${enquiryPathway === "student" ? "[Student Enquiry]" : "[Professional Enquiry]"} ${formData.course_name || "Training Program"}`,
        academic_background: enquiryPathway === "student" ? formData.academic_background : undefined,
        institution_name: formData.institution_name,
        year_of_study: enquiryPathway === "student" ? formData.year_of_study : undefined,
        designation: enquiryPathway === "professional" ? formData.designation : undefined,
        participants_count: formData.participants_count,
        preferred_mode: formData.preferred_mode,
        message: formData.message || "Requesting detailed program syllabus, schedule, and cohort registration."
      };

      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error("Unable to submit your enquiry at this time.");
      }

      setFormStatus("success");
      setStatusMessage("Thank you! Your enquiry has been received. Our academic and technical training coordinators will contact you shortly with the syllabus and schedule.");
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        organization: "",
        academic_background: "B.Tech Food Science and Technology",
        institution_name: "",
        year_of_study: "Final Year",
        course_name: "",
        designation: "",
        participants_count: "1 - 5 participants",
        preferred_mode: "Hybrid / Campus Workshop",
        message: ""
      });
    } catch (err: unknown) {
      setFormStatus("error");
      setStatusMessage(err instanceof Error ? err.message : "Submission error occurred. Please try again.");
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-[#253443] font-sans selection:bg-[#E5F1FA] selection:text-[#153653]">
      {/* =========================================================================
          SECTION 1 — HERO
          ========================================================================= */}
      <section className="relative bg-gradient-to-b from-[#F2F7FB] via-white to-white pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-slate-200 overflow-hidden">
        {/* Subtle background geometric pattern */}
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#347EB7_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E5F1FA] border border-[#347EB7]/30 text-xs font-bold uppercase tracking-wider text-[#153653]">
                <span className="w-2 h-2 rounded-full bg-[#347EB7] animate-pulse"></span>
                <span>HARIDRA FOOD SAFETY ASSURANCE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-black leading-[1.12]">
                Building Knowledge. <br className="hidden sm:inline" />
                Developing Skills. <br className="hidden sm:inline" />
                Strengthening Food Safety.
              </h1>

              <p className="text-base sm:text-lg text-[#253443] font-normal leading-relaxed max-w-2xl">
                Explore industry-oriented learning opportunities and professional food safety training designed to connect academic knowledge with real-world industry requirements.
              </p>

              {/* Dual Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => scrollToSection("student-training")}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#153653] hover:bg-[#347EB7] text-white text-sm font-bold px-7 py-4 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <GraduationCap className="w-5 h-5 text-[#5BA4C9]" />
                  <span>Explore Student Training</span>
                </button>

                <button
                  onClick={() => scrollToSection("professional-training")}
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#F2F7FB] text-[#153653] text-sm font-bold px-7 py-4 rounded-xl border-2 border-[#153653] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Briefcase className="w-4 h-4 text-[#347EB7]" />
                  <span>Explore Professional Training</span>
                </button>
              </div>

              {/* Trust Indicators Bar */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#687786]">Academic Tracks</div>
                  <div className="text-lg font-black text-black">4 Disciplines</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#687786]">Specialized Subjects</div>
                  <div className="text-lg font-black text-black">20 Modules</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#687786]">Industry Qualifications</div>
                  <div className="text-lg font-black text-black">12 Awards</div>
                </div>
              </div>
            </div>

            {/* Right Column: Realistic Laboratory Photograph */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group bg-slate-900">
                <div className="relative h-[380px] sm:h-[460px] w-full">
                  <Image
                    src="/images/food-safety-training-lab.jpg"
                    alt="Food science students inspecting packaged food products in a laboratory"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  {/* Subtle blue editorial overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#153653]/85 via-[#153653]/25 to-transparent"></div>
                </div>

                {/* Overlaid Caption Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 text-[#153653] shadow-lg">
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#347EB7]"></span>
                      <span className="font-bold text-black font-heading">Applied Food Science Laboratory</span>
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-[#687786]">Practical Training</span>
                  </div>
                  <p className="text-[12px] text-[#253443] mt-1 leading-snug">
                    Real-world quality assessment, sensory evaluation, and microbiological hygiene testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — INTRODUCTION
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#347EB7] font-heading">
              Education & Industry Alignment
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-black tracking-tight">
              Learning That Connects Education With Industry.
            </h2>
            <p className="text-base text-[#253443] leading-relaxed">
              At Haridra Food Safety Assurance, we believe professional development begins with the right knowledge and practical understanding.
            </p>
            <p className="text-sm sm:text-base text-[#687786] leading-relaxed">
              Our training initiatives aim to bridge the gap between academic education and industry expectations by introducing students and professionals to important concepts related to food safety, quality, hygiene and industry practices.
            </p>
          </div>

          {/* Three Visual Highlights Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#F5F7F9] border border-slate-200 hover:border-[#347EB7]/40 transition-all duration-200 hover:shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E5F1FA] text-[#153653] flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#347EB7]" />
              </div>
              <h3 className="text-lg font-heading font-black text-black">
                Academic Learning
              </h3>
              <p className="text-xs sm:text-sm text-[#687786] leading-relaxed">
                Strengthen core scientific fundamentals with structured coursework aligned with university curricula across Food Technology, Agriculture, and Hospitality.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F5F7F9] border border-slate-200 hover:border-[#347EB7]/40 transition-all duration-200 hover:shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E5F1FA] text-[#153653] flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#347EB7]" />
              </div>
              <h3 className="text-lg font-heading font-black text-black">
                Practical Knowledge
              </h3>
              <p className="text-xs sm:text-sm text-[#687786] leading-relaxed">
                Step beyond theoretical textbooks with genuine factory SOPs, microbiological test procedures, temperature monitoring logs, and hygiene sanitation verifications.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F5F7F9] border border-slate-200 hover:border-[#347EB7]/40 transition-all duration-200 hover:shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#E5F1FA] text-[#153653] flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#347EB7]" />
              </div>
              <h3 className="text-lg font-heading font-black text-black">
                Industry Readiness
              </h3>
              <p className="text-xs sm:text-sm text-[#687786] leading-relaxed">
                Build the specific competencies, audit awareness, and technical vocabulary sought by food manufacturing plants, central kitchens, and quality assurance labs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — STUDENT TRAINING SECTION
          ========================================================================= */}
      <section id="student-training" className="py-20 bg-[#F2F7FB] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#347EB7]/30 text-xs font-bold text-[#153653]">
                <GraduationCap className="w-4 h-4 text-[#347EB7]" />
                <span>Student Capacity Building</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-heading font-black text-black tracking-tight leading-tight">
                Start Your Journey Towards a Career in the Food Industry.
              </h2>

              <p className="text-sm sm:text-base text-[#253443] leading-relaxed">
                Designed for students who want to strengthen their academic knowledge, explore specialized subjects and understand the practical requirements of the food industry.
              </p>

              {/* Student Training Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-[#253443]">
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#347EB7] shrink-0" />
                  <span>Food science laboratory practices</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#347EB7] shrink-0" />
                  <span>Food testing & quality assessment</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#347EB7] shrink-0" />
                  <span>Academic workshops & demonstrations</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#347EB7] shrink-0" />
                  <span>Industry-oriented learning activities</span>
                </div>
              </div>

              {/* Academic Transparency Note */}
              <div className="p-4 rounded-xl bg-white border-l-4 border-[#347EB7] text-xs text-[#687786] space-y-1">
                <span className="font-bold text-[#153653] block">Academic Transparency Notice:</span>
                <p>
                  Haridra Food Safety Assurance Pvt. Ltd. provides specialized industry-oriented training and enrichment modules to complement university education. Haridra does not award university degrees.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => scrollToSection("academic-backgrounds")}
                  className="inline-flex items-center gap-2 bg-[#153653] hover:bg-[#347EB7] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  <span>Explore Student Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/images/training-btech-food-tech.jpg"
                    alt="Students in food science lab inspecting food quality"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#153653]/90 via-transparent to-transparent"></div>
                </div>
                <div className="p-6 bg-white space-y-2">
                  <span className="text-[11px] font-mono font-bold text-[#347EB7] uppercase tracking-wider">
                    Practical Demonstration
                  </span>
                  <h4 className="text-base font-heading font-black text-black">
                    Bridging Classrooms with Factory QA Floors
                  </h4>
                  <p className="text-xs text-[#687786] leading-relaxed">
                    Interactive training exposes students to genuine raw material inspection forms, allergen segregation, and sensory grading systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — EXPLORE COURSES BY EDUCATIONAL BACKGROUND
          ========================================================================= */}
      <section id="academic-backgrounds" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#347EB7] font-heading">
              Academic Specialization Tracks
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-black tracking-tight">
              Explore Courses by Educational Background
            </h2>
            <p className="text-sm sm:text-base text-[#687786] leading-relaxed">
              Explore learning subjects directly relevant to your degree program. Select your academic discipline below to view the dedicated course modules.
            </p>
          </div>

          {/* Academic Discipline Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-slate-200 pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryTab(cat.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategoryTab === cat.id
                    ? "bg-[#153653] text-white shadow-sm"
                    : "bg-[#F5F7F9] text-[#253443] hover:bg-[#E5F1FA] border border-slate-200"
                }`}
              >
                {cat.degreeLabel}
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          <div className="bg-[#F5F7F9] rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-8">
            {/* Category Overview Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
              <div className="lg:col-span-4 relative h-60 w-full rounded-xl overflow-hidden border border-slate-200">
                <Image
                  src={activeCategory.image}
                  alt={activeCategory.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                />
              </div>

              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F1FA] text-[#153653] text-xs font-bold font-mono">
                  <span>DISCIPLINE TRACK</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-black">
                  {activeCategory.title}
                </h3>
                <p className="text-sm sm:text-base text-[#253443] leading-relaxed">
                  {activeCategory.intro}
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs font-medium text-[#687786]">
                  <span>5 Specialized Modules</span>
                  <span>•</span>
                  <span>Practical Case Studies</span>
                  <span>•</span>
                  <span>Industry Skill Bridging</span>
                </div>
              </div>
            </div>

            {/* 5 Subject Cards Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-heading font-black text-black">
                  Core Subject Modules for {activeCategory.degreeLabel}
                </h4>
                <span className="text-xs text-[#687786]">Click any subject for full details</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {activeCategory.subjects.map((subject, idx) => (
                  <Link
                    key={subject.id}
                    href={`/training-programs/${subject.slug}`}
                    className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#347EB7] transition-all duration-300 hover:shadow-md flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-[#E5F1FA] text-[#153653]">
                          {subject.code || `0${idx + 1}`}
                        </span>
                        <span className="text-[11px] text-[#687786] font-medium">Subject Module</span>
                      </div>

                      <h5 className="text-base sm:text-lg font-heading font-black text-black group-hover:text-[#347EB7] transition-colors leading-snug">
                        {subject.title}
                      </h5>

                      <p className="text-xs text-[#687786] line-clamp-3 leading-relaxed">
                        {subject.shortDescription}
                      </p>

                      {/* Focus Tag snippet */}
                      <div className="pt-2 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#347EB7]">Key Focus:</span>
                        <div className="text-[11px] text-[#253443] flex items-start gap-1 line-clamp-1">
                          <Check className="w-3.5 h-3.5 text-[#347EB7] shrink-0 mt-0.5" />
                          <span>{subject.focusAreas[0]}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#153653] group-hover:text-[#347EB7]">
                      <span>View Subject Details</span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — PROFESSIONAL FOOD SAFETY TRAINING (12 AWARDS)
          ========================================================================= */}
      <section id="professional-training" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#347EB7] font-heading">
                Industry Qualifications
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-black tracking-tight">
                Professional Food Safety Training for a Better Industry.
              </h2>
              <p className="text-sm sm:text-base text-[#687786] leading-relaxed">
                Practical, industry-focused programs for professionals, managers, supervisors, and food business operators.
              </p>
            </div>

            {/* Search Filter Bar */}
            <div className="w-full md:w-72 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search professional awards..."
                value={awardSearch}
                onChange={(e) => setAwardSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs text-black focus:outline-none focus:border-[#347EB7] bg-white"
              />
            </div>
          </div>

          {/* 12 Professional Awards Grid - Clean White Cards, NO Levels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAwards.map((award) => (
              <div
                key={award.id}
                className="group flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#347EB7] transition-all duration-300 hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-[#E5F1FA] text-[#153653]">
                      {award.code}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-[#F5F7F9] text-[#253443] border border-slate-200">
                      Professional Award
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-black text-black group-hover:text-[#347EB7] transition-colors leading-snug">
                    {award.title}
                  </h3>

                  <p className="text-xs text-[#687786] line-clamp-3 leading-relaxed">
                    {award.short_description}
                  </p>

                  {/* Target Audience Highlight */}
                  {award.target_audience && award.target_audience.length > 0 && (
                    <div className="p-3 rounded-xl bg-[#F5F7F9] border border-slate-200 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#153653] block">
                        Target Audience:
                      </span>
                      <p className="text-[11px] text-[#253443] line-clamp-2">
                        {award.target_audience.slice(0, 2).join(", ")}
                      </p>
                    </div>
                  )}

                  {/* Program Delivery Spec */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#687786] pt-1">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#347EB7] shrink-0" />
                      <span className="truncate">Flexible Schedule</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#347EB7] shrink-0" />
                      <span className="truncate">Modular Delivery</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setEnquiryPathway("professional");
                      setFormData((prev) => ({ ...prev, course_name: award.title }));
                      scrollToSection("enquiry-section");
                    }}
                    className="text-xs font-bold text-[#347EB7] hover:underline cursor-pointer"
                  >
                    Enquire Now
                  </button>

                  <Link
                    href={`/training-programs/${award.slug}`}
                    className="inline-flex items-center gap-1.5 bg-[#153653] hover:bg-[#347EB7] text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — HOW OUR TRAINING WORKS
          ========================================================================= */}
      <section className="py-20 bg-[#F5F7F9] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#347EB7] font-heading">
              Structured Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-black tracking-tight">
              How Our Training Works
            </h2>
            <p className="text-sm sm:text-base text-[#687786] leading-relaxed">
              A transparent, 4-step framework designed to deliver measurable learning outcomes for individuals and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-4 hover:border-[#347EB7]/40 transition-all">
              <span className="text-3xl font-heading font-black text-[#347EB7]">01</span>
              <h3 className="text-lg font-heading font-black text-black">Explore</h3>
              <p className="text-xs sm:text-sm text-[#687786] leading-relaxed">
                Review academic subjects or professional award programs aligned with your educational track or corporate facility needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-4 hover:border-[#347EB7]/40 transition-all">
              <span className="text-3xl font-heading font-black text-[#347EB7]">02</span>
              <h3 className="text-lg font-heading font-black text-black">Enquire</h3>
              <p className="text-xs sm:text-sm text-[#687786] leading-relaxed">
                Submit your details or institutional requirements for personalized syllabus guidance, schedule options, and fee structures.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-4 hover:border-[#347EB7]/40 transition-all">
              <span className="text-3xl font-heading font-black text-[#347EB7]">03</span>
              <h3 className="text-lg font-heading font-black text-black">Learn</h3>
              <p className="text-xs sm:text-sm text-[#687786] leading-relaxed">
                Engage in interactive, industry-grounded learning sessions with factory SOPs, hazard analysis cases, and practical reviews.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-4 hover:border-[#347EB7]/40 transition-all">
              <span className="text-3xl font-heading font-black text-[#347EB7]">04</span>
              <h3 className="text-lg font-heading font-black text-black">Develop</h3>
              <p className="text-xs sm:text-sm text-[#687786] leading-relaxed">
                Apply verified food safety competencies and continuous improvement practices to advance your career or operational standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — WHY CHOOSE HARIDRA
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#347EB7] font-heading">
              Our Core Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-black tracking-tight">
              Why Choose Haridra Food Safety Assurance
            </h2>
            <p className="text-sm sm:text-base text-[#687786] leading-relaxed">
              We stand apart through genuine industrial immersion, transparent institutional standards, and experienced professional mentors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#F5F7F9] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5F1FA] text-[#153653] flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-base sm:text-lg font-heading font-black text-black">
                Practical Orientation
              </h3>
              <p className="text-xs sm:text-sm text-[#687786] leading-relaxed">
                Real food processing plant case studies, factory SOPs, and regulatory inspection forms rather than abstract academic theory.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F5F7F9] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5F1FA] text-[#153653] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-base sm:text-lg font-heading font-black text-black">
                Industry-Aligned Curriculum
              </h3>
              <p className="text-xs sm:text-sm text-[#687786] leading-relaxed">
                Directly addressing the gap between university syllabi and modern statutory compliance requirements.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F5F7F9] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5F1FA] text-[#153653] flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-base sm:text-lg font-heading font-black text-black">
                Experienced Practitioners
              </h3>
              <p className="text-xs sm:text-sm text-[#687786] leading-relaxed">
                Learn directly from active food safety consultants, auditors, and technical hygiene specialists who audit factories every week.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F5F7F9] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5F1FA] text-[#153653] flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-base sm:text-lg font-heading font-black text-black">
                Academic & Career Enrichment
              </h3>
              <p className="text-xs sm:text-sm text-[#687786] leading-relaxed">
                Strengthens resume credentials and technical interview readiness for students targeting QA/QC and production engineering roles.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F5F7F9] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5F1FA] text-[#153653] flex items-center justify-center font-bold">
                5
              </div>
              <h3 className="text-base sm:text-lg font-heading font-black text-black">
                Flexible Delivery Formats
              </h3>
              <p className="text-xs sm:text-sm text-[#687786] leading-relaxed">
                Adaptive formats including campus workshops, corporate on-site factory training, and interactive hybrid modules.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#F5F7F9] border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E5F1FA] text-[#153653] flex items-center justify-center font-bold">
                6
              </div>
              <h3 className="text-base sm:text-lg font-heading font-black text-black">
                Institutional Trust & Standards
              </h3>
              <p className="text-xs sm:text-sm text-[#687786] leading-relaxed">
                Transparent accreditations where designated, verified certificate authentication, and respected industry credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — INSTITUTIONAL TRAINING & COLLABORATIONS
          ========================================================================= */}
      <section className="py-20 bg-[#153653] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#5BA4C9]">
                <Building2 className="w-4 h-4" />
                <span>Academia & Industry Partnerships</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight">
                Building Stronger Connections Between Academia and Industry.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Haridra actively collaborates with universities, agricultural colleges, hotel management departments, and food industry associations to elevate training standards.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#5BA4C9] shrink-0" />
                  <span>Campus Technical Workshops & Guest Lecture Series</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#5BA4C9] shrink-0" />
                  <span>Faculty Development Programs (FDPs) on Modern Food Standards</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#5BA4C9] shrink-0" />
                  <span>Student Internship Guidance & Factory Exposure Alignment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#5BA4C9] shrink-0" />
                  <span>Custom Corporate Cohorts for Food Manufacturing Plants</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setEnquiryPathway("professional");
                    setFormData((prev) => ({
                      ...prev,
                      course_name: "Institutional Collaboration / MoU Request"
                    }));
                    scrollToSection("enquiry-section");
                  }}
                  className="inline-flex items-center gap-2.5 bg-white text-[#153653] hover:bg-[#E5F1FA] text-xs sm:text-sm font-bold px-7 py-4 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <Users className="w-4 h-4 text-[#347EB7]" />
                  <span>Partner With Haridra for Institutional Training</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-heading font-black text-white">
                Institutional Partnership Scope
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We work directly with Deans, Heads of Departments, and Training & Placement Officers to tailor specialized curriculum add-ons that enhance graduating batch placement outcomes.
              </p>

              <div className="p-4 rounded-xl bg-white/10 border border-white/10 text-xs text-slate-300 space-y-1">
                <span className="font-bold text-white block">Official Verification:</span>
                <p>
                  Every participant completing our institutional cohorts receives a verifiable credential registered with Haridra Food Safety Assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9 — DUAL ENQUIRY SYSTEM
          ========================================================================= */}
      <section id="enquiry-section" className="py-20 bg-[#F2F7FB] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#347EB7] font-heading">
              Direct Enquiry
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-black tracking-tight">
              Enquire About Training Programs
            </h2>
            <p className="text-sm sm:text-base text-[#687786]">
              Select your pathway below to submit your training requirement. Our team will respond with course details, batch schedules, and fee concessions.
            </p>
          </div>

          {/* Dual Pathway Switcher Tabs */}
          <div className="flex rounded-2xl bg-slate-200 p-1.5 max-w-md mx-auto">
            <button
              type="button"
              onClick={() => setEnquiryPathway("student")}
              className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                enquiryPathway === "student"
                  ? "bg-white text-[#153653] shadow-sm"
                  : "text-[#687786] hover:text-[#153653]"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Pathway A: Student Enquiry</span>
            </button>

            <button
              type="button"
              onClick={() => setEnquiryPathway("professional")}
              className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                enquiryPathway === "professional"
                  ? "bg-white text-[#153653] shadow-sm"
                  : "text-[#687786] hover:text-[#153653]"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Pathway B: Professional Enquiry</span>
            </button>
          </div>

          {/* Enquiry Form Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            {formStatus === "success" ? (
              <div className="p-8 rounded-2xl bg-[#E5F1FA] border border-[#347EB7]/40 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#153653] text-white flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7 text-[#5BA4C9]" />
                </div>
                <h3 className="text-xl font-heading font-black text-black">
                  Enquiry Submitted Successfully
                </h3>
                <p className="text-xs sm:text-sm text-[#253443] max-w-lg mx-auto leading-relaxed">
                  {statusMessage}
                </p>
                <button
                  type="button"
                  onClick={() => setFormStatus("idle")}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#153653] text-white text-xs font-bold hover:bg-[#347EB7] transition-colors cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-6">
                {formStatus === "error" && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-black uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Priya Sharma"
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-black focus:outline-none focus:border-[#347EB7]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-black uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-black focus:outline-none focus:border-[#347EB7]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-black uppercase tracking-wider">
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-black focus:outline-none focus:border-[#347EB7]"
                    />
                  </div>

                  {/* Dynamic Fields based on Pathway */}
                  {enquiryPathway === "student" ? (
                    <>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-black uppercase tracking-wider">
                          College / University Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="University / Institute name"
                          value={formData.institution_name}
                          onChange={(e) => setFormData({ ...formData, institution_name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-black focus:outline-none focus:border-[#347EB7]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-black uppercase tracking-wider">
                          Degree / Academic Branch *
                        </label>
                        <select
                          value={formData.academic_background}
                          onChange={(e) => setFormData({ ...formData, academic_background: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-black focus:outline-none focus:border-[#347EB7] bg-white"
                        >
                          <option value="B.Tech Food Science and Technology">B.Tech Food Science & Technology</option>
                          <option value="B.Sc. Agriculture">B.Sc. Agriculture</option>
                          <option value="B.Sc. Food Science">B.Sc. Food Science</option>
                          <option value="B.Sc. Hotel Management">B.Sc. Hotel Management</option>
                          <option value="M.Sc. Microbiology / Biotechnology">M.Sc. Microbiology / Biotechnology</option>
                          <option value="Other Life Sciences Degree">Other Life Sciences Degree</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-black uppercase tracking-wider">
                          Year of Study
                        </label>
                        <select
                          value={formData.year_of_study}
                          onChange={(e) => setFormData({ ...formData, year_of_study: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-black focus:outline-none focus:border-[#347EB7] bg-white"
                        >
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          <option value="Final Year">Final Year</option>
                          <option value="Recent Graduate">Recent Graduate</option>
                        </select>
                      </div>

                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="text-xs font-bold text-black uppercase tracking-wider">
                          Subject of Interest
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Food Safety and Hygiene, Quality Control in Food Production, etc."
                          value={formData.course_name}
                          onChange={(e) => setFormData({ ...formData, course_name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-black focus:outline-none focus:border-[#347EB7]"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-black uppercase tracking-wider">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Food Manufacturing / Catering / Retail Company"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-black focus:outline-none focus:border-[#347EB7]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-black uppercase tracking-wider">
                          Designation / Job Role
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. QA Manager, Production Supervisor, Director"
                          value={formData.designation}
                          onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-black focus:outline-none focus:border-[#347EB7]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-black uppercase tracking-wider">
                          Batch / Participants Count
                        </label>
                        <select
                          value={formData.participants_count}
                          onChange={(e) => setFormData({ ...formData, participants_count: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-black focus:outline-none focus:border-[#347EB7] bg-white"
                        >
                          <option value="Individual (1 participant)">Individual (1 participant)</option>
                          <option value="Small Team (2 - 5 participants)">Small Team (2 - 5 participants)</option>
                          <option value="Department Batch (6 - 15 participants)">Department Batch (6 - 15 participants)</option>
                          <option value="Plant-Wide Cohort (15+ participants)">Plant-Wide Cohort (15+ participants)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="text-xs font-bold text-black uppercase tracking-wider">
                          Professional Award Program of Interest
                        </label>
                        <select
                          value={formData.course_name}
                          onChange={(e) => setFormData({ ...formData, course_name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-black focus:outline-none focus:border-[#347EB7] bg-white"
                        >
                          <option value="">-- Select Award Program --</option>
                          {professionalAwards.map((a) => (
                            <option key={a.id} value={a.title}>
                              {a.title} ({a.code})
                            </option>
                          ))}
                          <option value="Custom Corporate Cohort">Custom Corporate Cohort</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-bold text-black uppercase tracking-wider">
                      Specific Requirements / Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder={
                        enquiryPathway === "student"
                          ? "Please share syllabus, schedule for the upcoming batch, or college group details..."
                          : "Please share corporate cohort pricing, customized syllabus options, or on-site delivery schedule..."
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-black focus:outline-none focus:border-[#347EB7]"
                    ></textarea>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#687786]">
                    <ShieldCheck className="w-4 h-4 text-[#347EB7]" />
                    <span>Your information is handled strictly for academic and corporate enquiry follow-up.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#153653] hover:bg-[#347EB7] text-white text-xs font-bold px-8 py-4 rounded-xl transition-colors shadow-md disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#5BA4C9]" />
                    <span>{formStatus === "submitting" ? "Submitting Enquiry..." : "Submit Training Enquiry"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
