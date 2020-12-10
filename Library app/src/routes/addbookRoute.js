const express=require('express');
const addbookRouter= express.Router();


addbookRouter.get('/', function(req,res)
{
    res.render("addbook.ejs",
    {
    nav:[{link:"/books", name:'Books'},{link:"/authors", name:'Author'},{link:"/login", name:'Login'},{link:"/sign", name:'SignUp'}],
    title : 'Add Book Page',
   
    });

});

module.exports= addbookRouter;