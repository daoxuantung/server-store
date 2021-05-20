var express = require("express");

var controller = require('../controllers/auth.controller');

var router = express.Router();

router.get('/login', controller.login);
router.post('/signup', controller.signup);

module.exports = router;