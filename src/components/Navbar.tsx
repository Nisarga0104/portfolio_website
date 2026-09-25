import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="wordmark" href="#top" aria-label="Nisarg Kamble home">NISARG KAMBLE<span>.</span></a>
      <nav className={`desktop-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="resume-link" href="/Nisarg_Kamble_AI_EGSS.pdf" download="Nisarg_Kamble_AI_EGSS.pdf">Resume <span aria-hidden="true">↗</span></a>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>
    </header>
  );
}
