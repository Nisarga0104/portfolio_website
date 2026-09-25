import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Expertise } from '@/components/Expertise';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Frameworks } from '@/components/Frameworks';
import { Hero } from '@/components/Hero';
import { Learning } from '@/components/Learning';
import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Frameworks />
        <Projects />
        <Experience />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
