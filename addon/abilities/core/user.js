import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-paginate');
	}),
	canCreate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-create');
	}),
	canRead: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-read');
	}),
	canUpdate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-update');
	}),
	canDelete: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-delete');
	}),
	canReadSession: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-session-relationship-read');
	}),
	canUpdateSession: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-session-relationship-update');
	}),
	canAddSession: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-session-relationship-add');
	}),
	canRemoveSession: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-session-relationship-remove');
	}),
	canReadGroup: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-group-relationship-read');
	}),
	canUpdateGroup: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-group-relationship-update');
	}),
	canAddGroup: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-group-relationship-add');
	}),
	canRemoveGroup: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-group-relationship-remove');
	}),
	canReadActivity: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-activity-relationship-read');
	}),
	canUpdateActivity: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-activity-relationship-update');
	}),
	canAddActivity: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-activity-relationship-add');
	}),
	canRemoveActivity: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'user-to-activity-relationship-remove');
	})
});
