// services/produkService.js
const Produk = require('../models/produk');

const produkService = {
    getAll: async () => {
        return await Produk.findAll();
    },
    create: async (data) => {
        return await Produk.create(data);
    },
    update: async (id, data) => {
        return await Produk.update(data, {
            where: { produk_id: id },
        });
    },
    delete: async (id) => {
        return await Produk.destroy({
            where: { produk_id: id },
        });
    },
};

module.exports = produkService;