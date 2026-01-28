import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          PRIMA
        </Link>

        <div className="flex space-x-8 text-sm text-gray-700">
          <Link href="/about" className="hover:text-black">
            About
          </Link>
          <Link href="/how-we-work" className="hover:text-black">
            How We Work
          </Link>
          <Link href="/domains" className="hover:text-black">
            Domains
          </Link>
          <Link href="/governance" className="hover:text-black">
            Governance
          </Link>
          <Link href="/six-pillars" className="hover:text-black">
            Six Pillars
          </Link>
          <Link href="/founding-statement" className="hover:text-black">
            Founding Statement
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
