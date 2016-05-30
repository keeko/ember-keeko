import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'extension-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'extension-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'extension-read');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'extension-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'extension-delete');
	})
});
