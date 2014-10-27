var UserService = require("../services/userService");

module.exports.post = function(req, res){
	console.log("controller")
	UserService.postUser(req.body)
		.then(function(user){
			res.send(user);
		}).catch(function(err){
			res.status(500).send(err)
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