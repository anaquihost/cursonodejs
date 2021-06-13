var app = require('./conf/server')
var rotaHome = require ('./app/routes/home');
rotaHome(app); 

var rotaNoticias = require ('./app/routes/noticias');
rotaNoticias(app); 


app.get('/noticias', function(req , res){
    res.render("noticias.ejs");
    });

app.listen(3000, function(){
console.log("servidor rodando");
})