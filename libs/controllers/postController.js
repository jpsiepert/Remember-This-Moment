var PostService = require("../services/postService");
var Promise = require("bluebird");
var User = require("../Models/users")

module.exports.addPost = function(req, res){
	var userId = req.params.userid
	console.log("req.body ", req.body, "user Id ", userId)
	//console.log("post controller ", req.body.user + req.body.post)
	//res.send(PostService.addPost(req.body.user, req.body.post))
	PostService.addPost(req.body)
	.then(function(post){
		User.findOne({_id: userId}).populate('posts').exec(function(err, user){
			if(err){
				res.send(err);
			} else {
				console.log(post);
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
	PostService.getPosts()
	.then(function(posts){
		res.json(posts)
	}).catch(function(err){
		res.status(500).json(err)
	})
}