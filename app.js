const express=require('express');

const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded());

const loginRoutes=require('./routes/login.js');
const messageRoutes=require('./routes/message.js');


// 
app.use(loginRoutes);//import router into adminRoutes
app.use(messageRoutes);

app.use((req,res,next) =>{
    res.status(404).send("<html><h1>Error Page Not Found</h1></html>");
})


app.listen(4000);
