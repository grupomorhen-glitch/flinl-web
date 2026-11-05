import { Bolt, Eye } from 'lucide-react';

export default function About({ t }) {
  return (
    <section id="quienes-somos" className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 flex flex-col items-start">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">
            {t.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            {t.description}
          </p>
          
          <div className="w-full space-y-4">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                  <Bolt className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-black uppercase tracking-tight">
                  {t.missionTitle}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed pl-11">
                {t.missionText}
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-black uppercase tracking-tight">
                  {t.visionTitle}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed pl-11">
                {t.visionText}
              </p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-6 relative">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
            <img 
              alt="Equipo de Heva Soluciones trabajando en tecnología" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg flex items-center gap-4 border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                <Bolt className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-base font-bold text-black truncate">{t.badgeTitle}</h4>
                <p className="text-sm text-gray-500 truncate">{t.badgeDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}