import { getSheetData } from '@/lib/get-data';
import LayananClient from '@/components/LayananClient'; 

export const revalidate = 60; 

export default async function LayananPage() {
  const layananList = await getSheetData('layanan');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      
      {/* --- HEADER IMAGE --- */}
      <div className="relative h-[45vh] min-h-[350px] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Background Image: Foto orang menulis/kantor desa */}
        <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80" 
              alt="Layanan Desa" 
              className="w-full h-full object-cover opacity-40"
            />
        </div>
        
        {/* Teks Judul */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto mt-8">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider mb-4 uppercase">
               Sistem Pelayanan Digital
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
              Pelayanan Administrasi
            </h1>
            <p className="text-lg text-blue-50/90 leading-relaxed font-light drop-shadow-md">
               Urus surat pengantar, KTP, dan dokumen kependudukan lainnya dengan mudah, transparan, dan efisien.
            </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- INFOGRAFIS ALUR (Dibuat Melayang / Overlap ke Header) --- */}
        <div className="relative z-20 -mt-16 mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
            <div className="text-center mb-8">
               <h3 className="text-lg font-bold text-slate-800">Alur Pengurusan Surat</h3>
               <p className="text-sm text-slate-500">Ikuti 3 langkah praktis berikut</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Garis konektor (Desktop Only) */}
                <div className="hidden md:block absolute top-6 left-10 right-10 h-0.5 bg-slate-100 -z-10"></div>

                {/* Step 1 */}
                <div className="text-center group">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 ring-4 ring-white">
                      1
                    </div>
                    <h4 className="font-bold text-slate-800 mb-1">Cari & Pilih</h4>
                    <p className="text-xs text-slate-500 leading-relaxed px-4">
                      Temukan jenis surat yang Anda butuhkan pada kolom pencarian di bawah.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="text-center group">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 ring-4 ring-white">
                      2
                    </div>
                    <h4 className="font-bold text-slate-800 mb-1">Baca Syarat</h4>
                    <p className="text-xs text-slate-500 leading-relaxed px-4">
                      Siapkan dokumen persyaratan (KTP/KK) sesuai yang tertera di kartu layanan.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="text-center group">
                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 ring-4 ring-white">
                      3
                    </div>
                    <h4 className="font-bold text-slate-800 mb-1">Chat WhatsApp</h4>
                    <p className="text-xs text-slate-500 leading-relaxed px-4">
                      Klik tombol hijau untuk terhubung langsung dengan perangkat desa kami.
                    </p>
                </div>
            </div>
          </div>
        </div>

        {/* --- DAFTAR LAYANAN --- */}
        <div className="mb-8 flex items-center gap-3">
           <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
           <h2 className="text-2xl font-bold text-slate-800">Daftar Layanan Tersedia</h2>
        </div>

        {/* Komponen Pencarian & Kartu */}
        <LayananClient dataLayanan={layananList} />
        
      </main>
    </div>
  );
}