describe('Controller Login', function() {
	'use strict';

	var $scope, $rootScope, controller, $state, $service, $serviceStorage;
	var state = 'list';

	beforeEach(function () {
		module('app');
		module('loginModule');

		inject(function ($injector) {
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			$service = $injector.get('serviceLogin');
			$serviceStorage = $injector.get('localStorageService');
			$state = $injector.get('$state');
			controller = $injector.get('$controller')('controllerLogin', {$scope: $scope});
		});

		$serviceStorage.clearAll();
	});

	it('should check is log in user', function() {
		expect($scope.isLogin()).toBeFalsy();
	});

	it('should check is invalid user', function() {
		expect($scope.isInvalid()).toBeFalsy();
	});

	it('should login user', function() {
		$scope.login = 'test';
		$scope.password = 'test';

		$scope.onLogin();
		expect($scope.isLogin()).toBeTruthy();
		expect($scope.isInvalid()).toBeFalsy();
	});

	it('should redirect to list page', function() {
		$scope.login = 'test';
		$scope.password = 'test';

		$scope.onLogin();
		expect($state.href(state)).toEqual('#/list');
	});

	it('should not login user', function() {
		$scope.login = 'else';
		$scope.password = 'else';

		$scope.onLogin();

		expect($scope.isLogin()).toBeFalsy();
		expect($scope.isInvalid()).toBeTruthy();
		expect($scope.login.length).toBe(0);
		expect($scope.password.length).toBe(0);
	});
});
