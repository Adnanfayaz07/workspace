const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/add-user',userController.adduser)
router.get('/get-user',userController.getuser)

router.delete('/delete-user/:id',userController.deleteuser)
module.exports = router;