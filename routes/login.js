

const express=require('express');

const fs=require('fs');

const router=express.Router();


// => GET
router.get('/login',(req,res,next) =>{
    res.send(`<form onsubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/" method="GET"><label>Enteryour username here</label><input id="username" type="text" name="username"><button type="submit">Add<buttton><form>`);
});
// POST
router.post('/',(req,res,next) =>{
    if(req.body.message == '')
    {
      skip;
    }
    fs.writeFile("chat.txt", `${req.body.username}:${req.body.message}`,{flag :'a' },(err)=>
         err ? console.log(err) : res.redirect("/")
      )
      console.log(req.body.username);
      console.log(req.body.message);
  
  });


module.exports=router;
