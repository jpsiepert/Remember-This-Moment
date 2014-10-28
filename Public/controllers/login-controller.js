var app = angular.module("RememberThisMoment")

app.controller("loginCtrl", function($scope, loginService, $location){
	$scope.test = "hello"

	$scope.loginUser = function(){
	
		loginService.login($scope.user)
			.then(function(data){
				console.log(data.data)
				$location.path("/main")
			})
	}
})