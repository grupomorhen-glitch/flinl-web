import { useState } from 'react';
import { Check, ArrowRight, MessageSquare } from 'lucide-react';

export default function ContactForm({ t }) {
  const [clientType, setClientType] = useState('general');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // En Netlify, el formulario se envía al servidor mediante una petición POST
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <section id="contacto" className="w-full py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5 block">{t.eyebrow}</span>
          <h2 className="text-4xl font-bold text-black tracking-tight mb-3">{t.title}</h2>
          <p className="text-gray-600 text-lg">{t.subtitle}</p>
        </div>

        {isSubmitted ? (
          <div className="w-full mb-8 p-6 rounded-2xl bg-white shadow-md border border-gray-100 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-black mb-1">{t.successTitle}</h4>
                <p className="text-sm text-gray-600 mb-4">{t.successDesc}</p>
                <a href="https://wa.me/17207941995" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-green-600 hover:underline">
                  <span>{t.whatsappBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <form 
            name="contacto" 
            method="POST" 
            data-netlify="true" 
            onSubmit={handleSubmit} 
            className="w-full bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-6"
          >
            {/* Input oculto necesario para Netlify Forms en React */}
            <input type="hidden" name="form-name" value="contacto" />
            
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2 p-1 bg-gray-100 rounded-2xl">
                <button type="button" onClick={() => setClientType('general')} className={`py-2.5 rounded-xl text-sm font-bold transition-all ${clientType === 'general' ? 'bg-black text-white shadow-sm' : 'text-gray-600 hover:text-black'}`}>
                  {t.typeGeneral}
                </button>
                <button type="button" onClick={() => setClientType('desarrollo')} className={`py-2.5 rounded-xl text-sm font-bold transition-all ${clientType === 'desarrollo' ? 'bg-black text-white shadow-sm' : 'text-gray-600 hover:text-black'}`}>
                  {t.typeProject}
                </button>
              </div>
              {/* Guardamos el tipo de consulta en el formulario */}
              <input type="hidden" name="tipo_consulta" value={clientType} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-black uppercase">{t.nameLabel}</label>
                <input type="text" name="nombre" placeholder="Ej. Ana García" required className="w-full bg-gray-50 px-4 py-3.5 rounded-xl text-black text-sm border border-gray-200 focus:outline-none focus:border-black focus:bg-white transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-black uppercase">{t.emailLabel}</label>
                <input type="email" name="email" placeholder="tu@correo.com" required className="w-full bg-gray-50 px-4 py-3.5 rounded-xl text-black text-sm border border-gray-200 focus:outline-none focus:border-black focus:bg-white transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-black uppercase">{t.phoneLabel}</label>
                <input type="tel" name="telefono" placeholder="+00 0000 0000" required className="w-full bg-gray-50 px-4 py-3.5 rounded-xl text-black text-sm border border-gray-200 focus:outline-none focus:border-black focus:bg-white transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-black uppercase">{t.serviceLabel}</label>
                <select name="servicio" className="w-full bg-gray-50 px-4 py-3.5 rounded-xl text-black text-sm border border-gray-200 focus:outline-none focus:border-black focus:bg-white transition-colors appearance-none cursor-pointer">
                  {t.options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-black uppercase">{t.detailsLabel}</label>
              <textarea name="detalles" placeholder="..." required rows="4" className="w-full bg-gray-50 px-4 py-3.5 rounded-xl text-black text-sm border border-gray-200 focus:outline-none focus:border-black focus:bg-white transition-colors resize-none"></textarea>
            </div>

            <button type="submit" className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white font-bold text-sm py-4 rounded-xl shadow-md transition-all group">
              <span>{t.submitBtn}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-xs text-gray-500">{t.disclaimer}</p>
          </form>
        )}

        <div className="mt-12 flex flex-col items-center gap-3">
          <span className="text-sm font-medium text-gray-600">{t.immediateQuestion}</span>
          <a href="https://wa.me/17207941995" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-bold text-sm px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105">
            <MessageSquare className="w-5 h-5" />
            <span>{t.whatsappChatBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
}