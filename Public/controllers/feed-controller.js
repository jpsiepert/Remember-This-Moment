var app = angular.module("RememberThisMoment");

app.controller("feedCtrl", function($scope, $location, feedService){
	$scope.addPost = function(){
		feedService.addPost($scope.post)
			.then(function(data){
				$scope.posts = data.data;
			})
	}

	$scope.logout = function(){
		debugger;
		feedService.logout()
			.then(function(){
				$location.path("/")
			})
	}
})