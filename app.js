// app.js
const express = require('express');
const sequelize = require('./config');
const produkRoutes = require('./routes/produk');

const app = express();
app.use(express.json());

app.use('/api/produk', produkRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
