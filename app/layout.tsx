import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "PRIMA — Africa’s Foundational Infrastructure",
  description:
    "PRIMA designs, builds, acquires, and safeguards Africa’s foundational infrastructure for generations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          {children}
        </main>
      </body>
    </html>
  );
}
