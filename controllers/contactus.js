const path=require('path')
const rootdir=require('../util/path')
exports.contactuscontroller = (req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact.html'));
};
exports.contactfilled =(req,res,next)=>{
    console.log(req.body);
    res.redirect('/sucess')
};