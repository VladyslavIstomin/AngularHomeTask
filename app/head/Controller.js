(function() {
	'use strict';

	var headApp = angular.module('headApp', []);

	headApp.controller('controllerBase', ['$scope', '$state', 'serviceLogin',
		function($scope, $state, $serviceLogin) {
			$scope.isLogin = function() {
				return $serviceLogin.login;
			};

			$scope.logout = function() {
				$serviceLogin.logOut($state)
			};
		}
	]);
})();





