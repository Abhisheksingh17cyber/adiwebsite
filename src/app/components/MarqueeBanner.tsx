export function MarqueeBanner() {
  const items = [
    "YouTube Videos",
    "Brand Films",
    "Reels & Shorts",
    "Wedding Films",
    "Music Videos",
    "Commercial Ads",
    "Documentary Edits",
    "Social Media Content",
    "Podcast Videos",
    "Event Highlights",
  ];

  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-5 relative"
      style={{
        background: "var(--gold)",
        borderTop: "1px solid rgba(201,168,76,0.4)",
        borderBottom: "1px solid rgba(201,168,76,0.4)",
      }}
    >
      <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-8"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "#080808",
            }}
          >
            {item}
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "rgba(8,8,8,0.4)" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
