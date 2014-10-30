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
		//console.log("postService line 30 savedPost: ", savedPost);
		return savedPost;
	});

}

module.exports.getPosts = function(userId){
	//return Post.findAsync();
	//console.log("postService line 38 userId", userId)
	return User.findOne({_id: userId}).populate("posts").exec(function(err, obj){
		if(!err){
			//console.log("postService line 40: ", obj)
			return obj.posts
		} else {
			//console.log("post service line 42 err:", err)
		}
	})
}



// var newPost = new Post(post).saveAsync();
// User.findOneAndUpdateAsync({email: user.email}, function(){
// 	User.posts.push(newPost)
// 	User.saveAsync()
// })