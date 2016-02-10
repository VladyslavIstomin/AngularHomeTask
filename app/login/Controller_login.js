(function() {
	'use strict';

	var loginModule = angular.module('loginModule', []);

	loginModule.controller('controllerLogin', ['$scope', '$state', 'serviceLogin', 'localStorageService',
		function($scope, $state, $serviceLogin, $serviceLocalStorage) {
			$scope.isLogin = function() {
				return $serviceLogin.getLoginStorage($serviceLocalStorage);
			};

			$scope.isInvalid = function() {
				return $serviceLogin.invalid;
			};

			$scope.onLogin = function() {
				$serviceLogin.checkLogin($scope, $state, $scope.login, $scope.password, $serviceLocalStorage)
			};
		}
	]);
})();
