import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'subdivision-paginate');
	}),
	canRead: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'subdivision-read');
	}),
	canReadCountry: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'subdivision-to-country-relationship-read');
	}),
	canUpdateCountry: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'subdivision-to-country-relationship-update');
	}),
	canReadType: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'subdivision-to-type-relationship-read');
	}),
	canUpdateType: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'subdivision-to-type-relationship-update');
	})
});
