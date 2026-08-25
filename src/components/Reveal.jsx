import { motion } from "framer-motion";

// Wraps children with a subtle fade/slide-up reveal triggered on scroll.
// Respects prefers-reduced-motion automatically via Framer Motion's
// built-in handling combined with our global CSS override.
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
