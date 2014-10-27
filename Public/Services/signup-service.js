var app = angular.module("RememberThisMoment")

app.service("signUpService", function($http){
	this.addUser = function(user){
		return $http({
			method: "POST",
			url: "http://localhost:9393/newUser",
			data: user
		})
	}
})