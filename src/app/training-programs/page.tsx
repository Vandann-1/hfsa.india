import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrainingHubView from "@/components/training/TrainingHubView";
import { api } from "@/lib/api";

export const metadata: Metadata = {
  title: "Training & Education | Haridra Food Safety Assurance",
  description:
    "Explore industry-oriented learning opportunities and professional food safety training designed to connect academic knowledge with real-world industry requirements.",
};

export const revalidate = 60;

export default async function TrainingProgramsPage() {
  const [categories, professionalAwards] = await Promise.all([
    api.getAcademicCategories(),
    api.getProfessionalAwards()
  ]);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <TrainingHubView
          categories={categories}
          professionalAwards={professionalAwards}
        />
      </main>
      <Footer />
    </>
  );
}
