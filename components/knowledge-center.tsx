"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconSearch,
  IconClock,
  IconBookmark,
  IconChevronRight,
  IconSparkles,
  IconUser,
  IconX,
  IconCheck,
  IconShare,
  IconArrowRight,
  IconBeer,
  IconFlame,
  IconShieldCheck,
  IconBuildingFactory2,
} from "@tabler/icons-react";

import { Article, articles } from "@/lib/articles";

const categories = [
  "All",
  "Brewhouse Engineering",
  "Brewing Science",
  "Planning & ROI",
  "Cellar & Sanitation",
  "Alternative Beverages",
];

export function KnowledgeCenterClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.keyTakeaways.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  return (
    <>
      {/* Search & Filter Toolbar */}
      <section className="py-8 border-b border-[#E5DFD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 anim-enter-left">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <IconSearch className="w-4 h-4 text-[#76736A] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles, topics, authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#FDFBF7] border border-[#E5DFD5] text-xs text-[#1A1A18] placeholder:text-[#76736A] focus:outline-none focus:ring-2 focus:ring-[#D49B44] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#76736A] hover:text-[#1A1A18] p-1"
                >
                  <IconX className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Showing count */}
            <p className="text-xs text-[#76736A] shrink-0">
              Showing <strong className="text-[#1A1A18]">{filteredArticles.length}</strong> technical articles
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none anim-enter-right">
            {categories.map((cat, idx) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? "bg-[#D49B44] text-white shadow-sm"
                      : "bg-[#FDFBF7] text-[#42403B] border border-[#E5DFD5] hover:border-[#D49B44]/50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Article Hero (Shown when no search/filter active) */}
      {selectedCategory === "All" && searchQuery === "" && (
        <section className="py-12 lg:py-16 border-b border-[#E5DFD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="editorial-card anim-enter-up p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD5] shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-4 anim-enter-left">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#D49B44] text-white text-[10px] uppercase font-bold tracking-widest">
                      Featured Whitepaper
                    </span>
                    <span className="text-xs text-[#76736A]">
                      {featuredArticle.category} &bull; {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1A1A18] tracking-tight leading-[1.15]">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#42403B] leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#76736A]">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#F4EFE6] border border-[#E5DFD5] flex items-center justify-center text-[#D49B44] font-bold text-[11px]">
                        RK
                      </div>
                      <div>
                        <span className="font-semibold text-[#1A1A18] block leading-none">
                          {featuredArticle.author}
                        </span>
                        <span className="text-[10px] text-[#76736A]">
                          {featuredArticle.authorCountry} &bull; {featuredArticle.authorRole}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveArticle(featuredArticle)}
                      className="inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#c08a38] text-white text-xs font-semibold px-6 py-3 rounded-full shadow transition-all duration-200 hover:scale-105"
                    >
                      <span>Read Complete Guide</span>
                      <IconArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 anim-enter-right">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-md border border-[#E5DFD5] group">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Articles Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 p-8 rounded-3xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-4">
              <p className="text-sm text-[#76736A]">
                No technical articles found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-xs font-semibold text-[#D49B44] underline"
              >
                Clear all filters and search query
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, idx) => (
                <article
                  key={article.id}
                  className={`editorial-card anim-enter-up anim-delay-${(idx % 3) + 1} bg-[#FAF8F5] rounded-3xl border border-[#E5DFD5] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#D49B44]/50`}
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#F4EFE6]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur text-[10px] uppercase font-bold tracking-wider text-[#1A1A18] shadow-sm">
                        <span>{article.category}</span>
                      </div>
                      <div className="absolute bottom-3 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-medium backdrop-blur">
                        <IconClock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-[#76736A]">
                        <span>{article.publishedDate}</span>
                        <span>{article.authorCountry}</span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A18] tracking-tight group-hover:text-[#D49B44] transition-colors leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs text-[#42403B] leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Key takeaway preview */}
                      <div className="pt-2 border-t border-[#E5DFD5]/80">
                        <p className="text-[10px] uppercase tracking-wider font-bold text-[#76736A] mb-1">
                          Key Takeaway:
                        </p>
                        <p className="text-[11px] text-[#76736A] italic line-clamp-2">
                          &ldquo;{article.keyTakeaways[0]}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="p-6 pt-0 border-t border-transparent">
                    <div className="flex items-center justify-between pt-4 border-t border-[#E5DFD5]">
                      <div className="text-[11px]">
                        <span className="text-[#76736A] block">By</span>
                        <span className="font-semibold text-[#1A1A18]">{article.author}</span>
                      </div>

                      <button
                        onClick={() => setActiveArticle(article)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D49B44] hover:text-[#BE8532] transition-colors focus:outline-none"
                      >
                        <span>Read Guide</span>
                        <IconChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Technical Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-[#FDFBF7] rounded-3xl max-w-3xl w-full p-6 sm:p-10 relative shadow-2xl border border-[#E5DFD5] my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#F4EFE6] text-[#76736A] hover:text-[#1A1A18] transition focus:outline-none"
              aria-label="Close article modal"
            >
              <IconX className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="space-y-4 pr-12">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#D49B44] text-white text-[10px] uppercase font-bold tracking-widest">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-[#76736A]">
                  {activeArticle.publishedDate} &bull; {activeArticle.readTime}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-[#1A1A18] tracking-tight leading-tight">
                {activeArticle.title}
              </h2>

              <div className="flex items-center gap-3 pt-1 text-xs text-[#76736A] border-b border-[#E5DFD5] pb-4">
                <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#D49B44]/40 flex items-center justify-center font-bold text-[#D49B44]">
                  <IconUser className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-[#1A1A18] block">
                    {activeArticle.author} ({activeArticle.authorCountry})
                  </span>
                  <span className="text-[11px] text-[#76736A]">
                    {activeArticle.authorRole}
                  </span>
                </div>
              </div>
            </div>

            {/* Key Takeaways Box */}
            <div className="my-6 p-5 rounded-2xl bg-[#FAF8F5] border border-[#D49B44]/30 space-y-2">
              <p className="text-xs uppercase tracking-wider font-bold text-[#D49B44]">
                Executive Takeaways:
              </p>
              <ul className="space-y-1.5 text-xs text-[#42403B]">
                {activeArticle.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2">
                    <IconCheck className="w-3.5 h-3.5 text-[#D49B44] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Body */}
            <div className="space-y-6 text-sm text-[#42403B] leading-relaxed">
              <p className="text-base font-light text-[#1A1A18] leading-relaxed italic border-l-2 border-[#D49B44] pl-4">
                {activeArticle.fullContent.introduction}
              </p>

              {activeArticle.fullContent.sections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-3 pt-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A18]">
                    {sec.heading}
                  </h3>
                  {sec.body.map((p, pIdx) => (
                    <p key={pIdx} className="text-xs sm:text-sm text-[#42403B] leading-relaxed">
                      {p}
                    </p>
                  ))}
                  {sec.highlight && (
                    <div className="p-4 rounded-xl bg-[#F4EFE6] text-xs font-semibold text-[#1A1A18] border-l-4 border-[#D49B44]">
                      {sec.highlight}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-[#E5DFD5]">
                <h4 className="font-serif text-lg font-bold text-[#1A1A18] mb-2">
                  Summary & Mitraa Perspective
                </h4>
                <p className="text-xs sm:text-sm text-[#76736A] leading-relaxed">
                  {activeArticle.fullContent.conclusion}
                </p>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-[#E5DFD5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#76736A]">
                Have technical questions about this guide?
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center bg-[#D49B44] hover:bg-[#c08a38] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition"
                >
                  Consult Our Technical Team
                </Link>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 rounded-full border border-[#E5DFD5] text-xs font-semibold text-[#1A1A18] hover:bg-[#F4EFE6] transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
