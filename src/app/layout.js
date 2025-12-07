import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar'; // Import Navbar
import Footer from '@/components/Footer'; // Import Footer

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pelayanan Desa Digital - KKM 2026',
  description: 'Website resmi pelayanan administrasi dan informasi Desa [Nama Desa]. Urus surat dari rumah, update berita terkini.',
  icons: {
    icon: '/favicon.ico', // Pastikan kamu punya logo kecil di folder public
  },
  openGraph: {
    title: 'Pelayanan Desa Digital',
    description: 'Urus surat cukup dari rumah via WhatsApp.',
    // images: ['/images/og-image.jpg'], // (Opsional) Kalau mau ada gambar thumbnail saat share link
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50`}>
        {/* Pasang Navbar Global */}
        <Navbar />
        
        {/* Halaman (Page) akan dirender di sini */}
        {children}
        
        {/* Pasang Footer Global */}
        <Footer />
      </body>
    </html>
  );
}