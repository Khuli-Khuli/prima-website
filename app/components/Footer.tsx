/**
 * Footer Component
 * Displays site branding, quick links, and copyright information
 * Responsive layout: stacked on mobile, horizontal on desktop
 */
export default function Footer() {
  return (
    <footer className="mt-20 border-t pt-8 pb-12 bg-white text-sm text-gray-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <a href="/" className="font-semibold text-gray-900">
              PRIMA
            </a>
            <p className="mt-2 text-sm text-gray-600 max-w-xl">
              PRIMA secures and sustains Africa’s foundational infrastructure
              for generations.
            </p>
          </div>

          <nav className="flex gap-4 flex-wrap text-gray-600">
            <a href="/about" className="hover:text-black">
              About
            </a>
            <a href="/how-we-work" className="hover:text-black">
              How We Work
            </a>
            <a href="/domains" className="hover:text-black">
              Domains
            </a>
            <a href="/contact" className="hover:text-black">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t pt-6 text-xs text-gray-500 flex flex-col md:flex-row md:justify-between gap-4">
          <div>© {new Date().getFullYear()} PRIMA. All rights reserved.</div>
          <div>
            Built with care · <a href="/founding-statement" className="hover:text-black">Founding Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
