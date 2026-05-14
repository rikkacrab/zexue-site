"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function BlogPage() {
  const t = useTranslations("blog");
  const locale = useLocale();

  // Placeholder - no articles yet, will be connected to Sanity CMS
  const posts: any[] = [];

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

      {/* Posts */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <EmptyBlogIcon />
              <p className="text-ink-light mt-6">{t("noPosts")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post: any) => (
                <Link
                  key={post._id}
                  href={`/${locale}/blog/${post.slug}`}
                  className="group block bg-white border border-parchment-dark hover:border-crimson/30 transition-colors"
                >
                  <div className="p-6">
                    <h2 className="font-serif text-xl text-ink mb-2 group-hover:text-crimson transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-ink-light line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 text-xs text-gold-dark">
                      {t("readMore")} &rarr;
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function EmptyBlogIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 100 100"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="1.5"
      className="mx-auto opacity-40"
    >
      <path d="M20 85 L20 15 L55 15 L80 40 L80 85 Z" strokeLinejoin="round" />
      <path d="M55 15 L55 40 L80 40" strokeLinejoin="round" />
      <line x1="35" y1="55" x2="65" y2="55" />
      <line x1="35" y1="68" x2="60" y2="68" />
    </svg>
  );
}
