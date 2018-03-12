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
// el sig requerimiento imprime el texto despues de cumplir el patron...
app.get("/r/:name?/comments/:id/:post",function(req,res){
	console.log(req.params);
	res.send("comments section...");
});

//para saber el valor que se puso de algun patron
app.get("/r/:subname",function(req,res){
	var subN = req.params.subname;
	res.send("Bienvenido a el " + subN + " Show...");
}); 

app.get("*",function(req,res){
	res.send("You are a star ");
});

setTimeout(function() {
	console.log("1 second less")
}, 1000);

//sin el listen express no puede correr.
app.listen(3000,function(){
	console.log("conected!!!");
});