import { ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section className="contact-section" id="contact"><div className="contact-shell"><Reveal><p className="eyebrow">Start a conversation</p><h2>Let&apos;s build more <em>responsible AI.</em></h2><p className="contact-copy">Open to opportunities across AI governance, responsible AI, AI safety, AI strategy, technology consulting and related roles.</p><a className="button button-light" href="mailto:nisargkamble01@gmail.com">Let&apos;s connect <ArrowUpRight size={16} /></a></Reveal><Reveal delay={160} className="contact-links"><a href="https://www.linkedin.com/in/nisarg-kamble" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <span>↗</span></a><a href="https://github.com/Nisarga0104" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <span>↗</span></a><a href="mailto:nisargkamble01@gmail.com"><Mail size={17} /> Email <span>↗</span></a><a href="/Nisarg_Kamble_AI_EGSS.pdf" download="Nisarg_Kamble_AI_EGSS.pdf"><span className="resume-mark">PDF</span> Resume <span>↗</span></a></Reveal></div></section>
  );
}
