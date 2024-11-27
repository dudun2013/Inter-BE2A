// models/produk.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Produk = sequelize.define('Produk', {
    produk_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    produk_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deskripsi: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    harga: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    tableName: 'produk',
    timestamps: false,
});

module.exports = Produk;