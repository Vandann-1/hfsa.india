"use client";

import React, { useState, useMemo } from "react";
import CourseCard from "@/components/ui/CourseCard";
import { CourseItem } from "@/lib/api";
import { Search, Filter, Award, GraduationCap, Check } from "lucide-react";

interface CourseCatalogProps {
  initialCourses: CourseItem[];
}

export default function CourseCatalog({ initialCourses }: CourseCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedMode, setSelectedMode] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [eoshOnly, setEoshOnly] = useState<boolean>(false);

  const categories = [
    { id: "all", label: "All Programs" },
    { id: "haccp", label: "HACCP & Hygiene" },
    { id: "quality", label: "Quality & Auditing" },
    { id: "processing", label: "Food Processing" },
    { id: "eosh", label: "EOSH-Accredited" },
    { id: "campus", label: "Campus & Career" },
  ];

  const filteredCourses = useMemo(() => {
    return initialCourses.filter((course) => {
      // Category filter
      if (selectedCategory === "eosh" && !course.is_eosh_accredited) return false;
      if (selectedCategory === "haccp" && !course.category_name?.toLowerCase().includes("haccp")) return false;
      if (selectedCategory === "quality" && !course.category_name?.toLowerCase().includes("quality")) return false;
      if (selectedCategory === "processing" && !course.category_name?.toLowerCase().includes("processing")) return false;
      if (selectedCategory === "campus" && !course.category_name?.toLowerCase().includes("campus")) return false;

      // EOSH only toggle
      if (eoshOnly && !course.is_eosh_accredited) return false;

      // Level filter
      if (selectedLevel !== "all" && course.level !== selectedLevel) return false;

      // Delivery mode filter
      if (selectedMode !== "all" && course.delivery_mode !== selectedMode) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesDesc = course.short_description.toLowerCase().includes(query);
        const matchesCode = course.code.toLowerCase().includes(query);
        return matchesTitle || matchesDesc || matchesCode;
      }

      return true;
    });
  }, [initialCourses, selectedCategory, selectedLevel, selectedMode, searchQuery, eoshOnly]);

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="p-6 rounded-3xl bg-white border border-surface-border shadow-soft-sm space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-text-muted absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search programs by title, code (e.g. HFSA-HACCP-201), or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 text-sm rounded-2xl border border-surface-border bg-surface-offwhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate/30 focus:border-corporate transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-semibold text-text-muted mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                if (cat.id === "eosh") setEoshOnly(true);
              }}
              className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#004B87] text-white shadow-soft-sm"
                  : "bg-surface-offwhite text-text-secondary hover:bg-[#e8f5e9] hover:text-[#2e7d32]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Secondary Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
          <div>
            <label className="block text-text-muted font-medium mb-1">Competency Level</label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-surface-border bg-surface-offwhite focus:bg-white text-navy-900 font-medium"
            >
              <option value="all">All Levels</option>
              <option value="Foundational">Foundational / Level 1</option>
              <option value="Intermediate">Intermediate / Level 2</option>
              <option value="Advanced">Advanced / Level 3</option>
            </select>
          </div>

          <div>
            <label className="block text-text-muted font-medium mb-1">Delivery Mode</label>
            <select
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-surface-border bg-surface-offwhite focus:bg-white text-navy-900 font-medium"
            >
              <option value="all">All Modes</option>
              <option value="Live Online">Live Interactive Online</option>
              <option value="Hybrid">Hybrid (Classroom + Online)</option>
              <option value="In-Person">In-Person / Campus</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={() => setEoshOnly(!eoshOnly)}
              className={`w-full py-2 px-3 rounded-xl border flex items-center justify-center gap-2 font-bold transition-all ${
                eoshOnly
                  ? "bg-[#2e7d32] text-white border-[#2e7d32] shadow-soft-sm"
                  : "bg-surface-offwhite text-text-secondary border-surface-border hover:bg-[#e8f5e9]"
              }`}
            >
              <Award className="w-3.5 h-3.5 text-[#81C784]" />
              <span>EOSH UK Accredited Only</span>
              {eoshOnly && <Check className="w-3.5 h-3.5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-text-muted">
        <span>Showing <strong>{filteredCourses.length}</strong> available programs</span>
        {(selectedCategory !== "all" || searchQuery || eoshOnly || selectedLevel !== "all" || selectedMode !== "all") && (
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedLevel("all");
              setSelectedMode("all");
              setSearchQuery("");
              setEoshOnly(false);
            }}
            className="text-corporate hover:underline font-semibold"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="p-12 rounded-3xl bg-white border border-surface-border text-center space-y-3">
          <GraduationCap className="w-12 h-12 text-slate-300 mx-auto" />
          <h4 className="text-base font-bold text-navy-900">No matching training programs found</h4>
          <p className="text-xs text-text-secondary max-w-sm mx-auto">
            Try adjusting your search query or filter settings. We also deliver customized corporate cohorts for specialized food categories.
          </p>
        </div>
      )}
    </div>
  );
}
