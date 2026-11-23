"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  GraduationCap,
  ClipboardCheck,
  CheckCircle2,
  Cpu,
  Users,
  ArrowRight,
  Sparkles,
  BookOpen,
  Factory,
  FileCheck2,
  ChevronRight,
  Sparkle
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [trainingDropdown, setTrainingDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  
  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileTrainingOpen, setMobileTrainingOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setTrainingDropdown(false);
    setResourcesDropdown(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const servicesList = [
    { title: "Food Safety Consultancy", href: "/services/food-safety-consultancy", icon: ShieldCheck, desc: "HACCP, GMP & compliance systems" },
    { title: "Food Safety Audits", href: "/services/food-safety-audits", icon: ClipboardCheck, desc: "Hygiene ratings & supplier verification" },
    { title: "Quality Assurance", href: "/services/quality-assurance", icon: CheckCircle2, desc: "Process standardization & QA controls" },
    { title: "Technical Consultancy", href: "/services/technical-consultancy", icon: Cpu, desc: "Sanitary engineering & plant layouts" },
    { title: "Professional Training", href: "/services/professional-training", icon: GraduationCap, desc: "Workforce & certified skills" },
    { title: "Academic Collaboration", href: "/services/industry-academia-collaboration", icon: Users, desc: "University MoUs & bootcamps" },
  ];

  const trainingList = [
    { title: "HACCP Implementation Practitioner", href: "/training-programs/haccp-implementation-practitioner", level: "Intermediate", tag: "Industry Core" },
    { title: "Food Safety Internal Auditor", href: "/training-programs/food-safety-internal-auditor", level: "Advanced", tag: "Auditor Track" },
    { title: "EOSH UK Hygiene Practitioner", href: "/training-programs/eosh-food-safety-hygiene-practitioner", level: "Accredited", badge: "EOSH UK" },
    { title: "Good Manufacturing Practices (GMP)", href: "/training-programs/good-manufacturing-practices-gmp", level: "Foundational", tag: "Plant Operations" },
    { title: "Student & Career Starter Bootcamp", href: "/training-programs/food-safety-student-career-bootcamp", level: "Foundational", tag: "Fast Track" },
  ];

  const resourcesList = [
    {
      title: "Food Safety vs Food Quality Guide",
      href: "/resources/food-safety-vs-food-quality-standards-compliance-framework",
      icon: Sparkle,
      badge: "Featured Comparison",
      desc: "Mandatory safety parameters vs quality attributes"
    },
    {
      title: "Articles & Knowledge Hub",
      href: "/resources",
      icon: BookOpen,
      desc: "Regulatory briefs, HACCP guides, and compliance notes"
    },
    {
      title: "Industries We Serve",
      href: "/industries",
      icon: Factory,
      desc: "Manufacturing, processing, QSR, cloud kitchens, cold chain"
    },
    {
      title: "Academic & Industry Collaborations",
      href: "/collaborations",
      icon: Users,
      desc: "University MoUs, student bootcamps & institutional tie-ups"
    },
    {
      title: "SOPs, Checklists & Templates",
      href: "/resources#tools",
      icon: FileCheck2,
      desc: "Audit checklists, temperature logs & hygiene guidelines"
    }
  ];

  return (
    <>
      {/* Top Corporate Notice Banner in requested Navy #004B87 */}
      <div className="bg-[#004B87] text-white text-xs py-2 px-4 border-b border-navy-900 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4CAF50] ring-2 ring-[#81C784]/40 animate-pulse"></span>
              <span>Haridra Food Safety Assurance Pvt. Ltd.</span>
              <span className="text-white/70 text-[11px] font-normal hidden lg:inline">| Technical Advisory & Professional Training</span>
            </span>
          </div>
          <div className="flex items-center gap-5 text-white">
            <span className="text-xs flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-[#81C784]" />
              <span className="text-white/80">Technical Desk:</span>
              <a href="tel:+919876543210" className="text-white font-bold hover:text-[#81C784] transition-colors">
                +91 98765 43210
              </a>
            </span>
            <span className="text-white/30">|</span>
            <Link
              href="/admin-portal"
              className="inline-flex items-center gap-1 text-white/90 hover:text-white transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#81C784]" />
              <span className="text-[11px] font-semibold">Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar - Clean Solid White with Proper Logo & All Black Text Links (No Glass/Blur) */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-white border-b border-slate-200 ${
          isScrolled ? "shadow-sm py-2.5" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Proper Official Brand Logo as provided by User */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-soft-sm border border-slate-200 flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform duration-200 shrink-0">
                <Image
                  src="/images/haridra-logo.jpg"
                  alt="Haridra Food Safety Assurance Official Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl tracking-tight text-black group-hover:text-[#004B87] transition-colors leading-tight">
                  HARIDRA
                </span>
                <span className="text-[10px] tracking-widest font-black uppercase text-[#004B87] font-heading">
                  Food Safety Assurance
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links: Proper White background with ALL BLACK TEXT */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={`px-3.5 py-2 text-sm font-bold rounded-lg transition-colors ${
                  isActive("/")
                    ? "text-black bg-[#e8f5e9] border border-[#c8e6c9]"
                    : "text-black hover:text-[#004B87] hover:bg-slate-100"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-3.5 py-2 text-sm font-bold rounded-lg transition-colors ${
                  isActive("/about")
                    ? "text-black bg-[#e8f5e9] border border-[#c8e6c9]"
                    : "text-black hover:text-[#004B87] hover:bg-slate-100"
                }`}
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <Link
                  href="/services"
                  className={`px-3.5 py-2 text-sm font-bold rounded-lg flex items-center gap-1.5 transition-colors ${
                    isActive("/services")
                      ? "text-black bg-[#e8f5e9] border border-[#c8e6c9]"
                      : "text-black hover:text-[#004B87] hover:bg-slate-100"
                  }`}
                >
                  Services
                  <ChevronDown className="w-4 h-4 text-black opacity-80" />
                </Link>

                {servicesDropdown && (
                  <div className="absolute top-full left-0 w-84 bg-white rounded-2xl shadow-soft-xl border border-slate-200 p-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="p-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                      <p className="text-xs font-black text-black uppercase tracking-wider">
                        Advisory & Compliance
                      </p>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#e8f5e9] text-[#1b5e20]">
                        Science-Backed
                      </span>
                    </div>
                    {servicesList.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#f8faf8] transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-[#e8f5e9] text-[#1b5e20] group-hover:bg-[#4CAF50] group-hover:text-white transition-colors mt-0.5 shrink-0">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-black group-hover:text-[#004B87] transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-slate-100 mt-1">
                      <Link
                        href="/services"
                        className="flex items-center justify-between text-xs font-bold text-[#004B87] p-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <span>View All Advisory Solutions</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#4CAF50]" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Training Programs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setTrainingDropdown(true)}
                onMouseLeave={() => setTrainingDropdown(false)}
              >
                <Link
                  href="/training-programs"
                  className={`px-3.5 py-2 text-sm font-bold rounded-lg flex items-center gap-1.5 transition-colors ${
                    isActive("/training-programs")
                      ? "text-black bg-[#e8f5e9] border border-[#c8e6c9]"
                      : "text-black hover:text-[#004B87] hover:bg-slate-100"
                  }`}
                >
                  Training
                  <ChevronDown className="w-4 h-4 text-black opacity-80" />
                </Link>

                {trainingDropdown && (
                  <div className="absolute top-full left-0 w-96 bg-white rounded-2xl shadow-soft-xl border border-slate-200 p-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="p-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                      <p className="text-xs font-black text-black uppercase tracking-wider">
                        Professional Certifications
                      </p>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#e8f5e9] text-[#1b5e20]">
                        EOSH UK Scope
                      </span>
                    </div>
                    {trainingList.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f8faf8] transition-colors group"
                      >
                        <div className="pr-2">
                          <div className="text-sm font-bold text-black group-hover:text-[#004B87] transition-colors line-clamp-1">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-600 font-medium flex items-center gap-2">
                            <span>Level: {item.level}</span>
                            {item.tag && <span className="text-[10px] font-bold text-[#1b5e20]">({item.tag})</span>}
                          </div>
                        </div>
                        {item.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 whitespace-nowrap">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-slate-100 mt-1">
                      <Link
                        href="/training-programs"
                        className="flex items-center justify-between text-xs font-bold text-[#004B87] p-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <span>Explore Full Training Catalog</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#4CAF50]" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setResourcesDropdown(true)}
                onMouseLeave={() => setResourcesDropdown(false)}
              >
                <Link
                  href="/resources"
                  className={`px-3.5 py-2 text-sm font-bold rounded-lg flex items-center gap-1.5 transition-colors ${
                    isActive("/resources") || isActive("/industries") || isActive("/collaborations")
                      ? "text-black bg-[#e8f5e9] border border-[#c8e6c9]"
                      : "text-black hover:text-[#004B87] hover:bg-slate-100"
                  }`}
                >
                  Resources
                  <ChevronDown className="w-4 h-4 text-black opacity-80" />
                </Link>

                {resourcesDropdown && (
                  <div className="absolute top-full left-0 w-96 bg-white rounded-2xl shadow-soft-xl border border-slate-200 p-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="p-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                      <p className="text-xs font-black text-black uppercase tracking-wider">
                        Knowledge, Industry & Insights
                      </p>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#4CAF50] text-white">
                        Hub
                      </span>
                    </div>
                    {resourcesList.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#f8faf8] transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-[#e8f5e9] text-[#1b5e20] group-hover:bg-[#4CAF50] group-hover:text-white transition-colors mt-0.5 shrink-0">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-black group-hover:text-[#004B87] transition-colors truncate">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 shrink-0">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-gray-600 font-medium line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-slate-100 mt-1 flex items-center justify-between px-2 py-1 text-xs text-gray-500">
                      <span>Includes regulatory updates & tools</span>
                      <Link href="/resources" className="font-bold text-[#004B87] hover:text-[#4CAF50]">
                        View Hub →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className={`px-3.5 py-2 text-sm font-bold rounded-lg transition-colors ${
                  isActive("/contact")
                    ? "text-black bg-[#e8f5e9] border border-[#c8e6c9]"
                    : "text-black hover:text-[#004B87] hover:bg-slate-100"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTAs with pure black text and primary green button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-1.5 text-xs font-black text-black hover:text-[#004B87] px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#4CAF50]" />
                <span>+91 98765 43210</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#4CAF50] hover:bg-[#388e3c] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200"
              >
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Enquire Now</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-black hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
            </button>
          </div>
        </div>

        {/* Clean, Mobile-Friendly Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
            {/* Quick Mobile Contact Header */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#e8f5e9] border border-fresh-200 mb-3">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#1b5e20]" />
                <span className="text-xs font-bold text-black">+91 98765 43210</span>
              </div>
              <a
                href="tel:+919876543210"
                className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#4CAF50] text-white"
              >
                Call Desk
              </a>
            </div>

            <Link
              href="/"
              className={`block px-3 py-2.5 text-base font-bold rounded-xl ${
                isActive("/") ? "bg-[#e8f5e9] text-black" : "text-black"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`block px-3 py-2.5 text-base font-bold rounded-xl ${
                isActive("/about") ? "bg-[#e8f5e9] text-black" : "text-black"
              }`}
            >
              About Us
            </Link>

            {/* Accordion: Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-base font-bold text-black rounded-xl hover:bg-slate-50"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 text-black transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-200">
                  <Link
                    href="/services"
                    className="block py-2 text-xs font-black text-[#004B87] border-b border-slate-200"
                  >
                    View All Services Overview →
                  </Link>
                  {servicesList.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block py-2 text-xs font-bold text-black hover:text-[#004B87] flex items-center justify-between"
                    >
                      <span>{s.title}</span>
                      <ChevronRight className="w-3 h-3 text-[#4CAF50]" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion: Training */}
            <div>
              <button
                onClick={() => setMobileTrainingOpen(!mobileTrainingOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-base font-bold text-black rounded-xl hover:bg-slate-50"
              >
                <span>Training Programs</span>
                <ChevronDown className={`w-4 h-4 text-black transition-transform ${mobileTrainingOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileTrainingOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-200">
                  <Link
                    href="/training-programs"
                    className="block py-2 text-xs font-black text-[#004B87] border-b border-slate-200"
                  >
                    View Full Training Catalog →
                  </Link>
                  {trainingList.map((t) => (
                    <Link
                      key={t.href}
                      href={t.href}
                      className="block py-2 text-xs font-bold text-black hover:text-[#004B87] flex items-center justify-between"
                    >
                      <span>{t.title}</span>
                      {t.badge ? (
                        <span className="text-[10px] bg-emerald-100 text-emerald-900 px-1.5 py-0.5 rounded font-bold">{t.badge}</span>
                      ) : (
                        <ChevronRight className="w-3 h-3 text-[#4CAF50]" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion: Resources */}
            <div>
              <button
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-base font-bold text-black rounded-xl hover:bg-slate-50"
              >
                <span>Resources & Knowledge</span>
                <ChevronDown className={`w-4 h-4 text-black transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileResourcesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-xl my-1 border border-slate-200">
                  {resourcesList.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="block py-2 text-xs font-bold text-black hover:text-[#004B87] flex items-center justify-between"
                    >
                      <span className="truncate pr-2">{r.title}</span>
                      <ChevronRight className="w-3 h-3 text-[#4CAF50] shrink-0" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`block px-3 py-2.5 text-base font-bold rounded-xl ${
                isActive("/contact") ? "bg-[#e8f5e9] text-black" : "text-black"
              }`}
            >
              Contact Us
            </Link>

            <Link
              href="/admin-portal"
              className="block px-3 py-2 text-xs font-bold rounded-xl text-[#004B87] bg-slate-100"
            >
              Admin Dashboard Portal
            </Link>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/contact"
                className="w-full text-center bg-[#4CAF50] hover:bg-[#388e3c] text-white font-bold py-3 rounded-xl shadow-sm text-sm"
              >
                Request a Consultation
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center border-2 border-[#1b5e20] text-[#1b5e20] font-bold py-2.5 rounded-xl text-sm hover:bg-[#e8f5e9]"
              >
                WhatsApp Technical Desk
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
