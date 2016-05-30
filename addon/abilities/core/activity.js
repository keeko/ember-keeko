import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity-read');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity-delete');
	}),
	canReadActor: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity-to-actor-relationship-read');
	}),
	canUpdateActor: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity-to-actor-relationship-update');
	}),
	canReadObject: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity-to-object-relationship-read');
	}),
	canUpdateObject: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity-to-object-relationship-update');
	}),
	canReadTarget: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity-to-target-relationship-read');
	}),
	canUpdateTarget: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'activity-to-target-relationship-update');
	})
});
