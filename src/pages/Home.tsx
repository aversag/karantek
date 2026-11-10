import { useEffect } from 'react';
import Hero from '../components/Hero';
import Expertise from '../components/Expertise';
import Values from '../components/Values';
import Services from '../components/Services';
import Contact from '../components/Contact';

function Home() {
  useEffect(() => {
    document.title = "Karantek - Stratégies d'Investissements";
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
