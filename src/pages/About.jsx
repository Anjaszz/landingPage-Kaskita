import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-kaskita.png';
import anjas from '../assets/anjas.png';
import ridwan from '../assets/ridwan.jpeg';
import nabil from '../assets/nabil.jpeg';
import amel from '../assets/amel.jpg';


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: 'Anjas Rani',
      role: 'CEO & Founder',
      photo: anjas,
      bio: 'Visioner di balik KASKITA dengan 10+ tahun pengalaman di industri fintech.',
      social: {
        linkedin: 'https://www.linkedin.com/in/anjas-rani-562396212',
        facebook: 'https://www.facebook.com/AnjasRanii',
        instagram: 'https://instagram.com/anjaszz_'
      }
    },
    {
      name: 'Ridwan Saputra',
      role: 'CTO & Co-Founder',
      photo: ridwan,
      bio: 'Expert dalam pengembangan aplikasi mobile dengan passion untuk teknologi.',
      social: {
        linkedin: '#',
        facebook: '#',
        instagram: '#'
      }
    },
    {
      name: 'Yovela Kalista Avansa',
      role: 'Lead Developer',
      photo: 'https://ui-avatars.com/api/?name=Yovela+Avansa&size=200&background=fb682c&color=fff&bold=true',
      bio: 'Full-stack developer yang ahli dalam React Native dan Node.js.',
      social: {
        linkedin: '#',
        facebook: '#',
        instagram: '#'
      }
    },
    {
      name: 'Annisa Nur Amelia',
      role: 'UI/UX Designer',
      photo: amel,
      bio: 'Designer kreatif yang fokus pada user experience dan interface yang intuitif.',
      social: {
        linkedin: '#',
        facebook: '#',
        instagram: '#'
      }
    },
    {
      name: 'Nabil Irwansyah',
      role: 'Product Manager',
      photo: nabil,
      bio: 'Product strategist yang memastikan KASKITA memenuhi kebutuhan pengguna.',
      social: {
        linkedin: '#',
        facebook: '#',
        instagram: '#'
      }
    }
  ];

  const values = [
    {
      icon: 'fa-lightbulb',
      title: 'Inovasi',
      description: 'Kami terus berinovasi untuk memberikan solusi terbaik dalam pengelolaan keuangan.',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: 'fa-users',
      title: 'Fokus Pengguna',
      description: 'Kebutuhan pengguna adalah prioritas utama dalam setiap keputusan yang kami buat.',
      gradient: 'from-blue-900 to-blue-600'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Keamanan',
      description: 'Data Anda adalah aset berharga. Kami menjamin keamanan dan privasi terbaik.',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: 'fa-heart',
      title: 'Transparansi',
      description: 'Kami percaya pada keterbukaan dan kejujuran dalam semua aspek bisnis kami.',
      gradient: 'from-red-500 to-pink-600'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Pengguna Aktif' },
    { value: '50K+', label: 'Transaksi Tercatat' },
    { value: '5.0', label: 'Rating Aplikasi' },
    { value: '99.9%', label: 'Uptime Server' }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Awal Perjalanan',
      description: 'KASKITA didirikan dengan visi membuat pengelolaan keuangan mudah untuk semua orang.'
    },
    {
      year: '2024',
      title: 'Peluncuran Beta',
      description: 'Meluncurkan versi beta dan mendapatkan 1000 pengguna pertama dalam sebulan.'
    },
    {
      year: '2025',
      title: 'Versi Official',
      description: 'Merilis versi official dengan fitur lengkap dan mencapai 10K+ pengguna aktif.'
    },
    {
      year: 'Future',
      title: 'Ekspansi Fitur',
      description: 'Mengembangkan fitur AI untuk analisis keuangan dan rencana integrasi perbankan.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-32 pb-20 clay-hero-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <div className="mb-8">
              <img src={logo} alt="KASKITA Logo" className="w-24 h-24 mx-auto object-contain drop-shadow-2xl" />
            </div>
            <div className="clay-badge inline-block px-4 py-2 mb-6">
              <span className="text-kaskita-orange font-bold text-sm">💼 Tentang Kami</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Siapa Di Balik <br />
              <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                KASKITA?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Kami adalah tim yang passionate tentang membantu orang Indonesia mengelola keuangan mereka dengan lebih baik.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-kaskita-orange opacity-5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block clay-badge px-4 py-2 mb-6">
                <span className="text-kaskita-orange font-bold text-sm">📖 Cerita Kami</span>
              </div>
              <h2 className="text-5xl font-extrabold text-kaskita-blue mb-6">
                Misi Kami
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                KASKITA lahir dari pengalaman pribadi kami dalam menghadapi kesulitan mengelola keuangan pribadi.
                Kami percaya bahwa <span className="text-kaskita-orange font-bold">setiap orang berhak</span> memiliki
                kontrol penuh atas keuangan mereka tanpa harus menghadapi aplikasi yang rumit dan membingungkan.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dengan KASKITA, kami ingin membuat pengelolaan keuangan menjadi <span className="text-kaskita-blue font-bold">sederhana</span>,
                <span className="text-kaskita-blue font-bold"> intuitif</span>, dan dapat diakses oleh semua kalangan di Indonesia.
              </p>
            </div>
            <div className="clay-card p-8">
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="clay-icon-box w-16 h-16 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <i className="fas fa-bullseye text-3xl text-kaskita-orange"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-kaskita-blue mb-1">Visi</h4>
                    <p className="text-gray-600">Menjadi aplikasi money tracker #1 di Indonesia</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="clay-icon-box w-16 h-16 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <i className="fas fa-rocket text-3xl text-kaskita-blue"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-kaskita-blue mb-1">Misi</h4>
                    <p className="text-gray-600">Membantu 1 juta orang Indonesia mengelola keuangan mereka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="clay-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-extrabold text-kaskita-orange mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-kaskita-blue opacity-5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block clay-badge px-4 py-2 mb-4">
              <span className="text-kaskita-orange font-bold text-sm">⭐ Nilai-Nilai Kami</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-kaskita-blue mb-4">
              Yang Kami Yakini
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang menjadi fondasi dalam setiap langkah kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="clay-card p-6 group hover:scale-105 transition-transform duration-300">
                <div className="clay-icon-box w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className={`fas ${value.icon} text-3xl bg-gradient-to-br ${value.gradient} bg-clip-text text-transparent`}></i>
                </div>
                <h3 className="text-xl font-bold text-kaskita-blue mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-kaskita-orange opacity-5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block clay-badge px-4 py-2 mb-4">
              <span className="text-kaskita-orange font-bold text-sm">👥 Tim Kami</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-kaskita-blue mb-4">
              Kenalan Dengan Tim
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Orang-orang passionate yang bekerja keras untuk membuat KASKITA menjadi kenyataan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="clay-card p-6 group hover:scale-105 transition-transform duration-300">
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden clay-icon-box p-1">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  {/* <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="clay-badge px-3 py-0.5">
                      <span className="text-xs font-bold text-kaskita-orange">{member.role}</span>
                    </div>
                  </div> */}
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-kaskita-blue mb-2">{member.name}</h3>
                  {/* <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p> */}
                  <div className="flex justify-center space-x-3">
                    <a href={member.social.linkedin} className="clay-icon-box w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform">
                      <i className="fab fa-linkedin-in text-kaskita-blue"></i>
                    </a>
                    <a href={member.social.facebook} className="clay-icon-box w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform">
                      <i className="fab fa-facebook text-kaskita-blue"></i>
                    </a>
                    <a href={member.social.instagram} className="clay-icon-box w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform">
                      <i className="fab fa-instagram text-kaskita-orange"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-kaskita-blue opacity-5 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block clay-badge px-4 py-2 mb-4">
              <span className="text-kaskita-orange font-bold text-sm">🚀 Perjalanan Kami</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-kaskita-blue mb-4">
              Timeline KASKITA
            </h2>
            <p className="text-xl text-gray-600">
              Dari ide hingga menjadi aplikasi money tracker pilihan ribuan pengguna
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="clay-icon-box w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-extrabold text-kaskita-orange">{item.year}</span>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-1 h-full bg-gradient-to-b from-kaskita-blue to-kaskita-orange opacity-20 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 clay-card p-6 group-hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-kaskita-blue mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 clay-hero-bg relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="clay-card p-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-kaskita-blue to-kaskita-orange bg-clip-text text-transparent">
              Siap Bergabung Dengan Kami?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Download KASKITA sekarang dan mulai perjalanan finansial Anda bersama ribuan pengguna lainnya!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://play.google.com/store/apps/details?id=com.kaskita.app" className="clay-button-orange text-white px-8 py-4 font-bold inline-flex items-center justify-center space-x-3">
                <i className="fab fa-google-play text-2xl"></i>
                <span>Download Sekarang</span>
              </a>
              <Link to="/" className="clay-button-blue text-white px-8 py-4 font-bold inline-flex items-center justify-center space-x-3">
                <i className="fas fa-home"></i>
                <span>Kembali ke Beranda</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
