import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Nerio | Food Recipes, Restaurant Reviews & Culinary Inspiration",
    template: "%s | Nerio Food",
  },
  description:
    "Discover thousands of delicious food recipes, restaurant reviews, cooking tips, and culinary inspiration on Nerio. From breakfast to dinner, find your perfect meal today.",
  keywords: [
    "food recipes",
    "restaurant reviews",
    "cooking tips",
    "healthy recipes",
    "dinner ideas",
    "breakfast recipes",
    "dessert recipes",
    "vegetarian food",
    "yemek tarifleri",
    "restoran",
    "culinary",
    "meal ideas",
    "easy recipes",
    "Nerio food",
  ],
  authors: [{ name: "Nerio", url: "https://nerio.com" }],
  creator: "Nerio",
  publisher: "Nerio",
  category: "food",

alternates: {
    canonical: "https://nerio.com",
    languages: {
      "en-US": "https://nerio.com/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nerio.com",
    siteName: "Nerio Food",
    title: "Nerio | Food Recipes & Restaurant Reviews",
    description:
      "Explore the best food recipes, restaurant guides, and cooking inspiration. Nerio brings culinary creativity to your kitchen.",
    images: [
      {
        url: "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2026/02/logo.png",
        width: 1200,
        height: 630,
        alt: "Nerio Food - Recipes & Restaurant Reviews",
      },
    ],
  },

twitter: {
    card: "summary_large_image",
    site: "@NerioFood",
    creator: "@NerioFood",
    title: "Nerio | Food Recipes & Restaurant Reviews",
    description:
      "Discover delicious recipes, restaurant reviews, and cooking tips on Nerio.",
    images: [
      "https://nerio.rstheme.com/food-recipe/wp-content/uploads/sites/4/2026/02/logo.png",
    ],
  },

icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

 verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable} antialiased`}
      >
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
