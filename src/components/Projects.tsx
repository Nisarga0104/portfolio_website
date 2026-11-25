import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/content';
import { Reveal } from './Reveal';
import { SectionIntro } from './SectionIntro';

export function Projects() {
  return (
    <section className="section projects-section" id="work">
      <div className="section-shell">
        <Reveal><SectionIntro eyebrow="Selected work" title="Data analysis, business insight and responsible AI in practice." /></Reveal>
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 60}>
              {project.liveHref ? (
                <div className="project-card project-card-multi">
                  <div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    {Array.isArray(project.description) ? project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p>{project.description}</p>}
                    <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <div className="project-links">
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a>
                    <a className="project-link" href={project.liveHref} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={15} /></a>
                  </div>
                </div>
              ) : (
                <a className="project-card" href={project.href} target="_blank" rel="noreferrer">
                  <div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    {Array.isArray(project.description) ? project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p>{project.description}</p>}
                    <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <div className="project-link">GitHub <ArrowUpRight size={16} /></div>
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
