var app = angular.module("RememberThisMoment", ["ngRoute"])

app.config(function($routeProvider){
	$routeProvider

	.when("/", {
		templateUrl: "Templates/main.html",
		controller: "mainCtrl"
	}).when("/signup", {
		templateUrl: "Templates/signup.html"
	})
})
