var Promise = require("bluebird"),
	User = require("../Models/users");

Promise.promisifyAll(User);
Promise.promisifyAll(User.prototype);

module.exports.postUser = function(user){
	console.log("service, and user", user)
	return new User(user).saveAsync();
}

module.exports.getUsers = function(){
	return User.findAsync();
}

module.exports.getUser = function(user){
	console.log("hit service")
	return User.findOne({email: user.email}).populate("posts").exec(function(err, obj){
		if(!err){
			console.log("userservice line 21 obj: ",obj)
		} else {
			console.log("userService line 23 err: ", err)
		}
	})
}

module.exports.updateUser = function(userId, user){
	console.log("userService line 28", user)
	return User.findByIdAndUpdateAsync(userId, user)
}