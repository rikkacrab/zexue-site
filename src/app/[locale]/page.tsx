"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");
  const nav = useTranslations("nav");
  const locale = useLocale();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 via-parchment to-gold/5" />
        <div className="absolute inset-0 opacity-[0.03]">
          <HexagramGrid />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-crimson" />
              <span className="text-xs tracking-[0.2em] uppercase text-crimson">
                {locale === "zh" ? "中华玄学" : "Chinese Metaphysics"}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-ink leading-tight mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-ink-light leading-relaxed mb-10 max-w-xl">
              {t("hero.subtitle")}
            </p>
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 bg-crimson text-parchment px-8 py-3.5 rounded-sm font-medium tracking-wide hover:bg-crimson-light transition-colors duration-200"
            >
              {t("hero.cta")}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-4">
              {t("services.title")}
            </h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* I Ching */}
            <ServiceCard
              icon={<HexagramIcon />}
              title={t("services.divination.title")}
              desc={t("services.divination.desc")}
              href={`/${locale}/services#iching`}
            />
            {/* Talisman */}
            <ServiceCard
              icon={<TalismanIcon />}
              title={t("services.talisman.title")}
              desc={t("services.talisman.desc")}
              href={`/${locale}/services#talisman`}
            />
            {/* Ritual */}
            <ServiceCard
              icon={<RitualIcon />}
              title={t("services.ritual.title")}
              desc={t("services.ritual.desc")}
              href={`/${locale}/services#ritual`}
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 bg-ink text-parchment">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 mx-auto mb-8 opacity-60">
            <TaijiLarge />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gold mb-6">
            {t("philosophy.title")}
          </h2>
          <p className="text-base md:text-lg text-parchment-dark leading-relaxed max-w-2xl mx-auto">
            {t("philosophy.desc")}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">
            {t("footer.cta")}
          </h2>
          <p className="text-ink-light mb-10 leading-relaxed">
            {t("footer.desc")}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 border-2 border-crimson text-crimson px-8 py-3.5 rounded-sm font-medium tracking-wide hover:bg-crimson hover:text-parchment transition-colors duration-200"
          >
            {nav("contact")}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ---------- Sub-components ---------- */

function ServiceCard({
  icon,
  title,
  desc,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white border border-parchment-dark p-8 h-full hover:border-crimson/30 hover:shadow-lg transition-all duration-300">
        <div className="mb-6 text-crimson">{icon}</div>
        <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-crimson transition-colors">
          {title}
        </h3>
        <p className="text-sm text-ink-light leading-relaxed">{desc}</p>
      </div>
    </Link>
  );
}

/* ---------- SVG Icons ---------- */

function HexagramIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
      {/* Three solid lines */}
      <line x1="15" y1="20" x2="85" y2="20" />
      <line x1="15" y1="40" x2="85" y2="40" />
      <line x1="15" y1="60" x2="85" y2="60" />
      {/* Three broken lines (representing a hexagram) */}
      <line x1="15" y1="80" x2="40" y2="80" />
      <line x1="55" y1="80" x2="85" y2="80" />
    </svg>
  );
}

function TalismanIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
      <circle cx="50" cy="50" r="30" />
      <path d="M50 30 L50 70 M30 50 L70 50" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
    </svg>
  );
}

function RitualIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M30 80 L50 20 L70 80" strokeLinecap="round" />
      <path d="M38 58 L62 58" />
      <path d="M20 90 L80 90" strokeWidth="2" />
    </svg>
  );
}

function TaijiLarge() {
  return (
    <svg width="64" height="64" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="48" fill="none" stroke="#C9A84C" strokeWidth="2" />
      <path
        d="M50 2 A48 48 0 0 1 50 50 A48 48 0 0 0 50 98 A48 48 0 0 1 50 2Z"
        fill="#C9A84C"
      />
      <circle cx="50" cy="26" r="8" fill="#1A1A1A" />
      <circle cx="50" cy="74" r="8" fill="#C9A84C" />
    </svg>
  );
}

function HexagramGrid() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hex" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <line x1="10" y1="10" x2="110" y2="10" stroke="currentColor" strokeWidth="1" />
          <line x1="10" y1="25" x2="55" y2="25" stroke="currentColor" strokeWidth="1" />
          <line x1="65" y1="25" x2="110" y2="25" stroke="currentColor" strokeWidth="1" />
          <line x1="10" y1="40" x2="110" y2="40" stroke="currentColor" strokeWidth="1" />
          <line x1="10" y1="55" x2="55" y2="55" stroke="currentColor" strokeWidth="1" />
          <line x1="65" y1="55" x2="110" y2="55" stroke="currentColor" strokeWidth="1" />
          <line x1="10" y1="70" x2="110" y2="70" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex)" />
    </svg>
  );
}
