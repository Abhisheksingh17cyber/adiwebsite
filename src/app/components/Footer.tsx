import { Link } from "react-router";
import logoImg from "figma:asset/23e0d09e-97ab-45a6-87ad-c17ac0d3a664-1.jpg";
import { Instagram, Youtube, Twitter, ArrowUp } from "lucide-react";
import { BorderBeam } from "./BorderBeam";

const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

const services = [
  "Cinematic Edits",
  "Reels & Shorts",
  "Brand Films",
  "Wedding Films",
  "YouTube Videos",
  "Social Media Packs",
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#050505] border-t border-[rgba(201,168,76,0.12)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-12">
              <img src={logoImg} alt="EditByAdi Logo" className="h-20 lg:h-28 w-auto object-contain mix-blend-screen contrast-125 brightness-110" />
            </Link>
            <p className="mb-8 max-w-xs font-body text-[0.88rem] text-[rgba(248,246,240,0.4)] leading-[1.8] font-light">
              Premium video editing agency crafting cinematic stories for
              creators, brands, and businesses worldwide.
            </p>
            <div className="flex flex-col gap-2 mb-8">
              <a href="mailto:businesswithadityak@gmail.com" className="text-xs hover:text-[var(--gold)] transition-colors text-[rgba(248,246,240,0.4)]">businesswithadityak@gmail.com</a>
              <a href="tel:7905158755" className="text-xs hover:text-[var(--gold)] transition-colors text-[rgba(248,246,240,0.4)]">7905158755</a>
            </div>
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Youtube, href: "#" },
                { Icon: Twitter, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  title="Social Link"
                  className="w-9 h-9 flex items-center justify-center border border-[rgba(201,168,76,0.15)] rounded-lg transition-all duration-300 hover:border-[var(--gold)] hover:bg-[var(--gold)] group"
                >
                  <Icon
                    size={14}
                    className="group-hover:text-black transition-colors text-[rgba(201,168,76,0.6)]"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-1 lg:pt-10">
            <h4 className="mb-8 font-body text-[0.7rem] tracking-[0.25em] uppercase text-[rgba(201,168,76,0.6)]">
              Navigation
            </h4>
            <ul className="space-y-5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-[var(--gold)] transition-colors duration-300 font-body text-[0.88rem] text-[rgba(248,246,240,0.4)] font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1 lg:pt-10">
            <h4 className="mb-8 font-body text-[0.7rem] tracking-[0.25em] uppercase text-[rgba(201,168,76,0.6)]">
              Services
            </h4>
            <ul className="space-y-5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="hover:text-[var(--gold)] transition-colors duration-300 font-body text-[0.88rem] text-[rgba(248,246,240,0.4)] font-light"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div className="lg:col-span-1 lg:pt-10">
            <div className="p-6 border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.03)] rounded-2xl relative overflow-hidden">
              <p className="mb-4 font-display text-[1.3rem] font-normal text-[#f8f6f0] leading-snug relative z-10">
                Ready to start?
              </p>
              <Link
                to="/contact"
                className="w-full py-3 text-xs tracking-[0.15em] uppercase flex items-center justify-center transition-all duration-300 hover:bg-[var(--gold)] hover:text-black font-body border border-[rgba(201,168,76,0.4)] text-[var(--gold)] rounded-lg relative z-10"
              >
                Get In Touch
              </Link>
              <BorderBeam duration={8} borderWidth={1.5} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(201,168,76,0.08)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[0.78rem] text-[rgba(248,246,240,0.25)] font-light">
            © 2025 EditByAdi. All rights reserved. Crafted with care.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-body text-[0.78rem] text-[rgba(248,246,240,0.25)] font-light">
              Privacy Policy · Terms of Service
            </span>
            <button
              onClick={scrollToTop}
              title="Scroll to top"
              className="w-9 h-9 flex items-center justify-center border border-[rgba(201,168,76,0.15)] rounded-lg transition-all duration-300 hover:border-[var(--gold)] hover:bg-[var(--gold)] group"
            >
              <ArrowUp
                size={14}
                className="group-hover:text-black transition-colors text-[rgba(201,168,76,0.5)]"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}