const path=require('path')
const express= require('express');
const bodyparser = require('body-parser');

const app = express();
const adminroutes= require('./Routes/admin');
const shoproutes= require('./Routes/shop');
const contactroutes= require('./Routes/contact');
const successroutes = require('./Routes/sucess')
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminroutes);
app.use(shoproutes);
app.use(contactroutes);
app.use(successroutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000);
