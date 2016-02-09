(function() {
	'use strict';

	var headApp = angular.module('headApp', []);

	headApp.controller('controllerBase', ['$scope', '$state', 'serviceLogin', 'localStorageService',
		function($scope, $state, $serviceLogin, $serviceLocalStorage) {
			$serviceLogin.setLoginStorage($serviceLocalStorage);

			$scope.isLogin = function() {
				return $serviceLogin.getLoginStorage($serviceLocalStorage);
			};

			$scope.logout = function() {
				$serviceLogin.logOut($state, $serviceLocalStorage)
			};
		}
	]);
})();





