const sqlite3 = require('sqlite3').verbose();

// Membuka database
const db = new sqlite3.Database('./video_belajar.db', (err) => {
  if (err) {
    console.error('Koneksi ke SQLite gagal:', err.message);
  } else {
    console.log('Koneksi ke SQLite berhasil!');
  }
});

// Fungsi untuk menghapus data pengguna
const deleteUser  = (id) => {
  const sql = `DELETE FROM user WHERE id = ?`;
  db.run(sql, id, function(err) {
    if (err) {
      console.error('Gagal menghapus data:', err.message);
    } else {
      console.log(`Data berhasil dihapus untuk ID: ${id}`);
    }
  });
};

// Contoh menghapus data pengguna dengan ID 1
deleteUser (2);

// Menutup koneksi
db.close((err) => {
  if (err) {
    console.error('Gagal menutup koneksi:', err.message);
  } else {
    console.log('Koneksi ditutup.');
  }
});