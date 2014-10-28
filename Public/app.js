var app = angular.module("RememberThisMoment", ["ngRoute"])

app.config(function($routeProvider){
	$routeProvider

	.when("/", {
		templateUrl: "Templates/main.html",
		controller: "loginCtrl"
	}).when("/signup", {
		templateUrl: "Templates/signup.html",
		controller: "signUpCtrl"
	}).when("/main", {
		templateUrl: "Templates/feed.html",
		controller: "feedCtrl"
	})
})
