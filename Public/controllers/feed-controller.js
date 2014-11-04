var app = angular.module("RememberThisMoment");

app.controller("feedCtrl", function($scope, $cookieStore, $location, feedService, loginService){
	$scope.addPost = function(){
		debugger;
		feedService.addPost($scope.newPost, $scope.currentUser)
			.then(function(results){
				console.log(results.posts)
				$scope.posts = results.posts.reverse();
				$scope.newPost = '';

			})
			//$scope.getPosts();
	}

	$scope.logout = function(){
			debugger;
		feedService.logout()
	
			.then(function(){
					debugger;
				$cookieStore.remove("currentUser")
				$location.path("/")
			})
	}

	$scope.getPosts = function(){
		feedService.getPosts($scope.currentUser)
		.then(function(data){

			console.log(data.data)
			$scope.posts = data.data.reverse();

		})
	}

	$scope.goToEdit = function(){
		$location.path("/edit/" + $scope.currentUser._id)
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