// routes/produk.js
const express = require('express');
const router = express.Router();
const produkService = require('../services/produkService');

// Get all produk
router.get('/', async (req, res) => {
    try {
        const produk = await produkService.getAll();
        res.json(produk);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create new produk
router.post('/', async (req, res) => {
    try {
        const produk = await produkService.create(req.body);
        res.status(201).json(produk);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update produk
router.patch('/:id', async (req, res) => {
    try {
        const [updated] = await produkService.update(req.params.id, req.body);
        if (updated) {
            const updatedProduk = await produkService.getAll();
            res.status(200).json(updatedProduk);
        } else {
            res.status(404).json({ message: 'Produk not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete produk
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await produkService.delete(req.params.id);
        if ( deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Produk not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;