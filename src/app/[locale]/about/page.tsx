"use client";

import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

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

      {/* Mission */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border border-parchment-dark p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <MissionIcon />
              <h2 className="text-2xl md:text-3xl font-serif text-ink">
                {t("mission.title")}
              </h2>
            </div>
            <p className="text-ink-light leading-relaxed">
              {t("mission.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-20 bg-ink text-parchment">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <TaijiAbout />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-gold text-center mb-6">
            {t("philosophy.title")}
          </h2>
          <p className="text-parchment-dark leading-relaxed text-center max-w-3xl mx-auto">
            {t("philosophy.desc")}
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border border-parchment-dark p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <CultureIcon />
              <h2 className="text-2xl md:text-3xl font-serif text-ink">
                {t("culture.title")}
              </h2>
            </div>
            <p className="text-ink-light leading-relaxed">{t("culture.desc")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function MissionIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 100 100" fill="none" stroke="#8B1A1A" strokeWidth="2.5">
      <path d="M50 15 L50 85 M15 50 L85 50" />
      <circle cx="50" cy="50" r="35" />
      <circle cx="50" cy="50" r="10" fill="#8B1A1A" />
    </svg>
  );
}

function TaijiAbout() {
  return (
    <svg width="56" height="56" viewBox="0 0 100 100" className="mx-auto">
      <circle cx="50" cy="50" r="48" fill="none" stroke="#C9A84C" strokeWidth="2" />
      <path d="M50 2 A48 48 0 0 1 50 50 A48 48 0 0 0 50 98 A48 48 0 0 1 50 2Z" fill="#C9A84C" />
      <circle cx="50" cy="26" r="8" fill="#1A1A1A" />
      <circle cx="50" cy="74" r="8" fill="#C9A84C" />
    </svg>
  );
}

function CultureIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 100 100" fill="none" stroke="#C9A84C" strokeWidth="2.5">
      <path d="M20 80 L50 20 L80 80" strokeLinejoin="round" />
      <path d="M32 58 L68 58" />
      <line x1="50" y1="58" x2="50" y2="20" />
    </svg>
  );
}
