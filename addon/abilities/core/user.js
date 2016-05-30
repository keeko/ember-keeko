import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-read');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-delete');
	}),
	canReadSession: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-session-relationship-read');
	}),
	canUpdateSession: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-session-relationship-update');
	}),
	canAddSession: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-session-relationship-add');
	}),
	canRemoveSession: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-session-relationship-remove');
	}),
	canReadGroup: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-group-relationship-read');
	}),
	canUpdateGroup: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-group-relationship-update');
	}),
	canAddGroup: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-group-relationship-add');
	}),
	canRemoveGroup: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-group-relationship-remove');
	}),
	canReadActivity: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-activity-relationship-read');
	}),
	canUpdateActivity: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-activity-relationship-update');
	}),
	canAddActivity: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-activity-relationship-add');
	}),
	canRemoveActivity: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-activity-relationship-remove');
	})
});
