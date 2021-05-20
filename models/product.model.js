const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    imageUrl: String,
    galleyUrl: [String],
    content: String
});

module.exports = mongoose.model('Product', productSchema);
