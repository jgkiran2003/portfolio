'use client';

import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Typewriter({ texts }: { texts: string[] }) {
  const [textIndex, setTextIndex] = useState(0);
  const count = useMotionValue(0);
  const rounded =  useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => texts[textIndex].slice(0, latest));
  const [done, setDone] = useState(false);

  useEffect(() => {
    const controls = animate(count, texts[textIndex].length, {
      type: "tween",
      duration: 2,
      ease: "easeInOut",
      onComplete: () => {
        setDone(true);
      },
    });
    return controls.stop;
  }, [textIndex, count, texts]);

  useEffect(() => {
    if (done) {
      const timeout = setTimeout(() => {
        setDone(false);
        count.set(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000); // Pause before switching to the next text
      return () => clearTimeout(timeout);
    }
  }, [done, count, texts.length]);

  return (
    <span className="inline-block">
      <motion.span>{displayText}</motion.span>
      <motion.span
        variants={{
          blinking: { opacity: [0, 0, 1, 1], transition: { duration: 1, repeat: Infinity } }
        }}
        animate="blinking"
        className="inline-block w-[2px] h-[1em] bg-blue-500 ml-1 align-middle"
      />
    </span>
  );
}