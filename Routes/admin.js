const path = require('path');

const express = require('express');

const productscontroller = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',productscontroller.getaddproduct);

// /admin/add-product => POST
router.post('/add-product',productscontroller.postaddproduct );

module.exports = router;
 
