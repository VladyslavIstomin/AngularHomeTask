describe('Controller Login', function() {
	'use strict';

	var $scope, $rootScope, controller, $state;

	beforeEach(function () {
		module('loginModule');

		inject(function ($injector) {
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			$state = $injector.get('$state');
			controller = $injector.get('$controller')('controllerLogin', {$scope: $scope});
		})
	});

	it('should check method test', function() {
		expect($scope.test()).toBe(true);
	})

});
