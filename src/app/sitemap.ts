import { MetadataRoute } from 'next';
import { FALLBACK_SERVICES, FALLBACK_COURSES, FALLBACK_ARTICLES } from '@/lib/mockData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://haridrafoodsafety.com';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/training-programs',
    '/industries',
    '/collaborations',
    '/resources',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = FALLBACK_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const courseRoutes = FALLBACK_COURSES.map((c) => ({
    url: `${baseUrl}/training-programs/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const articleRoutes = FALLBACK_ARTICLES.map((a) => ({
    url: `${baseUrl}/resources/${a.slug}`,
    lastModified: new Date(a.published_at),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...courseRoutes, ...articleRoutes];
}
