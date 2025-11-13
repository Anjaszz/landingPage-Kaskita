const HowItWorksSection = () => {
  const steps = [
    {
      number: '1',
      icon: 'fa-download',
      gradient: 'from-blue-900 to-blue-600',
      title: 'Download & Install',
      description: 'Download KASKITA dari Google Play Store dan install di perangkat Anda'
    },
    {
      number: '2',
      icon: 'fa-user-cog',
      gradient: 'from-orange-500 to-orange-600',
      title: 'Pilih Mode',
      description: 'Gunakan mode tamu untuk akses cepat atau daftar akun untuk sinkronisasi cloud'
    },
    {
      number: '3',
      icon: 'fa-rocket',
      gradient: 'from-green-500 to-emerald-600',
      title: 'Mulai Catat!',
      description: 'Tambahkan transaksi pertama Anda dan mulai kelola keuangan dengan lebih baik'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-kaskita-orange opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block clay-badge px-4 py-2 mb-4">
            <span className="text-kaskita-orange font-bold text-sm">🚀 Mudah Digunakan</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-kaskita-blue mb-4">
            Cara Menggunakan
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Mulai dalam <span className="text-kaskita-orange font-bold">3 langkah mudah</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-kaskita-blue via-kaskita-orange to-green-500 opacity-20"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="clay-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="relative mb-6">
                  <div className={`clay-icon-box w-24 h-24 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`fas ${step.icon} text-5xl bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`}></i>
                  </div>
                  <div className={`absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-kaskita-blue">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
