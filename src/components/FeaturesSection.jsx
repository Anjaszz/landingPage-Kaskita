const FeaturesSection = () => {
  const features = [
    {
      icon: 'fa-plus-circle',
      color: 'kaskita-orange',
      title: 'Catat Transaksi Mudah',
      description: 'Tambah pemasukan dan pengeluaran dengan cepat. Kategorikan transaksi sesuai kebutuhan Anda.',
      gradient: 'from-orange-400 to-orange-600'
    },
    {
      icon: 'fa-chart-pie',
      color: 'kaskita-blue',
      title: 'Statistik & Grafik',
      description: 'Lihat analisis keuangan dengan grafik yang mudah dipahami. Pantau tren pengeluaran Anda.',
      gradient: 'from-blue-900 to-blue-700'
    },
    {
      icon: 'fa-filter',
      color: 'green-600',
      title: 'Filter Periode',
      description: 'Filter transaksi berdasarkan 7 hari, 30 hari, 3 bulan, 6 bulan, atau 1 tahun.',
      gradient: 'from-green-500 to-green-700'
    },
    {
      icon: 'fa-search',
      color: 'purple-600',
      title: 'Pencarian Cepat',
      description: 'Cari transaksi dengan mudah berdasarkan kategori, deskripsi, atau tanggal.',
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      icon: 'fa-cloud-upload-alt',
      color: 'kaskita-blue',
      title: 'Sinkronisasi Cloud',
      description: 'Data Anda aman tersimpan di cloud. Akses dari mana saja, kapan saja.',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: 'fa-user-shield',
      color: 'kaskita-orange',
      title: 'Mode Tamu',
      description: 'Gunakan tanpa registrasi dengan mode tamu. Data tersimpan lokal di perangkat Anda.',
      gradient: 'from-red-500 to-orange-600'
    }
  ];

  return (
    <section id="fitur" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-kaskita-orange opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-kaskita-blue opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block clay-badge px-4 py-2 mb-4">
            <span className="text-kaskita-orange font-bold text-sm">⚡ Fitur Lengkap</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-kaskita-blue mb-4">
            Fitur Unggulan
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk mengelola keuangan dengan <span className="text-kaskita-orange font-bold">lebih baik</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="clay-card p-8 group">
              <div className={`clay-icon-box w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`fas ${feature.icon} text-4xl bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-kaskita-blue">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a href="#download" className="clay-button-orange text-white px-10 py-4 font-bold inline-flex items-center space-x-3 text-lg">
            <span>Coba Gratis Sekarang</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
