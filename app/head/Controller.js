(function() {
	'use strict';

	angular
		.module('headApp', [])
		.controller('controllerBase', ['$state', 'serviceLogin', 'localStorageService',
			function($state, $serviceLogin, $serviceLocalStorage) {
				var vm = this;

				vm.isLogin = function() {
					return $serviceLogin.getLoginStorage($serviceLocalStorage);
				};

				vm.logout = function() {
					$serviceLogin.logOut($state, $serviceLocalStorage)
				};
			}
		]);
})();





