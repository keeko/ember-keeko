import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'action-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'action-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'action-read');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'action-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'action-delete');
	}),
	canReadModule: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-module-relationship-read');
	}),
	canUpdateModule: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-module-relationship-update');
	}),
	canReadGroup: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-group-relationship-read');
	}),
	canUpdateGroup: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-group-relationship-update');
	}),
	canAddGroup: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-group-relationship-add');
	}),
	canRemoveGroup: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-group-relationship-remove');
	}),
	canReadApi: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-api-relationship-read');
	}),
	canUpdateApi: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-api-relationship-update');
	}),
	canAddApi: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-api-relationship-add');
	}),
	canRemoveApi: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'action-to-api-relationship-remove');
	})
});
