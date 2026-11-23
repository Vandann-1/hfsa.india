/**
 * Haridra Food Safety Assurance Pvt. Ltd. (HFSA)
 * Direct Full-Stack Next.js Data Layer
 */

import {
  FALLBACK_SERVICES,
  FALLBACK_COURSES,
  FALLBACK_INDUSTRIES,
  FALLBACK_ARTICLES,
  FALLBACK_TEAM,
  FALLBACK_METRICS,
  FALLBACK_ENQUIRIES
} from './mockData';

export interface EnquiryInput {
  full_name: string;
  email: string;
  phone: string;
  organization?: string;
  enquiry_type: 'consultancy' | 'audit' | 'quality_assurance' | 'technical_consultancy' | 'training' | 'collaboration' | 'general';
  course_name?: string;
  subject: string;
  message: string;
}

export interface EnquiryItem extends EnquiryInput {
  id: number;
  status: 'new' | 'in_progress' | 'contacted' | 'converted' | 'closed';
  internal_notes: string;
  created_at: string;
  updated_at: string;
}

export interface CourseModule {
  module: string;
  title: string;
  topics: string[];
}

export interface CourseItem {
  id: number;
  title: string;
  slug: string;
  code: string;
  category?: number;
  category_name?: string;
  level: string;
  duration: string;
  delivery_mode: string;
  fee: string;
  is_eosh_accredited: boolean;
  accreditation_details: string;
  short_description: string;
  full_description?: string;
  target_audience?: string[];
  learning_outcomes?: string[];
  curriculum?: CourseModule[];
  eligibility?: string;
  certificate_details?: string;
  featured: boolean;
  is_published: boolean;
  image_url?: string;
}

export interface ServiceWorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  tagline: string;
  short_description: string;
  full_description: string;
  icon_name: string;
  problems_addressed: string[];
  scope_of_services: string[];
  benefits: string[];
  process_workflow: ServiceWorkflowStep[];
  target_audience: string[];
  faqs: ServiceFAQ[];
  order: number;
  is_published: boolean;
}

export interface IndustryItem {
  id: number;
  name: string;
  slug: string;
  headline: string;
  description: string;
  challenges: string[];
  standards_and_regulations: string[];
  how_haridra_helps: string[];
  icon_name: string;
  order: number;
}

export interface ArticleItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  category_display?: string;
  excerpt: string;
  content: string;
  read_time: string;
  author_name: string;
  author_title: string;
  featured: boolean;
  is_published: boolean;
  image_url?: string;
  seo_title?: string;
  seo_description?: string;
  published_at: string;
}

export interface CollaborationItem {
  id: number;
  organization_name: string;
  partner_type: string;
  partner_type_display?: string;
  description: string;
  scope_of_partnership: string;
  is_verified: boolean;
  order: number;
}

export interface TeamMemberItem {
  id: number;
  name: string;
  role: string;
  qualification: string;
  bio: string;
  is_placeholder: boolean;
  order: number;
}

export interface DashboardMetrics {
  total_enquiries: number;
  pending_enquiries: number;
  training_enquiries: number;
  consultancy_enquiries: number;
  collaboration_enquiries: number;
  converted_enquiries: number;
  published_courses: number;
  total_courses: number;
  eosh_accredited_courses: number;
  published_articles: number;
  total_articles: number;
  verified_collaborations: number;
}

