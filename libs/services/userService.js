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