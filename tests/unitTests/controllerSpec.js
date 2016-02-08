
describe('Controller To Do list', function() {

	beforeEach(module('app'));

	var $controller;

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

	describe('Login functionality', function () {
		it('', function () {
			var $scope = {};
			var controller = $controller('controllerLogin', { $scope: $scope });
		});
	});

});
