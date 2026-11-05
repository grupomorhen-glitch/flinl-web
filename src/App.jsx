import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { translations } from './translations';

export default function App() {
  const [lang, setLang] = useState('ES');
  const t = translations[lang];

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      <Navbar lang={lang} setLang={setLang} t={t.nav} />
      <Hero t={t.hero} />
      <About t={t.about} />
      <Services t={t.services} />
      <HowItWorks t={t.howItWorks} />
      <ContactForm t={t.contact} />
      <Footer t={t.footer} />
    </div>
  );
}