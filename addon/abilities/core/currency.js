import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'currency-paginate');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'currency-read');
	}),
	canReadCountry: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'currency-to-country-relationship-read');
	}),
	canUpdateCountry: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'currency-to-country-relationship-update');
	}),
	canAddCountry: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'currency-to-country-relationship-add');
	}),
	canRemoveCountry: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'currency-to-country-relationship-remove');
	})
});
