var app = angular.module("RememberThisMoment", ["ngRoute", "ngCookies"])

app.run(function($rootScope, $location, $route, $cookieStore){
	$rootScope.$on("$routeChangeStart", function(evt, next, current){
		if($cookieStore.get("user")){
			$rootScope.user = $cookieStore.get("user")
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
		resolve: {
			user: function(loginService){
				return loginService.getMyData;
			}
		}
	}).when("/edit", {
		templateUrl: "/Templates.edit.html",
		controller: "editCtrl"
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