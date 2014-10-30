var app = angular.module("RememberThisMoment");

app.controller("editService", function($http, $q){
	this.editUser = function(user){
		return $http({
			method: "PUT",
			url: "/user",
			data: user
		})
	}

	// this.checkPw = function(user){
	// 	return $http({
	// 		method: "GET",
	// 		url: "/password",
	// 		data: user.password
	// 	})
	// }
});