var myApp = angular.module('myApp',['ngRoute','ngCookies']);
myApp.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});