import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'session-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'session-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'session-read');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'session-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'session-delete');
	}),
	canReadUser: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'session-to-user-relationship-read');
	}),
	canUpdateUser: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'session-to-user-relationship-update');
	})
});
