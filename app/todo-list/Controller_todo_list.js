(function () {
	'use strict';

	angular
		.module('listModule', [])
		.controller('controllerList', ['$scope', 'serviceTodo', 'localStorageService',
			function ($scope, $serviceTodo, $localStorageService) {
				if($localStorageService.isSupported) {
					$serviceTodo.getTodoList($localStorageService);
					$scope.todoList = $serviceTodo.todoList;

					$scope.createNote = function() {
						$serviceTodo.addNote($scope, $localStorageService);
					};

					$scope.deleteNote = function() {
						$serviceTodo.deleteNote($localStorageService);
						$scope.todoList = $serviceTodo.todoList;
					}
				} else {
					throw Error('Local storage is not supported');
				}
			}
		]);
})();