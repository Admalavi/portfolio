import Reveal from "./Reveal.jsx";

// Eyebrow is styled like a code comment (// label) to echo the
// developer-portfolio theme without relying on generic numbered markers.
export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="mb-12 md:mb-16 max-w-2xl">
      <p className="font-mono text-sm text-accent-light mb-3">{`// ${eyebrow}`}</p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-text">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted">{description}</p>
      )}
    </Reveal>
  );
}
