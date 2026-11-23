import React from "react";
import type { Metadata } from "next";
import AdminPortalView from "@/components/admin/AdminPortalView";
import { api } from "@/lib/api";

export const metadata: Metadata = {
  title: "Admin Management Portal | Haridra Food Safety Assurance",
  description:
    "Enterprise administrative platform for managing client enquiries, training course applications, knowledge hub articles, and operational metrics.",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default async function AdminPortalPage() {
  const [dashboardData, courses, articles, services] = await Promise.all([
    api.getDashboardData(),
    api.getCourses(),
    api.getArticles(),
    api.getServices(),
  ]);

  return (
    <AdminPortalView
      initialMetrics={dashboardData.metrics}
      initialEnquiries={dashboardData.recent_enquiries}
      initialCourses={courses}
      initialArticles={articles}
      initialServices={services}
    />
  );
}
