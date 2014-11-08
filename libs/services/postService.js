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

module.exports.deletePost = function(userId, postId, cb){
	return User.findOne({_id: userId}, function(err, userObj){
		console.log("postService line 53 user:", userObj, "postId", post)
		if(userObj.posts.indexOf(postId) !== -1){
			userObj.posts.splice((userObj.posts.indexOf(postId)), 1);
			console.log("postService line 55", userObj.posts);
			userObj.save(function(err){
				err && cb(err, null);
				Post.findOne({_id: postId}, function(err, postObj){
					postObj.remove(function(err){
						err && cb(err, null);

						return cb(null, userObj);
						
					});
				});
					
			});
		};
	});
// 	return Post.remove({_id: postId}, function(err){
// 	if(err){
// 		return cb(err)
// 	} else {
// 		return cb();
// 	}
// })
}



// var newPost = new Post(post).saveAsync();
// User.findOneAndUpdateAsync({email: user.email}, function(){
// 	User.posts.push(newPost)
// 	User.saveAsync()
// })