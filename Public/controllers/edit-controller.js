var app = angular.module("RememberThisMoment");

app.controller("editCtrl", function($location, editService, $scope){

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


})