"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLocale = locale === "en" ? "zh" : "en";
  const otherPath = pathname.replace(`/${locale}`, `/${switchLocale}`);

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/blog`, label: t("blog") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-parchment/95 backdrop-blur-sm border-b border-parchment-dark">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-crimson font-bold text-xl tracking-wider"
        >
          <TaijiIcon />
          <span>Mystic Orient</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-ink-light hover:text-crimson transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href={otherPath}
            className="text-xs uppercase tracking-widest border border-crimson text-crimson px-3 py-1.5 rounded hover:bg-crimson hover:text-parchment transition-colors duration-200"
          >
            {switchLocale === "en" ? "EN" : "中文"}
          </Link>
          <button
            className="md:hidden text-ink"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6L18 18M6 18L18 6" />
              ) : (
                <path d="M4 6H20M4 12H20M4 18H20" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-parchment border-t border-parchment-dark">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-ink-light hover:text-crimson transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function TaijiIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 100 100" className="text-crimson">
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="3" />
      <path
        d="M50 2 A48 48 0 0 1 50 50 A48 48 0 0 0 50 98 A48 48 0 0 1 50 2Z"
        fill="currentColor"
      />
      <circle cx="50" cy="26" r="10" fill="var(--color-parchment)" />
      <circle cx="50" cy="74" r="10" fill="currentColor" />
    </svg>
  );
}
