(function() {
	'use strict';

	angular
		.module('loginModule', [])
		.controller('controllerLogin', ['$scope', '$state', 'serviceLogin', 'localStorageService',
			function($scope, $state, $serviceLogin, $serviceLocalStorage) {
				$scope.isLogin = function() {
					return $serviceLogin.getLoginStorage($serviceLocalStorage);
				};

				$scope.isInvalid = function() {
					return $serviceLogin.invalid;
				};

				$scope.onLogin = function() {
					if($serviceLocalStorage.get('isLogin')) {
						$state.go('list');
					} else {
						$serviceLogin.checkLogin($scope, $state, $scope.login, $scope.password, $serviceLocalStorage);
					}
				};
			}
		]);
})();
