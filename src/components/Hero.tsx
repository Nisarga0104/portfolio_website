import { ArrowDown, ArrowUpRight, Linkedin } from 'lucide-react';
import portfolioImg from 'src/assets/images/Portfolio_image.png';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">AI ETHICS <span>•</span> GOVERNANCE <span>•</span> SAFETY <span>•</span> STRATEGY</p>
        <h1>Building <em>Responsible AI</em> for Real-World Impact.</h1>
        <p className="hero-summary">I work at the intersection of AI, technology, risk and business — with a focus on responsible AI adoption, governance, safety and strategic implementation.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">Explore my work <ArrowDown size={16} /></a>
          <a className="text-link" href="/Nisarg_Kamble_AI_EGSS.pdf" download="Nisarg_Kamble_AI_EGSS.pdf">Download resume <ArrowUpRight size={15} /></a>
        </div>
        <a className="social-link" href="https://www.linkedin.com/in/nisarg-kamble" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <span>↗</span></a>
      </div>
      <div className="hero-portrait-wrap" aria-label="Portrait of Nisarg Kamble">
        <img className="hero-portrait" src="\src\assets\images\Portfolio_image.png" alt="Nisarg Kamble in a monochrome portrait" />
        <a className="hero-explore" href="#about" aria-label="Explore the portfolio"><span>EXPLORE</span><ArrowDown size={15} /></a>
      </div>
    </section>
  );
}
