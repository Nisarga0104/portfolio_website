import { experience } from '@/data/content';
import { Reveal } from './Reveal';
import { SectionIntro } from './SectionIntro';

export function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-shell split-shell"><Reveal><SectionIntro eyebrow="Experience" title="Technology, operations and clear communication." /></Reveal><div className="experience-list">{experience.map((item, index) => <Reveal key={item.company} delay={index * 100} className="experience-item"><p className="experience-period">{item.period}</p><div><h3>{item.company}</h3><p className="experience-role">{item.role} <span>·</span> {item.context}</p><p className="experience-description">{item.description}</p></div></Reveal>)}</div></div>
    </section>
  );
}
