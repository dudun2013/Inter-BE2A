const sqlite3 = require('sqlite3').verbose();

// Membuka database
const db = new sqlite3.Database('./video_belajar.db', (err) => {
  if (err) {
    console.error('Koneksi ke SQLite gagal:', err.message);
  } else {
    console.log('Koneksi ke SQLite berhasil!');
  }
});

// Fungsi untuk mengubah data pengguna
const updateUser  = (id, username, email, password) => {
  const sql = `UPDATE user SET username = ?, email = ?, password = ? WHERE id = ?`;
  db.run(sql, [username, email, password, id], function(err) {
    if (err) {
      console.error('Gagal mengubah data:', err.message);
    } else {
      console.log(`Data berhasil diubah untuk ID: ${id}`);
    }
  });
};

// Contoh mengubah data pengguna dengan ID 1
updateUser (1, 'user1_updated', 'user1_updated@example.com', 'newpassword1');

// Menutup koneksi
db.close((err) => {
  if (err) {
    console.error('Gagal menutup koneksi:', err.message);
  } else {
    console.log('Koneksi ditutup.');
  }
});