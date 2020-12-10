const express=require('express');
const signupRouter= express.Router();


var authors=[
    {
        
        name:'Joseph Barbara',
        genre:'Cartoon',
        img:"barb.jpg"
    },
    {
        name:'JK Rowling',
        genre:'Fantasy',
        img:"rowl.jpg"
    }, 
    {
        name:'Enid Blyton',
        genre:'Child Literature',
        img:"blyton.jpg"
    },
];

signupRouter.get('/', function(req,res)
{
    res.render("signup.ejs",
    {
    nav:[{link:"/books", name:'Books'},{link:"/authors", name:'Author'},{link:"/login", name:'Login'},{link:"/sign", name:'SignUp'}],
    title : 'Signup Page',
    authors
    });

});

module.exports= signupRouter;