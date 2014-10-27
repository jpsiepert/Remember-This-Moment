var Hapi = require("hapi");
var Mongoose = require("mongoose");
var port = 9333;
var databaseRef = "mongodb://localhost/rememberThisMoment";
var connection = Mongoose.connection;
var UserController = require("./libs/controllers/userController");
//var bodyParser = require("body-parser")

var server = new Hapi.Server('localhost', port);

Mongoose.connect(databaseRef);

connection.once("open", function(){
	console.log("hapi server says quack quack")
})
server.route({
	method: "GET",
	path: "/hello",
	handler: function(req, rep){
		rep("hello world");
	}
});


server.route({
	method: "POST",
	path: "/newUser",
	handler: function(req, rep){
		rep(UserController.post)
	}
});

server.route({
	method: "GET",
	path: "/users",
	handler: function(req, rep){
		rep(UserController.get)
	}
})


server.start(function(){
	console.log("hapi is listening")
});