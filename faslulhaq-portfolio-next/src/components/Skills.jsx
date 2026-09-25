"use client";

import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import {
  SiJavascript, SiTypescript, SiPhp, SiHtml5, SiCss, SiReact, SiNodedotjs, SiExpress,
  SiSpringboot, SiDotnet, SiTailwindcss, SiMysql, SiMongodb, SiDocker, SiNginx,
  SiGithubactions, SiGit, SiApachemaven, SiPostman, SiSwagger,
} from "react-icons/si";
import SectionTitle from "./SectionTitle";
import { skillGroups } from "@/data/portfolio";

// icon key (used in src/data/portfolio.js) -> [icon component, brand colour]
const iconMap = {
  java: [FaJava, "#f89820"],
  javascript: [SiJavascript, "#f7df1e"],
  typescript: [SiTypescript, "#3178c6"],
  php: [SiPhp, "#8892bf"],
  html: [SiHtml5, "#e34f26"],
  css: [SiCss, "#2965f1"],
  react: [SiReact, "#61dafb"],
  node: [SiNodedotjs, "#5fa04e"],
  express: [SiExpress, "#e9ecf4"],
  spring: [SiSpringboot, "#6db33f"],
  dotnet: [SiDotnet, "#8b6ff0"],
  tailwind: [SiTailwindcss, "#06b6d4"],
  mysql: [SiMysql, "#5b9bd5"],
  mongodb: [SiMongodb, "#47a248"],
  sqlserver: [DiMsqlServer, "#cc2927"],
  sql: [TbSql, "#f29111"],
  docker: [SiDocker, "#2496ed"],
  nginx: [SiNginx, "#009639"],
  githubactions: [SiGithubactions, "#2088ff"],
  git: [SiGit, "#f05032"],
  maven: [SiApachemaven, "#e0435a"],
  postman: [SiPostman, "#ff6c37"],
  swagger: [SiSwagger, "#85ea2d"],
  vscode: [VscVscode, "#3ea6ff"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-[72px] sm:py-[100px]">
      <div className="container-x">
        <SectionTitle word="Skills" title="Technical Skills" />

        {skillGroups.map((group) => (
          <div key={group.title} className="mb-10">
            <h3 className="mb-4 text-lg font-semibold text-muted">{group.title}</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3 sm:grid-cols-[repeat(auto-fill,minmax(130px,1fr))] sm:gap-4">
              {group.items.map((skill, i) => {
                const [Icon, color] = iconMap[skill.icon] ?? [null, null];
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="card flex min-h-[120px] flex-col items-center justify-center gap-3 px-2.5 py-5 text-center transition-colors hover:border-accent hover:bg-card-hover"
                  >
                    {Icon && <Icon size={42} color={color} aria-hidden="true" />}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
