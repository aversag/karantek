import { useEffect } from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Values from '../components/Values';
import Services from '../components/Services';
import Contact from '../components/Contact';

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <Expertise />
      <Values />
      <Services />
      <Contact />
    </main>
  );
}

export default Home;
