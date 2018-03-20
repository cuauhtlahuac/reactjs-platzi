var express = require('express');
var app = express();
var request = require("request");
var bodyParser = require('body-parser');
app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("searcher")
})

app.get("/result",function(req,res){
    var newMovie = req.query.movies;
    console.log(`New search of the title: - ${newMovie} -`)
    request(`http://www.omdbapi.com/?s=${newMovie}&page=1&apikey=thewdb`,function(error,response,body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("result",{data: data , name: newMovie})
        }     
    })
})

/*app.post("/newSearch",function(req,res){
    var newMovie = req.body;
    //res.redirect("/result");
    res.send("Movie: " + newMovie)
});*/

app.listen(3000, "localhost",function(){
    console.log("Movie App conected !!!")
});