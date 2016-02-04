(function () {
	'use strict';

	var moduleApp = angular.module('app', ['ui.router', 'headApp', 'loginModule', 'listModule']);

	moduleApp.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('login');

			$stateProvider
				.state('homePage', {
					url: '/login',
					templateUrl: 'login/login.html',
					controller: 'controllerLogin'
				})
				.state('list', {
					url: '/list',
					templateUrl: 'video-list/video-list.html',
					controller: 'controllerList'
				})
		}
	]);
})();

