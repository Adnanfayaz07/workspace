const path = require('path')
const express= require('express');
const contact = require('../controllers/contactus');
const router = express.Router();

router.get('/contactus', contact.contactuscontroller)
router.post('/contactus', contact.contactfilled)
module.exports=router;