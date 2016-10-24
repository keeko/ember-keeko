import Ember from 'ember';

export default Ember.Service.extend({
	store: Ember.inject.service(),
	session: Ember.inject.service(),

	systemPreferences: {},

	init() {
		this._super(...arguments);

		// load preferences when authenticated
		const session = this.get('session');
		session.addObserver('isAuthenticated', () => {
			if (session.get('isAuthenticated')) {
				this.get('store').query('core/preference', {
					filter: {
						moduleId: 0
					},
					page: {
						size: -1
					}
				}).then((preferences) => {
					let prefs = {};
					preferences.forEach((pref) => {
						prefs[pref.get('id')] = pref.get('value');
					});
					this.set('systemPreferences', prefs);
				}, () => {
					this.set('systemPreferences', {});
				});
			} else {
				this.set('systemPreferences', {});
			}
		});
	}
});
