import { useState } from "react";
import { motion } from "motion/react";
import { Send, Instagram, Youtube, Twitter, Mail, MessageCircle, Clock, MapPin } from "lucide-react";

const videoTypes = ["YouTube Video", "Brand Film", "Reels / Shorts", "Wedding Film", "Commercial Ad", "Social Media Pack", "Other"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: "", budget: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="py-28 relative overflow-hidden" style={{ background: "#080808" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%,rgba(201,168,76,0.07) 0%,transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12" style={{ background: "var(--gold)" }} />
            <span style={{ color: "var(--gold)", fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>Get In Touch</span>
          </div>
          <h1 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(3rem,6vw,7rem)", fontWeight: 300, color: "#f8f6f0", lineHeight: 1.05 }}>
            Let's create something<br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>remarkable together.</em>
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)" }} />
      </div>

      <section className="py-20" style={{ background: "#0a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info column */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-10">
              <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(248,246,240,0.5)", fontSize: "1rem", lineHeight: 1.85, fontWeight: 300 }}>
                Ready to elevate your content? Fill out the form and we'll get back to you within 24 hours to discuss your project in detail.
              </p>

              {/* Contact details */}
              <div className="space-y-5">
                {[
                  { Icon: Mail, label: "Email Us", value: "businesswithadityak@gmail.com", href: "mailto:businesswithadityak@gmail.com" },
                  { Icon: MessageCircle, label: "Call / WhatsApp", value: "7905158755", href: "https://wa.me/917905158755" },
                  { Icon: Clock, label: "Response Time", value: "Within 24 hours", href: "#" },
                  { Icon: MapPin, label: "Based In", value: "India Â· Worldwide", href: "#" },
                ].map(({ Icon, label, value, href }) => (
                  <a key={label} href={href} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center border transition-all duration-300 group-hover:border-[var(--gold)] group-hover:bg-[rgba(201,168,76,0.08)]" style={{ borderColor: "rgba(201,168,76,0.2)", borderRadius: "0.625rem" }}>
                      <Icon size={15} style={{ color: "var(--gold)" }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(248,246,240,0.3)" }}>{label}</div>
                      <div className="group-hover:text-[var(--gold)] transition-colors" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "rgba(248,246,240,0.6)", fontWeight: 300 }}>{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Socials */}
              <div>
                <p className="mb-4" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(248,246,240,0.3)" }}>Follow Our Work</p>
                <div className="flex items-center gap-3">
                  {[
                    { Icon: Instagram, name: "Instagram" },
                    { Icon: Youtube, name: "YouTube" },
                    { Icon: Twitter, name: "Twitter" }
                  ].map(({ Icon, name }, i) => (
                    <a key={i} href="#" title={name} aria-label={name} className="w-10 h-10 flex items-center justify-center border transition-all duration-300 hover:border-[var(--gold)] hover:bg-[var(--gold)] group" style={{ borderColor: "rgba(201,168,76,0.2)", borderRadius: "0.625rem" }}>
                      <Icon size={15} className="group-hover:text-black transition-colors" style={{ color: "var(--gold)" }} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="p-6" style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.03)", borderRadius: "1rem" }}>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "1.25rem", fontWeight: 400, color: "rgba(248,246,240,0.65)", lineHeight: 1.55, fontStyle: "italic" }}>
                  "Every great video starts with a single conversation."
                </p>
                <p className="mt-3" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.75rem", color: "var(--gold)", letterSpacing: "0.1em" }}>â€” Adi, Founder</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-24 text-center" style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.04)", borderRadius: "1.5rem" }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid var(--gold)" }}>
                    <Send size={22} style={{ color: "var(--gold)" }} />
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "2.2rem", fontWeight: 500, color: "#f8f6f0" }}>Message Sent!</h3>
                  <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(248,246,240,0.5)", fontSize: "0.9rem", fontWeight: 300 }}>We'll be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { id: "name", label: "Your Name", placeholder: "Adi Sharma", type: "text", key: "name" },
                      { id: "email", label: "Email Address", placeholder: "hello@you.com", type: "email", key: "email" },
                    ].map(({ id, label, placeholder, type, key }) => (
                      <div key={id}>
                        <label className="block mb-2" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(248,246,240,0.35)" }}>{label}</label>
                        <input required type={type} placeholder={placeholder}
                          value={form[key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          className="w-full px-5 py-4 bg-transparent outline-none transition-all duration-300"
                          style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "#f8f6f0", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.625rem" }}
                          onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.55)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")} />
                      </div>
                    ))}
                  </div>

                  {/* Project type */}
                  <div>
                    <label className="block mb-3" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(248,246,240,0.35)" }}>Type of Project</label>
                    <div className="flex flex-wrap gap-2">
                      {videoTypes.map((type) => (
                        <button key={type} type="button" onClick={() => setForm({ ...form, type })}
                          className="px-4 py-2 text-xs tracking-wide transition-all duration-200"
                          style={{ fontFamily: "'DM Sans',sans-serif", background: form.type === type ? "var(--gold)" : "transparent", color: form.type === type ? "#080808" : "rgba(201,168,76,0.65)", border: "1px solid", borderColor: form.type === type ? "var(--gold)" : "rgba(201,168,76,0.2)", fontWeight: form.type === type ? 600 : 400, borderRadius: "9999px" }}>
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block mb-2" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(248,246,240,0.35)" }}>Estimated Budget</label>
                    <select id="budget" title="Estimated Budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full px-5 py-4 bg-transparent outline-none transition-all duration-300 appearance-none cursor-pointer"
                      style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: form.budget ? "#f8f6f0" : "rgba(248,246,240,0.25)", border: "1px solid rgba(201,168,76,0.2)", background: "#0a0a0a", borderRadius: "0.625rem" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.55)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")}>
                      <option value="" style={{ background: "#111" }}>Select a budget range</option>
                      <option value="under-5k" style={{ background: "#111" }}>Under â‚¹5,000</option>
                      <option value="5k-15k" style={{ background: "#111" }}>â‚¹5,000 â€“ â‚¹15,000</option>
                      <option value="15k-35k" style={{ background: "#111" }}>â‚¹15,000 â€“ â‚¹35,000</option>
                      <option value="35k-plus" style={{ background: "#111" }}>â‚¹35,000+</option>
                      <option value="discuss" style={{ background: "#111" }}>Let's discuss</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block mb-2" style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(248,246,240,0.35)" }}>Tell Us About Your Project</label>
                    <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your vision, timeline, and any specific requirements..."
                      className="w-full px-5 py-4 bg-transparent outline-none transition-all duration-300 resize-none"
                      style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", color: "#f8f6f0", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.625rem" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.55)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,168,76,0.2)")} />
                  </div>

                  {error && (
                    <div style={{ color: "#ef4444", fontSize: "0.85rem", fontFamily: "'DM Sans',sans-serif" }}>
                      {error}
                    </div>
                  )}

                  <button type="submit" disabled={loading} className="w-full py-5 text-sm tracking-[0.15em] uppercase font-medium flex items-center justify-center gap-3 group relative overflow-hidden transition-all duration-300"
                    style={{ fontFamily: "'DM Sans',sans-serif", background: "var(--gold)", color: "#080808", borderRadius: "0.75rem", opacity: loading ? 0.7 : 1 }}>
                    <span className="relative z-10">{loading ? "Sending..." : "Send Message"}</span>
                    <Send size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(255,255,255,0.12)" }} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
