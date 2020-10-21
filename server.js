const express = require('express');
var app =express();
const hbs=require('hbs');

app.set('view engine','hbs' );
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getDate',()=>{
  return new Date().getFullYear();
})

app.use((req,res,next)=>{
  console.log(req.url);
  next();
});

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=> {
  res.render('home.hbs',{
    mes:"Hello from Home",

  });
});

  app.get('/about',(req,res)=> {
    res.render('about.hbs',{
      mes:"Hello from About",

    });

});
app.listen(3000,()=>{
  console.log("Server has started");
});
