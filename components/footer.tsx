import Link from "next/link";
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Image from "next/image";
export function Footer() {
  return (
    <footer
      className="bg-[#FAF8F5] border-t border-[#E5DFD5] pt-16 pb-12"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Logo & Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-8 pb-14 border-b border-[#E5DFD5]">
          {/* Logo Brand Column */}
          <div className="col-span-2 md:col-span-6 lg:col-span-4 space-y-4">
            <Link className="flex items-center gap-3" href="/">
              <div className=" flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/brewery/brau-mitraa-logo.png"
                  alt="Brau Mitraa"
                  width={200}
                  height={200}
                  className="pt-4 mt-4"
                />
              </div>
            </Link>
            <p className="text-xs text-[#76736A] leading-relaxed max-w-xs">
              Global brewing systems crafted with German precision and Indian
              manufacturing excellence.
            </p>
          </div>

          {/* Col: Solutions */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#1A1A18]">
              Solutions
            </p>
            <ul className="space-y-2 text-xs text-[#76736A]">
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/solutions/start-brewery">
                  Start New Brewery
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/solutions/scale-operation">
                  Scale Existing Operation
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/solutions/upgrade-replace">
                  Upgrade or Replace
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/#equipment-systems">
                  Copper vs. Stainless Systems
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/technology">
                  Technology & Engineering
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/#solutions">
                  All Brewing Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Col: Beverage Portfolio */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#1A1A18]">
              Beverage Portfolio
            </p>
            <ul className="space-y-2 text-xs text-[#76736A]">
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/beverages">
                  The Full Catalogue (130+ Profiles)
                </Link>
              </li>
              <li>
                <Link className="text-[#D49B44] font-semibold hover:underline flex items-center gap-1" href="/recipe-studio">
                  <span>Interactive Recipe Studio</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D49B44] animate-pulse" />
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/beverages#lagers">
                  Lagers & Pilsners
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/beverages#ales">
                  Ales & IPAs
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/beverages#kombucha">
                  Kombucha & Fermented Teas
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/beverages#cider">
                  Hard Ciders & Perries
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/beverages#seltzers">
                  Hard Seltzers & Hop Waters
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/beverages#mead">
                  Mead & Braggot
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/beverages#experimental">
                  Flavoured Concepts
                </Link>
              </li>
            </ul>
          </div>

          {/* Col: Knowledge */}
          <div className="col-span-1 lg:col-span-1 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#1A1A18]">
              Knowledge
            </p>
            <ul className="space-y-2 text-xs text-[#76736A]">
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/knowledge">
                  Knowledge Center
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/knowledge">
                  Technical Papers
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/knowledge">
                  Brewing Science
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/process">
                  The Mitraa Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Col: About */}
          <div className="col-span-1 lg:col-span-1 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#1A1A18]">
              About
            </p>
            <ul className="space-y-2 text-xs text-[#76736A]">
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/about">
                  Our Story
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/about#founders">
                  The Founders
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/about#synergy">
                  German-Indian Synergy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col: Contact */}
          <div className="col-span-2 lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#1A1A18]">
              Contact
            </p>
            <ul className="space-y-2 text-xs text-[#76736A]">
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/contact">
                  Enquire Now
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#D49B44] transition-colors" href="/contact#connect-form">
                  Book a Consultation
                </Link>
              </li>
              <li className="pt-1 text-[#1A1A18] font-medium">
                <a href="mailto:contact@braumitraa.com" className="hover:text-[#D49B44] transition-colors">
                  contact@braumitraa.com
                </a>
              </li>
              <li className="text-[#1A1A18] font-medium">
                <a href="tel:+919826055100" className="hover:text-[#D49B44] transition-colors">
                  +91 98260 55100
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row & Social Icons */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#76736A]">
          <div>© 2024 Brau Mitraa. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a className="hover:text-[#1A1A18] transition-colors" href="#">
              Privacy
            </a>
            <a className="hover:text-[#1A1A18] transition-colors" href="#">
              Terms
            </a>
            <a className="hover:text-[#1A1A18] transition-colors" href="#">
              Sitemap
            </a>
          </div>
          <div className="flex items-center gap-4 text-[#1A1A18]">
            <a
              className="w-8 h-8 rounded-full border border-[#E5DFD5] flex items-center justify-center hover:border-[#D49B44] hover:text-[#D49B44] hover:scale-105 transition-all duration-200"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="w-4 h-4" />
            </a>
            <a
              className="w-8 h-8 rounded-full border border-[#E5DFD5] flex items-center justify-center hover:border-[#D49B44] hover:text-[#D49B44] hover:scale-105 transition-all duration-200"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <IconBrandInstagram className="w-4 h-4" />
            </a>
            <a
              className="w-8 h-8 rounded-full border border-[#E5DFD5] flex items-center justify-center hover:border-[#D49B44] hover:text-[#D49B44] hover:scale-105 transition-all duration-200"
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <IconBrandYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

