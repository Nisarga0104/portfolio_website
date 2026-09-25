import { frameworks } from '@/data/content';
import { Reveal } from './Reveal';
import { SectionIntro } from './SectionIntro';

export function Frameworks() {
  return (
    <section className="section frameworks-section" id="frameworks">
      <div className="section-shell">
        <Reveal><SectionIntro eyebrow="A grounded approach" title="Frameworks & standards" description="Reference points for turning responsible AI principles into practical organizational action." /></Reveal>
        <div className="framework-list">
          {frameworks.map((framework, index) => <Reveal key={framework.title} delay={index * 70} className="framework-row"><span className="framework-index">0{index + 1}</span><h3>{framework.title}</h3><p>{framework.items}</p></Reveal>)}
        </div>
      </div>
    </section>
  );
}
