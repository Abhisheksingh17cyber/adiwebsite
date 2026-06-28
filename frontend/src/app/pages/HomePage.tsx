import { motion } from "motion/react";
import { Link } from "react-router";
import { Play, ArrowRight, Film, Zap, Monitor, Quote, Music, Sparkles, X } from "lucide-react";
import { MarqueeBanner } from "../components/MarqueeBanner";
import { useState, useMemo, useRef, useCallback } from "react";
import Hyperspeed from "../components/Hyperspeed";
import BorderGlow from '../components/BorderGlow';
import TrueFocus from '../components/TrueFocus';

const stats = [
  { value: "500+", label: "Videos Delivered" },
  { value: "100+", label: "Happy Clients" },
  { value: "5★", label: "Avg. Rating" },
  { value: "3 Yrs", label: "Of Experience" },
];

const previewServices = [
  {
    icon: Music,
    title: "Music Videos",
    desc: "Cinematic AI visuals for artists, songs, lyric videos, and concept-based music films.",
  },
  {
    icon: Monitor,
    title: "Brand Ads",
    desc: "High-impact AI commercials for products, services, launches, and campaigns.",
  },
  {
    icon: Zap,
    title: "UGC Ads",
    desc: "Natural, scroll-stopping ad creatives designed for TikTok, Instagram, YouTube Shorts, and Meta ads.",
  },
  {
    icon: Film,
    title: "Story Films",
    desc: "Short cinematic films, visual stories, fictional scenes, emotional narratives, and social awareness videos.",
  },
  {
    icon: ArrowRight,
    title: "Social Media Content",
    desc: "AI-generated reels, shorts, hooks, promos, explainers, and viral concept videos.",
  },
  {
    icon: Sparkles,
    title: "Product Visuals",
    desc: "Premium product shots, lifestyle visuals, beauty ads, fashion films, and e-commerce content.",
  },
];

const portfolioPreviews = [
  {
    id: 1,
    title: "Cinematic Brand Film",
    category: "Brand & Commercial",
    video: "/videos/CLOTHING PROMO.mp4",
    span: "md:col-span-7",
  },
  {
    id: 2,
    title: "Social Media Pack",
    category: "Social Media",
    video: "/videos/UGC AD.mp4",
    span: "md:col-span-5",
  },
  {
    id: 3,
    title: "AI Documentary",
    category: "Story Film",
    video: "/videos/AI DOCUMENTARY STYLE EDIT.mp4",
    span: "md:col-span-4",
  },
  {
    id: 4,
    title: "Product Commercial",
    category: "Brand & Commercial",
    video: "/videos/CARTOON AD FOR DETERGENT.mp4",
    span: "md:col-span-4",
  },
  {
    id: 5,
    title: "UGC Ad — Lip Plump",
    category: "UGC Ad",
    video: "/videos/UGC AD - LIP PLUMP.mp4",
    span: "md:col-span-4",
  },
  {
    id: 6,
    title: "AI Documentary Video",
    category: "Story Film",
    video: "/videos/ai doctumantry video.mp4",
    span: "md:col-span-6",
  },
  {
    id: 7,
    title: "AI Story Telling",
    category: "Story Film",
    video: "/videos/ai story telling.mp4",
    span: "md:col-span-6",
  },
  {
    id: 8,
    title: "Baby AI Video",
    category: "AI Video",
    video: "/videos/baby ai vide.mp4",
    span: "md:col-span-4",
  },
  {
    id: 9,
    title: "Brand Ad AI Video",
    category: "Brand & Commercial",
    video: "/videos/brand ad ai video.mp4",
    span: "md:col-span-4",
  },
  {
    id: 10,
    title: "Personalised Brand AI Video",
    category: "Brand & Commercial",
    video: "/videos/personalise brand ai video.mp4",
    span: "md:col-span-4",
  },
  {
    id: 11,
    title: "Personalised AI Video",
    category: "AI Video",
    video: "/videos/personalised ai video.mp4",
    span: "md:col-span-6",
  },
  {
    id: 12,
    title: "Personalised Brand Video",
    category: "Brand & Commercial",
    video: "/videos/personalised brand ai video.mp4",
    span: "md:col-span-6",
  },
  {
    id: 13,
    title: "WhatsApp Video",
    category: "AI Video",
    video: "/videos/WhatsApp Video 2026-06-28 at 4.44.28 PM.mp4",
    span: "md:col-span-12",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "EditByAdi completely transformed our brand's video presence. The cinematic quality was beyond anything we expected. Our engagement tripled within a month.",
    name: "Priya Sharma",
    role: "Founder, LuxeBloom",
    avatar: "PS",
  },
  {
    id: 2,
    quote: "Working with Adi was an absolute pleasure. Fast turnaround, beautiful edits, and they understood our vision from the very first call.",
    name: "Rahul Mehta",
    role: "YouTube Creator • 500K Subs",
    avatar: "RM",
  },
  {
    id: 3,
    quote: "Our wedding film made everyone cry — in the best way. Adi captured emotions we didn't even notice in the moment. A treasure we'll hold forever.",
    name: "Ananya & Vikram",
    role: "Wedding Clients",
    avatar: "AV",
  },
];

