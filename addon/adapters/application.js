import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from 'ember-get-config';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
	authorizer: 'authorizer:keeko',
	host: Ember.computed(function() {
		if (config.keeko && config.keeko.api) {
			return config.keeko.api;
		}
		return '/';
	})
});
