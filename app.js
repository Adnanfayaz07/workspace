const express= require('express');
const bodyparser = require('body-parser');

const fs=require('fs');

const app = express()

app.use(bodyparser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
  fs.readFile('chat.txt',(err,data)=>{
    if(err){
      console.log(err);
      data ='NO CHAT EXISTS'
    }
    res.send(
      `${data} <form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
     <input type="text" name ="message" id="message">
      <input type="hidden" name ="username" id="username">
      <br>
      <button type="submit">send</button>
      </form>`);
  })
})
app.post('/',(req,res)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("chat.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>
    err ? console.log(err) : res.redirect("/")
   )
})
app.get('/login',(req,res)=>{
    res.send(
      `<form action="/" method="" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
      <input type="text" name ="username" placeholder="username" id="username">
      <br>
      <button type="submit">add user</button></form>`);
})
app.listen(3000)