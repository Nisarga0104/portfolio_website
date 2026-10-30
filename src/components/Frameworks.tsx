import { frameworks } from '@/data/content';
import { Reveal } from './Reveal';
import { SectionIntro } from './SectionIntro';

export function Frameworks() {
  return (
    <section className="section frameworks-section" id="frameworks">
      <div className="section-shell">
        <Reveal><SectionIntro eyebrow="A grounded approach" title="Tools, methods & standards" description="Practical methods for turning raw data into useful business insight, alongside the frameworks that guide responsible AI." /></Reveal>
        <div className="framework-list">
          {frameworks.map((framework, index) => <Reveal key={framework.title} delay={index * 70} className="framework-row"><span className="framework-index">0{index + 1}</span><h3>{framework.title}</h3><p>{framework.items}</p></Reveal>)}
        </div>
      </div>
    </section>
  );
}
