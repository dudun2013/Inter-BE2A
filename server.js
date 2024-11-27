const express = require('express');
const app = express();
const db = require('./database/db'); // Sesuaikan path jika perlu
const userRoutes = require('./routes/userRoutes'); // Pastikan ini benar

// Middleware untuk parsing JSON
app.use(express.json());

// Menggunakan rute pengguna
app.use('/api/users', userRoutes); // Menggunakan rute dari userRoutes

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



/*
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
    // Logika untuk mengambil data dari database
    res.json({ message: 'Data berhasil diambil' });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

*/