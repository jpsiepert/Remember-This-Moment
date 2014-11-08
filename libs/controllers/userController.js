var UserService = require("../services/userService");
var Promise = require("bluebird");

module.exports.post = function(req, res){
	console.log("usercontroller line 5, and req.body: ", req.body)
	UserService.postUser(req.body)
		.then(function(user){
			//console.log("controller again")
			res.send(user);
		}).catch(function(err){
			res.status(500).send("that email is already in use");
		})
};

module.exports.get = function(req, res){
	UserService.getUsers()
		.then(function(users){
			res.json(users)
		}).catch(function(err){
			res.status(500).json(err)
		})
};

module.exports.getUser = function(req, res){
	console.log("hit controller " + req.params.user)
	 if (!req.params.user){
				res.status(404).send("user not found")
			}else {

			UserService.getUser(req.pararms.user)
		.then(function(user){
			res.status(200).send("found")
		}).catch(function(err){
			res.status(500).send(err)
			console.log("userController line 34 err: ", err)
		})
	}
};

module.exports.updateUser = function(req, res){
	console.log("userController line 40", req.body)
	var userId = req.params.userid
	user = req.body
	UserService.updateUser(userId, user)
	.then(function(user){
		console.log("userController line 44 user: ", user)
		res.status(200).send(user)
	}).catch(function(err){
		res.status(500).send(err)
		console.log("userController line 45 err: ",err)
	})
}