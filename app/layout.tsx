import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

/**
 * Root Layout Component
 * Provides the base HTML structure for all pages, including:
 * - Navbar for site navigation
 * - Main content area with responsive max-width container
 * - Footer with site links and copyright
 * - Speed Insights for performance monitoring
 */

export const metadata = {
  title: "PRIMA — Africa’s Foundational Infrastructure",
  description:
    "PRIMA designs, builds, acquires, and safeguards Africa’s foundational infrastructure for generations.",
};

/**
 * Viewport configuration for responsive design
 * Ensures proper scaling on mobile devices
 */
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
