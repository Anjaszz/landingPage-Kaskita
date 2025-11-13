const AboutSection = () => {
  const benefits = [
    'Mengetahui kemana uang Anda pergi setiap bulan',
    'Membuat keputusan finansial yang lebih baik',
    'Mengontrol pengeluaran dengan lebih disiplin',
    'Mencapai tujuan keuangan Anda lebih cepat'
  ];

  const features = [
    {
      icon: 'fa-mobile-alt',
      gradient: 'from-blue-900 to-blue-600',
      title: 'User-Friendly',
      description: 'Mudah digunakan untuk semua kalangan'
    },
    {
      icon: 'fa-shield-alt',
      gradient: 'from-orange-500 to-orange-600',
      title: 'Aman & Terpercaya',
      description: 'Data Anda terenkripsi dengan aman'
    },
    {
      icon: 'fa-dollar-sign',
      gradient: 'from-green-500 to-emerald-600',
      title: '100% Gratis',
      description: 'Tanpa biaya tersembunyi'
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-kaskita-blue opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-kaskita-orange opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block clay-badge px-4 py-2 mb-6">
              <span className="text-kaskita-orange font-bold text-sm">💡 Tentang Kami</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-kaskita-blue mb-6">
              Tentang KASKITA
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              KASKITA adalah aplikasi <span className="text-kaskita-orange font-bold">money tracker</span> yang dirancang khusus untuk pengguna Indonesia.
              Kami percaya bahwa mengelola keuangan seharusnya <span className="text-kaskita-blue font-bold">mudah</span>, <span className="text-kaskita-blue font-bold">praktis</span>, dan dapat diakses oleh semua orang.
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              Dengan antarmuka yang intuitif dan fitur-fitur lengkap, KASKITA membantu Anda untuk:
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start group">
                  <div className="clay-icon-box w-8 h-8 flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                    <i className="fas fa-check text-kaskita-orange"></i>
                  </div>
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="clay-card p-8">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center group hover:scale-105 transition-transform duration-300">
                    <div className="clay-icon-box p-5 rounded-full mr-5 group-hover:scale-110 transition-transform">
                      <i className={`fas ${feature.icon} text-3xl bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-kaskita-blue mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
