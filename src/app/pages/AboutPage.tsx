import { motion } from "motion/react";
import { Link } from "react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";

const values = [
  { title: "Obsessive Craft", desc: "We treat every frame with the same care as the last. No shortcuts, no templates, no compromise." },
  { title: "Creative Partnership", desc: "We don't just execute — we collaborate, challenge, and elevate your vision to its highest potential." },
  { title: "Reliable Delivery", desc: "Deadlines are sacred. We deliver on time, every time, without sacrificing a single pixel of quality." },
  { title: "Transparent Communication", desc: "You're never left wondering. Clear timelines, honest feedback, and direct access to your editor." },
];

const highlights = [
  "Frame-by-frame attention to detail",
  "Cinema-grade colour grading",
  "Fast & reliable turnaround times",
  "Direct communication with the editor",
  "Unlimited revisions on premium plans",
  "Files delivered in any format you need",
  "3+ years of industry experience",
  "500+ videos successfully delivered",
];

const processSteps = [
  { number: "01", title: "Discovery Call", desc: "We begin with a brief consultation to understand your vision, goals, and creative direction. No templates — every project starts fresh." },
  { number: "02", title: "Footage Review", desc: "You send us your raw footage, references, and music preferences. We review everything to plan the edit structure and style." },
  { number: "03", title: "Editing & Craft", desc: "Our editor meticulously crafts your video — from assembly cut to colour grade, motion graphics, and sound design." },
  { number: "04", title: "Review & Revise", desc: "You receive a preview link to review. We refine every detail based on your feedback until you're completely satisfied." },
  { number: "05", title: "Delivery", desc: "Final files delivered in your preferred format and resolution, ready to publish — optimised for every platform." },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="py-28 relative overflow-hidden" style={{ background: "#080808" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%,rgba(201,168,76,0.07) 0%,transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span style={{ color: "var(--gold)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>About Us</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(3rem,6vw,7rem)", fontWeight: 300, color: "#f8f6f0", lineHeight: 1.05 }}>
            Not just editors —<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>your creative partners.</em>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)" }} />
      </div>

      {/* Story section */}
      <section className="py-24" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative">
              <div className="relative aspect-[4/5]" style={{ borderRadius: "1.5rem", overflow: "hidden" }}>
                <img src="https://images.unsplash.com/photo-1742046335792-060080d72460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRhcmslMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzc4Mjc1Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Editing studio" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(201,168,76,0.07) 0%,transparent 60%)" }} />
                <div className="absolute inset-0 border opacity-25" style={{ borderColor: "var(--gold)", margin: "12px", borderRadius: "1.25rem" }} />
              </div>
              <div className="absolute -bottom-8 -right-8 p-6" style={{ background: "rgba(8,8,8,0.95)", border: "1px solid rgba(201,168,76,0.3)", backdropFilter: "blur(12px)", borderRadius: "1rem" }}>
                <div className="gold-text-gradient" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.8rem", fontWeight: 600, lineHeight: 1 }}>3+</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(248,246,240,0.45)", marginTop: "4px" }}>Years of Excellence</div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <h2 className="mb-7" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.2rem,3.5vw,3.5rem)", fontWeight: 400, color: "#f8f6f0", lineHeight: 1.15 }}>
                The story behind<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>EditByAdi.</em>
              </h2>
              <p className="mb-5" style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(248,246,240,0.5)", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 }}>
                EditByAdi was founded on one simple belief: every video has the potential to move people. We're a dedicated video editing agency led by Adi — a passionate storyteller with a cinematic eye and a relentless pursuit of perfection.
              </p>
              <p className="mb-10" style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(248,246,240,0.5)", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 }}>
                From independent creators to global brands, we bring the same level of craft and care to every project. Because your story deserves nothing less than extraordinary — and we're here to make sure it reaches the world that way.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <motion.div key={item} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-center gap-3">
                    <CheckCircle2 size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.87rem", color: "rgba(248,246,240,0.55)", fontWeight: 300 }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span style={{ color: "var(--gold)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>Our Values</span>
          </div>
          <h2 className="mb-16" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.5rem,4vw,4.5rem)", fontWeight: 400, color: "#f8f6f0", lineHeight: 1.1 }}>
            Principles that guide<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>every project.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group p-8 relative overflow-hidden" style={{ background: "#080808", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "1.25rem" }}>
                <div className="absolute top-0 left-6 right-6 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: "var(--gold)" }} />
                <div className="gold-text-gradient mb-4 block" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "3.5rem", fontWeight: 600, lineHeight: 1, opacity: 0.3 }}>0{i + 1}</div>
                <h3 className="mb-3" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.6rem", fontWeight: 500, color: "#f8f6f0" }}>{v.title}</h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.88rem", color: "rgba(248,246,240,0.45)", lineHeight: 1.75, fontWeight: 300 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative" style={{ background: "#0a0a0a" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(6rem,18vw,16rem)", fontWeight: 700, color: "rgba(201,168,76,0.03)", whiteSpace: "nowrap" }}>PROCESS</div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span style={{ color: "var(--gold)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>How It Works</span>
          </div>
          <h2 className="mb-16" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.5rem,4vw,4.5rem)", fontWeight: 400, color: "#f8f6f0", lineHeight: 1.1 }}>
            Simple. Seamless.<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>Stress-free.</em>
          </h2>
          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <motion.div key={step.number} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group flex items-start gap-10 lg:gap-16 py-9 border-b" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", fontWeight: 300, color: "rgba(201,168,76,0.4)", minWidth: "32px", paddingTop: "2px" }}>{step.number}</div>
                <div className="flex-1 lg:flex lg:items-start lg:justify-between lg:gap-16">
                  <h3 className="mb-2 lg:mb-0 transition-colors duration-300 group-hover:text-[var(--gold)]" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.5rem,2.8vw,2.3rem)", fontWeight: 400, color: "#f8f6f0", lineHeight: 1.1, minWidth: "200px" }}>{step.title}</h3>
                  <p className="lg:max-w-lg" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "rgba(248,246,240,0.45)", lineHeight: 1.8, fontWeight: 300 }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative" style={{ background: "#080808" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%,rgba(201,168,76,0.06) 0%,transparent 70%)" }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.5rem,5vw,5rem)", fontWeight: 400, color: "#f8f6f0", lineHeight: 1.1 }}>
            Ready to work<br /><em className="shimmer-text" style={{ fontStyle: "italic" }}>together?</em>
          </h2>
          <p className="mb-10" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "rgba(248,246,240,0.45)", lineHeight: 1.8, fontWeight: 300 }}>
            Let's talk about your project and see how we can bring your vision to life.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 text-sm tracking-[0.12em] uppercase font-medium" style={{ fontFamily: "'DM Sans',sans-serif", background: "var(--gold)", color: "#080808", borderRadius: "0.625rem" }}>
            Get In Touch
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}