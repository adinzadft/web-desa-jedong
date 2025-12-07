import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-slate-900">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center text-white bg-slate-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" className="w-full h-full object-cover opacity-50" />
        </div>

        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-wider mb-6">
             KKM 2026 - DESA DIGITAL
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            Membangun Desa<br/><span className="text-blue-400">Lebih Dekat.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
            Platform digital terpadu untuk pelayanan administrasi, informasi desa, dan edukasi warga. Efisien, Transparan, dan Modern.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/layanan" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition shadow-lg shadow-blue-600/30">
              Mulai Layanan Surat
            </Link>
            <Link href="/profil" className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-full font-bold transition">
              Profil Desa
            </Link>
          </div>
        </div>
      </section>

      {/* MENU GRID QUICK ACCESS */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-800">Akses Cepat</h2>
                <p className="text-slate-500">Pilih menu layanan yang Anda butuhkan</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1: Layanan */}
                <Link href="/layanan" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 text-center">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Layanan Surat</h3>
                    <p className="text-slate-500 text-sm">Buat surat pengantar, SKTM, KTP, dan KK secara online langsung ke WhatsApp admin.</p>
                </Link>

                {/* Card 2: Profil */}
                <Link href="/profil" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 text-center">
                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Profil Desa</h3>
                    <p className="text-slate-500 text-sm">Kenali sejarah, visi misi, dan struktur perangkat desa kami.</p>
                </Link>

                {/* Card 3: Edukasi */}
                <Link href="/edukasi" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 text-center">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Kabar & Edukasi</h3>
                    <p className="text-slate-500 text-sm">Berita terbaru desa, info pencegahan stunting, dan moderasi beragama.</p>
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
}