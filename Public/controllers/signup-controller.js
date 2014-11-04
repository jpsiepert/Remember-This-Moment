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
		//console.log($scope.user)
		signUpService.addUser($scope.user)
			.then(function(data){
				//console.log(data)
			//id = data.data[0]._id
				//console.log("user added successfully", data.data)
				$location.path("/main/" + currentUser._id)
			})
	}

	$scope.loginPage = function(){
		$location.path("/")
	}
})

//$2a$10$zAtSBtdgQ4DTA07779iTuO7MOoAcwWusMu4aFKBJeVBHWtgPrVe86