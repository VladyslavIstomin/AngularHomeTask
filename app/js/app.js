'use strict';

var videoApp = angular.module('videoApp', ['ngRoute', 'videoControllers']);

videoApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/login', {
				templateUrl: 'view/login.html',
				controller: 'loginCtrl'
			})
			.when('/authorization', {
				templateUrl: 'view/authorization.html',
				controller: 'authCtrl'
			})
			.when('/list', {
				templateUrl: 'view/video-list.html',
				controller: 'videoCatalogCtrl'
			})
			.otherwise({
				redirectTo: '/login'
			});
	}
]);

