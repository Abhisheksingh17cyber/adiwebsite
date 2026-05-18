import ScrollVelocity from "./ScrollVelocity";

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

  const content = (
    <div className="flex items-center">
      {items.map((item, i) => (
        <span
          key={i}
          className="mx-8 flex items-center gap-8"
        >
          {item}
          <span
            className="inline-block w-2 h-2 rounded-full bg-[var(--gold)]"
          />
        </span>
      ))}
    </div>
  );

  return (
    <div className="py-12 relative overflow-hidden">
      <ScrollVelocity
        texts={[content]}
        velocity={40}
        damping={50}
        stiffness={400}
        numCopies={4}
        scrollerClassName="font-body text-[0.8rem] md:text-[0.9rem] tracking-[0.2em] uppercase font-medium text-[var(--gold)] opacity-80"
      />
    </div>
  );
}
