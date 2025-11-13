import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-kaskita.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="clay-navbar fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3">
                <img src={logo} alt="KASKITA Logo" className="h-10 w-10 object-contain rounded-lg" />
                <span className="text-2xl font-bold text-text-kaskita-blue">
                  KASK<span className='text-kaskita-orange'>i</span>TA
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              <Link to="/" className="text-kaskita-blue hover:text-kaskita-orange px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105">
                Beranda
              </Link>
              <a href="/#fitur" className="text-kaskita-blue hover:text-kaskita-orange px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105">
                Fitur
              </a>
              <Link to="/about" className="text-kaskita-blue hover:text-kaskita-orange px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105">
                Tentang
              </Link>
              <Link to="/privacy-policy" className="text-kaskita-blue hover:text-kaskita-orange px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105">
                Privasi
              </Link>
              <a href="https://play.google.com/store/apps/details?id=com.kaskita.app" className="clay-button-orange text-white px-6 py-2.5 font-bold inline-flex items-center space-x-2 ml-2">
                <i className="fab fa-google-play"></i>
                <span>Download</span>
              </a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="clay-icon-box w-12 h-12 flex items-center justify-center text-kaskita-blue hover:text-kaskita-orange transition">
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden clay-navbar border-t border-gray-200`}>
        <div className="px-4 pt-4 pb-4 space-y-2">
          <Link to="/" onClick={closeMobileMenu} className="block text-kaskita-blue hover:text-kaskita-orange px-4 py-3 rounded-xl text-base font-semibold transition hover:bg-white hover:bg-opacity-50">
            Beranda
          </Link>
          <a href="/#fitur" onClick={closeMobileMenu} className="block text-kaskita-blue hover:text-kaskita-orange px-4 py-3 rounded-xl text-base font-semibold transition hover:bg-white hover:bg-opacity-50">
            Fitur
          </a>
          <Link to="/about" onClick={closeMobileMenu} className="block text-kaskita-blue hover:text-kaskita-orange px-4 py-3 rounded-xl text-base font-semibold transition hover:bg-white hover:bg-opacity-50">
            Tentang
          </Link>
          <Link to="/privacy-policy" onClick={closeMobileMenu} className="block text-kaskita-blue hover:text-kaskita-orange px-4 py-3 rounded-xl text-base font-semibold transition hover:bg-white hover:bg-opacity-50">
            Kebijakan Privasi
          </Link>
          <a href="https://play.google.com/store/apps/details?id=com.kaskita.app" onClick={closeMobileMenu} className="block clay-button-orange text-white px-4 py-3 text-center font-bold">
            <i className="fab fa-google-play mr-2"></i>
            Download Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
