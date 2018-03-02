var express = require("express");
var app = express();//se usa para que sea mas comodo el uso de express almacenar en una variable.

app.get("/",function(req,res){
	res.send("hi there");
});

app.get("/bye",function(req,res){
	res.send("Goodbye");
})

app.get("/dog",function(req,res){
	res.send("Miau!");
	console.log("Se hizo una solicitud");
});

//sin el listen express no puede correr.
app.listen(3000,function(){
	console.log("conected!!!");
})