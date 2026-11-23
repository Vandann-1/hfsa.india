import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/ui/CTASection";
import ServiceCard from "@/components/ui/ServiceCard";
import CourseCard from "@/components/ui/CourseCard";
import ArticleCard from "@/components/ui/ArticleCard";
import { api } from "@/lib/api";
import {
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Building,
  GraduationCap,
  Users,
  Search,
  BookOpen,
  Compass,
  FileCheck2,
  Sparkles,
  PhoneCall,
  Activity,
  Factory,
  Utensils,
  Truck,
  Store,
  School,
  Flame,
  BadgeCheck,
  CheckCircle,
  Clock,
  Layers,
  FlaskConical,
  Sparkle
} from "lucide-react";

export const revalidate = 60;

export default async function HomePage() {
  const [services, courses, industries, articles] = await Promise.all([
    api.getServices(),
    api.getCourses(),
    api.getIndustries(),
    api.getArticles(),
  ]);

  const featuredCourses = courses.filter((c) => c.featured).slice(0, 3);
  const featuredArticles = articles.slice(0, 3);

  const stats = [
    { value: "150+", label: "Independent Audits Executed", desc: "Across manufacturing & hospitality" },
    { value: "1,200+", label: "Professionals Trained", desc: "Supervisors, QA & student batches" },
    { value: "100%", label: "Pre-Audit Preparedness", desc: "HACCP & GMP gap remediation" },
    { value: "25+", label: "Institutional MoUs", desc: "University & college tie-ups" },
  ];

  const whyHaridraPillars = [
    {
      title: "Industry-Oriented Learning",
      description: "Curricula built around real-world factory hazards, audit simulations, and factory floor compliance instead of abstract academic theory.",
      icon: GraduationCap,
    },
    {
      title: "Professional Expertise",
      description: "Science-backed advisory delivered by seasoned lead auditors, food technologists, and quality assurance practitioners.",
      icon: Award,
    },
    {
      title: "Quality-Focused Approach",
      description: "Comprehensive end-to-end systems that eliminate variability, safeguard shelf life, and prevent product contamination.",
      icon: ShieldCheck,
    },
    {
      title: "Practical Knowledge",
      description: "Actionable standard operating procedures (SOPs), CCP limits, and check sheets designed for frontline operators.",
      icon: FileCheck2,
    },
    {
      title: "Industry-Academia Collaboration",
      description: "Formal university MoUs, campus guest lectures, and student bridging bootcamps that generate career-ready talent.",
      icon: Users,
    },
    {
      title: "Continuous Development",
      description: "Ongoing technical guidance, CAPA verification, and hygiene monitoring that keep facilities prepared for statutory audits.",
      icon: Activity,
    },
  ];

  const approachSteps = [
    {
      step: "01",
      title: "Understand Requirements",
      description: "Comprehensive diagnostic discovery to understand your operational scale, product lines, and specific compliance targets.",
      icon: Search,
    },
    {
      step: "02",
      title: "Assess & Audit",
      description: "Objective physical walkthroughs, gap analyses, and microbiological risk evaluations to identify vulnerabilities.",
      icon: Compass,
    },
    {
      step: "03",
      title: "Guide & Standardize",
      description: "Authoring tailored HACCP plans, prerequisite hygiene controls, and robust standard operating procedures.",
      icon: ShieldCheck,
    },
    {
      step: "04",
      title: "Train & Empower",
      description: "Upskilling plant operators, supervisors, and students with practical competencies and certified qualifications.",
      icon: GraduationCap,
    },
    {
      step: "05",
      title: "Improve & Sustain",
      description: "Routine verification, internal audit schedules, and CAPA follow-through to ensure enduring food safety excellence.",
      icon: CheckCircle2,
    },
  ];

  const industryIcons: Record<string, React.ElementType> = {
    "food-manufacturing": Factory,
    "food-processing": Flame,
    "hospitality-hotels": Building,
    "restaurants-cloud-kitchens": Utensils,
    "catering-services": Truck,
    "food-retail": Store,
    "educational-institutions": School,
  };

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* SECTION 1: HERO with Navy #004B87 and Food Safety Green #4CAF50 */}
        <section className="relative overflow-hidden bg-surface-offwhite py-14 sm:py-20 lg:py-24 border-b border-surface-border">
          {/* Subtle mesh background */}
          <div className="absolute inset-0 hero-mesh-gradient pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Headline & Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f5e9] border border-fresh-200 text-xs font-bold text-[#2e7d32]">
                  <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse"></span>
                  <ShieldCheck className="w-4 h-4 text-[#2e7d32]" />
                  <span>Haridra Food Safety Assurance Pvt. Ltd.</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-black tracking-tight leading-[1.12]">
                  Elevating Food Safety Through{" "}
                  <span className="text-[#004B87]">Scientific Rigor,</span>{" "}
                  <span className="text-[#4CAF50]">Quality</span> & Audits.
                </h1>

                <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed max-w-2xl">
                  Empowering food manufacturers, commercial kitchens, students, and QA professionals with science-backed technical advisory, independent hygiene inspections, and EOSH UK-accredited professional education.
                </p>

                {/* CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#4CAF50] hover:bg-[#388e3c] text-white font-bold px-7 py-3.5 rounded-xl shadow-soft-md hover:shadow-soft-lg transition-all text-sm"
                  >
                    <span>Request a Consultation</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>

                  <Link
                    href="/training-programs"
                    className="inline-flex items-center justify-center gap-2 bg-white border-2 border-black hover:bg-black hover:text-white text-black font-bold px-6 py-3.5 rounded-xl shadow-soft-sm transition-all text-sm"
                  >
                    <GraduationCap className="w-4 h-4 text-[#4CAF50]" />
                    <span>Explore Training Catalog</span>
                  </Link>
                </div>

                {/* Trust and scope indicators */}
                <div className="pt-6 border-t border-surface-border/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-soft-sm">
                    <div className="font-bold text-black text-sm">HACCP & GMP</div>
                    <div className="text-gray-600 font-medium">Technical Consultancy</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-soft-sm">
                    <div className="font-bold text-[#1b5e20] text-sm">EOSH UK</div>
                    <div className="text-gray-600 font-medium">Accredited Partner Scope</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-soft-sm col-span-2 sm:col-span-1">
                    <div className="font-bold text-[#004B87] text-sm">Academia-Industry</div>
                    <div className="text-gray-600 font-medium">University Bridge MoUs</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Showcase */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Visual Container - Clean Solid Navy #004B87 */}
                  <div className="relative rounded-3xl bg-[#004B87] p-6 sm:p-7 text-white shadow-soft-xl overflow-hidden border border-[#003866]">
                    <div className="space-y-5 relative">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#4CAF50] animate-ping" />
                          <span className="text-xs uppercase font-mono tracking-wider text-[#81C784]">
                            Scientific Assurance
                          </span>
                        </div>
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-[#4CAF50]/30 text-[#81C784] border border-[#4CAF50]/40">
                          Accredited Scope
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#81C784]">
                          Compliance Matrix
                        </div>
                        <h2 className="text-xl sm:text-2xl font-heading font-black text-white leading-snug">
                          Evidence-Based Food Protection Systems
                        </h2>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          From raw ingredient receiving and thermal processing parameters to hygienic plant zoning and microbial swabs.
                        </p>
                      </div>

                      {/* Interactive cards within hero */}
                      <div className="space-y-2.5 pt-1">
                        <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <ShieldCheck className="w-4 h-4 text-[#81C784] shrink-0" />
                            <span className="text-xs font-semibold text-slate-100">HACCP Hazard Validation</span>
                          </div>
                          <span className="text-[10px] text-emerald-300 font-mono font-bold">Verified</span>
                        </div>

                        <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <Building className="w-4 h-4 text-[#81C784] shrink-0" />
                            <span className="text-xs font-semibold text-slate-100">Sanitary Zoning & Plant Design</span>
                          </div>
                          <span className="text-[10px] text-emerald-300 font-mono font-bold">Standard</span>
                        </div>

                        <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <GraduationCap className="w-4 h-4 text-[#81C784] shrink-0" />
                            <span className="text-xs font-semibold text-slate-100">EOSH UK Hygiene Qualifications</span>
                          </div>
                          <span className="text-[10px] text-emerald-300 font-mono font-bold">Accredited</span>
                        </div>
                      </div>

                      {/* Callout */}
                      <div className="pt-2 text-center">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#81C784] hover:text-white transition-colors"
                        >
                          <span>Connect with Technical Advisory Desk</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#4CAF50]" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Supporting Trust Badge */}
                  <div className="mt-4 p-4 rounded-2xl bg-white border border-surface-border shadow-soft-md flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-[#e8f5e9] text-[#2e7d32]">
                      <BadgeCheck className="w-5 h-5 text-[#4CAF50]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#004B87]">
                        Zero Unverified Claims Guarantee
                      </div>
                      <div className="text-[11px] text-text-secondary">
                        Accreditations and certifications are presented strictly within verified scopes.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 1.5: IMPACT NUMBERS / DATA STATS BAR */}
        <section className="bg-white py-10 border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {stats.map((stat, sIdx) => (
                <div key={sIdx} className="p-4 rounded-2xl bg-[#e8f5e9]/40 border border-[#c8e6c9]/60">
                  <div className="text-3xl sm:text-4xl font-heading font-black text-[#004B87] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#2e7d32] uppercase tracking-wider mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-text-secondary">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: FEATURED COMPARISON - FOOD SAFETY VS FOOD QUALITY (Using User Image 1) */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#f8faf8] border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Graphic Image Column */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white group">
                  <div className="relative w-full h-64 sm:h-80 md:h-96">
                    <Image
                      src="/images/food-safety-vs-quality.jpg"
                      alt="Food Safety vs Food Quality Infographic by Haridra"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-[#4CAF50] uppercase tracking-wider text-white">
                        Core Technical Comparison
                      </span>
                      <p className="text-sm font-bold text-white mt-1">
                        Mandatory Statutory Rules vs Customer Brand Attributes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data & Information Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f5e9] text-[#2e7d32] text-xs font-bold uppercase tracking-wider">
                  <Sparkle className="w-3.5 h-3.5 text-[#4CAF50]" />
                  <span>Featured Technical Advisory</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-heading font-black text-black leading-tight">
                  Food Safety vs. Food Quality:{" "}
                  <span className="text-[#004B87]">Understanding the Critical Line</span>
                </h2>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Conflating food safety with food quality creates major operational blind spots. While **Food Safety** is non-negotiable by statutory law (preventing foodborne illness, chemical toxins, and physical hazards), **Food Quality** dictates sensory delight, brix, texture, and brand loyalty.
                </p>

                {/* Quick Side-by-Side Comparison Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white border-2 border-[#004B87]/30 shadow-soft-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#004B87]">Food Safety</span>
                      <span className="text-[10px] bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded">Zero Tolerance</span>
                    </div>
                    <ul className="text-xs text-text-secondary space-y-1.5 pt-1">
                      <li className="flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#004B87] shrink-0" />
                        <span>Mandatory by Criminal / Statutory Law</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#004B87] shrink-0" />
                        <span>Pathogens, Heavy Metals, Allergens</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#004B87] shrink-0" />
                        <span>HACCP, CCPs, ISO 22000, FSSC</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border-2 border-[#4CAF50]/40 shadow-soft-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#2e7d32]">Food Quality</span>
                      <span className="text-[10px] bg-[#e8f5e9] text-[#2e7d32] font-bold px-2 py-0.5 rounded">Grade Standards</span>
                    </div>
                    <ul className="text-xs text-text-secondary space-y-1.5 pt-1">
                      <li className="flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4CAF50] shrink-0" />
                        <span>Customer Preference & Brand Specs</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4CAF50] shrink-0" />
                        <span>Taste, Aroma, Texture, Brix, Color</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4CAF50] shrink-0" />
                        <span>ISO 9001, Six Sigma, QCP Systems</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <Link
                    href="/resources/food-safety-vs-food-quality-standards-compliance-framework"
                    className="inline-flex items-center gap-2 bg-[#004B87] hover:bg-[#003866] text-white text-xs font-bold px-5 py-3 rounded-xl shadow-soft-sm transition-all"
                  >
                    <span>Read Complete Comparative Analysis</span>
                    <ArrowRight className="w-4 h-4 text-[#81C784]" />
                  </Link>
                  <Link
                    href="/services/food-safety-consultancy"
                    className="text-xs font-bold text-[#2e7d32] hover:underline px-2 py-2"
                  >
                    HACCP Consultancy Support →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: PRACTICAL LABORATORY & INSPECTION TRAINING (Using User Image 2) */}
        <section className="py-16 sm:py-20 bg-white border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Data & Content Column */}
              <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f5e9] text-[#2e7d32] text-xs font-bold uppercase tracking-wider">
                  <FlaskConical className="w-3.5 h-3.5 text-[#4CAF50]" />
                  <span>Hands-On Competency Framework</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-heading font-black text-black leading-tight">
                  Practical Laboratory Inspection &{" "}
                  <span className="text-[#4CAF50]">Factory Floor Training</span>
                </h2>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Unlike traditional theoretical lectures, our professional education immerses students, food inspectors, and factory line supervisors in realistic quality control scenarios: examining packaged products, verifying seal integrity, reading digital logs, and executing microbiological swabs.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#f8faf8] border border-slate-200 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#e8f5e9] text-[#2e7d32] flex items-center justify-center shrink-0 font-bold">
                      01
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-black">
                        Rapid Swabbing & ATP Hygiene Verification
                      </h4>
                      <p className="text-xs text-text-secondary">
                        Hands-on surface swabbing protocols to detect organic residues and microbial contamination within minutes.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#f8faf8] border border-slate-200 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#e8f5e9] text-[#2e7d32] flex items-center justify-center shrink-0 font-bold">
                      02
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-black">
                        Package Integrity & Shelf-Life Assessment
                      </h4>
                      <p className="text-xs text-text-secondary">
                        Simulating commercial product audits, leak detection, hermetic seal verification, and tamper-evident packaging controls.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#f8faf8] border border-slate-200 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#e8f5e9] text-[#2e7d32] flex items-center justify-center shrink-0 font-bold">
                      03
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-black">
                        Mock Audits & Objective Non-Conformance Grading
                      </h4>
                      <p className="text-xs text-text-secondary">
                        Documenting observations as Minor, Major, or Critical non-conformances with actionable CAPA follow-up plans.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href="/training-programs/food-safety-student-career-bootcamp"
                    className="inline-flex items-center gap-2 bg-[#4CAF50] hover:bg-[#388e3c] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-soft-sm transition-all"
                  >
                    <GraduationCap className="w-4 h-4 text-white" />
                    <span>Explore Lab Bootcamps & Courses</span>
                  </Link>
                </div>
              </div>

              {/* Lab Photo Column */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border-4 border-white group">
                  <div className="relative w-full h-72 sm:h-96 md:h-[420px]">
                    <Image
                      src="/images/food-safety-training-lab.jpg"
                      alt="Food safety trainees and inspectors conducting package quality inspections in laboratory"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-[#004B87] uppercase tracking-wider text-white">
                        Laboratory Session
                      </span>
                      <p className="text-sm font-bold text-white mt-1">
                        Active Quality Audit & Packaged Food Examination
                      </p>
                      <p className="text-[11px] text-slate-300">
                        Haridra Campus & Corporate Training Division
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: CORE ADVISORY SERVICES */}
        <section className="py-20 bg-surface-offwhite border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#2e7d32] font-heading block mb-2">
                  Comprehensive Offerings
                </span>
                <h2 className="text-2xl sm:text-4xl font-heading font-black text-black">
                  Core Advisory & Technical Solutions
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004B87] hover:text-[#4CAF50] transition-colors"
              >
                <span>View All 6 Specialized Services</span>
                <ArrowRight className="w-4 h-4 text-[#4CAF50]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} featured={index === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: WHY HARIDRA ADVANTAGE */}
        <section className="py-20 bg-white border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#004B87] font-heading">
                Why Partner With Us
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-black">
                The Haridra Assurance Advantage
              </h2>
              <p className="text-sm sm:text-base text-text-secondary">
                We combine scientific rigor, frontline factory audit experience, and structured educational design to deliver tangible improvements in food safety culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyHaridraPillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-surface-offwhite border border-surface-border hover:border-[#4CAF50]/60 transition-all hover:shadow-soft-md space-y-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-surface-border text-black flex items-center justify-center shadow-soft-sm">
                    <item.icon className="w-5 h-5 text-[#2e7d32]" />
                  </div>
                  <h3 className="text-lg font-heading font-black text-black">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: FEATURED TRAINING PROGRAMS */}
        <section className="py-20 bg-surface-offwhite border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f5e9] text-[#2e7d32] text-xs font-bold uppercase tracking-wider mb-3">
                  <GraduationCap className="w-4 h-4" />
                  <span>Platform-Grade Education</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-heading font-black text-black">
                  Featured Training & Certification Programs
                </h2>
                <p className="text-sm text-text-secondary mt-1 max-w-2xl">
                  Accredited international modules and industry-recognized certifications designed for students, plant executives, and quality managers.
                </p>
              </div>

              <Link
                href="/training-programs"
                className="inline-flex items-center gap-2 bg-[#004B87] text-white text-xs font-bold px-5 py-3 rounded-xl hover:bg-[#003866] transition-colors shadow-soft-sm shrink-0"
              >
                <span>Browse Full Course Catalog</span>
                <ArrowRight className="w-4 h-4 text-[#81C784]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            {/* EOSH UK accreditation disclosure banner */}
            <div className="mt-12 p-6 rounded-3xl bg-white border border-[#4CAF50]/30 shadow-soft-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#2e7d32] text-white mt-1 shrink-0">
                  <Award className="w-5 h-5 text-[#81C784]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black">
                    EOSH UK Accreditation Statement & Course Verification
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed max-w-3xl">
                    Haridra delivers select international hygiene qualifications under verified accreditation from EOSH (European Organization for Safety and Health, UK). Qualifications under this scope are verifiable via the official EOSH UK registry. Non-EOSH courses are certified directly under Haridra&apos;s institutional standards.
                  </p>
                </div>
              </div>
              <Link
                href="/training-programs/eosh-food-safety-hygiene-practitioner"
                className="text-xs font-bold text-[#2e7d32] hover:text-[#004B87] whitespace-nowrap underline shrink-0"
              >
                View EOSH Accredited Course →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 7: OUR 5-STAGE APPROACH */}
        <section className="py-20 bg-white border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#004B87] font-heading">
                Scientific Methodology
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-black">
                Our 5-Stage Systematic Approach
              </h2>
              <p className="text-sm sm:text-base text-text-secondary">
                From initial diagnostic discovery to routine verification, our structured workflow ensures sustained compliance and operational excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {approachSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative p-6 rounded-3xl bg-[#f8faf8] border border-surface-border shadow-soft-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-mono font-black text-slate-300">
                        {step.step}
                      </span>
                      <div className="p-2 rounded-xl bg-[#e8f5e9] text-[#2e7d32]">
                        <step.icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-heading font-bold text-black mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {idx < 4 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-[#4CAF50]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: INSIGHTS & KNOWLEDGE HUB */}
        <section className="py-20 bg-surface-offwhite border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#004B87] font-heading block mb-2">
                  Food Safety Knowledge Hub
                </span>
                <h2 className="text-2xl sm:text-4xl font-heading font-black text-black">
                  Technical Articles & Hygiene Guidance
                </h2>
              </div>
              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004B87] hover:text-[#4CAF50] transition-colors"
              >
                <span>View All Articles & Guides</span>
                <ArrowRight className="w-4 h-4 text-[#4CAF50]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: FINAL CONVERSION CTA */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
