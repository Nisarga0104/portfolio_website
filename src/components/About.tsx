import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionIntro } from './SectionIntro';

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-shell">
        <Reveal><SectionIntro eyebrow="About my work" title="Responsible AI is not only a technical challenge." /></Reveal>
        <div className="about-grid">
          <Reveal delay={120}><p className="about-lead">It is a business, governance, risk and human-impact challenge.</p></Reveal>
          <Reveal delay={220} className="about-body"><p>I am a Computer Science postgraduate focused on the intersection of artificial intelligence, technology, risk and business. My work explores how organizations can adopt AI responsibly while addressing governance, safety, ethics, security and regulatory considerations.</p><a className="text-link" href="#contact">More about my approach <ArrowUpRight size={15} /></a></Reveal>
        </div>
      </div>
    </section>
  );
}
