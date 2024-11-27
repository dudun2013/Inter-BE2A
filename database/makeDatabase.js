// Buat Database dengan nama video_belajar
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('video_belajar.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Buat tabel dengan nama produk
db.run(`
    CREATE TABLE IF NOT EXISTS produk (
      produk_id INTEGER PRIMARY KEY,
      produk_name TEXT,
      deskripsi TEXT,
      harga REAL
    );
  `, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Table created successfully.');
    }
  });


  // menambahkan data ke tabel produk
  db.run(`
    INSERT INTO produk (produk_name, deskripsi, harga)
    VALUES ('Produk 1', 'Deskripsi produk 1', 10000);
  `, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Data inserted successfully.');
    }
  });


  //jangan lupa menutup koneksi database
  // db.close();