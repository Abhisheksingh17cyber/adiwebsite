import { motion } from "motion/react";
import { Link } from "react-router";
import { Film, Zap, Video, Monitor, Smartphone, Star, ArrowRight, Check } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";

const services = [
  {
    icon: Film,
    title: "Cinematic Edits",
    subtitle: "For Filmmakers & Directors",
    desc: "Breathtaking cinematic cuts with Hollywood-level colour grading, immersive sound design, and seamless transitions that tell your story with emotion and depth.",
    features: ["Cinematic colour grade (LUTs)", "Sound design & mixing", "Motion graphics", "Smooth transitions", "Visual effects"],
    deliverable: "Up to 15 min final cut",
    turnaround: "5â€“7 business days",
    tags: ["Colour Grade", "Sound Mix", "Motion Graphics"],
  },
  {
    icon: Zap,
    title: "Reels & Shorts",
    subtitle: "For Content Creators",
    desc: "Hook-driven short-form edits optimised for Instagram Reels, YouTube Shorts, and TikTok â€” precision paced and built to retain attention from first frame to last.",
    features: ["Dynamic pacing & jump cuts", "Trending audio sync", "Captions & subtitles", "Vertical & square formats", "B-roll integration"],
    deliverable: "30 sec â€“ 3 min",
    turnaround: "48â€“72 hours",
    tags: ["Dynamic Cuts", "Captions", "Trending Audio"],
  },
  {
    icon: Monitor,
    title: "Brand & Ad Films",
    subtitle: "For Businesses & Brands",
    desc: "Premium commercial edits that communicate your brand's value proposition, drive conversions, and leave lasting impressions with your audience.",
    features: ["Brand tone alignment", "Product showcase edits", "Call-to-action integration", "Multi-format delivery", "Voice-over sync"],
    deliverable: "60 sec â€“ 5 min",
    turnaround: "4â€“6 business days",
    tags: ["Brand Films", "Ad Creatives", "Product Videos"],
  },
  {
    icon: Video,
    title: "Wedding Films",
    subtitle: "For Your Special Day",
    desc: "Timeless, emotional wedding films that capture every tender moment â€” the laughter, the tears, the vows â€” and weave them into a story you'll treasure for life.",
    features: ["Highlight reel (3â€“5 min)", "Full ceremony edit", "Same-day edit option", "Drone footage integration", "Custom music licensed"],
    deliverable: "3 min â€“ 2 hrs",
    turnaround: "7â€“14 business days",
    tags: ["Highlight Film", "Full Ceremony", "Same-Day Edit"],
  },
  {
    icon: Smartphone,
    title: "Social Media Packs",
    subtitle: "For Influencers & Agencies",
    desc: "Consistent, high-quality content packs tailored for each platform. Grow your audience with powerful visual storytelling that keeps viewers coming back.",
    features: ["10â€“20 pieces per pack", "Multi-platform formats", "Consistent brand style", "Fast 48hr turnaround", "Scheduling-ready files"],
    deliverable: "10â€“20 videos/pack",
    turnaround: "3â€“5 business days",
    tags: ["Multi-Platform", "Consistent Branding", "Fast Turnaround"],
  },
  {
    icon: Star,
    title: "YouTube Videos",
    subtitle: "For Educators & Vloggers",
    desc: "Polished, engaging YouTube videos with smart pacing, audience retention edits, custom intro/outro sequences, and clean chapter structuring.",
    features: ["Long-form editing (up to 1hr)", "Smart chapter structure", "Custom intro & outro", "Thumbnail consultation", "Retention optimised pacing"],
    deliverable: "Up to 60 min final cut",
    turnaround: "5â€“7 business days",
    tags: ["Long-Form", "Chapters", "B-Roll Magic"],
  },
];

