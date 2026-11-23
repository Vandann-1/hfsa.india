import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Haridra Food Safety Assurance Pvt. Ltd.",
    default: "Haridra Food Safety Assurance Pvt. Ltd. | Enterprise Food Safety Consultancy & Education",
  },
  description:
    "Leading professional food safety consultancy, independent hygiene audits, quality assurance engineering, and EOSH-accredited technical training programs bridging academia and industry.",
  keywords: [
    "Haridra Food Safety Assurance",
    "Food Safety Consultancy India",
    "HACCP Implementation",
    "GMP Certification Guidance",
    "Food Safety Audits",
    "Quality Assurance",
    "EOSH Food Safety Training",
    "Industry-Academia Collaboration Food Science",
    "Hospitality Hygiene Audits"
  ],
  authors: [{ name: "Haridra Food Safety Assurance Pvt. Ltd." }],
  creator: "Haridra Food Safety Assurance Pvt. Ltd.",
  publisher: "Haridra Food Safety Assurance Pvt. Ltd.",
  metadataBase: new URL("https://haridrafoodsafety.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Haridra Food Safety Assurance Pvt. Ltd.",
    description: "Building a safer food industry through scientific knowledge, rigorous quality systems, and institutional assurance.",
    url: "https://haridrafoodsafety.com",
    siteName: "Haridra Food Safety Assurance",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-surface-offwhite text-text-primary antialiased selection:bg-corporate/20 selection:text-navy-900">
        {children}
      </body>
    </html>
  );
}
