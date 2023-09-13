const path=require('path')
const rootdir=require('../util/path')


exports.formfilled= (req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','success.html'));
}