function PageHeader({ label, title, subtitle }: { label: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="py-28 relative overflow-hidden" style={{ background: "#080808" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%,rgba(201,168,76,0.07) 0%,transparent 70%)" }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="flex items-center gap-4 mb-5">
          <div className="h-px w-12" style={{ background: "var(--gold)" }} />
          <span style={{ color: "var(--gold)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>{label}</span>
        </div>
        <h1 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(3rem,6vw,7rem)", fontWeight: 300, color: "#f8f6f0", lineHeight: 1.05, letterSpacing: "-0.01em" }}>{title}</h1>
        {subtitle && <p className="mt-5 max-w-xl" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1rem", color: "rgba(248,246,240,0.45)", lineHeight: 1.8, fontWeight: 300 }}>{subtitle}</p>}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)" }} />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Our Services"
        title={<>What we<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>specialise in.</em></>}
        subtitle="Every service is delivered with the same obsessive attention to detail â€” because your story deserves nothing less."
      />

      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollStack 
            useWindowScroll={true} 
            itemDistance={40} 
            itemStackDistance={30} 
            stackPosition="15%"
          >
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <ScrollStackItem key={svc.title}>
                  <div
                    className="group relative overflow-hidden h-full w-full"
                    style={{ background: "#0a0a0a", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "1.25rem" }}
                  >
                  <div className="absolute top-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" style={{ background: "var(--gold)" }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(201,168,76,0.025)" }} />

                  <div className="relative p-10 lg:p-14">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                      {/* Left */}
                      <div className="lg:col-span-5">
                        <div className="flex items-start gap-5 mb-6">
                          <div className="w-12 h-12 flex items-center justify-center border shrink-0" style={{ borderColor: "rgba(201,168,76,0.25)", color: "var(--gold)", borderRadius: "0.625rem" }}>
                            <Icon size={20} />
                          </div>
                          <div>
                            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,168,76,0.55)", marginBottom: "4px" }}>{svc.subtitle}</p>
                            <h2 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "2.4rem", fontWeight: 500, color: "#f8f6f0", lineHeight: 1.1 }}>{svc.title}</h2>
                          </div>
                        </div>
                        <p className="mb-6" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.93rem", color: "rgba(248,246,240,0.5)", lineHeight: 1.8, fontWeight: 300 }}>{svc.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {svc.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 text-xs" style={{ fontFamily: "'DM Sans',sans-serif", border: "1px solid rgba(201,168,76,0.2)", color: "rgba(201,168,76,0.7)", letterSpacing: "0.08em", borderRadius: "9999px" }}>{tag}</span>
                          ))}
                        </div>
                      </div>

                      {/* Middle â€” features */}
                      <div className="lg:col-span-4">
                        <p className="mb-4" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(248,246,240,0.3)" }}>What's Included</p>
                        <div className="space-y-2.5">
                          {svc.features.map((f) => (
                            <div key={f} className="flex items-center gap-3">
                              <Check size={13} style={{ color: "var(--gold)", flexShrink: 0 }} />
                              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.88rem", color: "rgba(248,246,240,0.55)", fontWeight: 300 }}>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right â€” meta + CTA */}
                      <div className="lg:col-span-3 flex flex-col justify-between">
                        <div className="space-y-5 mb-8">
                          <div>
                            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(248,246,240,0.3)", marginBottom: "4px" }}>Deliverable</p>
                            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "rgba(248,246,240,0.6)", fontWeight: 300 }}>{svc.deliverable}</p>
                          </div>
                          <div>
                            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(248,246,240,0.3)", marginBottom: "4px" }}>Turnaround</p>
                            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "rgba(248,246,240,0.6)", fontWeight: 300 }}>{svc.turnaround}</p>
                          </div>
                        </div>
                        <Link to="/contact" className="flex items-center justify-center gap-2 py-3 text-sm tracking-[0.1em] uppercase border transition-all duration-300 hover:bg-[var(--gold)] hover:text-black hover:border-[var(--gold)] group" style={{ fontFamily: "'DM Sans',sans-serif", borderColor: "rgba(201,168,76,0.3)", color: "var(--gold)", borderRadius: "0.625rem" }}>
                          Book This
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  </div>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>

          {/* Bottom CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-20">
            <p className="mb-6" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.8rem", fontWeight: 400, color: "rgba(248,246,240,0.7)", fontStyle: "italic" }}>
              Not sure which service fits? Let's figure it out together.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 text-sm tracking-[0.12em] uppercase font-medium" style={{ fontFamily: "'DM Sans',sans-serif", background: "var(--gold)", color: "#080808", borderRadius: "0.625rem" }}>
              Get a Free Consultation
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
