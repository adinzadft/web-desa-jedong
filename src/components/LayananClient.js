"use client";

import { useState } from 'react';

export default function LayananClient({ dataLayanan }) {
  const [search, setSearch] = useState('');

  // Pastikan dataLayanan ada isinya, kalau kosong kasih array kosong [] biar tidak error
  const safeData = dataLayanan || [];

  const filteredData = safeData.filter((item) => {
    // Defensive coding: cek apakah nama_surat ada, kalau tidak anggap string kosong
    const namaSurat = item.nama_surat || '';
    const searchKeyword = search.toLowerCase();
    
    return namaSurat.toLowerCase().includes(searchKeyword);
  });

  return (
    <div className="w-full">
      {/* SEARCH BAR */}
      <div className="max-w-xl mx-auto -mt-8 mb-12 relative z-20 px-4">
        <div className="bg-white rounded-full shadow-xl border border-slate-200 p-2 flex items-center">
          <div className="pl-4 text-slate-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input
            type="text"
            placeholder="Cari layanan... (misal: KTP)"
            className="w-full p-3 rounded-full outline-none text-slate-700 placeholder:text-slate-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* HASIL PENCARIAN */}
      {filteredData.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((item, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col">
              <div className="p-6 border-b border-slate-50 bg-slate-50/50">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.nama_surat || 'Tanpa Judul'}
                  </h2>
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-md">ADM</span>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Syarat Dokumen</p>
                <ul className="space-y-2">
                  {(item.syarat || '').split(',').map((syaratItem, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>{syaratItem.trim()}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 pt-0 mt-auto flex flex-col gap-3">
                 {item.link_template && (
                  <a href={item.link_template} target="_blank" className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-all">
                    📄 Download Formulir
                  </a>
                 )}
                 <a href={`https://wa.me/${item.nomor_wa}?text=Halo%20Admin,%20saya%20mau%20urus%20${encodeURIComponent(item.nama_surat || '')}`} target="_blank" className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 shadow-lg shadow-green-600/20 transition-all">
                   📱 Chat WhatsApp
                 </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-slate-500">
          <p className="text-xl font-semibold">Layanan tidak ditemukan</p>
        </div>
      )}
    </div>
  );
}