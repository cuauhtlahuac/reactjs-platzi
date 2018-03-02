var express = require("express");
var app = express();//se usa para que sea mas comodo el uso de express almacenar en una variable.

app.get("/",function(req,res){
	res.send("hi there");
});


//sin el listen express no puede correr.
app.listen(3000,function(){
	var conectnum = 0;
	console.log("conected!!!")
	conectnum + 1
	console.log(conectnum);
})