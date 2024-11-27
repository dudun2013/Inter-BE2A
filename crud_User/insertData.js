const sqlite3 = require('sqlite3').verbose();

// Membuka database
const db = new sqlite3.Database('./video_belajar.db', (err) => {
  if (err) {
    console.error('Koneksi ke SQLite gagal:', err.message);
  } else {
    console.log('Koneksi ke SQLite berhasil!');
  }
});

// Menambahkan data ke tabel user
const insertUser  = (username, email, password) => {
  const sql = `INSERT INTO user (username, email, password) VALUES (?, ?, ?)`;
  db.run(sql, [username, email, password], function(err) {
    if (err) {
      console.error('Gagal menambahkan data:', err.message);
    } else {
      console.log(`Data berhasil ditambahkan dengan ID: ${this.lastID}`);
    }
  });
};

// Contoh menambahkan data
insertUser ('user1', 'user1@example.com', 'password1');
insertUser ('user2', 'user2@example.com', 'password2');

// Menutup koneksi
db.close((err) => {
  if (err) {
    console.error('Gagal menutup koneksi:', err.message);
  } else {
    console.log('Koneksi ditutup.');
  }
});