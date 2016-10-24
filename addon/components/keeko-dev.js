import Ember from 'ember';
import layout from '../templates/components/keeko-dev';
import config from 'ember-get-config';

export default Ember.Component.extend({
	layout,
	session: Ember.inject.service('session'),
	brand: 'Index',

	isDevelopment: Ember.computed(function () {
		return config.environment === 'development';
	}),

	actions: {
		login() {
			let { login, password } = this.getProperties('login', 'password');
			this.get('session').authenticate('authenticator:keeko', login, password).catch(() => {
				// console.log(reason);
			});
		},

		logout() {
			this.get('session').invalidate();
		}
	}
});
