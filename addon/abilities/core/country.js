import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-paginate');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-read');
	}),
	canReadContinent: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-continent-relationship-read');
	}),
	canUpdateContinent: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-continent-relationship-update');
	}),
	canReadCurrency: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-currency-relationship-read');
	}),
	canUpdateCurrency: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-currency-relationship-update');
	}),
	canReadType: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-type-relationship-read');
	}),
	canUpdateType: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-type-relationship-update');
	}),
	canReadSubtype: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subtype-relationship-read');
	}),
	canUpdateSubtype: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subtype-relationship-update');
	}),
	canReadSubordinate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subordinate-relationship-read');
	}),
	canUpdateSubordinate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subordinate-relationship-update');
	}),
	canAddSubordinate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subordinate-relationship-add');
	}),
	canRemoveSubordinate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subordinate-relationship-remove');
	}),
	canReadCountry: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-country-relationship-read');
	}),
	canUpdateCountry: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-country-relationship-update');
	}),
	canReadSubdivision: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subdivision-relationship-read');
	}),
	canUpdateSubdivision: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subdivision-relationship-update');
	}),
	canAddSubdivision: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subdivision-relationship-add');
	}),
	canRemoveSubdivision: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subdivision-relationship-remove');
	})
});
