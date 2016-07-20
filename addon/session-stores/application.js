import Ember from 'ember';
import Base from 'ember-simple-auth/session-stores/adaptive';

export default Base.extend({
	store: Ember.inject.service('store'),

	getToken() {
	    let value = document.cookie.match(new RegExp(`Keeko-Auth-Token=([^;]+)`)) || [];
	    return decodeURIComponent(value[1] || '');
	},

	restore() {
		const promise = this._super(...arguments);

		return new Ember.RSVP.Promise((resolve, reject) => {
			promise.then((value) => {
				if (Object.keys(value).length === 0 || 
						(value.authenticated && Object.keys(value.authenticated).length === 0)) {
					const token = this.getToken();
					if (!Ember.isEmpty(token)) {
						this.authenticateToken(token).then(function (value) {
							resolve({authenticated: {
								authenticator: "authenticator:keeko",
								data: value.data
							}});
						}, function() {
							resolve({});
						})
					} else {
						resolve({});
					}
				} else {
					resolve(promise);
				}
			});
		});
	},

	authenticateToken(token) {
		const adapter = this.get('store').adapterFor('application');

		return new Ember.RSVP.Promise(function (resolve, reject) {
			Ember.$.ajax(adapter.urlPrefix() + '/auth/session', {
				'method': 'GET',
				'dataType': 'json',
				'headers': {
					'Authorization': 'Bearer ' + token
				},
			}).done((response) => {
				resolve(response);
			}).fail((xhr) => {
				reject(xhr.responseJSON || xhr.responseText);
			});
		});
	}
});
