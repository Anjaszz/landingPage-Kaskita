const StatsSection = () => {
  const stats = [
    {
      icon: 'fa-gift',
      value: '100%',
      label: 'Gratis Selamanya',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: 'fa-flag',
      value: '🇮🇩',
      label: 'Bahasa Indonesia',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: 'fa-shield-alt',
      value: '🔒',
      label: 'Aman & Privat',
      gradient: 'from-blue-900 to-blue-600'
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="clay-card p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <div className="text-6xl font-extrabold mb-2">
                  {stat.value}
                </div>
                <i className={`fas ${stat.icon} text-3xl bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}></i>
              </div>
              <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
