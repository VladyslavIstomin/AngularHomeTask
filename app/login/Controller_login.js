(function() {
	'use strict';

	var loginModule = angular.module('loginModule', []);

	loginModule.controller('controllerLogin', ['$scope', '$state', 'serviceLogin',
		function($scope, $state, $serviceLogin) {
			$scope.isInvalid = function() {
				return $serviceLogin.invalid;
			};

			$scope.onLogin = function() {
				$serviceLogin.checkLogin($scope, $state, $scope.login, $scope.password)
			}
		}
	]);
})();
