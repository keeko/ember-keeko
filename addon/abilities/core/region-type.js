import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-paginate');
	}),
	canRead: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-read');
	}),
	canReadCountry: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-country-relationship-read');
	}),
	canUpdateCountry: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-country-relationship-update');
	}),
	canAddCountry: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-country-relationship-add');
	}),
	canRemoveCountry: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-country-relationship-remove');
	}),
	canReadSubdivision: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-subdivision-relationship-read');
	}),
	canUpdateSubdivision: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-subdivision-relationship-update');
	}),
	canAddSubdivision: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-subdivision-relationship-add');
	}),
	canRemoveSubdivision: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-subdivision-relationship-remove');
	}),
	canReadArea: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-area-relationship-read');
	}),
	canUpdateArea: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_type-to-area-relationship-update');
	})
});
