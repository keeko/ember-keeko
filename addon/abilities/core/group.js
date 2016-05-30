import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'group-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'group-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'group-read');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'group-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'group-delete');
	}),
	canReadUser: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-user-relationship-read');
	}),
	canUpdateUser: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-user-relationship-update');
	}),
	canAddUser: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-user-relationship-add');
	}),
	canRemoveUser: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-user-relationship-remove');
	}),
	canReadAction: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-action-relationship-read');
	}),
	canUpdateAction: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-action-relationship-update');
	}),
	canAddAction: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-action-relationship-add');
	}),
	canRemoveAction: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-action-relationship-remove');
	})
});
