var app = angular.module("RememberThisMoment");

app.service("editService", function($http, $q){
	this.editUser = function(user){
		debugger;
		console.log(user)
		return $http({
			method: "PUT",
			url: "/user/" + user._id,
			data: user
		}).then(function(results){
			console.log(results)
			return results;
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

var app = angular.module("RememberThisMoment");

