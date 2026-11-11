import { useEffect } from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Values from '../components/Values';
import Services from '../components/Services';
import Contact from '../components/Contact';

function Home() {
  useEffect(() => {
    document.title = 'Karantek, stratégies d’investissement à Lyon';
  }, []);

  return (
    <main id="contenu" tabIndex={-1}>
      <Hero />
      <Expertise />
      <Values />
      <Services />
      <Contact />
    </main>
  );
}

export default Home;
