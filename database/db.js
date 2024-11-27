const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Menentukan path ke database SQLite
const dbPath = path.join(__dirname, 'video_belajar.db');

// Membuat koneksi ke database SQLite
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to the SQLite database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Ekspor koneksi agar bisa digunakan di file lain
module.exports = db;

