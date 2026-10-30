import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionIntro } from './SectionIntro';

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-shell">
        <Reveal><SectionIntro eyebrow="About my work" title="Turning data into decisions, responsibly." /></Reveal>
        <div className="about-grid">
          <Reveal delay={120}><p className="about-lead">Analysis is where data, business context and responsible technology come together.</p></Reveal>
          <Reveal delay={220} className="about-body"><p>I am a Computer Science postgraduate building practical experience across data analysis, business intelligence, dashboards and SQL-based problem solving. I enjoy transforming raw information into clear insights for business decisions, while continuing to work at the intersection of AI ethics, governance, safety, security and strategy.</p><a className="text-link" href="#contact">More about my approach <ArrowUpRight size={15} /></a></Reveal>
        </div>
      </div>
    </section>
  );
}
