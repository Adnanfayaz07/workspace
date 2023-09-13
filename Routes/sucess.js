const path=require('path')
const express= require('express');
const router = express.Router();
const rootdir=require('../util/path')
router.get('/success',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','sucess.html'));
})
module.exports=router;