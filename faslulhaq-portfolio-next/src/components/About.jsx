import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { about, profile, stats } from "@/data/portfolio";

export default function About() {
  const info = [
    { label: "Name", value: profile.name },
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Degree", value: profile.degree },
    { label: "Location", value: profile.location },
    { label: "Looking for", value: profile.lookingFor },
  ];

  return (
    <section id="about" className="py-[72px] sm:py-[100px]">
      <div className="container-x">
        <SectionTitle word="About" title="About Me" />

        <div className="grid items-start gap-14 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <h3 className="mb-4 text-[26px] font-semibold leading-snug">{about.heading}</h3>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className="mb-4 text-muted">
                {p}
              </p>
            ))}

            <ul className="mb-8 mt-6">
              {info.map((row) => (
                <li key={row.label} className="flex flex-wrap gap-x-3 gap-y-1 border-b border-line py-2.5 text-muted">
                  <span className="min-w-[120px] font-semibold text-ink">{row.label}</span>
                  {row.href ? (
                    <a href={row.href} className="break-all text-accent hover:underline">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </li>
              ))}
            </ul>

            <a href={profile.cv} className="btn btn-primary" download>
              Download CV
            </a>
          </Reveal>

          <Reveal delay={0.15} className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card px-5 py-7 text-center transition duration-300 hover:-translate-y-1 hover:border-accent"
              >
                <strong className="block text-[44px] font-extrabold leading-tight text-accent">
                  <Counter to={s.value} />
                  {s.suffix}
                </strong>
                <span className="text-sm text-muted">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
