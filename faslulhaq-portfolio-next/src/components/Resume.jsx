import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { achievements, education, experience } from "@/data/portfolio";

function TimelineItem({ date, title, place, points, delay }) {
  return (
    <Reveal delay={delay} className="relative mb-5">
      {/* dot on the timeline */}
      <span className="absolute -left-[37px] top-[26px] h-3.5 w-3.5 rounded-full border-[3px] border-accent bg-bg" />
      <div className="card px-6 py-5 transition hover:border-accent">
        {date && (
          <span className="mb-2.5 inline-block rounded-full bg-accent/10 px-3 py-0.5 text-[13px] font-semibold text-accent">
            {date}
          </span>
        )}
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="mt-1 text-[14.5px] text-muted">{place}</p>
        {points?.length > 0 && (
          <ul className="mt-3 list-disc pl-[18px] text-[14.5px] text-muted">
            {points.map((p) => (
              <li key={p} className="mt-1">
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  );
}

function Timeline({ items }) {
  return (
    <div className="border-l-2 border-line pl-7">
      {items.map((it, i) => (
        <TimelineItem key={it.title} {...it} delay={i * 0.1} />
      ))}
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="bg-bg-alt py-[72px] sm:py-[100px]">
      <div className="container-x">
        <SectionTitle word="Resume" title="Resume" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold">Experience</h3>
            <Timeline items={experience} />
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold">Education</h3>
            <Timeline items={education} />

            <h3 className="mb-6 mt-11 text-2xl font-bold">Achievements</h3>
            <Timeline items={achievements} />
          </div>
        </div>
      </div>
    </section>
  );
}
