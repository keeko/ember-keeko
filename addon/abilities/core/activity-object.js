import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-paginate');
	}),
	canCreate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-create');
	}),
	canRead: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-read');
	}),
	canUpdate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-update');
	}),
	canDelete: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-delete');
	}),
	canReadActivity: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-to-activity-relationship-read');
	}),
	canUpdateActivity: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-to-activity-relationship-update');
	}),
	canAddActivity: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-to-activity-relationship-add');
	}),
	canRemoveActivity: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity_object-to-activity-relationship-remove');
	})
});
