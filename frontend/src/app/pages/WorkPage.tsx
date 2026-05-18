import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Play, ExternalLink, ArrowRight } from "lucide-react";

const works = [
  { id: 1, title: "AI Music Video — Concept Project", client: "Selected Work", category: "Music Videos", image: "https://images.unsplash.com/photo-1628571201589-bd794b68071e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", featured: true },
  { id: 2, title: "Brand Ad Campaign", client: "Selected Work", category: "Brand Ads", image: "https://images.unsplash.com/photo-1762535120786-76238d9eeb0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", featured: false },
  { id: 3, title: "UGC Story Ad", client: "Selected Work", category: "UGC Ads", image: "https://images.unsplash.com/photo-1770896686968-bf828a561a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", featured: false },
  { id: 4, title: "Cinematic Story Film", client: "Selected Work", category: "Story Films", image: "https://images.unsplash.com/photo-1742046335792-060080d72460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", featured: false },
  { id: 5, title: "Product Visual Ad", client: "Selected Work", category: "Product Ads", image: "https://images.unsplash.com/photo-1759563871375-a728c4e7218d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", featured: false },
  { id: 6, title: "Social Media Content Pack", client: "Selected Work", category: "Social Content", image: "https://images.unsplash.com/photo-1666858443985-fead1d59b4f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", featured: false },
];

const categories = ["All", "Music Videos", "Brand Ads", "UGC Ads", "Story Films", "Social Content", "Product Ads"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? works : works.filter((w) => w.category === activeCategory);

  return (
    <>
      {/* Header */}
      <div className="py-28 relative overflow-hidden" style={{ background: "#080808" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%,rgba(201,168,76,0.07) 0%,transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span style={{ color: "var(--gold)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>Portfolio</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(3rem,6vw,7rem)", fontWeight: 300, color: "#f8f6f0", lineHeight: 1.05 }}>
            Recent AI<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>Video Work.</em>
          </h1>
          <p className="mt-5 max-w-xl" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "rgba(248,246,240,0.45)", lineHeight: 1.8, fontWeight: 300 }}>
            A curated selection of AI-powered concept projects — music videos, brand ads, story films, and more.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)" }} />
      </div>

      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-14">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className="px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300"
                style={{ fontFamily: "'DM Sans',sans-serif", background: activeCategory === cat ? "var(--gold)" : "transparent", color: activeCategory === cat ? "#080808" : "rgba(248,246,240,0.45)", border: "1px solid", borderColor: activeCategory === cat ? "var(--gold)" : "rgba(201,168,76,0.2)", fontWeight: activeCategory === cat ? 600 : 400, borderRadius: "9999px" }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {filtered.map((work, i) => {
              const isFeatured = i === 0;
              return (
                <motion.div key={work.id} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={`relative overflow-hidden group cursor-pointer ${isFeatured ? "md:col-span-8 aspect-[16/9]" : "md:col-span-4 aspect-[4/3]"}`}
                  style={{ borderRadius: "1.25rem" }}
                  onMouseEnter={() => setHoveredId(work.id)} onMouseLeave={() => setHoveredId(null)}>
                  <img
                    src={work.image}
                    alt={work.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300" style={{ background: "linear-gradient(180deg,transparent 20%,rgba(8,8,8,0.88) 100%)", opacity: hoveredId === work.id ? 1 : 0.55 }} />

                  {hoveredId === work.id && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ border: "2px solid var(--gold)", background: "rgba(201,168,76,0.15)" }}>
                        <Play size={18} fill="var(--gold)" color="var(--gold)" />
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "3px" }}>{work.category}</p>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: isFeatured ? "2rem" : "1.4rem", fontWeight: 500, color: "#f8f6f0" }}>{work.title}</h3>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", color: "rgba(248,246,240,0.4)", marginTop: "3px" }}>{work.client}</p>
                  </div>

                  <div className="absolute top-4 right-4 transition-all duration-300" style={{ opacity: hoveredId === work.id ? 1 : 0 }}>
                    <ExternalLink size={16} style={{ color: "var(--gold)" }} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <p className="mb-6" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", fontWeight: 400, color: "rgba(248,246,240,0.6)", fontStyle: "italic" }}>
              Want to see your project here?
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 text-sm tracking-[0.12em] uppercase" style={{ fontFamily: "'DM Sans',sans-serif", background: "var(--gold)", color: "#080808", fontWeight: 600, borderRadius: "0.625rem" }}>
              Start a Project
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}