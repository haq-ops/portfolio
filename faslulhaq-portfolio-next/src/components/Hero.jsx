"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile, roles } from "@/data/portfolio";

// Types out each role, deletes it, then moves to the next one
function useTypingText(words) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (reduce) return;
    let wordIndex = 0;
    let charIndex = words[0].length;
    let deleting = true;
    let timer;

    const tick = () => {
      const word = words[wordIndex];
      charIndex += deleting ? -1 : 1;
      setText(word.slice(0, charIndex));

      let delay = deleting ? 45 : 90;
      if (!deleting && charIndex === word.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 300;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 2200);
    return () => clearTimeout(timer);
  }, [words, reduce]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const socials = [
  { href: profile.github, label: "GitHub", Icon: FaGithub, external: true },
  { href: profile.linkedin, label: "LinkedIn", Icon: FaLinkedin, external: true },
  { href: `mailto:${profile.email}`, label: "Email", Icon: FaEnvelope, external: false },
];

export default function Hero() {
  const typed = useTypingText(roles);

  return (
    <section id="home" className="hero-glow relative flex min-h-screen items-center pb-20 pt-[110px]">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.p variants={item} className="text-xl font-medium tracking-wide text-accent">
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            variants={item}
            className="mb-2.5 mt-1.5 text-[40px] font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {profile.firstName} <span className="text-accent">{profile.lastName}</span>
          </motion.h1>
          <motion.p variants={item} className="min-h-[1.3em] text-xl font-medium sm:text-3xl">
            I&apos;m a <span className="text-accent">{typed}</span>
            <span className="ml-0.5 animate-blink text-accent" aria-hidden="true">
              |
            </span>
          </motion.p>
          <motion.p variants={item} className="mx-auto mb-8 mt-5 max-w-[520px] text-muted lg:mx-0">
            {profile.heroBlurb}
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap justify-center gap-3.5 lg:justify-start">
            <a href="#contact" className="btn btn-primary">
              Hire Me
            </a>
            <a href={profile.cv} className="btn btn-outline" download>
              Download CV
            </a>
          </motion.div>
          <motion.div variants={item} className="mt-9 flex justify-center gap-3.5 lg:justify-start">
            {socials.map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-ink transition hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-accent-ink"
              >
                <Icon size={19} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative order-1 justify-self-center lg:order-2"
        >
          <div className="photo-ring relative grid aspect-square w-[min(380px,78vw)] place-items-center rounded-full p-2.5">
            <div className="relative h-full w-full overflow-hidden rounded-full border-[6px] border-bg bg-card">
              {profile.photo ? (
                <Image src={profile.photo} alt={profile.name} fill sizes="380px" className="object-cover" priority />
              ) : (
                <span className="grid h-full w-full place-items-center text-[clamp(64px,12vw,110px)] font-extrabold text-accent">
                  {profile.initials}
                </span>
              )}
            </div>
          </div>
          <div className="card absolute left-[-4%] top-[12%] animate-float px-4 py-2.5 text-[13.5px] text-muted shadow-2xl shadow-black/40 lg:left-[-14%]">
            <strong className="mr-1 text-base text-accent">5+</strong> client apps delivered
          </div>
          <div className="card absolute bottom-[10%] right-[-4%] animate-float px-4 py-2.5 text-[13.5px] text-muted shadow-2xl shadow-black/40 [animation-delay:-2.5s] lg:right-[-10%]">
            <strong className="mr-1 text-base text-accent">MERN</strong> &amp; Spring Boot
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-7 left-1/2 hidden h-[42px] w-[26px] -translate-x-1/2 rounded-full border-2 border-muted sm:block"
      >
        <span className="absolute left-1/2 top-2 -ml-0.5 h-2 w-1 animate-wheel rounded-sm bg-accent" />
      </a>
    </section>
  );
}
