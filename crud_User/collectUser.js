const sqlite3 = require('sqlite3').verbose();

// Membuka database
const db = new sqlite3.Database('././video_belajar.db', (err) => {
  if (err) {
    console.error('Koneksi ke SQLite gagal:', err.message);
  } else {
    console.log('Koneksi ke SQLite berhasil!');
  }
});

// Fungsi untuk menambahkan data pengguna
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

// Fungsi untuk menghapus data pengguna
const deleteUser  = (id) => {
  const sql = `DELETE FROM user WHERE id = ?`;
  db .run(sql, id, function(err) {
    if (err) {
      console.error('Gagal menghapus data:', err.message);
    } else {
      console.log(`Data berhasil dihapus untuk ID: ${id}`);
    }
  });
};

// Fungsi untuk mengambil data dari tabel user
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

// Contoh penggunaan fungsi
insertUser ('user1', 'user1@example.com', 'password1');
updateUser (1, 'user1_updated', 'user1_updated@example.com', 'newpassword1');
fetchUsers();
deleteUser (1);

// Menutup koneksi
db.close((err) => {
  if (err) {
    console.error('Gagal menutup koneksi:', err.message);
  } else {
    console.log('Koneksi ditutup.');
  }
});