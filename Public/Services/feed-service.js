var app = angular.module("RememberThisMoment");

app.service("feedService", function($http){
	this.addPost = function(post){
		return $http({
			method: "POST",
			url: "user/post",
			data: post
		})
	}

	this.logout = function(){
		return $http({
			method: "POST",
			url: "/logout"
		})
	}
})