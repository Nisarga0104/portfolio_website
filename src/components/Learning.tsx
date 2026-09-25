import { ArrowUpRight } from 'lucide-react';
import { certifications } from '@/data/content';
import { Reveal } from './Reveal';
import { SectionIntro } from './SectionIntro';

export function Learning() {
  return (
    <section className="section learning-section" id="learning">
      <div className="section-shell split-shell"><Reveal><SectionIntro eyebrow="Certifications & continuous learning" title="Staying curious. Staying current." /></Reveal><div className="learning-list">{certifications.map((item, index) => <Reveal key={item.name} delay={index * 45} className="learning-row"><span className="learning-type">{item.type}</span><div><p>{item.organization}</p><h3>{item.name}</h3></div><a href={item.href} aria-label={`View ${item.name}`}><ArrowUpRight size={17} /></a></Reveal>)}</div></div>
    </section>
  );
}
