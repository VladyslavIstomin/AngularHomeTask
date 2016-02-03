'use strict';

var videoControllers = angular.module('videoControllers', []);

videoControllers.controller('loginCtrl', ['$scope', '$location',
	function($scope, $location) {
		$scope.logIn = function() {
			$location.path('/authorization');
		}
	}
]);

videoControllers.controller('authCtrl', ['$scope', '$location',
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

videoControllers.controller('videoCatalogCtrl', ['$scope', '$http',
	function ($scope, $http) {
		$http({method: 'GET', url: 'db/videos.json'}).success(function(data) {
			$scope.videoList = data;
		})
		.error(function(data) {
			console.log(data);
		})
	}
]);


