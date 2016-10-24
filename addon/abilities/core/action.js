import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'action-paginate');
	}),
	canCreate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'action-create');
	}),
	canRead: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'action-read');
	}),
	canUpdate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'action-update');
	}),
	canDelete: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'action-delete');
	}),
	canReadModule: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-module-relationship-read');
	}),
	canUpdateModule: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-module-relationship-update');
	}),
	canReadGroup: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-group-relationship-read');
	}),
	canUpdateGroup: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-group-relationship-update');
	}),
	canAddGroup: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-group-relationship-add');
	}),
	canRemoveGroup: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-group-relationship-remove');
	}),
	canReadApi: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-api-relationship-read');
	}),
	canUpdateApi: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-api-relationship-update');
	}),
	canAddApi: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-api-relationship-add');
	}),
	canRemoveApi: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-api-relationship-remove');
	})
});
