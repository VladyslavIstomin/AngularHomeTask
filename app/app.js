(function () {
	'use strict';

	angular
		.module('app', [
			'ui.router',
			'headApp',
			'loginModule',
			'listModule',
			'LocalStorageModule'
		])

		.config(['$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise('/login');

				$stateProvider
					.state('homePage', {
						url: '/login',
						templateUrl: 'login/login.html',
						controller: 'controllerLogin'
					})
					.state('list', {
						url: '/list',
						templateUrl: 'todo-list/todo-list.html',
						controller: 'controllerList'
					})
			}
		]);
})();

