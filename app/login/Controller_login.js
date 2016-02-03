(function() {
	'use strict';

	var loginModule = angular.module('loginModule', []);

	loginModule.controller('ControllerLogin', ['$scope', '$location',
		function($scope, $location) {
			$scope.submitForm = function() {
				 var userLogin = {
					 login: $scope.login,
					 pas: $scope.password
				 };

				 $scope.login = '';
				 $scope.password = '';

				 $location.path('/list');
			 }
		}
	]);
})();
