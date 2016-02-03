(function() {
	'use strict';

	angular.module('videoApp').controller('ControllerBase', ['$scope', '$state',
		function($scope, $state) {
			$state.go('homePage')
		}
	])

})();





