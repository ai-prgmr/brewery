import type { Metadata } from "next";
import Link from "next/link";
import {
  IconPhoneCall,
  IconMail,
  IconMapPin,
  IconClock,
  IconBrandWhatsapp,
  IconCheck,
  IconShieldCheck,
  IconArrowRight,
  IconBuildingFactory2,
} from "@tabler/icons-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us & Brewhouse Consultation | Brau Mitraa",
  description:
    "Direct phone lines, emails, and technical inquiry form for Brau Mitraa. Connect directly with founders Abhay Jhaveri, Rainer Kruppa, and Rüdiger Stolle for German-Indian brewery engineering.",
  openGraph: {
    title: "Contact Us | Brau Mitraa - Turnkey Brewery Engineering",
    description:
      "Reach out to our German and Indian engineering hubs by phone, email, or schedule a technical brewhouse consultation.",
    url: "https://braumitraa.com/contact",
    siteName: "Brau Mitraa",
    images: [
      {
        url: "/brewery/images/story-founders.jpg",
        width: 1200,
        height: 630,
        alt: "Brau Mitraa Technical Consultation & Contact",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Brau Mitraa",
    description:
      "Direct phone lines, email addresses, and technical consultation form for German-engineered breweries in India.",
    images: ["/brewery/images/story-founders.jpg"],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://braumitraa.com/contact#webpage",
        "url": "https://braumitraa.com/contact",
        "name": "Contact Brau Mitraa",
        "description":
          "Direct phone lines, email addresses, and consultation inquiry form for Brau Mitraa brewery engineering.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://braumitraa.com/#website",
          "name": "Brau Mitraa",
          "url": "https://braumitraa.com",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://braumitraa.com/#organization",
        "name": "Brau Mitraa",
        "url": "https://braumitraa.com",
        "email": "contact@braumitraa.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-98260-55100",
            "contactType": "Manufacturing, Sales & Operations Hub (India)",
            "areaServed": ["IN", "AE", "SG", "Worldwide"],
            "availableLanguage": ["English", "Hindi"],
          },
          {
            "@type": "ContactPoint",
            "telephone": "+49-171-8329410",
            "contactType": "Technical Engineering & Braupagode Technology (Germany)",
            "areaServed": ["DE", "EU", "Worldwide"],
            "availableLanguage": ["German", "English"],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://braumitraa.com/contact#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://braumitraa.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": "https://braumitraa.com/contact",
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1A1A18]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header Section */}
      <section className="pt-12 pb-14 lg:pt-20 lg:pb-20 border-b border-[#E5DFD5] bg-gradient-to-b from-[#FAF8F5] to-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium text-[#76736A] mb-8"
          >
            <Link
              href="/"
              className="hover:text-[#D49B44] transition-colors focus:outline-none"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-[#1A1A18] font-semibold" aria-current="page">
              Contact
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#D49B44]/30 text-[#D49B44] text-xs font-bold tracking-widest uppercase">
              <span>Direct Founder & Engineering Contact</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1A1A18] leading-[1.12]">
              Let’s Talk About <br />
              <span className="italic text-[#D49B44]">Your Next Brewhouse.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#42403B] font-light leading-relaxed">
              Whether you are planning a flagship microbrewery, evaluating
              stacked Braupagode thermodynamics, or upgrading commercial cellar
              capacity, our founders connect directly with you to discuss site
              feasibility, budget, and beverage portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: Phone Numbers, Email & Engineering Hubs */}
      <section
        id="direct-channels"
        className="py-16 lg:py-20 border-b border-[#E5DFD5]"
        aria-labelledby="h-direct-channels"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
              SECTION 01 · DIRECT CHANNELS
            </span>
            <h2
              id="h-direct-channels"
              className="font-serif text-3xl sm:text-4xl text-[#1A1A18] tracking-tight"
            >
              Call or Email Our Hubs
            </h2>
            <p className="text-sm sm:text-base text-[#76736A]">
              We operate across two primary engineering centers in India and
              Germany, ensuring real-time support across all time zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Phone Number Channel Card */}
            <div className="editorial-card anim-enter-left bg-[#FAF8F5] rounded-3xl p-8 border border-[#E5DFD5] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#D49B44]/15 border border-[#D49B44]/30 flex items-center justify-center text-[#D49B44]">
                    <IconPhoneCall className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#E5DFD5] text-[#1A1A18]">
                    Direct Voice & WhatsApp
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A18] tracking-tight">
                    Direct Phone Lines
                  </h3>
                  <p className="text-xs text-[#76736A] mt-1">
                    Call our operations and technical desk during business hours.
                  </p>
                </div>

                {/* Numbers List */}
                <div className="space-y-4 pt-2">
                  {/* India Line */}
                  <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#76736A]">
                      <span className="flex items-center gap-1.5 text-[#1A1A18]">
                        <span>🇮🇳</span> Indian Industrial Hub
                      </span>
                      <span>Mon – Sat, 9am – 7pm IST</span>
                    </div>
                    <a
                      href="tel:+919826055100"
                      className="block font-serif text-2xl font-bold text-[#1A1A18] hover:text-[#D49B44] transition-colors"
                    >
                      +91 98260 55100
                    </a>
                    <p className="text-[11px] text-[#76736A]">
                      Manufacturing operations, turnkey client consultations & site visits
                    </p>
                  </div>

                  {/* Germany Line */}
                  <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#76736A]">
                      <span className="flex items-center gap-1.5 text-[#1A1A18]">
                        <span>🇩🇪</span> Germany Hub (Bavaria)
                      </span>
                      <span>Mon – Fri, 9am – 6pm CET</span>
                    </div>
                    <a
                      href="tel:+491718329410"
                      className="block font-serif text-2xl font-bold text-[#1A1A18] hover:text-[#D49B44] transition-colors"
                    >
                      +49 171 832 9410
                    </a>
                    <p className="text-[11px] text-[#76736A]">
                      Thermodynamic modeling, Braupagode engineering & master brew consulting
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-4 border-t border-[#E5DFD5]">
                <a
                  href="https://wa.me/919826055100?text=Hello%20Brau%20Mitraa%20team,%20I%20would%20like%20to%20discuss%20a%20brewery%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#1A1A18] hover:text-[#D49B44] transition-colors"
                >
                  <IconBrandWhatsapp className="w-4 h-4 text-emerald-600" />
                  <span>Start WhatsApp Conversation with Abhay Jhaveri</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Channel Card */}
            <div className="editorial-card anim-enter-right anim-delay-1 bg-[#FAF8F5] rounded-3xl p-8 border border-[#E5DFD5] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#D49B44]/15 border border-[#D49B44]/30 flex items-center justify-center text-[#D49B44]">
                    <IconMail className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#E5DFD5] text-[#1A1A18]">
                    Inboxes Monitored Daily
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A18] tracking-tight">
                    Direct Email Inboxes
                  </h3>
                  <p className="text-xs text-[#76736A] mt-1">
                    Send CAD layouts, equipment inquiries, or recipe collaboration briefs.
                  </p>
                </div>

                {/* Emails List */}
                <div className="space-y-4 pt-2">
                  {/* General / Inquiries */}
                  <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#76736A]">
                      <span>General Inquiries & RFQs</span>
                      <span className="text-[#D49B44]">SLA &lt; 24 Hours</span>
                    </div>
                    <a
                      href="mailto:contact@braumitraa.com?subject=Brewery%20Consultation%20Inquiry"
                      className="block font-serif text-2xl font-bold text-[#1A1A18] hover:text-[#D49B44] transition-colors break-all"
                    >
                      contact@braumitraa.com
                    </a>
                    <p className="text-[11px] text-[#76736A]">
                      Turnkey estimates, commercial inquiries & initial consultations
                    </p>
                  </div>

                  {/* Engineering Direct */}
                  <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#E5DFD5] space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#76736A]">
                      <span>Technical Specs & Engineering Drawings</span>
                      <span className="text-[#D49B44]">Engineering Desk</span>
                    </div>
                    <a
                      href="mailto:engineering@braumitraa.com?subject=Technical%20Brewery%20Specifications"
                      className="block font-serif text-2xl font-bold text-[#1A1A18] hover:text-[#D49B44] transition-colors break-all"
                    >
                      engineering@braumitraa.com
                    </a>
                    <p className="text-[11px] text-[#76736A]">
                      AutoCAD floor plans, steam/glycol utility loads & P&ID validation
                    </p>
                  </div>
                </div>
              </div>

              {/* Assurance note */}
              <div className="pt-4 border-t border-[#E5DFD5] flex items-center gap-2 text-xs text-[#76736A]">
                <IconCheck className="w-4 h-4 text-[#D49B44] shrink-0" />
                <span>Reviewed directly by our three founders — no call center queues.</span>
              </div>
            </div>
          </div>

          {/* Physical Locations Bar */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5]">
              <div className="w-9 h-9 rounded-xl bg-[#F4EFE6] border border-[#E5DFD5] flex items-center justify-center text-[#D49B44] shrink-0">
                <IconBuildingFactory2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#1A1A18]">
                  Manufacturing & Assembly Hub (India)
                </h4>
                <p className="text-xs text-[#76736A] mt-0.5 leading-relaxed">
                  Sanwer Industrial Zone, Indian Industrial Hub, India.
                  Facility visits for tank inspections are welcomed by appointment.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5]">
              <div className="w-9 h-9 rounded-xl bg-[#F4EFE6] border border-[#E5DFD5] flex items-center justify-center text-[#D49B44] shrink-0">
                <IconMapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#1A1A18]">
                  Brewing Technology & Design Hub (Germany)
                </h4>
                <p className="text-xs text-[#76736A] mt-0.5 leading-relaxed">
                  Brauereimanufaktur Kruppa, Germany.
                  Origin of the patented Braupagode vertical brewhouse and vapor recompression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Interactive Connection Form */}
      <section
        id="connect-form"
        className="py-20 lg:py-28"
        aria-labelledby="h-connect-form"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Context & Guidance */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D49B44]">
                SECTION 02 · CONNECT WITH US
              </span>
              <h2
                id="h-connect-form"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A18] tracking-tight leading-[1.15]"
              >
                Tell Us What You’re Brewing Up.
              </h2>
              <p className="text-sm sm:text-base text-[#42403B] leading-relaxed">
                Whether you’re in early concept exploration or have verified
                municipal floor plans in hand, filling out this brief helps us
                assign the right technical lead and prepare meaningful data for
                our first call.
              </p>

              {/* What to expect checklist */}
              <div className="space-y-4 pt-4 border-t border-[#E5DFD5]">
                <h3 className="text-xs uppercase tracking-wider font-bold text-[#1A1A18]">
                  What Happens Next?
                </h3>
                <ul className="space-y-3 text-xs text-[#76736A]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#D49B44]/15 text-[#D49B44] flex items-center justify-center font-bold shrink-0 mt-0.5 text-[11px]">
                      1
                    </span>
                    <span>
                      <strong className="text-[#1A1A18]">Direct Founder Review:</strong> Abhay, Rainer, or Rüdiger personally reviews your project specs.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#D49B44]/15 text-[#D49B44] flex items-center justify-center font-bold shrink-0 mt-0.5 text-[11px]">
                      2
                    </span>
                    <span>
                      <strong className="text-[#1A1A18]">Preliminary Assessment:</strong> We evaluate vessel footprint, steam/electric loads, and batch cycle timelines.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#D49B44]/15 text-[#D49B44] flex items-center justify-center font-bold shrink-0 mt-0.5 text-[11px]">
                      3
                    </span>
                    <span>
                      <strong className="text-[#1A1A18]">Consultation Call:</strong> A focused 30-minute technical video conference tailored to your timeline.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Additional Link to Portfolio */}
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E5DFD5] space-y-2">
                <h4 className="text-xs font-bold text-[#1A1A18]">
                  Curious about recipe capabilities?
                </h4>
                <p className="text-xs text-[#76736A]">
                  Our brewhouses are engineered to produce over 130+ distinct styles from German Lagers and Hazy IPAs to Hard Ciders, Seltzers, and Kombucha.
                </p>
                <div className="pt-1">
                  <Link
                    href="/beverages"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D49B44] hover:text-[#BE8532] transition-colors"
                  >
                    <span>View Beverage Portfolio</span>
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: The Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

