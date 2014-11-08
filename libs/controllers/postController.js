var PostService = require("../services/postService");
var Promise = require("bluebird");
var User = require("../Models/users")

module.exports.addPost = function(req, res){
	var userId = req.params.userid
	console.log(" postController line 7 req.body ", req.body, " & user Id ", userId)
	//console.log("post controller ", req.body.user + req.body.post)
	//res.send(PostService.addPost(req.body.user, req.body.post))
	PostService.addPost(req.body)
	.then(function(post){
		User.findOne({_id: userId}).populate('posts').exec(function(err, user){
			if(err){
				res.send(err);
			} else {
				//console.log("postController line 16 post: ", post);
				user.posts.addToSet(post[0]);
				user.save(function(err){
					if(err){
						res.send(err);
					} else{
						res.send(user);
					}
				})
			}
		})

	// 	User.findById(user, function(err, userObj){
	// 		if(!err){
	// 		console.log("post ", post, "userObj: ", userObj.posts.push);
	// 		userObj.posts.push(post);//have also tried addToSet get a {} object has no cast method
	// 		userObj.saveAsync();
	// 	} else {
	// 		console.log("findByID err ", err)
	// 	}
	// 	})
		
	// }).catch(function(err){
	// 	res.send(err)
	// 	console.log("err ", err)
	// })
	
	});
}

module.exports.getPosts = function(req, res){
	var userId = req.params.userid
	//console.log("postController line 48 userId: ", userId)
	PostService.getPosts(userId)
	.then(function(user){
		//console.log("postController line 51 user: ", user)
		post = user.posts
		//console.log("postcontroller line 53: ", post)
		res.json(post)
	})
	// .catch(function(err){
	// 	res.status(500).json(err)
	// })
}

module.exports.deletePost = function(req, res){
	console.log("req", req, "req.params", req.params)
	console.log("postController line 62, ", req.user, req.post)//find user and then find post
	var user = req.params.userid;
	var post = req.params.postid
	PostService.deletePost(user, post, function(err, userObj){
		if(err){
			console.log(err, "userObj save failed");
		} else {
			res.send(userObj);
		}
	});
};









