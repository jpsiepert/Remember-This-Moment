var app = angular.module("RememberThisMoment");

app.controller("feedCtrl", function($scope, $location, feedService, loginService){
	$scope.addPost = function(){
		debugger;
		feedService.addPost($scope.newPost, $scope.user)
			.then(function(results){
				console.log(results.posts)
				$scope.posts = results.posts.reverse();
				$scope.newPost = '';

			})
			//$scope.getPosts();
	}

	$scope.logout = function(){
		feedService.logout()
			.then(function(){
				$location.path("/")
			})
	}

	$scope.getPosts = function(){
		feedService.getPosts($scope.user)
		.then(function(data){

			console.log(data.data)
			$scope.posts = data.data

		})
	}

	$scope.goToEdit = function(){
		$location.path("/edit/" + $scope.user._id)
	}
	// $scope.getUser = function(){
	// 	feedService.getUser()
	// 	.then(function(user){
	// 		console.log(user)
	// 		$scope.user = user.data
	// 	})
	// }
	$scope.getPosts();
	//$scope.getUser();
})