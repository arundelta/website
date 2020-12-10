const express=require('express');
const authorRouter= express.Router();


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

authorRouter.get('/', function(req,res)
{
    res.render("authors.ejs",
    {
    nav:[{link:"/books", name:'Books'},{link:"/authors", name:'Author'},{link:"/login", name:'Login'},{link:"/sign", name:'SignUp'},{link:"/addauthor", name:'Add Author'}],
    title : 'Authors',
    authors
    });

});


authorRouter.get('/:id', function(req,res)
{   const id=req.params.id
    res.render("author.ejs",
    {
    nav:[{link:"/books", name:'Books'},{link:"/authors", name:'Author'}],
    title : 'Author details',
    author:authors[id]
    });
});
module.exports= authorRouter;