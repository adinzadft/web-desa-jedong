import { getSheetData } from '@/lib/get-data';
import Link from 'next/link'; // Import Link

export const revalidate = 60; 

export default async function EdukasiPage() {
  const beritaList = await getSheetData('edukasi');

  const getCategoryColor = (kategori) => {
    const k = (kategori || '').toLowerCase();
    if (k.includes('stunting')) return 'bg-rose-100 text-rose-700 border-rose-200';
    if (k.includes('agama') || k.includes('moderasi')) return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    return 'bg-blue-100 text-blue-700 border-blue-200';
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Header Image (Biar konsisten sama halaman lain) */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
            <img 
              src="https://img.freepik.com/foto-gratis/gubuk-di-sawah-di-thailand_1150-10753.jpg?semt=ais_se_enriched&w=740&q=80" 
              className="w-full h-full object-cover opacity-40"
            />
        </div>
        <div className="relative z-10 text-center text-white px-4 mt-8">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider mb-4 uppercase">
               Kabar Desa Terkini
            </span>
            <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
               Pojok Edukasi & Informasi
            </h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16 relative z-20">
        
        {beritaList.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {beritaList.map((item, index) => (
              
              // SEKARANG KARTU DIBUNGKUS LINK KE ARTIKEL DETAIL
              <Link 
                href={`/artikel/${item.id}`} // Ini kuncinya!
                key={index} 
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Gambar */}
                <div className="relative h-56 bg-slate-200 overflow-hidden">
                  {item.link_gambar ? (
                    <img 
                      src={item.link_gambar} 
                      alt={item.judul}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-400 bg-slate-100">
                      <span className="text-sm">No Image</span>
                    </div>
                  )}
                  
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border shadow-sm ${getCategoryColor(item.kategori)}`}>
                      {item.kategori || 'Umum'}
                    </span>
                  </div>
                </div>

                {/* Konten */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <span>{item.tanggal || '-'}</span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-800 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.judul}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.ringkasan}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-50 flex items-center text-blue-600 text-sm font-semibold">
                       Baca Selengkapnya
                       <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
            <h3 className="text-lg font-medium text-slate-900">Belum ada berita</h3>
          </div>
        )}

      </main>
    </div>
  );
}