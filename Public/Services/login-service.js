var app = angular.module("RememberThisMoment")

app.service("loginService", function($http, $cookieStore){
	this.login = function(user){
		
		return $http({
					method: "POST",
					url: "/login",
					data: user
				}).then(function(user){
					$cookieStore.put('user', user.data)
					return user.data
				})
	}


});