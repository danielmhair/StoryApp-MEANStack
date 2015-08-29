angular.module('MyApp', [
	'appRoutes', 
	'mainCtrl', 
	'authService', 
	'userCtrl', 
	'userService', 
	'storyService', 
	'storyCtrl', 
	'reverseDirectives'
	])
.config(function($httpProvider) {
	
	$httpProvider.interceptors.push('AuthInterceptor');

	
})