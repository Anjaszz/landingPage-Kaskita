import logo from '../assets/logo-kaskita.png';

const HeroSection = () => {
  return (
    <section id="beranda" className="pt-32 pb-20 clay-hero-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="clay-badge inline-block px-4 py-2 mb-6">
              <span className="text-kaskita-orange font-bold text-sm">✨ Money Tracker Terbaik 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Kelola Keuangan,<br />
              <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                Raih Impian
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Aplikasi pencatat keuangan pribadi yang membantu Anda mengelola uang dengan <span className="text-kaskita-orange font-semibold">mudah</span> dan <span className="text-kaskita-orange font-semibold">praktis</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.kaskita.app" className="clay-button-orange text-white px-8 py-4 font-bold inline-flex items-center space-x-3 text-lg">
                <i className="fab fa-google-play text-2xl"></i>
                <span>Download Sekarang</span>
              </a>
              <a href="#fitur" className="clay-card text-kaskita-blue px-8 py-4 font-bold inline-flex items-center space-x-3 text-lg">
                <i className="fas fa-sparkles text-kaskita-orange"></i>
                <span>Lihat Fitur</span>
              </a>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white"></div>
                </div>
                <p className="text-sm text-blue-100">
                  <span className="font-bold text-white">10K+</span> Pengguna Aktif
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="text-sm text-blue-100 font-semibold">5.0 Rating</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="clay-card p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-kaskita-orange to-kaskita-blue opacity-20 blur-3xl rounded-full"></div>
                  <div className="relative z-10 flex justify-center">
                    <img src={logo} alt="KASKITA Logo" className="w-40 h-40 object-contain drop-shadow-2xl rounded-lg" />
                  </div>
                </div>
                <p className="text-gray-600 text-lg font-semibold">Money Tracker</p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="clay-icon-box p-4">
                    <i className="fas fa-chart-line text-3xl text-kaskita-orange mb-2"></i>
                    <p className="text-xs text-gray-600 font-semibold">Statistik</p>
                  </div>
                  <div className="clay-icon-box p-4">
                    <i className="fas fa-shield-alt text-3xl text-kaskita-blue mb-2"></i>
                    <p className="text-xs text-gray-600 font-semibold">Aman</p>
                  </div>
                  <div className="clay-icon-box p-4">
                    <i className="fas fa-mobile-alt text-3xl text-kaskita-orange mb-2"></i>
                    <p className="text-xs text-gray-600 font-semibold">Mudah</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
