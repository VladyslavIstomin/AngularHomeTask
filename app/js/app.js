(function () {
	'use strict';

	var videoApp = angular.module('videoApp', ['ui.router', 'loginModule', 'listModule']);

	videoApp.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/login');

			$stateProvider
				.state('login', {
					url: '/login',
					templateUrl: 'login/login.html',
					controller: 'ControllerLogin'
				})
				.state('list', {
					url: '/list',
					templateUrl: 'video-list/video-list.html',
					controller: 'ControllerList'
				})
		}
	]);
})();

