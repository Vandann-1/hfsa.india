import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/ui/CTASection";
import ArticleCard from "@/components/ui/ArticleCard";
import { api } from "@/lib/api";
import {
  Clock,
  User,
  Calendar,
  ArrowLeft,
  Share2,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from "lucide-react";

interface ArticleDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = await api.getArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const article = await api.getArticleBySlug(params.slug);
  if (!article) {
    return { title: "Article Not Found" };
  }
  return {
    title: `${article.seo_title || article.title} | Haridra Food Safety Knowledge Hub`,
    description: article.seo_description || article.excerpt,
  };
}

export const revalidate = 60;

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const article = await api.getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const allArticles = await api.getArticles();
  const relatedArticles = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const formattedDate = new Date(article.published_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-surface-offwhite">
        {/* Article Header: Proper Clean White with All Black Text */}
        <section className="bg-white py-14 sm:py-16 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-xs text-[#004B87] hover:underline font-bold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Knowledge Hub & Resources</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#e8f5e9] text-[#1b5e20] border border-[#c8e6c9] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#4CAF50]" />
                {article.category_display || article.category.replace('_', ' ')}
              </span>
              <div className="flex items-center gap-1 text-xs text-gray-600 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#4CAF50]" />
                <span>{article.read_time}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-black leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 pt-4 text-xs text-gray-700 border-t border-slate-200 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#f1f5f9] flex items-center justify-center font-bold text-black border border-slate-200">
                  <User className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="font-bold text-black">{article.author_name}</div>
                  <div className="text-[10px] text-gray-500">{article.author_title}</div>
                </div>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#4CAF50]" />
                <span>Published on {formattedDate}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-surface-border shadow-soft-sm space-y-8">
              
              {/* Optional Featured Graphic Banner */}
              {article.image_url && (
                <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                  <Image
                    src={article.image_url}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 sm:p-6 text-white">
                    <p className="text-xs sm:text-sm font-medium text-slate-200">
                      Technical Advisory Visual Reference • Haridra Food Safety Assurance
                    </p>
                  </div>
                </div>
              )}

              {/* Excerpt callout */}
              <div className="p-6 rounded-2xl bg-[#e8f5e9]/70 border-l-4 border-[#4CAF50] text-sm sm:text-base font-medium text-[#002747] leading-relaxed italic">
                &ldquo;{article.excerpt}&rdquo;
              </div>

              {/* Main formatted content */}
              <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-text-secondary space-y-6">
                {article.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={idx} className="text-xl sm:text-2xl font-heading font-black text-black pt-4 border-b border-slate-200 pb-2">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('#### ')) {
                    return (
                      <h4 key={idx} className="text-lg font-heading font-bold text-[#2e7d32] pt-2">
                        {paragraph.replace('#### ', '')}
                      </h4>
                    );
                  }
                  if (paragraph.startsWith('---')) {
                    return <hr key={idx} className="my-6 border-slate-200" />;
                  }
                  // Table detection
                  if (paragraph.includes('|') && paragraph.includes('\n|')) {
                    const rows = paragraph.trim().split('\n').filter(r => r.trim().startsWith('|'));
                    if (rows.length >= 2) {
                      const headerRow = rows[0].split('|').map(c => c.trim()).filter(Boolean);
                      const bodyRows = rows.slice(2).map(r => r.split('|').map(c => c.trim()).filter(Boolean));
                      return (
                        <div key={idx} className="overflow-x-auto my-6 rounded-2xl border border-slate-200 shadow-soft-sm">
                          <table className="w-full text-left text-xs sm:text-sm">
                            <thead className="bg-[#004B87] text-white">
                              <tr>
                                {headerRow.map((h, hIdx) => (
                                  <th key={hIdx} className="p-3 sm:p-4 font-bold tracking-wide">
                                    {h.replace(/\*\*/g, '')}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                              {bodyRows.map((row, rIdx) => (
                                <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-[#f8faf8]"}>
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className="p-3 sm:p-4 text-text-primary align-top font-medium">
                                      {cell.replace(/\*\*/g, '')}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                  }
                  if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
                    const lines = paragraph.split('\n');
                    return (
                      <ul key={idx} className="space-y-2 pl-4 list-disc text-sm sm:text-base text-text-secondary">
                        {lines.map((l, lIdx) => (
                          <li key={lIdx}>
                            {l.replace(/^[0-9]+\.\s+/, '').replace(/^-\s+/, '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={idx} className="text-sm sm:text-base leading-relaxed text-text-secondary">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Author Attribution Card */}
              <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#e8f5e9] text-[#2e7d32] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy-900">{article.author_name}</div>
                    <div className="text-xs text-text-secondary">{article.author_title}</div>
                    <div className="text-[11px] text-text-muted">Haridra Food Safety Assurance Pvt. Ltd.</div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004B87] hover:text-[#4CAF50] transition-colors"
                >
                  <span>Submit Technical Question to Desk</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#4CAF50]" />
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="pt-16 space-y-6">
                <h3 className="text-xl font-heading font-bold text-navy-900">
                  Related Technical Guidance & Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((rel) => (
                    <ArticleCard key={rel.id} article={rel} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <CTASection
          title="Need Specialized Food Safety or Quality Systems Advisory?"
          subtitle="Consult our lead auditors and food technologists for tailored HACCP implementation, mock audits, and plant compliance."
          primaryBtnText="Consult Our Technical Team"
          primaryBtnLink="/contact"
          secondaryBtnText="Explore Training Modules"
          secondaryBtnLink="/training-programs"
        />
      </main>

      <Footer />
    </>
  );
}
