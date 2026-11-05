import { Mail, Phone, MapPin, Globe, CheckCircle2 } from 'lucide-react';

export default function Footer({ t }) {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4 group">
              <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center text-white font-bold text-lg">
                F
              </div>
              <span className="text-xl font-bold tracking-tight text-black">
                FLINL
              </span>
            </div>
            <p className="text-sm text-gray-600 max-w-sm mb-6 leading-relaxed">
              {t.description}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-200 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-200 transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="mailto:grupomorhen@gmail.com" className="w-9 h-9 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-200 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t.navigation}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#servicios" className="text-gray-600 hover:text-black transition-colors font-medium">{t.services}</a></li>
              <li><a href="#quienes-somos" className="text-gray-600 hover:text-black transition-colors font-medium">{t.about}</a></li>
              <li><a href="#como-funciona" className="text-gray-600 hover:text-black transition-colors font-medium">{t.howItWorks}</a></li>
              <li><a href="#contacto" className="text-gray-600 hover:text-black transition-colors font-medium">{t.contact}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t.contactTitle}</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                <span>grupomorhen@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                <span>+1 (720) 794-1995</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <span>Consultas Online (Global)</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t.commitment}</h4>
            <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-black">{t.commitmentTitle}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{t.commitmentDesc}</p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} FLINL. {t.rights}</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-black transition-colors">{t.privacy}</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">{t.terms}</a>
          </div>
        </div>
      </div>

      {/* Botón flotante de WhatsApp */}
      <a 
        href="https://wa.me/17207941995" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
        aria-label="Contactar por WhatsApp"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-bold">{t.supportBtn}</span>
      </a>
    </footer>
  );
}