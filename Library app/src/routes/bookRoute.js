const express=require('express');
const booksRouter= express.Router();


var books=[
    {
        title:"Tom and Jerry",
        author:'Joseph Barbara',
        genre:'Cartoon',
        img:"tom.jpg"
    },
    {
        title:"Harry Potter",
        author:'JK Rowling',
        genre:'Fantasy',
        img:"harry.jpg"
    }, 
    {
        title:"Famous Five",
        author:'Enid Blyton',
        genre:'Drama',
        img:"famous.jpg"
    },
];

booksRouter.get('/', function(req,res)
{
    res.render("books.ejs",
    {
    nav:[{link:"/books", name:'Books'},{link:"/authors", name:'Author'},{link:"/login", name:'Login'},{link:"/sign", name:'SignUp'},{link:"/addbook", name:'Add Book'}],
    title : 'Books Library',
    books
    });

});

// booksRouter.get('/addbook', function(req,res)
// {   const id=req.params.id
//     res.render("addbook.ejs",
//     {
//     nav:[{link:"/books", name:'Books'},{link:"/authors", name:'Author'}],
//     title : 'Book',
    
//     });
// });

booksRouter.get('/:id', function(req,res)
{   const id=req.params.id
    res.render("book.ejs",
    {
    nav:[{link:"/books", name:'Books'},{link:"/authors", name:'Author'}],
    title : 'Book',
    book:books[id]
    });
});

module.exports= booksRouter;