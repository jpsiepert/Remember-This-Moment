var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	port = 9393,
	mongoUri = "mongodb://localhost/remember",
	UserController = require("./libs/controllers/userController"),
	connection = mongoose.connection,
	cors = require("cors");

app.use(bodyParser());

app.use(cors())

mongoose.connect(mongoUri);

connection.once("open", function(){
	console.log("express server is quacking")
})

app.get("/users", UserController.get)

app.post("/newUser", UserController.post)



app.listen(port, function(){
	console.log("express")
})