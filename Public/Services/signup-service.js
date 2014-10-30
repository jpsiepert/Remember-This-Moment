var app = angular.module("RememberThisMoment")

app.service("signUpService", function($http, $cookieStore){
	this.addUser = function(user){
		//debugger;
		return $http({
			method: "POST",
			url: "/newUser",
			data: user
		})
			// $cookieStore.put("user", user.data)
			// return user.data

	}
})