"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-4 mb-8 border-b">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          PRIMA
        </Link>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden md:flex md:items-center md:gap-x-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/how-we-work">How We Work</Link>
          <Link href="/domains">Domains</Link>
          <Link href="/six-pillars">Six Pillars</Link>
          <Link href="/founding-statement">Founding Statement</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mt-3 space-y-2 md:hidden text-sm">
          <Link href="/about" onClick={() => setOpen(false)} className="block">
            About
          </Link>
          <Link href="/how-we-work" onClick={() => setOpen(false)} className="block">
            How We Work
          </Link>
          <Link href="/domains" onClick={() => setOpen(false)} className="block">
            Domains
          </Link>
          <Link href="/six-pillars" onClick={() => setOpen(false)} className="block">
            Six Pillars
          </Link>
          <Link href="/founding-statement" onClick={() => setOpen(false)} className="block">
            Founding Statement
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
