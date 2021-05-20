var jwt = require('jsonwebtoken');
const User = require('../../models/product.model');

module.exports.login = (req, res) => {

}

module.exports.signup = async (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }
    await User.create(user);
    res.json(user);
}
