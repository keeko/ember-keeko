import Base from 'ember-simple-auth/authenticators/base';
import Ember from 'ember';

export default Base.extend({
	session: Ember.inject.service('session'),
	store: Ember.inject.service('store'),

	restore(data) {
		const id = data.data && data.data.id ? data.data.id : null;
		const adapter = this.get('store').adapterFor('application');
		const self = this;

		return new Ember.RSVP.Promise(function (resolve, reject) {
			if (id === null) {
				reject('No auth data available');
			}
			Ember.$.ajax(adapter.urlPrefix() + '/auth/session', {
				'method': 'GET',
				'headers': {
					'Authorization': 'Bearer ' + id
				},
				'dataType': 'json'
			}).done((response) => {
				resolve(response);
				self.get('session').updatePermissions(response.data);
			}).fail((xhr) => {
				reject(xhr.responseJSON || xhr.responseText);
			});
		});
 	},

	authenticate(login, password) {
		const adapter = this.get('store').adapterFor('application');

		return new Ember.RSVP.Promise(function (resolve, reject) {
			Ember.$.ajax(adapter.urlPrefix() + '/auth/session', {
				'method': 'POST',
				'dataType': 'json',
				'data': JSON.stringify({
					'data': {
						'attributes': {
							'login': login,
							'password': password
						}
					}
				})
			}).done((response) => {
				resolve(response);
			}).fail((xhr) => {
				reject(xhr.responseJSON || xhr.responseText);
			});
		});
	},

	invalidate(data) {
		const id = data.data && data.data.id ? data.data.id : null;
		const adapter = this.get('store').adapterFor('application');

		return new Ember.RSVP.Promise(function (resolve, reject) {
			if (id === null) {
				reject('No auth data available');
			}
			Ember.$.ajax(adapter.urlPrefix() + '/auth/session', {
				'method': 'delete',
				'headers': {
					'Authorization': 'Bearer ' + id
				},
				'dataType': 'json'
			}).done(() => {
				resolve();
			}).fail((xhr) => {
				reject(xhr.responseJSON || xhr.responseText);
			});
		});
	}
});
