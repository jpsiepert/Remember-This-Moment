var Promise = require("bluebird"),
	Post = require("../Models/posts");
	User = require("../Models/users")

Promise.promisifyAll(Post);
Promise.promisifyAll(Post.prototype);
Promise.promisifyAll(User);
Promise.promisifyAll(User.prototype);

module.exports.addPost = function(post){
	//console.log("post service post: " + post + " user: " + user + " User.posts " + user.posts)
	//user.posts.push(post)
	// console.log(user)
	//return user;

	// return User.findOne({email: user.email}, function(){
	// 	User.posts.push(post)
	// 	User.saveAsync();
// });
	// return User.findOneAndUpdateAsync({email: user.email}, function(){
	// 	console.log("inside function")
	// 	var newPost = new Post(post).saveAsync();
	// 	console.log(newPost)
	// 	User.posts.push(newPost);
	// 	return User.saveAsync();
	// })


	return new Post(post).saveAsync().then(function(savedPost){
		console.log(savedPost);
		return savedPost;
	});

}

module.exports.getPosts = function(){
	return Post.findAsync();
}



// var newPost = new Post(post).saveAsync();
// User.findOneAndUpdateAsync({email: user.email}, function(){
// 	User.posts.push(newPost)
// 	User.saveAsync()
// })