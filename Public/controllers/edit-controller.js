var app = angular.module("RememberThisMoment");

app.controller("editCtrl", function($location, $cookieStore, editService, feedService, $scope){

	$scope.update = function(user){
		debugger;
		editService.editUser(user)
		.then(function(results){
			console.log(results)
			$scope.user = results.data;
			$location.path("/main/" + user._id);
		})
	}

	// $scope.checkPassword = function(){
	// 	editService.checkPw()
	// }
	$scope.password = false;
	$scope.updateButton = true;
	$scope.confirmPwds = function(){
		//debugger;
		if($scope.user.password !== $scope.confirmPw){
			$scope.password = true;
			$scope.updateButton = false;
		}else {
			$scope.password = false;
			$scope.updateButton = true;
		}
	}

	// $scope.checkPassword = function(){

	// }

	$scope.goToFeed = function(){
		$location.path("/main/" + $scope.currentUser._id)
	}

		$scope.logout = function(){
		feedService.logout($scope.currentUser)

			.then(function(){
				$cookieStore.remove("currentUser")
				$location.path("/")
			})
	}
})