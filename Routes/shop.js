const path = require('path');

const express = require('express');

const productscontroller = require('../controllers/products');
const router = express.Router();

router.get('/', productscontroller.getproducts);

module.exports = router;

