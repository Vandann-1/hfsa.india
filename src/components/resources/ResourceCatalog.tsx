"use client";

import React, { useState, useMemo } from "react";
import ArticleCard from "@/components/ui/ArticleCard";
import { ArticleItem } from "@/lib/api";
import { Search, Filter, BookOpen } from "lucide-react";

interface ResourceCatalogProps {
  initialArticles: ArticleItem[];
}

export default function ResourceCatalog({ initialArticles }: ResourceCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Topics" },
    { id: "food_safety_awareness", label: "Food Safety Awareness" },
    { id: "hygiene_sanitation", label: "Hygiene & Sanitation" },
    { id: "food_quality", label: "Food Quality" },
    { id: "professional_development", label: "Professional Development" },
  ];

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      if (selectedCategory !== "all" && article.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(query);
        const matchesExcerpt = article.excerpt.toLowerCase().includes(query);
        return matchesTitle || matchesExcerpt;
      }
      return true;
    });
  }, [initialArticles, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search and Category Filter */}
      <div className="p-6 rounded-3xl bg-white border border-surface-border shadow-soft-sm space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-text-muted absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles by topic, regulation, or keyword (e.g. HACCP, temperature, allergen)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 text-sm rounded-2xl border border-surface-border bg-surface-offwhite focus:bg-white focus:outline-none focus:ring-2 focus:ring-corporate/30 focus:border-corporate transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-semibold text-text-muted mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#4CAF50]" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
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
      </div>

      {/* Showing count */}
      <div className="flex items-center justify-between text-xs text-text-muted">
        <span>Showing <strong>{filteredArticles.length}</strong> technical articles</span>
        {(selectedCategory !== "all" || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-corporate hover:underline font-semibold"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="p-12 rounded-3xl bg-white border border-surface-border text-center space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h4 className="text-base font-bold text-navy-900">No articles match your search</h4>
          <p className="text-xs text-text-secondary">
            Try a different search keyword or select another topic category.
          </p>
        </div>
      )}
    </div>
  );
}
