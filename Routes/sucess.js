const path = require('path');
const express= require('express');
const successfull = require('../controllers/success');
const router = express.Router();

router.get('/sucess',successfull.formfilled)
module.exports=router;