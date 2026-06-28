import { motion } from "motion/react";
import { Link } from "react-router";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Meteors } from "../components/Meteors";

const plans = [
  {
    name: "Short-Form Content",
    price: "Request",
    period: "per video",
    desc: "For short social media content, hooks, ads, and promos. Best for Instagram Reels, Shorts, and TikTok.",
    features: [
      "Short-form AI video content",
      "Social media optimised",
      "Hook-driven creative direction",
      "Editing, pacing & transitions",
      "Sound design included",
      "Platform-ready export",
    ],
    featured: false,
  },
  {
    name: "Brand Ads",
    price: "Request",
    period: "per video",
    desc: "For brands that need premium product or service ads. Best for campaigns, launches, and paid ads.",
    features: [
      "Cinematic AI brand visuals",
      "Script & storyboard direction",
      "Advanced AI video generation",
      "Colour grading & sound design",
      "Multiple format exports",
      "Revision rounds included",
      "Campaign-ready delivery",
      "Custom creative style",
    ],
    featured: true,
  },
  {
    name: "Cinematic Projects",
    price: "Request",
    period: "per project",
    desc: "For artists, storytellers, and cinematic concepts. Best for music videos, emotional stories, and narrative films.",
    features: [
      "Full concept development",
      "AI cinematic scene generation",
      "Narrative & emotional pacing",
      "Music sync & sound design",
      "Colour grading & finishing",
      "Captions if needed",
      "Final delivery all platforms",
      "Custom project scope",
    ],
    featured: false,
  },
];


const faqs = [
  { q: "Can you make AI music videos?", a: "Yes. We create concept-based AI music videos, lyric visuals, performance-style scenes, and cinematic storytelling videos." },
  { q: "Can you make ads for my brand?", a: "Yes. We create AI-powered brand ads, product ads, UGC-style ads, launch videos, and social media creatives." },
  { q: "Do I need a script?", a: "No. You can send a rough idea and we can help develop the concept, script, storyboard, and visual direction." },
  { q: "How long does it take?", a: "Short videos usually take a few days. Larger music videos or story films depend on complexity." },
  { q: "Can you match a reference style?", a: "Yes. You can send reference videos, moodboards, brand colours, or examples, and we'll build the visual direction around them." },
  { q: "Do you provide editing too?", a: "Yes. Final delivery includes editing, pacing, transitions, sound design, captions if needed, and export for your platform." },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <div className="py-28 relative overflow-hidden" style={{ background: "#080808" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%,rgba(201,168,76,0.07) 0%,transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span style={{ color: "var(--gold)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>Pricing</span>
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(3rem,6vw,7rem)", fontWeight: 300, color: "#f8f6f0", lineHeight: 1.05 }}>
            Transparent pricing.<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>Extraordinary value.</em>
          </h1>
          <p className="mt-5 max-w-lg mx-auto" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "rgba(248,246,240,0.45)", lineHeight: 1.8, fontWeight: 300 }}>
            No hidden fees. No surprises. Just honest work at premium quality that delivers real results.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)" }} />
      </div>

      {/* Plans */}
      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {plans.map((plan, i) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative p-10 lg:p-12 flex flex-col overflow-hidden"
                style={{ background: plan.featured ? "rgba(201,168,76,0.055)" : "#0a0a0a", border: "1px solid", borderColor: plan.featured ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.12)", borderRadius: "1.5rem" }}>
                
                <Meteors number={15} />

                {plan.featured && <div className="absolute top-0 left-10 right-10 h-0.5 z-10" style={{ background: "var(--gold)" }} />}

                <div className="mb-8">
                  <div className={`${plan.featured ? "gold-text-gradient" : ""} block mb-2`} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", fontWeight: 500, color: plan.featured ? undefined : "#f8f6f0", lineHeight: 1.1 }}>{plan.name}</div>
                  <div className="mb-4" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", color: "rgba(248,246,240,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{plan.period}</div>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.88rem", color: "rgba(248,246,240,0.45)", lineHeight: 1.7, fontWeight: 300 }}>{plan.desc}</p>
                </div>

                <div className="h-px mb-8" style={{ background: "rgba(201,168,76,0.15)" }} />

                <div className="flex-1 space-y-3 mb-10">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <Check size={13} style={{ color: "var(--gold)", marginTop: "3px", flexShrink: 0 }} />
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.88rem", color: "rgba(248,246,240,0.55)", lineHeight: 1.6, fontWeight: 300 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="w-full py-4 text-sm tracking-[0.12em] uppercase flex items-center justify-center gap-2 border transition-all duration-300 hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-black group"
                  style={{ fontFamily: "'DM Sans',sans-serif", borderColor: plan.featured ? "var(--gold)" : "rgba(201,168,76,0.3)", color: plan.featured ? "var(--gold)" : "rgba(248,246,240,0.55)", borderRadius: "0.625rem" }}>
                  Get Started
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-10" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.83rem", color: "rgba(248,246,240,0.3)", fontWeight: 300 }}>
            Need something custom?{" "}
            <Link to="/contact" className="underline hover:text-[var(--gold)] transition-colors" style={{ color: "rgba(201,168,76,0.6)" }}>Let's talk.</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ background: "#080808" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span style={{ color: "var(--gold)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>FAQ</span>
          </div>
          <h2 className="mb-14" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.5rem,4vw,4rem)", fontWeight: 400, color: "#f8f6f0", lineHeight: 1.1 }}>
            Frequently asked<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>questions.</em>
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="py-8 border-b" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
                <h3 className="mb-3" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.5rem", fontWeight: 500, color: "#f8f6f0" }}>{faq.q}</h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.92rem", color: "rgba(248,246,240,0.45)", lineHeight: 1.8, fontWeight: 300 }}>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}