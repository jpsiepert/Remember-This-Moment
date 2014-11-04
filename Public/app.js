var app = angular.module("RememberThisMoment", ["ngRoute", "ngCookies"])

app.run(function($rootScope, $location, $route, $cookieStore){
	$rootScope.$on("$routeChangeStart", function(evt, next, current){
		if($cookieStore.get("currentUser")){
			$rootScope.currentUser = $cookieStore.get("currentUser")
			//console.log($rootScope.currentUser)
		} else if(next.templateUrl === "Templates/signup.html"){
			$location.path("/signup")
		} else {
			$location.path("/")
		}
	})
})


app.config(function($routeProvider){
	$routeProvider

	.when("/", {
		templateUrl: "Templates/main.html",
		controller: "loginCtrl"
	}).when("/signup", {
		templateUrl: "Templates/signup.html",
		controller: "signUpCtrl"
	}).when("/main/:userid", {
		templateUrl: "Templates/feed.html",
		controller: "feedCtrl",
		// resolve: {
		// 	currentUser: function(loginService){
		// 		return loginService.getMyData;
		// 	}
		// }
	}).when("/edit/:userid", {
		templateUrl: "Templates/edit.html",
		controller: "editCtrl",
		// resolve: {
		// 	currentUser: function(loginService){
		// 		return loginService.getMyData;
		// 	}
		// }
	}).otherwise({
		redirectTo: "/"
	})
})


app.config(function($httpProvider){
	$httpProvider.interceptors.push(function($q, $location){
		return {
			"responseError": function(rejection){
				if(rejection.status === 401){
					$location.path("/")
				}
				return $q.reject(rejection)
			}
		}
	})
})