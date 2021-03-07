const express = require('express');
const app = express();
let PORT = 3000;

const datas = ['kong','goni','laal'];

// ejs part (views folder)
app.set('views',__dirname + '/views')
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('hello',{datas:datas});
})

app.get('/login',(req,res)=>{
    res.render('login',{datas:'kong'});
})



// express part (public folder)
app.use(express.static(__dirname+'/public'));

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
})

app.listen(PORT,()=>{
    console.log('sever is running... port : '+ PORT);
})