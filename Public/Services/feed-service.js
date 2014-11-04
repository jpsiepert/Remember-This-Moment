var app = angular.module("RememberThisMoment");

app.service("feedService", function($http, $q){
	this.addPost = function(post, user){
		var deferred = $q.defer()
		 $http({
			method: "POST",
			url: "user/post/" + user._id,
			data: {text: post}
		}).then(function(results){

			deferred.resolve(results.data)
		})
		return deferred.promise
	}

	this.logout = function(user){
		return $http({
			method: "POST",
			url: "/logout",
			data: user
		})
	}

	this.getPosts = function(user){

		//.log(currentUser._id)
		return $http ({
			method: "GET",
			url: "/user/posts/" + user._id
		}).then(function(posts){
			console.log(posts)
			return posts
		})
	}

	// this.getUser = function(){
	// 	return $http ({
	// 		method: "GET",
	// 		url: "/user"
	// 	})
	// }

})

// getMyData: function() {
//       var deferred = $q.defer();

//       $http({
//       	method: 'GET', 
//       	url:'/user'})
//         .success(function(response) {
//           console.log('success', response);
//           deferred.resolve(response);
//         })
//         .error(function(err) {
//           deferred.reject(err);
//         })

//       return deferred.promise;
//     },