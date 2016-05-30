import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-paginate');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-read');
	}),
	canReadCountry: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-country-relationship-read');
	}),
	canUpdateCountry: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-country-relationship-update');
	}),
	canAddCountry: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-country-relationship-add');
	}),
	canRemoveCountry: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-country-relationship-remove');
	}),
	canReadSubdivision: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-subdivision-relationship-read');
	}),
	canUpdateSubdivision: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-subdivision-relationship-update');
	}),
	canAddSubdivision: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-subdivision-relationship-add');
	}),
	canRemoveSubdivision: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-subdivision-relationship-remove');
	}),
	canReadArea: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-area-relationship-read');
	}),
	canUpdateArea: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-area-relationship-update');
	})
});