export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const openVideo = useCallback((videoSrc: string) => {
    setActiveVideo(videoSrc);
  }, []);

  const closeVideo = useCallback(() => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setActiveVideo(null);
  }, []);

  const hyperspeedOptions = useMemo(() => ({
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 9,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5] as [number, number],
    lightStickHeight: [1.3, 1.7] as [number, number],
    movingAwaySpeed: [60, 80] as [number, number],
    movingCloserSpeed: [-120, -160] as [number, number],
    carLightsLength: [400 * 0.03, 400 * 0.2] as [number, number],
    carLightsRadius: [0.05, 0.14] as [number, number],
    carWidthPercentage: [0.3, 0.5] as [number, number],
    carShiftX: [-0.8, 0.8] as [number, number],
    carFloorSeparation: [0, 5] as [number, number],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xffffff,
      brokenLines: 0xffffff,
      // Gold tones for both lanes — matches EditByAdi brand
      leftCars:  [0xc9a84c, 0xd4af37, 0xb8972a],
      rightCars: [0xfff4c2, 0xf5c518, 0xc9a84c],
      sticks: 0xc9a84c,
    },
  }), []);

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: "#000000" }}>

        {/* Hyperspeed background — fills entire hero */}
        <div className="absolute inset-0 z-0">
          <Hyperspeed effectOptions={hyperspeedOptions} />
        </div>

        {/* Gradient overlays — top fade for navbar, bottom fade for stats bar */}
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.0) 25%, rgba(0,0,0,0.0) 60%, rgba(0,0,0,0.88) 100%)" }} />
        {/* Subtle centre vignette so copy pops */}
        <div className="absolute inset-0 z-[2] pointer-events-none" style={{ background: "radial-gradient(ellipse 85% 70% at 50% 45%, transparent 40%, rgba(0,0,0,0.45) 100%)" }} />

        <div className="relative z-10 w-full px-6 lg:px-20 xl:px-32 pt-36 pb-24">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 w-full">
            <div>
              <div className="overflow-hidden mb-3">
                <motion.h1 initial={{ y: 110, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-white" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(3rem,8vw,9rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.02em" }}>
                  AI Videos.
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-3">
                <motion.h1 initial={{ y: 110, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="shimmer-text" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(3rem,8vw,9rem)", fontWeight: 600, lineHeight: 1, fontStyle: "italic", letterSpacing: "-0.02em" }}>
                  Your Ideas.
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-12 lg:mb-4">
                <motion.h1 initial={{ y: 110, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="text-white/25" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(3rem,8vw,9rem)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.02em" }}>
                  Cinematic.
                </motion.h1>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.9 }}
              className="flex flex-col items-start gap-8 lg:pb-8">
              <p className="max-w-md" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "rgba(248,246,240,0.5)", lineHeight: 1.85, fontWeight: 300 }}>
                We create AI-powered music videos, brand ads, UGC ads, story films, and social content for creators, artists, and businesses — faster, sharper, and more affordable than traditional production.
              </p>
              <div className="flex items-center gap-5">
                <Link to="/contact" className="btn-12">
                  <span>Start Your Project</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>



      </section>

      <MarqueeBanner />

      {/* ─── SERVICES PREVIEW ─────────────────────────────────── */}
      <section className="py-28" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-12" style={{ background: "var(--gold)" }} />
                <span style={{ color: "var(--gold)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>What We Do</span>
              </div>
              <h2 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(2.5rem,4.5vw,4.5rem)", fontWeight: 400, color: "#f8f6f0", lineHeight: 1.1 }}>
                Crafted with <em style={{ color: "var(--gold)", fontStyle: "italic" }}>precision</em>
                <br />& purpose.
              </h2>
            </div>
            <Link to="/services" className="flex items-center gap-2 text-sm tracking-[0.12em] uppercase group shrink-0" style={{ color: "var(--gold)", fontFamily: "'DM Sans',sans-serif" }}>
              View All Services
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {previewServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="group relative p-8 lg:p-10 overflow-hidden" style={{ background: "#0a0a0a", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "1.25rem" }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "var(--gold-subtle)", borderRadius: "1.25rem" }} />
                  <div className="relative">
                    <div className="w-12 h-12 flex items-center justify-center border mb-6" style={{ borderColor: "rgba(201,168,76,0.25)", color: "var(--gold)", borderRadius: "0.625rem" }}>
                      <Icon size={20} />
                    </div>
                    <h3 className="mb-3" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.9rem", fontWeight: 500, color: "#f8f6f0" }}>{svc.title}</h3>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "rgba(248,246,240,0.45)", lineHeight: 1.75, fontWeight: 300 }}>{svc.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO PREVIEW ────────────────────────────────── */}
      <section className="py-28" style={{ background: "#080808" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-12" style={{ background: "var(--gold)" }} />
                <span style={{ color: "var(--gold)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>Featured Work</span>
              </div>
              <h2 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(2.5rem,4.5vw,4.5rem)", fontWeight: 400, color: "#f8f6f0", lineHeight: 1.1 }}>
                Stories we've<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>brought to life.</em>
              </h2>
            </div>
            <Link to="/work" className="flex items-center gap-2 text-sm tracking-[0.12em] uppercase group shrink-0" style={{ color: "var(--gold)", fontFamily: "'DM Sans',sans-serif" }}>
              View Full Portfolio
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {portfolioPreviews.map((work, i) => (
              <div key={work.id} className={work.span}>
                <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative overflow-hidden group cursor-pointer aspect-[4/3]"
                  style={{ borderRadius: "1.25rem" }}
                  onClick={() => openVideo(work.video)}
                  onMouseEnter={() => setHoveredId(work.id)} onMouseLeave={() => setHoveredId(null)}>
                  <video
                    src={work.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play().catch(() => {})}
                    onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                  />
                  <div className="absolute inset-0 transition-opacity duration-300" style={{ background: "linear-gradient(180deg,transparent 30%,rgba(8,8,8,0.85) 100%)", opacity: hoveredId === work.id ? 1 : 0.55 }} />
                  {/* Play button — always visible */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        border: "2px solid var(--gold)",
                        background: hoveredId === work.id ? "rgba(201,168,76,0.25)" : "rgba(201,168,76,0.1)",
                        transform: hoveredId === work.id ? "scale(1.15)" : "scale(1)",
                      }}>
                      <Play size={18} fill="var(--gold)" color="var(--gold)" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "4px" }}>{work.category}</p>
                    <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.5rem", fontWeight: 500, color: "#f8f6f0" }}>{work.title}</h3>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden" style={{ background: "#0a0a0a" }}>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 pointer-events-none" style={{ background: "radial-gradient(circle,var(--gold) 0%,transparent 70%)", transform: "translate(-30%,30%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span style={{ color: "var(--gold)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>Client Stories</span>
          </div>
          <h2 className="mb-12 text-center" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.5rem,4vw,3.5rem)", fontWeight: 400, color: "#f8f6f0", lineHeight: 1.1 }}>
            Voices that<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>inspire us.</em>
          </h2>

          <div className="p-10 lg:p-14 relative" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.14)", borderRadius: "1.5rem" }}>
            <div className="absolute top-8 right-10 opacity-10"><Quote size={72} style={{ color: "var(--gold)" }} /></div>
            <p className="mb-8" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(1.3rem,2.5vw,1.9rem)", fontWeight: 400, color: "rgba(248,246,240,0.85)", lineHeight: 1.65, fontStyle: "italic", maxWidth: "760px" }}>
              "{testimonials[activeTestimonial].quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold" style={{ background: "linear-gradient(135deg,var(--gold),var(--gold-dark))", color: "#080808", fontFamily: "'DM Sans',sans-serif" }}>
                {testimonials[activeTestimonial].avatar}
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.95rem", fontWeight: 500, color: "#f8f6f0" }}>{testimonials[activeTestimonial].name}</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.78rem", color: "rgba(201,168,76,0.7)" }}>{testimonials[activeTestimonial].role}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} title={`View testimonial ${i + 1}`} onClick={() => setActiveTestimonial(i)} className="transition-all duration-300 h-0.5" style={{ width: i === activeTestimonial ? "28px" : "8px", background: i === activeTestimonial ? "var(--gold)" : "rgba(201,168,76,0.25)" }} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden" style={{ background: "#080808" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%,rgba(201,168,76,0.07) 0%,transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-6 relative">
          <BorderGlow className="px-6 py-12 lg:p-20 text-center" borderRadius={32} glowIntensity={1.2}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-16" style={{ background: "var(--gold)" }} />
                <span style={{ color: "var(--gold)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>Start Today</span>
                <div className="h-px w-16" style={{ background: "var(--gold)" }} />
              </div>
              <TrueFocus 
                sentence="Ready to create something iconic?"
                className="mb-8"
                style={{ 
                  fontFamily: "'DM Sans',sans-serif", 
                  fontSize: "clamp(2.5rem,5.5vw,5.5rem)", 
                  fontWeight: 400, 
                  color: "#f8f6f0", 
                  lineHeight: 1.2,
                  justifyContent: 'center'
                }}
                blurAmount={3}
                borderColor="var(--gold)"
                glowColor="rgba(201,168,76,0.3)"
                pauseBetweenAnimations={1.5}
              />
              <p className="mb-10" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "rgba(248,246,240,0.45)", lineHeight: 1.8, fontWeight: 300, maxWidth: "480px", margin: "0 auto 2.5rem" }}>
                Send your concept, product, song, or script — and we'll help you shape it into a cinematic AI video ready for your audience.
              </p>
              <div className="flex items-center justify-center gap-5 flex-wrap">
                <Link to="/contact" className="btn-12">
                  <span>Get In Touch</span>
                </Link>
                <Link to="/pricing" className="btn-12">
                  <span>View Pricing</span>
                </Link>
              </div>
            </motion.div>
          </BorderGlow>
        </div>
      </section>

      {/* ─── VIDEO MODAL ──────────────────────────────────────── */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
          onClick={closeVideo}
        >
          {/* Close button */}
          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
            style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)" }}
          >
            <X size={20} style={{ color: "var(--gold)" }} />
          </button>

          {/* Video player */}
          <div
            className="w-full max-w-5xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="w-full rounded-2xl"
              style={{ maxHeight: "80vh", background: "#000" }}
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
