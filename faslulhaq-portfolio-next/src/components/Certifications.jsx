import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="bg-bg-alt py-[72px] sm:py-[100px]">
      <div className="container-x">
        <SectionTitle word="Certified" title="Certifications" />

        <div className="grid gap-5 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 3) * 0.1}>
              <div className="card h-full border-l-4 border-l-accent px-6 py-5 transition hover:-translate-y-1 hover:bg-card-hover">
                <span className="text-sm font-bold text-accent">{cert.year}</span>
                <h3 className="my-1.5 text-[17px] font-semibold leading-snug">{cert.title}</h3>
                <p className="text-[14.5px] text-muted">{cert.issuer}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-block text-sm font-semibold text-accent hover:underline"
                  >
                    View credential
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
