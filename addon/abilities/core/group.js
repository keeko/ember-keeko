import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'group-paginate');
	}),
	canCreate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'group-create');
	}),
	canRead: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'group-read');
	}),
	canUpdate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'group-update');
	}),
	canDelete: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'group-delete');
	}),
	canReadUser: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-user-relationship-read');
	}),
	canUpdateUser: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-user-relationship-update');
	}),
	canAddUser: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-user-relationship-add');
	}),
	canRemoveUser: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-user-relationship-remove');
	}),
	canReadAction: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-action-relationship-read');
	}),
	canUpdateAction: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-action-relationship-update');
	}),
	canAddAction: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-action-relationship-add');
	}),
	canRemoveAction: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'group-to-action-relationship-remove');
	})
});
