"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const home = useTranslations("nav");
  const locale = useLocale();

  return (
    <footer className="bg-ink text-parchment">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TaijiIconWhite />
              <span className="font-bold text-lg tracking-wider text-gold">
                Mystic Orient
              </span>
            </div>
            <p className="text-sm text-parchment-dark leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold mb-4 tracking-wide">
              {locale === "zh" ? "快速导航" : "Quick Links"}
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { href: `/${locale}`, label: home("home") },
                { href: `/${locale}/services`, label: home("services") },
                { href: `/${locale}/blog`, label: home("blog") },
                { href: `/${locale}/about`, label: home("about") },
                { href: `/${locale}/contact`, label: home("contact") },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-parchment-dark hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div>
            <h3 className="text-gold font-semibold mb-4 tracking-wide">
              {locale === "zh" ? "经典语录" : "Classic Wisdom"}
            </h3>
            <p className="text-sm italic text-parchment-dark leading-relaxed">
              &ldquo;The wise man knows what he does not seek.&rdquo;
            </p>
            <p className="text-xs text-gold-dark mt-2">
              — I Ching, The Book of Changes
            </p>
          </div>
        </div>

        <div className="border-t border-ink-light mt-12 pt-8 text-center text-xs text-parchment-dark">
          &copy; {new Date().getFullYear()} Mystic Orient. {t("rights")}
        </div>
      </div>
    </footer>
  );
}

function TaijiIconWhite() {
  return (
    <svg width="24" height="24" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="48" fill="none" stroke="#C9A84C" strokeWidth="3" />
      <path
        d="M50 2 A48 48 0 0 1 50 50 A48 48 0 0 0 50 98 A48 48 0 0 1 50 2Z"
        fill="#C9A84C"
      />
      <circle cx="50" cy="26" r="10" fill="#1A1A1A" />
      <circle cx="50" cy="74" r="10" fill="#C9A84C" />
    </svg>
  );
}
