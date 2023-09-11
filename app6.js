const express= require('express');

const app = express()

app.use((req,res,next)=>{
    console.log('In the middleware!');
    next();
})
app.use((req,res,next)=>{
    console.log('In the another middleware!');
    res.send('<h1>hello from express! its me ADNAN FAYAZ welcoming you all</h1>');
})
app.listen(3000)