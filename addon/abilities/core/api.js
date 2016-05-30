import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'api-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'api-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'api-read');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'api-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'api-delete');
	}),
	canReadAction: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'api-to-action-relationship-read');
	}),
	canUpdateAction: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'api-to-action-relationship-update');
	})
});
