import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'continent-paginate');
	}),
	canRead: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'continent-read');
	}),
	canReadCountry: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'continent-to-country-relationship-read');
	}),
	canUpdateCountry: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'continent-to-country-relationship-update');
	}),
	canAddCountry: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'continent-to-country-relationship-add');
	}),
	canRemoveCountry: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'continent-to-country-relationship-remove');
	})
});