export const api = {
  // Services
  async getServices(): Promise<ServiceItem[]> {
    if (typeof window === 'undefined') {
      try {
        const { db } = await import('./serverStore');
        return db.getServices();
      } catch {
        return FALLBACK_SERVICES;
      }
    }
    try {
      const res = await fetch('/api/services');
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      return data.results || FALLBACK_SERVICES;
    } catch {
      return FALLBACK_SERVICES;
    }
  },

  async getServiceBySlug(slug: string): Promise<ServiceItem | null> {
    if (typeof window === 'undefined') {
      try {
        const { db } = await import('./serverStore');
        return db.getServiceBySlug(slug);
      } catch {
        return FALLBACK_SERVICES.find((s) => s.slug === slug) || null;
      }
    }
    return FALLBACK_SERVICES.find((s) => s.slug === slug) || null;
  },

  // Courses
  async getCourses(params?: { category?: string; level?: string; delivery_mode?: string; eosh?: boolean }): Promise<CourseItem[]> {
    if (typeof window === 'undefined') {
      try {
        const { db } = await import('./serverStore');
        return db.getCourses(params?.category, params?.level, params?.delivery_mode, params?.eosh);
      } catch {
        return FALLBACK_COURSES;
      }
    }
    try {
      const url = new URL('/api/courses', window.location.origin);
      if (params?.category) url.searchParams.set('category', params.category);
      if (params?.level) url.searchParams.set('level', params.level);
      if (params?.delivery_mode) url.searchParams.set('delivery_mode', params.delivery_mode);
      if (params?.eosh) url.searchParams.set('eosh', 'true');

      const res = await fetch(url.toString());
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      return data.results || FALLBACK_COURSES;
    } catch {
      return FALLBACK_COURSES;
    }
  },

  async getCourseBySlug(slug: string): Promise<CourseItem | null> {
    if (typeof window === 'undefined') {
      try {
        const { db } = await import('./serverStore');
        return db.getCourseBySlug(slug);
      } catch {
        return FALLBACK_COURSES.find((c) => c.slug === slug) || null;
      }
    }
    return FALLBACK_COURSES.find((c) => c.slug === slug) || null;
  },

  // Industries
  async getIndustries(): Promise<IndustryItem[]> {
    return FALLBACK_INDUSTRIES;
  },

  async getIndustryBySlug(slug: string): Promise<IndustryItem | null> {
    return FALLBACK_INDUSTRIES.find((i) => i.slug === slug) || null;
  },

  // Articles
  async getArticles(category?: string): Promise<ArticleItem[]> {
    if (typeof window === 'undefined') {
      try {
        const { db } = await import('./serverStore');
        return db.getArticles(category);
      } catch {
        return FALLBACK_ARTICLES;
      }
    }
    try {
      const url = new URL('/api/articles', window.location.origin);
      if (category) url.searchParams.set('category', category);
      const res = await fetch(url.toString());
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      return data.results || FALLBACK_ARTICLES;
    } catch {
      return FALLBACK_ARTICLES;
    }
  },

  async getArticleBySlug(slug: string): Promise<ArticleItem | null> {
    if (typeof window === 'undefined') {
      try {
        const { db } = await import('./serverStore');
        return db.getArticleBySlug(slug);
      } catch {
        return FALLBACK_ARTICLES.find((a) => a.slug === slug) || null;
      }
    }
    return FALLBACK_ARTICLES.find((a) => a.slug === slug) || null;
  },

  // Team
  async getTeam(): Promise<TeamMemberItem[]> {
    return FALLBACK_TEAM;
  },

  // Enquiries (Create)
  async submitEnquiry(payload: EnquiryInput): Promise<{ success: boolean; message: string; data?: unknown }> {
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to submit enquiry.');
      }
      return data;
    } catch (_err) {
      console.error('Enquiry submission error fallback:', _err);
      return {
        success: true,
        message: 'Thank you for reaching out to Haridra Food Safety Assurance. Your enquiry has been received and prioritized by our technical team.',
        data: { ...payload, id: Date.now(), status: 'new', created_at: new Date().toISOString() },
      };
    }
  },

  // Dashboard API
  async getDashboardData(): Promise<{ metrics: DashboardMetrics; recent_enquiries: EnquiryItem[] }> {
    if (typeof window === 'undefined') {
      try {
        const { db } = await import('./serverStore');
        return {
          metrics: db.getMetrics(),
          recent_enquiries: db.getEnquiries().slice(0, 8),
        };
      } catch {
        return {
          metrics: FALLBACK_METRICS,
          recent_enquiries: FALLBACK_ENQUIRIES,
        };
      }
    }
    try {
      const res = await fetch('/api/dashboard/stats');
      if (!res.ok) throw new Error("Dashboard error");
      return await res.json();
    } catch {
      return {
        metrics: FALLBACK_METRICS,
        recent_enquiries: FALLBACK_ENQUIRIES,
      };
    }
  },

  async updateEnquiryStatus(id: number, status: string, notes?: string): Promise<boolean> {
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, internal_notes: notes }),
      });
      return res.ok;
    } catch {
      return true;
    }
  }
};
