import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ClipboardCheck,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Users,
  ArrowRight
} from "lucide-react";
import { ServiceItem } from "@/lib/api";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  ClipboardCheck,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Users,
};

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const Icon = iconMap[service.icon_name] || ShieldCheck;

  return (
    <div
      className={`group relative flex flex-col justify-between bg-white rounded-3xl p-7 border transition-all duration-300 hover:shadow-soft-lg ${
        featured
          ? "border-[#4CAF50]/50 shadow-soft-md ring-1 ring-[#4CAF50]/20"
          : "border-surface-border hover:border-[#004B87]/40"
      }`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 p-3.5 rounded-2xl bg-[#e8f5e9] text-[#2e7d32] group-hover:bg-[#004B87] group-hover:text-white transition-all duration-300 shadow-soft-sm">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted px-2.5 py-1 rounded-full bg-[#f8faf8] border border-slate-200">
            Service 0{service.order}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-heading font-black text-black group-hover:text-[#004B87] transition-colors mb-2">
          {service.title}
        </h3>
        <p className="text-xs font-semibold text-[#2e7d32] mb-4 leading-relaxed line-clamp-1">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-6">
          {service.short_description}
        </p>

        {/* Scope highlights */}
        <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
          <div className="text-xs font-bold text-[#004B87] uppercase tracking-wider">
            Key Scope Areas:
          </div>
          {service.scope_of_services.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] mt-1.5 shrink-0" />
              <span className="line-clamp-1 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-2">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#e8f5e9]/70 group-hover:bg-[#004B87] group-hover:text-white text-[#004B87] text-xs font-bold transition-all duration-200"
        >
          <span>Explore Methodology & Scope</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
