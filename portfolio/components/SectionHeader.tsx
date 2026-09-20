"use client";
import { motion, useReducedMotion } from "framer-motion";

export function SectionHeader({
  missionId,
  title,
  subtitle,
}: {
  missionId: string;
  title: string;
  subtitle?: string;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="mb-10"
      initial={prefersReduced ? {} : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <p className="font-mono text-xs text-accent tracking-[0.2em] mb-2">{missionId}</p>
      <motion.h1
        className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-2"
        initial={prefersReduced ? {} : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08, duration: 0.4 }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="text-text-secondary text-lg"
          initial={prefersReduced ? {} : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16, duration: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
