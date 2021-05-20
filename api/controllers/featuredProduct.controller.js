const Product = require('../../models/product.model');

module.exports.index = async (req, res) => {
    const products = await Product.find();
    const featuredProducts = products.sort((product1, product2) => product1.view - product2.view).slice(products.length - 4);
    res.json(featuredProducts);
};