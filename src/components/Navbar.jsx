import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ lang, setLang, t }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100">
      <div className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        
        {/* Logo FLINL */}
        <div className="flex items-center gap-4 shrink-0">
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center text-white font-bold text-lg">
              F
            </div>
            <span className="text-xl font-bold tracking-tight text-black group-hover:text-gray-600 transition-colors">
              FLINL
            </span>
          </a>
        </div>

        {/* Enlaces de Navegación */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">{t.services}</a>
          <a href="#quienes-somos" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">{t.about}</a>
          <a href="#como-funciona" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">{t.howItWorks}</a>
          <a href="#contacto" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">{t.contact}</a>
        </nav>

        {/* Selector de Idioma y CTA */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
            <button 
              onClick={() => setLang('ES')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'ES' ? 'bg-black text-white shadow-sm' : 'text-gray-500 hover:text-black'}`}
              type="button"
            >
              ES
            </button>
            <button 
              onClick={() => setLang('EN')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'EN' ? 'bg-black text-white shadow-sm' : 'text-gray-500 hover:text-black'}`}
              type="button"
            >
              EN
            </button>
          </div>
          
          <a 
            href="#contacto" 
            className="hidden sm:inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md group"
          >
            <span>{t.cta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-black p-1 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}