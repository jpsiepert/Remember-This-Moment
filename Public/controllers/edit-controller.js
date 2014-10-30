var app = angular.module("RememberThisMoment");

app.controller("editCtrl", function($location, editService){

	$scope.update = function(){
		editService.editUser($scope.user)
		.then(function(results){
			$scope.user = results.data;
			$location.path("/main");
		})
	}

	// $scope.checkPassword = function(){
	// 	editService.checkPw()
	// }


})