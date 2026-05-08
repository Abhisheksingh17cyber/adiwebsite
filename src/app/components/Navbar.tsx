import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, NavLink, useNavigate } from "react-router";
import logoImg from "figma:asset/23e0d09e-97ab-45a6-87ad-c17ac0d3a664-1.jpg";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(8, 8, 8, 0.96)" : "rgba(8,8,8,0.7)",
          borderBottom: "1px solid rgba(201, 168, 76, 0.12)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-40">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoImg}
              alt="EditByAdi Logo"
              className="h-32 w-auto object-contain"
              style={{ mixBlendMode: "screen", filter: "contrast(1.1) brightness(1.2)", transform: "scale(1.1)" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm tracking-[0.12em] uppercase transition-colors duration-300 relative group ${
                    isActive ? "text-[var(--gold)]" : "text-white/60 hover:text-[var(--gold)]"
                  }`
                }
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                      style={{
                        background: "var(--gold)",
                        width: isActive ? "100%" : "0%",
                      }}
                    />
                    {!isActive && (
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--gold)] group-hover:w-full transition-all duration-300" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => navigate("/contact")}
              className="btn-12"
            >
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-white/80 hover:text-[var(--gold)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-center items-center"
            style={{ background: "rgba(8,8,8,0.98)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-4xl tracking-wide text-white/80 hover:text-[var(--gold)] transition-colors duration-300"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 px-8 py-3 text-sm tracking-[0.15em] uppercase border inline-block text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all duration-300"
                  style={{ borderColor: "var(--gold)", fontFamily: "'DM Sans', sans-serif", borderRadius: "0.625rem" }}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}