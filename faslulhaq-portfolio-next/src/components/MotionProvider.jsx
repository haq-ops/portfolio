"use client";

import { MotionConfig } from "framer-motion";

// Turns off Framer Motion animations for visitors who prefer reduced motion
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
