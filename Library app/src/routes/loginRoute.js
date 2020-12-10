const express=require('express');
const loginRouter= express.Router();

loginRouter.get('/', function(req,res)
{
    res.render("login.ejs",
    {
    nav:[{link:"/books", name:'Books'},{link:"/authors", name:'Author'},{link:"/login", name:'Login'},{link:"/sign", name:'SignUp'}],
    title : 'Login Page',
 
    });

});


// authorRouter.get('/:id', function(req,res)
// {   const id=req.params.id
//     res.render("author.ejs",
//     {
//     nav:[{link:"/books", name:'Books'},{link:"/authors", name:'Author'}],
//     title : 'Author details',
//     author:authors[id]
//     });
// });
module.exports= loginRouter;