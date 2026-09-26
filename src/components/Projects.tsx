import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/content';
import { Reveal } from './Reveal';
import { SectionIntro } from './SectionIntro';

export function Projects() {
  return (
    <section className="section projects-section" id="work">
      <div className="section-shell">
        <Reveal><SectionIntro eyebrow="Selected work" title="Research, case studies and practical frameworks exploring responsible AI." /></Reveal>
        <div className="project-list">
          {projects.map((project, index) => <Reveal key={project.number} delay={index * 60}><a className="project-card" href={project.href} target="_blank" rel="noreferrer"><div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div><div className="project-content"><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-link">View case study <ArrowUpRight size={16} /></div></a></Reveal>)}
        </div>
      </div>
    </section>
  );
}
