(function() {
	'use strict';

	angular.module('app').service('serviceLogin', function() {
		this.login = false;

		this.invalid = false;

		this.checkLogin = function(scope, state, login, password) {
			if(login === 'test' && password === 'test') {
				this.login = true;
				this.invalid = false;

				state.go('list');

			} else {
				this.invalid = true;

				scope.login = '';
				scope.password = '';
			}
		};

		this.logOut = function(state) {
			this.login = false;

			state.go('homePage');
		}

	})
})();