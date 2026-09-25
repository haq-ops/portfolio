"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-[72px] sm:py-[100px]">
      <div className="container-x">
        <SectionTitle word="Work" title="Projects" />

        <div className="grid gap-7 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="card flex flex-col overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-2xl hover:shadow-black/40"
            >
              <div
                className={`relative grid h-[170px] place-items-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-3xl font-extrabold tracking-tight text-white/90">{project.cover}</span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[13px] font-semibold text-accent">{project.date}</p>
                <h3 className="mb-2.5 mt-1.5 text-xl font-semibold">{project.title}</h3>
                <p className="text-[14.5px] text-muted">{project.description}</p>

                <ul className="my-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[12.5px] text-accent"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex gap-5 text-[14.5px] font-semibold">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:underline"
                    >
                      <FaGithub aria-hidden="true" /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:underline"
                    >
                      <FaExternalLinkAlt aria-hidden="true" size={12} /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
