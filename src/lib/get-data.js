import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// LOGIKA BARU: Cek apakah ada file secrets.json?
// Kalau tidak ada (di Vercel), pakai Environment Variable.
let creds = null;
try {
  creds = require('../../secrets.json');
} catch (e) {
  // File tidak ada, berarti sedang di Vercel/Production
  // Kita akan setting variable ini nanti di Vercel
}

// Config Sheet ID
const SHEET_ID = '1AyWfI3IvqJq0tuJZ5vzrErSHddjIog_ZxFUtANFW_wA'; // Pastikan ID sheetmu tetap ada disini

const serviceAccountAuth = new JWT({
  // Jika ada creds (local), pakai itu. Jika tidak, ambil dari ENV Vercel
  email: creds ? creds.client_email : process.env.GOOGLE_CLIENT_EMAIL,
  key: creds ? creds.private_key : process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export const getSheetData = async (sheetName) => {
  try {
    const doc = new GoogleSpreadsheet(SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle[sheetName];
    
    // Error handling kalau nama sheet salah ketik
    if (!sheet) {
      console.error(`Sheet dengan nama '${sheetName}' tidak ditemukan.`);
      return [];
    }

    const rows = await sheet.getRows();
    return rows.map((row) => {
      const obj = { id: row.rowIndex }; // Masukkan ID baris otomatis
      sheet.headerValues.forEach((header) => {
        obj[header] = row.get(header);
      });
      return obj;
    });
  } catch (error) {
    console.error('Error fetching Google Sheets:', error);
    return [];
  }
};