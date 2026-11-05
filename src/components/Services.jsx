import { ArrowRight, BarChart3, Code2, Target, ShieldCheck } from 'lucide-react';

export default function Services({ t }) {
  const icons = [<BarChart3 className="w-6 h-6" />, <Code2 className="w-6 h-6" />, <Target className="w-6 h-6" />, <ShieldCheck className="w-6 h-6" />];

  return (
    <section id="servicios" className="w-full py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5">
            {t.eyebrow}
          </span>
          <h2 className="text-4xl font-bold text-black tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl p-7 flex flex-col justify-between shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 text-black">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{service.desc}</p>
              </div>
              <div className="pt-4 flex items-center justify-between border-t border-gray-50">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{service.tag}</span>
                <a href="#contacto" className="inline-flex items-center gap-1 text-sm font-bold text-black group-hover:text-gray-600 transition-colors">
                  <span>{t.quoteBtn}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}