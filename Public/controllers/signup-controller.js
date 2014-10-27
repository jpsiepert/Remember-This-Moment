var app = angular.module("RememberThisMoment");

app.controller("signUpCtrl", function($scope, signUpService, $location){
	$scope.password = false;
	$scope.signupButton = true;

	$scope.confirmPwds = function(){
		//debugger;
		if($scope.user.password !== $scope.confirmPw){
			$scope.password = true;
			$scope.signupButton = false;
		}else {
			$scope.password = false;
			$scope.signupButton = true;
		}
	}


	$scope.addUser = function(){
		//debugger;
		signUpService.addUser($scope.user)
			.then(function(data){
				console.log("user added successfully", data.data)
				$location.path("/main")
			})
	}
})