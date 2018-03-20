var express = require('express');
var app = express();
var request = require("request");

app.get("/result",function(req,res){
    request("http://www.omdbapi.com/?s=garfield&y=2004&apikey=thewdb&callback",function(error,response,body){
        if(!error && response.statusCode == 200){
            var result = JSON.parse(body);
            res.send(result["Search"][0]);
        }
    })
})

app.listen(3000, "localhost",function(){
    console.log("Movie App conected !!!")
});