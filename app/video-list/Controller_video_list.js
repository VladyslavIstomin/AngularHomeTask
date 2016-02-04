(function () {
	'use strict';

	var listModule = angular.module('listModule', []);

	listModule.controller('controllerList', ['$scope', '$http',
		function ($scope, $http) {
			$http({method: 'GET', url: 'db/videos.json'}).success(function(data) {
					$scope.videoList = data;
				})
				.error(function(data) {
					console.log(data);
				})
		}
	]);
})();