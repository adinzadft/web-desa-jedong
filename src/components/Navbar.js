"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react'; // Import useState untuk logika buka/tutup

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State untuk menu mobile

  // Helper untuk cek link aktif
  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-blue-500/30 shadow-lg">
              D
            </div>
            <Link href="/" className="font-bold text-xl tracking-tight text-slate-800 hover:text-blue-600 transition">
              Desa Digital
            </Link>
          </div>

          {/* MENU DESKTOP (Layar Besar) */}
          <div className="hidden md:flex items-center gap-1"> 
            <Link href="/" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600'}`}>
              Beranda
            </Link>
            <Link href="/profil" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/profil') ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600'}`}>
              Profil Desa
            </Link>
            <Link href="/layanan" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive('/layanan') ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600'}`}>
              Layanan
            </Link>
            <div className="pl-2 ml-2 border-l border-slate-200">
                <Link href="/edukasi" className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md ${isActive('/edukasi') ? 'bg-blue-600 text-white shadow-blue-600/30' : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300'}`}>
                Berita & Edukasi
                </Link>
            </div>
          </div>

          {/* TOMBOL BURGER (Layar HP) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} // Aksi Klik: Toggle buka/tutup
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition"
            >
                {isOpen ? (
                  // Ikon X (Close) kalau menu terbuka
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                ) : (
                  // Ikon Burger (Menu) kalau menu tertutup
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                )}
            </button>
          </div>

        </div>
      </div>

      {/* MENU MOBILE DROPDOWN (Hanya muncul jika isOpen = true) */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white absolute w-full left-0 shadow-lg animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)} // Tutup menu saat link diklik
              className={`block px-4 py-3 rounded-lg text-base font-medium ${isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              Beranda
            </Link>

            <Link 
              href="/profil" 
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium ${isActive('/profil') ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              Profil Desa
            </Link>

            <Link 
              href="/layanan" 
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium ${isActive('/layanan') ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              Layanan Surat
            </Link>

            <Link 
              href="/edukasi" 
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium ${isActive('/edukasi') ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              Berita & Edukasi
            </Link>
            
          </div>
        </div>
      )}
    </nav>
  );
}