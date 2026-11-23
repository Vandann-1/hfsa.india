import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Clock,
  Laptop,
  CheckCircle,
  ArrowRight,
  Award,
} from "lucide-react";
import { CourseItem } from "@/lib/api";

interface CourseCardProps {
  course: CourseItem;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-surface-border hover:border-[#4CAF50]/60 transition-all duration-300 hover:shadow-soft-lg">
      <div>
        {/* Optional Course Image Banner */}
        {course.image_url ? (
          <div className="relative w-full h-44 overflow-hidden bg-navy-950">
            <Image
              src={course.image_url}
              alt={course.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono">
              <span className="bg-[#4CAF50] px-2 py-0.5 rounded text-white font-bold">{course.code}</span>
              <span className="text-[#81C784] font-semibold">Practical Lab Sessions</span>
            </div>
          </div>
        ) : null}

        <div className="p-6 sm:p-7">
          {/* Top Badges (if no image) */}
          {!course.image_url && (
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-[#e8f5e9] text-[#2e7d32]">
                {course.code}
              </span>
              {course.is_eosh_accredited ? (
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <Award className="w-3.5 h-3.5 text-[#2e7d32]" />
                  <span>EOSH UK Accredited</span>
                </span>
              ) : (
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                  {course.level} Level
                </span>
              )}
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-heading font-black text-black group-hover:text-[#004B87] transition-colors mb-2 leading-snug">
            {course.title}
          </h3>

          {/* Short description */}
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
            {course.short_description}
          </p>

          {/* Quick Meta Indicators */}
          <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-[#e8f5e9]/50 mb-4 text-xs text-text-primary">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#2e7d32] shrink-0" />
              <span className="line-clamp-1">{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Laptop className="w-3.5 h-3.5 text-[#004B87] shrink-0" />
              <span className="line-clamp-1">{course.delivery_mode}</span>
            </div>
          </div>

          {/* Accreditation Scope Note */}
          {course.is_eosh_accredited && (
            <div className="mb-4 p-3 rounded-xl bg-[#e8f5e9] border border-fresh-200 text-[11px] text-[#1b5e20] leading-snug">
              <strong className="font-bold">Accreditation Scope:</strong> Delivered under verified European Organization for Safety & Health (UK) qualification standards.
            </div>
          )}

          {/* Learning Outcomes snippet */}
          {course.learning_outcomes && course.learning_outcomes.length > 0 && (
            <div className="space-y-1.5 mb-4 text-xs text-text-secondary">
              <span className="font-bold text-text-primary block text-[11px] uppercase tracking-wider text-[#004B87]">
                Key Learning Competencies:
              </span>
              {course.learning_outcomes.slice(0, 2).map((item, idx) => (
                <div key={idx} className="flex items-start gap-1.5 line-clamp-1">
                  <CheckCircle className="w-3.5 h-3.5 text-[#4CAF50] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer & CTA */}
      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-text-muted uppercase tracking-wider block">Course Fee</span>
          <span className="text-xs font-bold text-[#004B87]">{course.fee.split('(')[0]}</span>
        </div>

        <Link
          href={`/training-programs/${course.slug}`}
          className="inline-flex items-center gap-1.5 bg-[#004B87] hover:bg-[#4CAF50] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-soft-sm"
        >
          <span>View Syllabus</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
