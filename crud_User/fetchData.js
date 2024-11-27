const sqlite3 = require('sqlite3').verbose();

// Membuka database
const db = new sqlite3.Database('././video_belajar.db', (err) => {
  if (err) {
    console.error('Koneksi ke SQLite gagal:', err.message);
  } else {
    console.log('Koneksi ke SQLite berhasil!');
  }
});

// Mengambil data dari tabel user
const fetchUsers = () => {
  const sql = `SELECT username, email, password FROM user`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Gagal mengambil data:', err.message);
      return;
    }
    rows.forEach((row) => {
      console.log(`Username: ${row.username}, Email: ${row.email}, Password: ${row.password}`);
    });
  });
};

fetchUsers();


// Menutup koneksi
db.close((err) => {
    if (err) {
      console.error('Gagal menutup koneksi:', err.message);
    } else {
      console.log('Koneksi ditutup.');
    }
  });

  