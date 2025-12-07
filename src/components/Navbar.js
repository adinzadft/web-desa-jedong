"use client"; // Tambahkan ini agar kita bisa cek URL aktif (untuk styling menu)

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname(); // Untuk tahu kita sedang di halaman mana

  // Helper untuk cek link aktif agar styling otomatis rapi
  const isActive = (path) => pathname === path;

  return (
    // GLASSMORPHISM STYLE:
    // bg-white/80 = Putih transparan 80%
    // backdrop-blur-md = Efek buram di belakangnya (seperti kaca es)
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Tinggi h-20 agar lebih lega */}
          
          {/* LOGO KIRI */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-blue-500/30 shadow-lg">
              D
            </div>
            <Link href="/" className="font-bold text-xl tracking-tight text-slate-800 hover:text-blue-600 transition">
              Desa Digital
            </Link>
          </div>

          {/* MENU KANAN (Rata Tengah Vertikal Sempurna) */}
          
<div className="hidden md:flex items-center gap-1"> 
  
  <Link href="/" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600'}`}>
    Beranda
  </Link>

  {/* Link ke halaman Profil */}
  <Link href="/profil" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/profil') ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600'}`}>
    Profil Desa
  </Link>

  {/* Link ke halaman Layanan (Folder baru) */}
  <Link href="/layanan" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/layanan') ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600'}`}>
    Layanan
  </Link>

  <div className="pl-2 ml-2 border-l border-slate-200">
      <Link href="/edukasi" className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md ${isActive('/edukasi') ? 'bg-blue-600 text-white shadow-blue-600/30' : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300'}`}>
      Berita & Edukasi
      </Link>
  </div>
</div>


          {/* MENU MOBILE (Burger Icon) */}
          <div className="md:hidden">
            <button className="p-2 text-slate-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}