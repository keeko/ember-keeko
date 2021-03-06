import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'application_uri-paginate');
	}),
	canCreate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'application_uri-create');
	}),
	canRead: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'application_uri-read');
	}),
	canUpdate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'application_uri-update');
	}),
	canDelete: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'application_uri-delete');
	}),
	canReadApplication: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'application_uri-to-application-relationship-read');
	}),
	canUpdateApplication: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'application_uri-to-application-relationship-update');
	}),
	canReadLocalization: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'application_uri-to-localization-relationship-read');
	}),
	canUpdateLocalization: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'application_uri-to-localization-relationship-update');
	})
});
