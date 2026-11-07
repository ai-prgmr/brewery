"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IconChevronDown,
  IconArrowRight,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E5DFD5] transition-all duration-300 header-animated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Component */}
        <Link
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D49B44] rounded-lg"
          href="/"
        >
          <div className="w-10 h-10 rounded-full border border-[#D49B44]/60 flex items-center justify-center bg-[#F4EFE6] text-[#D49B44] transition-transform duration-300 group-hover:scale-105 shadow-sm">
            {/* Wheat / Hops Emblem Icon */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C10.5 4 9 7.5 9 11c0 2.5.8 4.7 2 6.3V22h2v-4.7c1.2-1.6 2-3.8 2-6.3 0-3.5-1.5-7-3-9zm0 3.5c.8 1.8 1.5 4 1.5 5.5 0 1.6-.5 3-1.5 4.2-1-1.2-1.5-2.6-1.5-4.2 0-1.5.7-3.7 1.5-5.5zM6.5 6.5C5.4 7.6 4.5 9.2 4.5 11c0 2.5 1.5 4.8 3.5 6v-2.2c-1-.9-1.5-2.2-1.5-3.8 0-1.1.5-2.2 1-3l-1-1.5zm11 0l-1 1.5c.5.8 1 1.9 1 3 0 1.6-.5 2.9-1.5 3.8V17c2-1.2 3.5-3.5 3.5-6 0-1.8-.9-3.4-2-4.5z" />
            </svg>
          </div>
          <div>
            <span className="block font-serif text-2xl font-bold tracking-tight text-[#1A1A18] leading-none">
              BRAU MITRAA
            </span>
            <span className="block text-[9px] uppercase tracking-[0.24em] text-[#76736A] font-semibold mt-0.5">
              Brewing Possibilities Together
            </span>
          </div>
        </Link>

        {/* Primary Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center space-x-7 text-[13px] font-medium tracking-wide text-[#42403B]"
        >
          <div className="relative group">
            <button className="nav-link-editorial flex items-center gap-1 hover:text-[#1A1A18] py-2 focus:outline-none">
              Solutions{" "}
              <IconChevronDown className="w-3.5 h-3.5 text-[#76736A] transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 hidden group-hover:block w-60 py-2 bg-white rounded-xl shadow-xl border border-[#E5DFD5] animate-in fade-in slide-in-from-top-1 z-50">
              <Link
                href="/solutions/start-brewery"
                className="nav-dropdown-item block px-4 py-2.5 text-xs hover:bg-[#FAF8F5] group/item"
              >
                <span className="font-semibold block text-[#1A1A18] group-hover/item:text-[#D49B44] transition-colors">
                  Start New Brewery
                </span>
                <span className="text-[10px] text-[#76736A] block">
                  Turnkey microbreweries & brewpubs
                </span>
              </Link>
              <Link
                href="/solutions/scale-operation"
                className="nav-dropdown-item block px-4 py-2.5 text-xs hover:bg-[#FAF8F5] group/item"
              >
                <span className="font-semibold block text-[#1A1A18] group-hover/item:text-[#D49B44] transition-colors">
                  Scale Existing Operation
                </span>
                <span className="text-[10px] text-[#76736A] block">
                  20HL to 100HL+ capacity expansion
                </span>
              </Link>
              <Link
                href="/solutions/upgrade-replace"
                className="nav-dropdown-item block px-4 py-2.5 text-xs hover:bg-[#FAF8F5] group/item"
              >
                <span className="font-semibold block text-[#1A1A18] group-hover/item:text-[#D49B44] transition-colors">
                  Upgrade or Replace
                </span>
                <span className="text-[10px] text-[#76736A] block">
                  Tanks, CIP skids & vapor retrofits
                </span>
              </Link>
              <div className="pt-1 mt-1 border-t border-[#E5DFD5]">
                <Link
                  href="/#solutions"
                  className="block px-4 py-1.5 text-[11px] font-semibold text-[#D49B44] hover:bg-[#FAF8F5] transition-colors"
                >
                  View All Solutions &rarr;
                </Link>
              </div>
            </div>
          </div>

          <Link
            className="nav-link-editorial hover:text-[#1A1A18] py-2"
            href="/technology"
          >
            Technology
          </Link>

          <Link
            className="nav-link-editorial hover:text-[#1A1A18] py-2"
            href="/beverages"
          >
            Beverage Portfolio
          </Link>

          <Link
            className="nav-link-editorial hover:text-[#1A1A18] py-2"
            href="/process"
          >
            Process
          </Link>

          <Link
            className="nav-link-editorial hover:text-[#1A1A18] py-2"
            href="/knowledge"
          >
            Knowledge Center
          </Link>

          <Link
            className="nav-link-editorial hover:text-[#1A1A18] py-2"
            href="/about"
          >
            About
          </Link>

          <Link
            className="nav-link-editorial hover:text-[#1A1A18] py-2"
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        {/* Action & Regional Selector */}
        <div className="flex items-center gap-3">
          <Link
            className="hidden sm:inline-flex items-center gap-2 bg-[#D49B44] hover:bg-[#BE8532] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow transition duration-200 group"
            href="/contact"
          >
            Book a Consultation
            <IconArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#42403B] hover:text-[#1A1A18] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <IconX className="w-6 h-6" />
            ) : (
              <IconMenu2 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E5DFD5] px-6 py-6 space-y-4">
          {/* Solutions Mobile Group */}
          <div className="space-y-2 border-b border-[#E5DFD5] pb-3">
            <span className="block text-xs uppercase tracking-wider font-bold text-[#D49B44]">
              Brewing Solutions
            </span>
            <div className="space-y-2 pl-2">
              <Link
                href="/solutions/start-brewery"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-[#1A1A18] hover:text-[#D49B44]"
              >
                Start New Brewery
              </Link>
              <Link
                href="/solutions/scale-operation"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-[#1A1A18] hover:text-[#D49B44]"
              >
                Scale Existing Operation
              </Link>
              <Link
                href="/solutions/upgrade-replace"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-[#1A1A18] hover:text-[#D49B44]"
              >
                Upgrade or Replace
              </Link>
            </div>
          </div>
          <Link
            href="/technology"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#1A1A18]"
          >
            Technology & Engineering
          </Link>
          <Link
            href="/beverages"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#1A1A18]"
          >
            Beverage Portfolio
          </Link>
          <Link
            href="/process"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#1A1A18]"
          >
            The Brau Mitraa Journey (Process)
          </Link>
          <Link
            href="/knowledge"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#1A1A18]"
          >
            Knowledge Center (Guides & Whitepapers)
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#1A1A18]"
          >
            About & Story
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-[#1A1A18]"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex w-full justify-center items-center gap-2 bg-[#D49B44] text-white text-sm font-medium px-5 py-3 rounded-full mt-2"
          >
            Book a Consultation
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}

