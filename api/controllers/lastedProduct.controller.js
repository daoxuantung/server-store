const Product = require('../../models/product.model');

module.exports.index = async (req, res) => {
    const products = await Product.find();
    const lastedProducts = products.slice(products.length - 8)
    res.json(lastedProducts);
};