import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_area-paginate');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_area-read');
	}),
	canReadType: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_area-to-type-relationship-read');
	}),
	canUpdateType: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_area-to-type-relationship-update');
	}),
	canAddType: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_area-to-type-relationship-add');
	}),
	canRemoveType: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'region_area-to-type-relationship-remove');
	})
});
