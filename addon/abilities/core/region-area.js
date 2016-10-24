import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_area-paginate');
	}),
	canRead: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_area-read');
	}),
	canReadType: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_area-to-type-relationship-read');
	}),
	canUpdateType: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_area-to-type-relationship-update');
	}),
	canAddType: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_area-to-type-relationship-add');
	}),
	canRemoveType: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'region_area-to-type-relationship-remove');
	})
});
