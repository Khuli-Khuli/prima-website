import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "PRIMA — Africa’s Foundational Infrastructure",
  description:
    "PRIMA designs, builds, acquires, and safeguards Africa’s foundational infrastructure for generations.",
};

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
