"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Solid background once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for the section currently on screen
  useEffect(() => {
    const ids = [...navLinks.map((l) => l.id), "core-skills"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id === "core-skills" ? "skills" : entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex h-[70px] items-center border-b transition-colors duration-300 ${
        solid ? "border-line bg-bg/95 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold">
          {profile.firstName}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Main" className="hidden gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`group relative py-1 text-[15px] font-medium transition-colors ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`my-[5px] block h-0.5 w-6 bg-ink transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`my-[5px] block h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
          <span className={`my-[5px] block h-0.5 w-6 bg-ink transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-[70px] border-b border-line bg-bg/98 px-5 pb-4 pt-2 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block border-b border-line py-3 ${active === link.id ? "text-ink" : "text-muted"}`}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
