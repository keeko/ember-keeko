import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity-paginate');
	}),
	canCreate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity-create');
	}),
	canRead: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity-read');
	}),
	canUpdate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity-update');
	}),
	canDelete: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity-delete');
	}),
	canReadActor: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity-to-actor-relationship-read');
	}),
	canUpdateActor: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity-to-actor-relationship-update');
	}),
	canReadObject: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity-to-object-relationship-read');
	}),
	canUpdateObject: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity-to-object-relationship-update');
	}),
	canReadTarget: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity-to-target-relationship-read');
	}),
	canUpdateTarget: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'activity-to-target-relationship-update');
	})
});
