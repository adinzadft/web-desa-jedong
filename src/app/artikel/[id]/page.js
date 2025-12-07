import { getSheetData } from '@/lib/get-data';
import Link from 'next/link';

// Agar data artikel selalu baru (ISR)
export const revalidate = 60;

// Fungsi ini akan dijalankan saat halaman dibuka
export default async function ArtikelDetail({ params }) {
  // 1. Ambil ID dari URL (misal: /artikel/1 -> id = 1)
  const { id } = await params; // Next.js 15 butuh await params

  // 2. Ambil semua data dari sheet
  const beritaList = await getSheetData('edukasi');

  // 3. Cari berita yang ID-nya cocok dengan URL
  const berita = beritaList.find((item) => item.id == id);

  // Jika berita tidak ditemukan (misal ID ngawur)
  if (!berita) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Berita tidak ditemukan 😔</h1>
        <Link href="/edukasi" className="text-blue-600 hover:underline">Kembali ke Daftar Berita</Link>
      </div>
    );
  }

  // Helper warna kategori (Sama seperti sebelumnya)
  const getCategoryColor = (kategori) => {
    const k = (kategori || '').toLowerCase();
    if (k.includes('stunting')) return 'bg-rose-100 text-rose-700';
    if (k.includes('agama') || k.includes('moderasi')) return 'bg-emerald-100 text-emerald-700';
    return 'bg-blue-100 text-blue-700';
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      
      {/* HEADER GAMBAR FULL */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0 bg-slate-900">
           {berita.link_gambar && (
             <img 
               src={berita.link_gambar} 
               alt={berita.judul} 
               className="w-full h-full object-cover opacity-60"
             />
           )}
        </div>
        
        {/* Konten Judul di atas gambar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
           <div className="max-w-4xl mx-auto text-white">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${getCategoryColor(berita.kategori)} bg-opacity-90`}>
                {berita.kategori}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-shadow">
                {berita.judul}
              </h1>
              <div className="flex items-center gap-4 text-sm text-slate-300">
                 <span className="flex items-center gap-1">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                   {berita.tanggal}
                 </span>
                 <span>•</span>
                 <span>Oleh Admin Desa</span>
              </div>
           </div>
        </div>
      </div>

      {/* ISI ARTIKEL */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Tombol Kembali */}
        <Link href="/edukasi" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition font-medium text-sm group">
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Kembali ke Daftar Berita
        </Link>

        {/* Teks Artikel */}
        <article className="prose prose-lg prose-slate max-w-none">
          {/* whitespace-pre-line berguna agar Enter di Excel jadi paragraf di Web */}
          <p className="whitespace-pre-line leading-relaxed text-slate-700 text-lg">
            {berita.isi_artikel || berita.ringkasan}
          </p>
        </article>

        {/* Footer Artikel */}
        <div className="mt-12 pt-8 border-t border-slate-100">
           <p className="text-slate-500 italic text-sm">
             Demikian informasi desa kali ini. Bagikan informasi ini jika bermanfaat.
           </p>
           {/* Tombol Share WA (Opsional) */}
           <a 
             href={`https://wa.me/?text=Baca berita ini: ${berita.judul}`}
             target="_blank"
             className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition font-medium text-sm gap-2"
           >
             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
             Bagikan ke WhatsApp
           </a>
        </div>

      </main>
    </div>
  );
}