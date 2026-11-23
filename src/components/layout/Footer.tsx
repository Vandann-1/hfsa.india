import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  FileCheck2,
  Award
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#14244E] text-slate-200 pt-16 pb-12 border-t-4 border-[#4CAF50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#233874]">
          
          {/* Column 1: Company Profile with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-md border border-white/20 flex items-center justify-center p-0.5 shrink-0">
                <Image
                  src="/images/haridra-logo.jpg"
                  alt="Haridra Food Safety Assurance Official Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl text-white tracking-tight">
                  HARIDRA
                </span>
                <span className="text-[10px] tracking-widest font-bold uppercase text-[#81C784] font-heading">
                  Food Safety Assurance Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Empowering food processors, commercial kitchens, and manufacturers with science-backed technical consultancy, independent hygiene audits, and internationally accredited workforce training.
            </p>

            <div className="pt-1 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1c326c] border border-[#2a4a9c] text-xs text-white">
                <GraduationCap className="w-4 h-4 text-[#81C784]" />
                <span className="font-medium">EOSH UK Accredited Training Partner Scope</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1c326c] border border-[#2a4a9c] text-xs text-slate-300">
                <Award className="w-4 h-4 text-[#81C784]" />
                <span>HACCP • GMP • ISO 22000 • FSSC 22000 Systems</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400">
              <span className="font-bold text-[#81C784]">Values:</span> Scientific Rigor • Absolute Transparency • Quality Assurance • Zero Compromise
            </div>
          </div>

          {/* Column 2: Advisory Services */}
          <div className="space-y-3">
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50]"></span>
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/food-safety-consultancy" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#81C784] group-hover:translate-x-1 transition-transform" /> 
                  <span>Food Safety Consultancy</span>
                </Link>
              </li>
              <li>
                <Link href="/services/food-safety-audits" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#81C784] group-hover:translate-x-1 transition-transform" /> 
                  <span>Food Safety Audits</span>
                </Link>
              </li>
              <li>
                <Link href="/services/quality-assurance" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#81C784] group-hover:translate-x-1 transition-transform" /> 
                  <span>Quality Assurance & QA</span>
                </Link>
              </li>
              <li>
                <Link href="/services/technical-consultancy" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#81C784] group-hover:translate-x-1 transition-transform" /> 
                  <span>Technical & Plant Layouts</span>
                </Link>
              </li>
              <li>
                <Link href="/services/professional-training" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#81C784] group-hover:translate-x-1 transition-transform" /> 
                  <span>Professional Training</span>
                </Link>
              </li>
              <li>
                <Link href="/services/industry-academia-collaboration" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#81C784] group-hover:translate-x-1 transition-transform" /> 
                  <span>Academic MoUs & Bootcamps</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Training & Qualifications */}
          <div className="space-y-3">
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50]"></span>
              Training & Courses
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/training-programs/haccp-implementation-practitioner" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#81C784] group-hover:translate-x-1 transition-transform" /> 
                  <span>HACCP Practitioner</span>
                </Link>
              </li>
              <li>
                <Link href="/training-programs/food-safety-internal-auditor" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#81C784] group-hover:translate-x-1 transition-transform" /> 
                  <span>Internal Auditor Course</span>
                </Link>
              </li>
              <li>
                <Link href="/training-programs/eosh-food-safety-hygiene-practitioner" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#81C784] group-hover:translate-x-1 transition-transform" /> 
                  <span>EOSH UK Hygiene Course</span>
                </Link>
              </li>
              <li>
                <Link href="/training-programs/good-manufacturing-practices-gmp" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#81C784] group-hover:translate-x-1 transition-transform" /> 
                  <span>GMP & Sanitation Practices</span>
                </Link>
              </li>
              <li>
                <Link href="/training-programs/food-safety-student-career-bootcamp" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#81C784] group-hover:translate-x-1 transition-transform" /> 
                  <span>Student Career Bootcamp</span>
                </Link>
              </li>
              <li>
                <Link href="/training-programs" className="text-[#81C784] font-semibold hover:underline flex items-center gap-1.5 pt-1">
                  <span>Explore Full Catalog →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Knowledge Hub */}
          <div className="space-y-3">
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50]"></span>
              Resources Hub
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/resources/food-safety-vs-food-quality-standards-compliance-framework" className="text-[#81C784] font-semibold hover:text-white transition-colors flex items-center gap-1.5 group">
                  <Sparkles className="w-3.5 h-3.5 text-[#81C784] shrink-0" /> 
                  <span>Food Safety vs Food Quality</span>
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#81C784] group-hover:translate-x-1 transition-transform" /> 
                  <span>Articles & Technical Guides</span>
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#81C784] group-hover:translate-x-1 transition-transform" /> 
                  <span>Industries We Support</span>
                </Link>
              </li>
              <li>
                <Link href="/collaborations" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#81C784] group-hover:translate-x-1 transition-transform" /> 
                  <span>University & Industry MoUs</span>
                </Link>
              </li>
              <li>
                <Link href="/resources#tools" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#81C784] group-hover:translate-x-1 transition-transform" /> 
                  <span>Audit SOP Checklists</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Office */}
          <div className="space-y-3">
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4CAF50]"></span>
              Corporate Desk
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#81C784] shrink-0 mt-0.5" />
                <span className="text-slate-300">Corporate Suite 402, Food & Bio-Innovation Park, Bangalore, Karnataka - 560001, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#81C784] shrink-0" />
                <a href="mailto:contact@haridrafoodsafety.com" className="hover:text-white transition-colors text-slate-300">
                  contact@haridrafoodsafety.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#81C784] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white font-semibold transition-colors text-white">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#81C784] shrink-0" />
                <span className="text-slate-300">Mon – Sat: 09:30 AM – 06:30 PM IST</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#4CAF50] hover:bg-[#388e3c] text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <span>WhatsApp Technical Advisory</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory & Institutional Quality Notice */}
        <div className="py-6 border border-[#233874] text-[11px] text-slate-300 leading-relaxed bg-[#0e1a3a] px-5 rounded-2xl mt-8">
          <p>
            <strong className="text-white">Institutional Transparency & Regulatory Notice:</strong> Haridra Food Safety Assurance Pvt. Ltd. operates as an independent technical consultancy, hygiene audit, quality assurance, and professional training organization. Haridra is not a statutory government licensing agency or government regulatory body. Statutory licenses and statutory inspection authorizations remain within the purview of designated statutory authorities. EOSH UK accreditation applies specifically and exclusively to the approved qualifications and verified course modules as documented in the official accreditation scope.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {currentYear} Haridra Food Safety Assurance Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/training-programs" className="hover:text-white transition-colors">Training</Link>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Desk</Link>
            <Link href="/admin-portal" className="text-[#81C784] hover:text-white transition-colors font-medium">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
