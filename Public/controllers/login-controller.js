var app = angular.module("RememberThisMoment")

app.controller("loginCtrl", function($scope, loginService, $location){
	$scope.test = "hello"

	$scope.loginUser = function(){
	
		loginService.login($scope.user)
			.then(function(user){
				console.log(user)
				$location.path("/main/" +  user._id)
			})
	}
})