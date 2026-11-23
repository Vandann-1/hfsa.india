import fs from 'fs';
import path from 'path';
import {
  FALLBACK_SERVICES,
  FALLBACK_COURSES,
  FALLBACK_INDUSTRIES,
  FALLBACK_ARTICLES,
  FALLBACK_TEAM,
  FALLBACK_SETTINGS,
  FALLBACK_ENQUIRIES
} from './mockData';
import { EnquiryItem, CourseItem, ArticleItem, ServiceItem, IndustryItem } from './api';

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

export interface DatabaseSchema {
  enquiries: EnquiryItem[];
  courses: CourseItem[];
  articles: ArticleItem[];
  services: ServiceItem[];
  industries: IndustryItem[];
  settings: Record<string, string>;
}

function getInitialDatabase(): DatabaseSchema {
  return {
    enquiries: [...FALLBACK_ENQUIRIES],
    courses: [...FALLBACK_COURSES],
    articles: [...FALLBACK_ARTICLES],
    services: [...FALLBACK_SERVICES],
    industries: [...FALLBACK_INDUSTRIES],
    settings: { ...FALLBACK_SETTINGS },
  };
}

export function readDatabase(): DatabaseSchema {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE)) {
      const initial = getInitialDatabase();
      fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2), 'utf8');
      return initial;
    }
    const content = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(content);
  } catch (err) {
    console.error("Error reading db.json, returning initial state:", err);
    return getInitialDatabase();
  }
}

export function writeDatabase(data: DatabaseSchema): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error("Error writing db.json:", err);
  }
}

export const db = {
  // Enquiries
  getEnquiries(status?: string, type?: string, search?: string): EnquiryItem[] {
    const data = readDatabase();
    let list = data.enquiries || [];
    if (status && status !== 'all') {
      list = list.filter(e => e.status === status);
    }
    if (type && type !== 'all') {
      list = list.filter(e => e.enquiry_type === type);
    }
    if (search && search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(e =>
        e.full_name.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q) ||
        (e.organization || '').toLowerCase().includes(q) ||
        e.subject.toLowerCase().includes(q)
      );
    }
    return list;
  },

  getEnquiryById(id: number): EnquiryItem | null {
    const data = readDatabase();
    return (data.enquiries || []).find(e => e.id === id) || null;
  },

  addEnquiry(item: Omit<EnquiryItem, 'id' | 'status' | 'internal_notes' | 'created_at' | 'updated_at'>): EnquiryItem {
    const data = readDatabase();
    const newId = (data.enquiries && data.enquiries.length > 0)
      ? Math.max(...data.enquiries.map(e => e.id)) + 1
      : 1;

    const newEnquiry: EnquiryItem = {
      ...item,
      id: newId,
      status: 'new',
      internal_notes: '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    data.enquiries = [newEnquiry, ...(data.enquiries || [])];
    writeDatabase(data);
    return newEnquiry;
  },

  updateEnquiry(id: number, updates: Partial<EnquiryItem>): EnquiryItem | null {
    const data = readDatabase();
    const index = (data.enquiries || []).findIndex(e => e.id === id);
    if (index === -1) return null;

    const updated = {
      ...data.enquiries[index],
      ...updates,
      updated_at: new Date().toISOString(),
    };

    data.enquiries[index] = updated;
    writeDatabase(data);
    return updated;
  },

  // Courses
  getCourses(category?: string, level?: string, mode?: string, eosh?: boolean): CourseItem[] {
    const data = readDatabase();
    let list = data.courses || [];
    if (category && category !== 'all') {
      list = list.filter(c => c.category_name?.toLowerCase().includes(category.toLowerCase()));
    }
    if (level && level !== 'all') {
      list = list.filter(c => c.level === level);
    }
    if (mode && mode !== 'all') {
      list = list.filter(c => c.delivery_mode === mode);
    }
    if (eosh) {
      list = list.filter(c => c.is_eosh_accredited);
    }
    return list;
  },

  getCourseBySlug(slug: string): CourseItem | null {
    const data = readDatabase();
    return (data.courses || []).find(c => c.slug === slug) || null;
  },

  // Services
  getServices(): ServiceItem[] {
    const data = readDatabase();
    return data.services || [];
  },

  getServiceBySlug(slug: string): ServiceItem | null {
    const data = readDatabase();
    return (data.services || []).find(s => s.slug === slug) || null;
  },

  // Articles
  getArticles(category?: string): ArticleItem[] {
    const data = readDatabase();
    let list = data.articles || [];
    if (category && category !== 'all') {
      list = list.filter(a => a.category === category);
    }
    return list;
  },

  getArticleBySlug(slug: string): ArticleItem | null {
    const data = readDatabase();
    return (data.articles || []).find(a => a.slug === slug) || null;
  },

  // Metrics
  getMetrics() {
    const data = readDatabase();
    const enquiries = data.enquiries || [];
    const courses = data.courses || [];
    const articles = data.articles || [];

    return {
      total_enquiries: enquiries.length,
      pending_enquiries: enquiries.filter(e => e.status === 'new' || e.status === 'in_progress').length,
      training_enquiries: enquiries.filter(e => e.enquiry_type === 'training').length,
      consultancy_enquiries: enquiries.filter(e => ['consultancy', 'audit', 'quality_assurance', 'technical_consultancy'].includes(e.enquiry_type)).length,
      collaboration_enquiries: enquiries.filter(e => e.enquiry_type === 'collaboration').length,
      converted_enquiries: enquiries.filter(e => e.status === 'converted').length,
      published_courses: courses.filter(c => c.is_published).length,
      total_courses: courses.length,
      eosh_accredited_courses: courses.filter(c => c.is_eosh_accredited).length,
      published_articles: articles.filter(a => a.is_published).length,
      total_articles: articles.length,
      verified_collaborations: 0,
    };
  }
};
