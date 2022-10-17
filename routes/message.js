const express=require('express');

const fs=require('fs');

const router=express.Router();

router.get('/', (req,res,next) =>{
    fs.readFile('chat.txt',(err,data)=>{
        if (err) {
            console.log(err);
            data='No Data Exists';
        }
        res.send((
            `${data}
            <form  action="/"  method="POST" onsubmit=" document.getElementById('username').value=localStorage.getItem('username')">
            <input id="message" type="text" name="message" placeholder="message">
            <input type="hidden" name ="username" id="username" >
            <br>
            <button type="submit">send</button></form>`
        ));
    })
})

// router.get('/' , (req,res)=>{
//     fs.readFile('username.txt',(err,data)=>{
//       if(err)
//       {
//         console.log(err);
//         data ='no chats';
//       }
//       res.send(
//         `${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" 
//         >
//         <input type="text" name="message" id="message" placeholder="message"> 
//         <input type="hidden" name ="username" id="username" >
//         <br>
//         <button type="submit">add</button></form>`);
//     })

// })
    


module.exports=router;