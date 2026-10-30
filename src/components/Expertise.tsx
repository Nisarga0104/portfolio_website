import { ArrowUpRight } from 'lucide-react';
import { expertise } from '@/data/content';
import { Reveal } from './Reveal';
import { SectionIntro } from './SectionIntro';

export function Expertise() {
  return (
    <section className="section expertise-section" id="expertise">
      <div className="section-shell">
        <Reveal><SectionIntro eyebrow="Areas of focus" title="Where data meets business context." description="A practical mix of analytics, reporting and responsible technology thinking for clearer decisions." /></Reveal>
        <div className="expertise-grid">
          {expertise.map((item, index) => <Reveal key={item.number} delay={index * 70} className="expertise-item"><span className="item-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><ArrowUpRight className="item-arrow" size={18} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}
