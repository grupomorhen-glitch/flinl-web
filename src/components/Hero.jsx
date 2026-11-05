import { ArrowRight, HeadphonesIcon, Globe2, ShieldCheck, Building2 } from 'lucide-react';

export default function Hero({ t }) {
  return (
    <section className="w-full pt-16 pb-20 md:pt-24 md:pb-28 flex flex-col items-center justify-center text-center px-6 mt-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-black shrink-0"></span>
          <span className="text-[11px] font-bold text-black uppercase tracking-widest">
            {t.pill}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight mb-6 leading-tight">
          {t.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
          {t.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto">
          <a 
            href="#contacto" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-black text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md hover:bg-gray-800 transition-all group"
          >
            <span>{t.btnPrimary}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#servicios" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-black font-semibold text-sm px-7 py-3.5 rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 transition-all"
          >
            {t.btnSecondary}
          </a>
        </div>

        {/* Trust Metrics Bar */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-3 text-black">
              <HeadphonesIcon className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-black mb-0.5">{t.metric1Title}</span>
            <span className="text-sm text-gray-500">{t.metric1Desc}</span>
          </div>
          
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-3 text-black">
              <Globe2 className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-black mb-0.5">{t.metric2Title}</span>
            <span className="text-sm text-gray-500">{t.metric2Desc}</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-3 text-black">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-black mb-0.5">{t.metric3Title}</span>
            <span className="text-sm text-gray-500">{t.metric3Desc}</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-3 text-black">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-black mb-0.5">{t.metric4Title}</span>
            <span className="text-sm text-gray-500">{t.metric4Desc}</span>
          </div>
        </div>

      </div>
    </section>
  );
}