import { HeartHandshake, Ruler, GraduationCap, TrendingUp } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      icon: <HeartHandshake className="w-8 h-8 text-brandAccent mb-4" />,
      title: "Cercanía",
      desc: "Nos importa tu negocio tanto como a ti."
    },
    {
      icon: <Ruler className="w-8 h-8 text-brandAccent mb-4" />,
      title: "A tu medida",
      desc: "Soluciones únicas para negocios únicos."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-brandAccent mb-4" />,
      title: "Experiencia",
      desc: "Equipo experto en múltiples áreas tecnológicas."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brandAccent mb-4" />,
      title: "Resultados",
      desc: "Enfoque en valor y crecimiento real."
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {feature.icon}
              <h3 className="text-xl font-bold text-brandPrimary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}