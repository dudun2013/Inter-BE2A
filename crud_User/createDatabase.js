const sqlite3 = require('sqlite3').verbose();

// Membuat atau membuka database
const db = new sqlite3.Database('./video_belajar.db', (err) => {
  if (err) {
    console.error('Koneksi ke SQLite gagal:', err.message);
  } else {
    console.log('Koneksi ke SQLite berhasil!');
  }
});

// Membuat tabel user
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
  )`, (err) => {
    if (err) {
      console.error('Gagal membuat tabel user:', err.message);
    } else {
      console.log('Tabel user berhasil dibuat!');
    }
  });
});

// Menutup koneksi
db.close((err) => {
  if (err) {
    console.error('Gagal menutup koneksi:', err.message);
  } else {
    console.log('Koneksi ditutup.');
  }
});console.log('Mulai membuat tabel user...');
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
  )`, (err) => {
    if (err) {
      console.error('Gagal membuat tabel user:', err.message);
    } else {
      console.log('Tabel user berhasil dibuat!');
    }
  });
});
console.log('Selesai membuat tabel user.');