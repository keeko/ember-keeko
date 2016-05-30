import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-read');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-delete');
	}),
	canReadActivity: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-to-activity-relationship-read');
	}),
	canUpdateActivity: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-to-activity-relationship-update');
	}),
	canAddActivity: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-to-activity-relationship-add');
	}),
	canRemoveActivity: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-to-activity-relationship-remove');
	})
});
