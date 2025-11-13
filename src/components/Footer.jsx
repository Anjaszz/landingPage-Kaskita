import { Link } from 'react-router-dom';
import logo from '../assets/logo-kaskita.png';

const Footer = () => {
  return (
    <footer className="bg-kaskita-blue text-white py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-kaskita-orange opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="KASKITA Logo" className="h-12 w-12 object-contain rounded-lg" />
              <h3 className="text-3xl font-extrabold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                KASKITA
              </h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed text-lg">
              Aplikasi money tracker terbaik untuk mengelola keuangan pribadi Anda.
              <span className="text-kaskita-orange font-bold"> Gratis</span>, <span className="text-kaskita-orange font-bold">mudah</span>, dan <span className="text-kaskita-orange font-bold">aman</span>.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-12 h-12 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-kaskita-orange hover:scale-110 transition-all duration-300 group">
                <i className="fab fa-facebook-f text-lg text-kaskita-orange group-hover:text-white"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-kaskita-orange hover:scale-110 transition-all duration-300 group">
                <i className="fab fa-twitter text-lg text-kaskita-orange group-hover:text-white"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-kaskita-orange hover:scale-110 transition-all duration-300 group">
                <i className="fab fa-instagram text-lg text-kaskita-orange group-hover:text-white"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-kaskita-orange hover:scale-110 transition-all duration-300 group">
                <i className="fab fa-youtube text-lg text-kaskita-orange group-hover:text-white"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-xl text-kaskita-orange">Link Cepat</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-blue-100 hover:text-kaskita-orange transition flex items-center group">
                <i className="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform"></i>
                Beranda
              </Link></li>
              <li><a href="/#fitur" className="text-blue-100 hover:text-kaskita-orange transition flex items-center group">
                <i className="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform"></i>
                Fitur
              </a></li>
              <li><Link to="/about" className="text-blue-100 hover:text-kaskita-orange transition flex items-center group">
                <i className="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform"></i>
                Tentang
              </Link></li>
              <li><a href="/#download" className="text-blue-100 hover:text-kaskita-orange transition flex items-center group">
                <i className="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform"></i>
                Download
              </a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-xl text-kaskita-orange">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-blue-100 hover:text-kaskita-orange transition flex items-center group">
                <i className="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform"></i>
                Kebijakan Privasi
              </Link></li>
              <li><a href="/privacy-policy#terms" className="text-blue-100 hover:text-kaskita-orange transition flex items-center group">
                <i className="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform"></i>
                Syarat & Ketentuan
              </a></li>
              <li><a href="http://wa.me/6282258040148" className="text-blue-100 hover:text-kaskita-orange transition flex items-center group">
                <i className="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform"></i>
                Kontak
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-10 pt-8 text-center">
          <p className="text-blue-100 font-semibold">&copy; 2025 KASKITA. All rights reserved.</p>
          <p className="mt-2 text-sm text-blue-200">Made with <a href='https://www.lintara.my.id' className="text-red-400">LINTARA</a> for Indonesia 🇮🇩</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
