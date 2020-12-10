const { request } = require('express');
const express=require('express');
const app=express();
const port=process.env.PORT || 5001

const booksRouter=require('./src/routes/bookRoute')
const authorRouter=require('./src/routes/authorRoute')
const loginRouter=require('./src/routes/loginRoute')
const signupRouter=require('./src/routes/signupRoute')
const addbookRouter=require('./src/routes/addbookRoute')
const addauthorRouter=require('./src/routes/addauthorRoute')


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views', './src/views');

app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/login',loginRouter);
app.use('/sign',signupRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);

app.get('/', function(req,res){
    res.render("index",
    {
        nav:[{link:"/login", name:'Login'},{link:"/sign", name:'SignUp'}],
        title : 'Library'
    });
});

app.listen(port,()=>{console.log("server Ready at : " + port)});