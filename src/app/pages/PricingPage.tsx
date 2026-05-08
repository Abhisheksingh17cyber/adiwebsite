import { motion } from "motion/react";
import { Link } from "react-router";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "per video",
    desc: "Perfect for creators just getting started with professional editing.",
    features: [
      "Up to 5 min final video",
      "Basic colour correction",
      "Text & titles",
      "Background music sync",
      "2 revision rounds",
      "720p / 1080p delivery",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "₹12,999",
    period: "per video",
    desc: "For brands and serious creators who want cinematic quality that converts.",
    features: [
      "Up to 15 min final video",
      "Cinema-grade colour grading",
      "Motion graphics & transitions",
      "Sound design & mixing",
      "Unlimited revisions",
      "4K delivery + all formats",
      "Rush delivery available",
      "Dedicated editor",
    ],
    featured: true,
  },
  {
    name: "Agency",
    price: "₹34,999",
    period: "per month",
    desc: "High-volume content production for agencies and power users.",
    features: [
      "Up to 20 videos/month",
      "All Professional features",
      "Brand style guide adherence",
      "Social media format exports",
      "Priority turnaround (48hrs)",
      "Monthly strategy call",
      "Dedicated account manager",
      "Raw file backup storage",
    ],
    featured: false,
  },
];

const faqs = [
  { q: "How long does a project take?", a: "Turnaround depends on complexity — Reels can be done in 48 hours, while longer cinematic edits may take 5–7 business days. We'll always confirm your timeline before starting." },
  { q: "How many revisions do I get?", a: "Starter includes 2 rounds of revisions. Professional and Agency plans come with unlimited revisions until you're 100% satisfied." },
  { q: "What format should I send footage in?", a: "Any format works — MP4, MOV, MXF, RAW files. We'll handle the rest. You can share via Google Drive, WeTransfer, or Dropbox." },
  { q: "Do you work with international clients?", a: "Absolutely. We work with clients across the globe. All communication is online and file delivery is fully digital." },
  { q: "Can I request a custom quote?", a: "Yes! If your project doesn't fit neatly into a plan, reach out via the contact page and we'll put together a tailored proposal." },
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
                {plan.featured && <div className="absolute top-0 left-10 right-10 h-0.5" style={{ background: "var(--gold)" }} />}

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: plan.featured ? "var(--gold)" : "rgba(248,246,240,0.4)" }}>{plan.name}</span>
                    {plan.featured && (
                      <div className="flex items-center gap-1">
                        <Sparkles size={11} style={{ color: "var(--gold)" }} />
                        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>Popular</span>
                      </div>
                    )}
                  </div>
                  <div className={`${plan.featured ? "gold-text-gradient" : ""} block`} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "3.2rem", fontWeight: 500, color: plan.featured ? undefined : "#f8f6f0", lineHeight: 1 }}>{plan.price}</div>
                  <div className="mt-1 mb-4" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.72rem", color: "rgba(248,246,240,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{plan.period}</div>
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