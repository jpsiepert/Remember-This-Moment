var Promise = require("bluebird"),
	User = require("../Models/users");

Promise.promisifyAll(User);
Promise.promisifyAll(User.prototype);

module.exports.postUser = function(user){
	console.log("service")
	return new User(user).saveAsync();
}

module.exports.getUsers = function(){
	return User.findAsync();
}

module.exports.getUser = function(user){
	console.log("hit service")
	return User.findOne({email: user.email}).populate("posts").exec(function(err, obj){
		console.log(obj)
		if(!err){
			console.log(obj)
		} else {
			console.log(err)
		}
	})
}

module.exports.updateUser = function(user){
	return User.findOneAndUpdateAsync({email: user.email}, user, function(err, obj){
		if(!err){
			console.log(obj)
		} else {
			console.log(err)
		}
	});
}