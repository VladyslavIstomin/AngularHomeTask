(function() {
	'use strict';

	angular.module('app').service('serviceLogin', function() {
		this.login = false;

		this.invalid = false;

		this.getLoginStorage = function(storage) {
			var data = storage.get('isLogin');

			if(data) { return data; }
			return this.login;
		};

		this.setLoginStorage = function(storage) {
			storage.set('isLogin', this.login);
		};

		this.checkLogin = function(scope, state, login, password, storage) {
			if(login === 'test' && password === 'test') {
				this.login = true;
				this.invalid = false;

				this.setLoginStorage(storage);

				state.go('list');
			} else {
				this.invalid = true;

				scope.login = '';
				scope.password = '';
			}
		};

		this.logOut = function(state, storage) {
			this.login = false;

			this.setLoginStorage(storage);

			state.go('homePage');
		}

	})
})();