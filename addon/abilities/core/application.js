import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'application-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'application-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'application-read');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'application-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'application-delete');
	}),
	canReadApplicationUri: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'application-to-application_uri-relationship-read');
	}),
	canUpdateApplicationUri: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'application-to-application_uri-relationship-update');
	}),
	canAddApplicationUri: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'application-to-application_uri-relationship-add');
	}),
	canRemoveApplicationUri: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'application-to-application_uri-relationship-remove');
	})
});
