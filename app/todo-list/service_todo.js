(function() {
	'use strict';

	angular.module('app').factory('serviceTodo', function() {
		return {
			todoList: [
				{text: 'Creadrerg', checked: true},
				{text: 'Creadrerg rf rf 3', checked: false}
			],

			addNote: function(scope) {
				this.todoList.push({text: scope.todoInput, checked: false});
				scope.todoInput = '';
			},

			deleteNote: function() {
				var todoList = [];
				angular.forEach(this.todoList, function(val, i) {
					if(!val.checked) {
						todoList.push(val);
					}
				});
				this.todoList = todoList;
			}
		}
	})
})();