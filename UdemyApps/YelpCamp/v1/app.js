var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var listBoards = [{board: "Precioso", url: "https://images.unsplash.com/photo-1457694716743-eb419114c894?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05a1d0df2d7749ea8074c76828467cbd&auto=format&fit=crop&w=500&q=60"},
{board: "Clasico", url: "https://images.unsplash.com/photo-1520846468899-a56651fec36d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4930cfd314d8bf3dfb2442b5bd2dca4a&auto=format&fit=crop&w=500&q=60"},
{board: "Moderno", url: "https://images.pexels.com/photos/209640/pexels-photo-209640.jpeg?h=350&auto=compress&cs=tinysrgb"}       
];

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/chessboards",function(req,res){
    res.render("chess_boards",{listBoards: listBoards});
});

app.post("/chessboards",function(req,res){
    //get data from form and add to chessboards array
    var name = req.body.name;
    var image = req.body.image;
    var chessBoards = {board: name, url: image}
    listBoards.push(chessBoards);
    res.redirect("/chessboards")
    //redirect back to chessboard page
});

app.get("/chessboards/new", function(req,res){
    res.render("new.ejs");
});

app.listen(3000,function(){
    console.log("YelCamp has Conected!!!")
});

setTimeout(function(){
    console.log("6 secs")
},'6000');