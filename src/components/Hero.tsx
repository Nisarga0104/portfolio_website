import { ArrowDown, ArrowUpRight, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">DATA ANALYST <span>•</span> BI ANALYST <span>•</span> BUSINESS ANALYST</p>
        <h1>Building <em>Responsible AI</em> for Real-World Impact.</h1>
        <p className="hero-summary">I work at the intersection of data, business intelligence, technology and responsible AI — turning complex information into actionable insights, while keeping governance, safety and strategic impact at the centre.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">Explore my work <ArrowDown size={16} /></a>
          <a className="text-link" href="/Nisarg_Kamble_DA.pdf" download="Nisarg_Kamble_DA.pdf">Download resume <ArrowUpRight size={15} /></a>
        </div>
        <a className="social-link" href="https://www.linkedin.com/in/nisarg-kamble" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <span>↗</span></a>
      </div>
      <div className="hero-portrait-wrap" aria-label="Portrait of Nisarg Kamble">
        <img className="hero-portrait" src="/Portfolio_image.png" alt="Nisarg Kamble in a monochrome portrait" />
        <a className="hero-explore" href="#about" aria-label="Explore the portfolio"><span>EXPLORE</span><ArrowDown size={15} /></a>
      </div>
    </section>
  );
}
