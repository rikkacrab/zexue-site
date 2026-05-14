"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function ServicesPage() {
  const t = useTranslations("services");
  const locale = useLocale();

  return (
    <div>
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-b from-crimson/5 to-parchment">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-ink mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-ink-light">{t("subtitle")}</p>
        </div>
      </section>

      {/* Intro / Who We Are */}
      <section className="py-16 md:py-20" id="intro">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border border-parchment-dark p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-serif text-ink mb-4">
              {t("intro.title")}
            </h2>
            <p className="text-ink-light leading-relaxed">{t("intro.desc")}</p>
          </div>
        </div>
      </section>

      {/* I Ching Divination */}
      <section className="py-16 md:py-20 bg-white" id="iching">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <HexagramDetail />
            <h2 className="text-2xl md:text-3xl font-serif text-ink">
              {t("iching.title")}
            </h2>
          </div>
          <p className="text-ink-light leading-relaxed mb-8">
            {t("iching.desc")}
          </p>
          <h3 className="font-semibold text-ink mb-4">
            {t("iching.questions")}
          </h3>
          <ul className="space-y-2 mb-10">
            {["q1", "q2", "q3", "q4", "q5"].map((q) => (
              <li key={q} className="flex items-start gap-3 text-ink-light">
                <span className="text-crimson mt-1 shrink-0">◆</span>
                <span>{t(`iching.${q}`)}</span>
              </li>
            ))}
          </ul>
          <div className="bg-parchment border border-parchment-dark p-6">
            <p className="text-ink-light mb-4">{t("iching.contactPrompt")}</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-crimson text-parchment px-6 py-2.5 rounded-sm text-sm font-medium tracking-wide hover:bg-crimson-light transition-colors"
            >
              {t("cta")}
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Talisman */}
      <section className="py-16 md:py-20" id="talisman">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <TalismanDetail />
            <h2 className="text-2xl md:text-3xl font-serif text-ink">
              {t("talisman.title")}
            </h2>
          </div>
          <p className="text-ink-light leading-relaxed mb-6">
            {t("talisman.desc")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-gold/30 p-6">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center mb-3">
                <span className="text-gold-dark font-bold">1</span>
              </div>
              <p className="text-ink-light text-sm">{t("talisman.custom")}</p>
            </div>
            <div className="bg-white border border-gold/30 p-6">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center mb-3">
                <span className="text-gold-dark font-bold">2</span>
              </div>
              <p className="text-ink-light text-sm">{t("talisman.shop")}</p>
            </div>
          </div>
          <h3 className="font-semibold text-ink mb-4">
            {locale === "zh" ? "加持类型：" : "Types of blessings:"}
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
            {["b1", "b2", "b3", "b4", "b5"].map((b) => (
              <li key={b} className="flex items-start gap-3 text-ink-light">
                <span className="text-gold mt-1 shrink-0">✦</span>
                <span>{t(`talisman.${b}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ritual */}
      <section className="py-16 md:py-20 bg-white" id="ritual">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <RitualDetail />
            <h2 className="text-2xl md:text-3xl font-serif text-ink">
              {t("ritual.title")}
            </h2>
          </div>
          <p className="text-ink-light leading-relaxed mb-8">
            {t("ritual.desc")}
          </p>
          <div className="bg-parchment border border-parchment-dark p-6">
            <p className="text-ink-light mb-4">{t("ritual.contactPrompt")}</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-crimson text-parchment px-6 py-2.5 rounded-sm text-sm font-medium tracking-wide hover:bg-crimson-light transition-colors"
            >
              {t("cta")}
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* SVG Icons */
function HexagramDetail() {
  return (
    <svg width="36" height="36" viewBox="0 0 100 100" fill="none" stroke="#8B1A1A" strokeWidth="3">
      <line x1="15" y1="15" x2="85" y2="15" />
      <line x1="15" y1="30" x2="50" y2="30" />
      <line x1="60" y1="30" x2="85" y2="30" />
      <line x1="15" y1="45" x2="85" y2="45" />
      <line x1="15" y1="60" x2="85" y2="60" />
      <line x1="15" y1="75" x2="50" y2="75" />
      <line x1="60" y1="75" x2="85" y2="75" />
    </svg>
  );
}

function TalismanDetail() {
  return (
    <svg width="36" height="36" viewBox="0 0 100 100" fill="none" stroke="#C9A84C" strokeWidth="3">
      <rect x="20" y="20" width="60" height="60" rx="4" />
      <path d="M30 50 L45 65 L70 35" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RitualDetail() {
  return (
    <svg width="36" height="36" viewBox="0 0 100 100" fill="none" stroke="#8B1A1A" strokeWidth="2.5">
      <circle cx="50" cy="35" r="15" />
      <path d="M25 90 L35 60 L50 70 L65 60 L75 90" strokeLinejoin="round" />
      <path d="M42 70 L42 90 M58 70 L58 90" />
    </svg>
  );
}
