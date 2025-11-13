
import logo from '../assets/logo-kaskita.png';

const DownloadCTA = () => {
  return (
    <section id="download" className="py-20 clay-hero-bg relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="clay-card p-12 md:p-16">
          <div className="inline-block clay-badge px-4 py-2 mb-6">
            <span className="text-kaskita-orange font-bold text-sm">🎉 Download Sekarang</span>
          </div>
         <div className='flex justify-center items-center mb-2'> <img src={logo} alt="KASKITA Logo" className="w-40 h-40 object-contain drop-shadow-2xl rounded-lg self-center" /></div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-text-kaskita-blue">
            Siap Kelola Keuangan Anda?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Download <span className="text-kaskita-orange font-bold">KASKITA</span> sekarang dan mulai perjalanan menuju keuangan yang lebih <span className="text-kaskita-blue font-bold">sehat</span> dan <span className="text-kaskita-blue font-bold">terorganisir</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="https://play.google.com/store/apps/details?id=com.kaskita.app" className="clay-button-orange text-white px-10 py-5 font-bold text-lg inline-flex items-center space-x-3 shadow-2xl">
              <i className="fab fa-google-play text-3xl"></i>
              <div className="text-left">
                <div className="text-xs opacity-90">Download di</div>
                <div className="text-lg font-extrabold">Google Play Store</div>
              </div>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm font-semibold">
            <div className="flex items-center gap-2">
              <i className="fab fa-android text-green-600 text-xl"></i>
              <span>Tersedia untuk Android</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-gift text-kaskita-orange text-xl"></i>
              <span>Gratis Selamanya</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-star text-yellow-400 text-xl"></i>
              <span>Rating 5.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
