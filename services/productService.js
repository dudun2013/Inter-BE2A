const ProductModel = require('../models/productModel');

const ProductService = {
  getAllProducts: () => {
    return ProductModel.getAllProducts();
  },

  updateProduct: (id, productData) => {
    return ProductModel.updateProduct(id, productData);
  },

  deleteProduct: (id) => {
    return ProductModel.deleteProduct(id);
  },

  addProduct: (productData) => {
    return ProductModel.addProduct(productData);
  }
};

module.exports = ProductService;