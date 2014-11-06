var app = angular.module("RememberThisMoment");

app.controller("signUpCtrl", function($scope, signUpService, loginService, $location){
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
				debugger;
				console.log(data.email, data.password)
				newUser = {email: data.email, password: data.password}
			//id = data.data[0]._id
				//console.log("user added successfully", data.data)
				loginService.login(newUser)
					.then(function(user){
						debugger;
						console.log(user)
						$location.path("/main/" + user._id)
				})
			})
	}

	$scope.loginPage = function(){
		$location.path("/")
	}
})

//$2a$10$zAtSBtdgQ4DTA07779iTuO7MOoAcwWusMu4aFKBJeVBHWtgPrVe86