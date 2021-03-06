const express = require('express');
const app = express();
let PORT = 3000;

app.get('/',(req,res)=>{
    res.send('hello');
    
})

app.listen(PORT,()=>{
    console.log('sever is running... port : '+PORT);
})