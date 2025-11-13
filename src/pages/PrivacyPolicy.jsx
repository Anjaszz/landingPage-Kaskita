import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-kaskita-blue to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kebijakan Privasi</h1>
          <p className="text-xl opacity-90">Terakhir diperbarui: 12 November 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                KASKITA ("kami", "aplikasi ini") berkomitmen untuk melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan aplikasi KASKITA Money Tracker.
              </p>
            </div>

            {/* 1. Informasi yang Kami Kumpulkan */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informasi yang Kami Kumpulkan</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">1.1 Informasi Akun</h3>
              <p className="text-gray-700 mb-2">Ketika Anda membuat akun online, kami mengumpulkan:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>Nama lengkap</li>
                <li>Alamat email</li>
                <li>Password (disimpan dalam bentuk terenkripsi)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">1.2 Data Transaksi Keuangan</h3>
              <p className="text-gray-700 mb-2">Kami menyimpan informasi transaksi yang Anda masukkan, termasuk:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>Nominal transaksi (pemasukan dan pengeluaran)</li>
                <li>Kategori transaksi</li>
                <li>Deskripsi transaksi</li>
                <li>Tanggal dan waktu transaksi</li>
                <li>Metode pembayaran</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">1.3 Data Penggunaan</h3>
              <p className="text-gray-700 mb-2">Kami dapat mengumpulkan informasi tentang bagaimana Anda menggunakan aplikasi, seperti:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>Waktu akses aplikasi</li>
                <li>Fitur yang digunakan</li>
                <li>Informasi perangkat (model, sistem operasi)</li>
              </ul>
            </div>

            {/* 2. Bagaimana Kami Menggunakan Informasi Anda */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Bagaimana Kami Menggunakan Informasi Anda</h2>
              <p className="text-gray-700 mb-3">Kami menggunakan informasi yang dikumpulkan untuk:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>Menyediakan dan mengelola layanan aplikasi KASKITA</li>
                <li>Menyimpan dan mensinkronisasi data transaksi Anda</li>
                <li>Menampilkan statistik dan analisis keuangan pribadi Anda</li>
                <li>Meningkatkan fitur dan pengalaman pengguna aplikasi</li>
                <li>Mengirim notifikasi terkait akun dan layanan</li>
                <li>Memberikan dukungan pelanggan</li>
                <li>Melindungi keamanan dan integritas aplikasi</li>
                <li>Mematuhi kewajiban hukum</li>
              </ul>
            </div>

            {/* 3. Mode Tamu vs Mode Online */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Mode Tamu vs Mode Online</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.1 Mode Tamu</h3>
              <p className="text-gray-700 mb-2">Jika Anda menggunakan aplikasi dalam Mode Tamu:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>Semua data tersimpan secara lokal di perangkat Anda</li>
                <li>Data TIDAK dikirim ke server kami</li>
                <li>Anda bertanggung jawab atas backup data</li>
                <li>Data akan hilang jika aplikasi dihapus atau perangkat di-reset</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.2 Mode Online</h3>
              <p className="text-gray-700 mb-2">Jika Anda membuat akun dan login:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li>Data tersinkronisasi ke server cloud kami</li>
                <li>Data dapat diakses dari berbagai perangkat</li>
                <li>Data di-backup secara otomatis</li>
                <li>Anda dapat memulihkan data jika ganti perangkat</li>
              </ul>
            </div>

            {/* 4. Keamanan Data */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Keamanan Data</h2>
              <p className="text-gray-700 mb-3">Kami sangat serius dalam melindungi data Anda. Langkah-langkah keamanan yang kami terapkan:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li><strong>Enkripsi:</strong> Password dan data sensitif dienkripsi menggunakan standar industri</li>
                <li><strong>Koneksi Aman:</strong> Komunikasi antara aplikasi dan server menggunakan HTTPS</li>
                <li><strong>Akses Terbatas:</strong> Hanya personel yang berwenang yang dapat mengakses data server</li>
                <li><strong>Pemantauan:</strong> Sistem keamanan dipantau secara berkala untuk mendeteksi ancaman</li>
                <li><strong>Backup Rutin:</strong> Data di-backup secara teratur untuk mencegah kehilangan data</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <em>Namun, mohon diingat bahwa tidak ada metode transmisi melalui internet atau penyimpanan elektronik yang 100% aman. Kami akan terus berupaya melindungi data Anda dengan langkah-langkah terbaik yang tersedia.</em>
              </p>
            </div>

            {/* 5. Berbagi Informasi dengan Pihak Ketiga */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Berbagi Informasi dengan Pihak Ketiga</h2>
              <p className="text-gray-700 mb-3">
                <strong>Kami TIDAK menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga untuk tujuan komersial.</strong>
              </p>
              <p className="text-gray-700 mb-3">Kami hanya akan membagikan informasi Anda dalam kondisi berikut:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li><strong>Dengan Persetujuan Anda:</strong> Ketika Anda memberikan izin eksplisit</li>
                <li><strong>Penyedia Layanan:</strong> Dengan pihak ketiga yang membantu operasional kami (hosting, analytics), dengan perjanjian kerahasiaan yang ketat</li>
                <li><strong>Kepatuhan Hukum:</strong> Jika diwajibkan oleh hukum atau proses hukum yang sah</li>
                <li><strong>Perlindungan Hak:</strong> Untuk melindungi hak, properti, atau keamanan kami, pengguna kami, atau publik</li>
              </ul>
            </div>

            {/* 6. Iklan dan Analytics */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Iklan dan Analytics</h2>
              <p className="text-gray-700 mb-3">
                <strong>KASKITA adalah aplikasi bebas iklan.</strong> Kami tidak menggunakan layanan periklanan pihak ketiga yang melacak perilaku Anda untuk tujuan iklan.
              </p>
              <p className="text-gray-700">
                Kami dapat menggunakan layanan analytics untuk memahami bagaimana pengguna berinteraksi dengan aplikasi kami, namun data ini dikumpulkan secara anonim dan agregat, tanpa mengidentifikasi individu tertentu.
              </p>
            </div>

            {/* 7. Hak Anda */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Hak Anda</h2>
              <p className="text-gray-700 mb-3">Sebagai pengguna KASKITA, Anda memiliki hak untuk:</p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
                <li><strong>Mengakses Data:</strong> Melihat semua data pribadi yang kami simpan tentang Anda</li>
                <li><strong>Memperbaiki Data:</strong> Memperbarui informasi akun Anda kapan saja</li>
                <li><strong>Menghapus Data:</strong> Meminta penghapusan akun dan semua data terkait</li>
                <li><strong>Mengekspor Data:</strong> Mengunduh data transaksi Anda (fitur akan datang)</li>
                <li><strong>Menolak Pemrosesan:</strong> Berhenti menggunakan layanan kami kapan saja</li>
                <li><strong>Mengajukan Keluhan:</strong> Menghubungi kami jika ada kekhawatiran tentang privasi</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Untuk menggunakan hak-hak ini, silakan hubungi kami melalui email yang tercantum di bagian "Hubungi Kami".
              </p>
            </div>

            {/* 8. Hubungi Kami */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Hubungi Kami</h2>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait Kebijakan Privasi ini atau praktik privasi kami, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> support@kaskita.app</p>
                <p className="text-gray-700 mb-2"><strong>Nama Perusahaan:</strong> KASKITA</p>
                <p className="text-gray-700 mb-2"><strong>Alamat:</strong> [Alamat Lengkap Perusahaan]</p>
                <p className="text-gray-700"><strong>Waktu Respon:</strong> Kami akan merespons dalam 24-48 jam</p>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-12 text-center">
              <Link to="/" className="inline-block bg-kaskita-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
