import { ArrowUpRight } from 'lucide-react';
import { certifications } from '@/data/content';
import { Reveal } from './Reveal';
import { SectionIntro } from './SectionIntro';

export function Learning() {
  return (
    <section className="section learning-section" id="learning">
      <div className="section-shell split-shell"><Reveal><SectionIntro eyebrow="Certifications & continuous learning" title="Staying curious. Staying current." /></Reveal><div className="learning-list">{certifications.map((item, index) => <Reveal key={item.name} delay={index * 45} className="learning-row"><span className="learning-type">{item.type}</span><div className="learning-info"><p>{item.organization}</p><h3>{item.name}</h3></div><a className="learning-image-link" href={item.href} target="_blank" rel="noreferrer" aria-label={`View ${item.name}`}>{item.image ? <img src={item.image} alt={`${item.name} certificate`} /> : <span className="learning-image-placeholder">View badge</span>}</a><a className="learning-arrow" href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.name}`}><ArrowUpRight size={17} /></a></Reveal>)}</div></div>
    </section>
  );
}
