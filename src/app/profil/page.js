export default function ProfilPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      {/* --- HEADER IMAGE (PROFIL) --- */}
      <div className="relative h-[45vh] min-h-[350px] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Background Image: Nuansa Pedesaan / Kantor Desa */}
        <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1599583236329-c322b6222b3b?auto=format&fit=crop&w=1600&q=80" 
              alt="Profil Desa" 
              className="w-full h-full object-cover opacity-40"
            />
        </div>
        
        {/* Teks Judul */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-8">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider mb-4 uppercase">
               Tentang Kami
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
              Profil Desa Digital
            </h1>
            <p className="text-lg text-blue-50/90 font-light drop-shadow-md">
               Kecamatan [Nama Kec], Kabupaten [Nama Kab]
            </p>
        </div>
      </div>

      {/* --- KONTEN UTAMA --- */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        
        {/* Card Sejarah (Dibuat Overlap ke atas Header biar keren) */}
        <section className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-slate-800">Sejarah Desa</h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-justify">
                <p className="mb-4">
                    Pada zaman dahulu, desa ini adalah kawasan hutan yang dibuka oleh para pendatang... 
                    (Silakan ganti bagian ini dengan cerita sejarah asli desa tempat kamu KKM nanti. 
                    Biasanya ada di buku profil desa di balai desa).
                </p>
                <p>
                    Seiring berjalannya waktu, desa berkembang menjadi pusat pertanian yang makmur 
                    dan kini mulai merambah ke era digital untuk meningkatkan pelayanan kepada masyarakat.
                </p>
            </div>
        </section>

        {/* Visi & Misi */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Card Visi */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Visi</h3>
                <p className="text-slate-600 italic leading-relaxed">
                    "Terwujudnya Desa yang Maju, Mandiri, dan Sejahtera Berbasis Teknologi Tepat Guna."
                </p>
            </div>

            {/* Card Misi */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Misi</h3>
                <ul className="space-y-3 text-slate-600">
                    <li className="flex gap-2 items-start">
                        <span className="text-green-500 font-bold">✓</span>
                        Meningkatkan pelayanan publik transparan.
                    </li>
                    <li className="flex gap-2 items-start">
                        <span className="text-green-500 font-bold">✓</span>
                        Mengembangkan potensi ekonomi lokal.
                    </li>
                    <li className="flex gap-2 items-start">
                        <span className="text-green-500 font-bold">✓</span>
                        Mewujudkan masyarakat harmonis & moderat.
                    </li>
                </ul>
            </div>
        </section>

        {/* Struktur Organisasi (Grid Foto) */}
        <section>
            <div className="text-center mb-10">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-xs">Pemerintahan</span>
                <h2 className="text-3xl font-bold text-slate-800 mt-2">Perangkat Desa</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Item 1: Kades */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 text-center hover:shadow-lg transition group">
                    <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-slate-50 group-hover:border-blue-100 transition">
                        {/* Ganti src dengan foto pak Kades nanti */}
                        <img src="https://placehold.co/200x200?text=Kades" alt="Kades" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-bold text-slate-800">Bpk. Kades</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Kepala Desa</p>
                </div>

                {/* Item 2: Sekdes */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 text-center hover:shadow-lg transition group">
                    <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-slate-50 group-hover:border-blue-100 transition">
                        <img src="https://placehold.co/200x200?text=Sekdes" alt="Sekdes" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-bold text-slate-800">Ibu Sekdes</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Sekretaris Desa</p>
                </div>
                
                 {/* Item 3: Kasi */}
                 <div className="bg-white p-6 rounded-xl border border-slate-100 text-center hover:shadow-lg transition group">
                    <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-slate-50 group-hover:border-blue-100 transition">
                        <img src="https://placehold.co/200x200?text=Kasi" alt="Kasi" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-bold text-slate-800">Bpk. Kasi</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Kasi Pelayanan</p>
                </div>

                 {/* Item 4: Kadus */}
                 <div className="bg-white p-6 rounded-xl border border-slate-100 text-center hover:shadow-lg transition group">
                    <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-slate-50 group-hover:border-blue-100 transition">
                        <img src="https://placehold.co/200x200?text=Kadus" alt="Kadus" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-bold text-slate-800">Bpk. Kadus</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Kepala Dusun</p>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}