import { Link } from "react-router";
import logoImg from "figma:asset/23e0d09e-97ab-45a6-87ad-c17ac0d3a664-1.jpg";
import { Instagram, Youtube, Twitter, ArrowUp } from "lucide-react";

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
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(201,168,76,0.12)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/">
              <img
                src={logoImg}
                alt="EditByAdi"
                className="h-12 w-auto object-contain mb-6"
                style={{ mixBlendMode: "screen", filter: "contrast(1.1) brightness(1.15)" }}
              />
            </Link>
            <p
              className="mb-8 max-w-xs"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem",
                color: "rgba(248,246,240,0.4)",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              Premium video editing agency crafting cinematic stories for
              creators, brands, and businesses worldwide.
            </p>
            <div className="flex flex-col gap-2 mb-8">
              <a href="mailto:businesswithadityak@gmail.com" className="text-xs hover:text-[var(--gold)] transition-colors" style={{ color: "rgba(248,246,240,0.4)" }}>businesswithadityak@gmail.com</a>
              <a href="tel:7905158755" className="text-xs hover:text-[var(--gold)] transition-colors" style={{ color: "rgba(248,246,240,0.4)" }}>7905158755</a>
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
                  className="w-9 h-9 flex items-center justify-center border transition-all duration-300 hover:border-[var(--gold)] hover:bg-[var(--gold)] group"
                  style={{ borderColor: "rgba(201,168,76,0.15)", borderRadius: "0.5rem" }}
                >
                  <Icon
                    size={14}
                    className="group-hover:text-black transition-colors"
                    style={{ color: "rgba(201,168,76,0.6)" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <h4
              className="mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.6)",
              }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-[var(--gold)] transition-colors duration-300"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.88rem",
                      color: "rgba(248,246,240,0.4)",
                      fontWeight: 300,
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4
              className="mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.6)",
              }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="hover:text-[var(--gold)] transition-colors duration-300"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.88rem",
                      color: "rgba(248,246,240,0.4)",
                      fontWeight: 300,
                    }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div className="lg:col-span-2">
            <div
              className="p-6"
              style={{
                border: "1px solid rgba(201,168,76,0.2)",
                background: "rgba(201,168,76,0.03)",
                borderRadius: "1rem",
              }}
            >
              <p
                className="mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  color: "#f8f6f0",
                  lineHeight: 1.3,
                }}
              >
                Ready to start?
              </p>
              <Link
                to="/contact"
                className="w-full py-3 text-xs tracking-[0.15em] uppercase flex items-center justify-center transition-all duration-300 hover:bg-[var(--gold)] hover:text-black"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  border: "1px solid rgba(201,168,76,0.4)",
                  color: "var(--gold)",
                  borderRadius: "0.5rem",
                }}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(201,168,76,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              color: "rgba(248,246,240,0.25)",
              fontWeight: 300,
            }}
          >
            © 2025 EditByAdi. All rights reserved. Crafted with care.
          </p>
          <div className="flex items-center gap-6">
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                color: "rgba(248,246,240,0.25)",
                fontWeight: 300,
              }}
            >
              Privacy Policy · Terms of Service
            </span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 flex items-center justify-center border transition-all duration-300 hover:border-[var(--gold)] hover:bg-[var(--gold)] group"
              style={{ borderColor: "rgba(201,168,76,0.15)", borderRadius: "0.5rem" }}
            >
              <ArrowUp
                size={14}
                className="group-hover:text-black transition-colors"
                style={{ color: "rgba(201,168,76,0.5)" }}
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}