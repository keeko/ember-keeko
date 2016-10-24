import Ember from 'ember';
import DS from 'ember-data';
import SessionService from 'ember-simple-auth/services/session';

export default SessionService.extend({
	store: Ember.inject.service(),
	permissions: [],

	init() {
		this._super(...arguments);

		const session = this.get('session');
		session.addObserver('isAuthenticated', () => {
			if (session.get('isAuthenticated')) {
				// read permissions
				const data = this.get('data.authenticated.data');
				if (!Ember.isEmpty(data)) {
					const adapter = this.get('store').adapterFor('application');
					const bearer = data.id ? data.id : null;
					if (bearer === null) {
						return;
					}

					Ember.$.ajax(adapter.urlPrefix() + '/auth/permissions', {
						'method': 'GET',
						'headers': {
							'Authorization': 'Bearer ' + bearer
						},
						'dataType': 'json'
					}).done((response) => {
						this.set('permissions', response.data.attributes);
					});
				}
			} else {
				this.set('permissions', []);
			}
		});
	},

	hasPermission (moduleName, actionName) {
		return this.permissions[moduleName] && this.permissions[moduleName].indexOf(actionName) !== -1;
	},

 	user: Ember.computed('data.authenticated.data.attributes.user-id', 'isAuthenticated', function() {
		const userId = this.get('data.authenticated.data.attributes.user-id');
		if (this.get('isAuthenticated') && !Ember.isEmpty(userId)) {
			return DS.PromiseObject.create({
				promise: this.get('store').findRecord('core/user', userId)
			});
		}
 	})
});
