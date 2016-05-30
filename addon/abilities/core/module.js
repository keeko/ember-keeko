import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'module-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'module-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'module-read');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'module-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'module-delete');
	}),
	canReadAction: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'module-to-action-relationship-read');
	}),
	canUpdateAction: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'module-to-action-relationship-update');
	}),
	canAddAction: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'module-to-action-relationship-add');
	}),
	canRemoveAction: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'module-to-action-relationship-remove');
	})
});
