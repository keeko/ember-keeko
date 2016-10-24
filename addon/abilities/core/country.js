import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-paginate');
	}),
	canRead: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-read');
	}),
	canReadContinent: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-continent-relationship-read');
	}),
	canUpdateContinent: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-continent-relationship-update');
	}),
	canReadCurrency: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-currency-relationship-read');
	}),
	canUpdateCurrency: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-currency-relationship-update');
	}),
	canReadType: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-type-relationship-read');
	}),
	canUpdateType: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-type-relationship-update');
	}),
	canReadSubtype: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subtype-relationship-read');
	}),
	canUpdateSubtype: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subtype-relationship-update');
	}),
	canReadSubordinate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subordinate-relationship-read');
	}),
	canUpdateSubordinate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subordinate-relationship-update');
	}),
	canAddSubordinate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subordinate-relationship-add');
	}),
	canRemoveSubordinate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subordinate-relationship-remove');
	}),
	canReadCountry: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-country-relationship-read');
	}),
	canUpdateCountry: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-country-relationship-update');
	}),
	canReadSubdivision: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subdivision-relationship-read');
	}),
	canUpdateSubdivision: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subdivision-relationship-update');
	}),
	canAddSubdivision: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subdivision-relationship-add');
	}),
	canRemoveSubdivision: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'country-to-subdivision-relationship-remove');
	})
});
