const express=require('express');
const addauthorRouter= express.Router();


addauthorRouter.get('/', function(req,res)
{
    res.render("addauthor.ejs",
    {
    nav:[{link:"/books", name:'Books'},{link:"/authors", name:'Author'},{link:"/login", name:'Login'},{link:"/sign", name:'SignUp'}],
    title : 'Add author Page',
   
    });

});

module.exports= addauthorRouter;