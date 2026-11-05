export default function HowItWorks({ t }) {
  return (
    <section id="como-funciona" className="w-full py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2.5 block">
            {t.eyebrow}
          </span>
          <h2 className="text-4xl font-bold text-black tracking-tight">
            {t.title}
          </h2>
        </div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start bg-gray-50 p-7 rounded-3xl shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold mb-6">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-black mb-2.5">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}