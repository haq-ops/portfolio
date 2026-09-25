"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { coreSkills } from "@/data/portfolio";

export default function CoreSkills() {
  return (
    <section id="core-skills" className="bg-bg-alt py-[72px] sm:py-[100px]">
      <div className="container-x">
        <SectionTitle word="Core" title="Core Skills" />

        <div className="grid gap-x-14 gap-y-7 md:grid-cols-2">
          {coreSkills.map((skill, i) => (
            <div key={skill.name}>
              <div className="mb-2.5 flex justify-between font-medium">
                <span>{skill.name}</span>
                <span className="text-accent">{skill.value}%</span>
              </div>
              <div
                className="h-[9px] overflow-hidden rounded-full bg-line"
                role="progressbar"
                aria-label={skill.name}
                aria-valuenow={skill.value}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent-dark to-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
