var app = angular.module("RememberThisMoment")

app.service("loginService", function($http){
	this.login = function(user){
		
		return $http({
					method: "POST",
					url: "/login",
					data: user
				})
	}

});