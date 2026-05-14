"use client";

import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");
  const nav = useTranslations("nav");

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

      {/* Contact Info */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white border border-parchment-dark p-8 md:p-12 text-center">
            <ContactIcon />
            <p className="text-ink-light mb-8">{t("comingSoon")}</p>

            <div className="inline-flex items-center gap-3 border border-parchment-dark rounded-sm px-6 py-4 mb-8">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B1A1A" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
              <span className="text-ink">
                {t("email")}: <strong>coming soon</strong>
              </span>
            </div>

            <p className="text-sm text-ink-light">{t("response")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 100 100"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="2"
      className="mx-auto mb-6"
    >
      <path d="M30 80 L30 50 C30 35 42 25 50 25 C58 25 70 35 70 50 L70 80" strokeLinejoin="round" />
      <rect x="20" y="70" width="60" height="20" rx="4" />
      <line x1="35" y1="55" x2="65" y2="55" />
      <line x1="35" y1="68" x2="65" y2="68" />
    </svg>
  );
}
