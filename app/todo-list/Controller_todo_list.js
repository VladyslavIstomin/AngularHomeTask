(function () {
	'use strict';

	var listModule = angular.module('listModule', []);

	listModule.controller('controllerList', ['$scope', 'serviceTodo',
		function ($scope, $serviceTodo) {
			$scope.todoList = $serviceTodo.todoList;

			$scope.createNote = function() {
				$serviceTodo.addNote($scope);
			};

			$scope.deleteNote = function() {
				$serviceTodo.deleteNote();
				$scope.todoList = $serviceTodo.todoList;
			}
		}
	]);
})();