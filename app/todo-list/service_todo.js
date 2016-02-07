(function() {
	'use strict';

	angular.module('app').factory('serviceTodo', function() {
		return {
			todoList: [],

			getTodoList: function(storage) {
				var data = storage.get('Data');

				if(data) this.todoList = data;
			},

			addNote: function(scope, storage) {
				this.todoList.push({text: scope.todoInput, checked: false});
				storage.set('Data', this.todoList);
				scope.todoInput = '';
			},

			deleteNote: function(storage) {
				var todoList = [];

				angular.forEach(this.todoList, function(val, i) {
					if(!val.checked) {
						todoList.push(val);
					}
				});
				this.todoList = todoList;
				storage.set('Data', this.todoList);
			}
		}
	})
})();