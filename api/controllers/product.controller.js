const Product = require('../../models/product.model');

module.exports.index = async (req, res) => {
    const { page, limit, category, sortBy } = req.query;
    try {
        // execute query with page and limit values
        if (page && limit) {
            let products = [];
            const count = category ? (await Product.find({ category })).length : (await Product.find()).length
            switch (sortBy) {
                case 'price':
                    products = category ? await Product.find({ category })
                        .sort({ price: 1 })
                        .limit(limit * 1)
                        .skip((page - 1) * limit)
                        .exec() : await Product.find()
                            .sort({ price: 1 })
                            .limit(limit * 1)
                            .skip((page - 1) * limit)
                            .exec();
                    break;
                case 'rating':
                    products = category ? await Product.find({ category })
                        .sort({ rating: 1 })
                        .limit(limit * 1)
                        .skip((page - 1) * limit)
                        .exec() : await Product.find()
                            .sort({ rating: 1 })
                            .limit(limit * 1)
                            .skip((page - 1) * limit)
                            .exec();
                    break;
                case 'popularity':
                    products = category ? await Product.find({ category })
                        .sort({ view: 1 })
                        .limit(limit * 1)
                        .skip((page - 1) * limit)
                        .exec() : await Product.find()
                            .sort({ view: 1 })
                            .limit(limit * 1)
                            .skip((page - 1) * limit)
                            .exec();
                    break;
                default:
                    products = category ? await Product.find({ category })
                        .limit(limit * 1)
                        .skip((page - 1) * limit)
                        .exec() : await Product.find()
                            .limit(limit * 1)
                            .skip((page - 1) * limit)
                            .exec();
                    break;
            }
            res.json({
                products,
                totalPages: Math.ceil(count / limit),
                currentPage: page
            });
        } else {
            const products = await Product.find();
            res.json(products);
        }
    } catch (err) {
        console.error(err.message);
    }
};