//script.js

	// create the module and name it scotchApp
		// also include ngRoute for all the routing needs
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure the routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	//create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		//create message to display on the main page view
		$scope.message = 'Welcome to the main page! Feel free to look around.';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = "Look at this! This is my about page.";
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = "Contact Us... Oh wait, we don't have a contact form";
	});
