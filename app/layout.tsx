import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.metaDescription,
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "Mobile Developer",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Cameroon",
    "Remote Developer",
    "Junior Developer",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.siteUrl,
    title: `${profile.name} — ${profile.title}`,
    description: profile.metaDescription,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: profile.ogImage,
        width: 1200,
        height: 630,
        alt: `${profile.name} — Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#0d0d0f] text-white antialiased font-sans selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
