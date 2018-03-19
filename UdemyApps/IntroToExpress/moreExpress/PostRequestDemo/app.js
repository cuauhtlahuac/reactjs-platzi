var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
var amigos = ["Javier", "Andres", "Lupita", "Pedro", "Bryan"];
app.get("/",function(req,res){
    res.render("home");
});

app.get("/amigos",function(req,res){
    res.render("amigos",{'friends': amigos});
});

app.post('/nuevoamigo',function(req,res){
    var newFriend = req.body.amigo;
    amigos.push(newFriend);
    res.redirect('/amigos')
})

app.listen(3000, "localhost",function(){
    console.log("conected !!!")
});

