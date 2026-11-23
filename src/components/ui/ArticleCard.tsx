import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, BookOpen, ArrowRight, User, Sparkles } from "lucide-react";
import { ArticleItem } from "@/lib/api";

interface ArticleCardProps {
  article: ArticleItem;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.published_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <article className="group flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-surface-border hover:border-[#4CAF50]/60 transition-all duration-300 hover:shadow-soft-lg">
      <div>
        {/* Optional Article Image Banner */}
        {article.image_url ? (
          <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-navy-950">
            <Image
              src={article.image_url}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
            <div className="absolute top-3 left-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#4CAF50] text-white shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {article.category_display || article.category.replace('_', ' ')}
              </span>
            </div>
          </div>
        ) : null}

        <div className="p-6 sm:p-7">
          {/* Meta badges if no image banner */}
          {!article.image_url && (
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#e8f5e9] text-[#2e7d32]">
                {article.category_display || article.category.replace('_', ' ')}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-text-muted">
                <Clock className="w-3.5 h-3.5 text-[#4CAF50]" />
                <span>{article.read_time}</span>
              </div>
            </div>
          )}

          {article.image_url && (
            <div className="flex items-center gap-1.5 text-xs text-text-muted mb-3">
              <Clock className="w-3.5 h-3.5 text-[#4CAF50]" />
              <span>{article.read_time}</span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-heading font-black text-black group-hover:text-[#004B87] transition-colors mb-3 leading-snug line-clamp-2">
            <Link href={`/resources/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-3 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#e8f5e9] text-[#2e7d32] flex items-center justify-center font-bold text-[10px]">
            <User className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-semibold text-text-primary line-clamp-1">{article.author_name}</div>
            <div className="text-[10px] text-text-muted">{formattedDate}</div>
          </div>
        </div>

        <Link
          href={`/resources/${article.slug}`}
          className="inline-flex items-center gap-1 text-[#004B87] font-bold hover:text-[#4CAF50] transition-colors"
        >
          <span>Read Analysis</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-[#4CAF50]" />
        </Link>
      </div>
    </article>
  );
}
