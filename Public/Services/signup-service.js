var app = angular.module("RememberThisMoment")

app.service("signUpService", function($http, $cookieStore){
	this.addUser = function(user){
		//debugger;
		//console.log(user)
		return $http({
			method: "POST",
			url: "/newUser",
			data: user
		}).then(function(newUser){
			//console.log("newUser", newUser)
			$cookieStore.put("currentUser", newUser.data[0]);
			//console.log(newUser.data[0]._id)
			return newUser.data[0]
			})

	}
})