import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-paginate');
	}),
	canRead: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-read');
	}),
	canReadSublanguage: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-sublanguage-relationship-read');
	}),
	canUpdateSublanguage: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-sublanguage-relationship-update');
	}),
	canAddSublanguage: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-sublanguage-relationship-add');
	}),
	canRemoveSublanguage: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-sublanguage-relationship-remove');
	}),
	canReadParent: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-parent-relationship-read');
	}),
	canUpdateParent: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-parent-relationship-update');
	}),
	canReadScope: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-scope-relationship-read');
	}),
	canUpdateScope: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-scope-relationship-update');
	}),
	canReadType: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-type-relationship-read');
	}),
	canUpdateType: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-type-relationship-update');
	}),
	canReadScript: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-script-relationship-read');
	}),
	canUpdateScript: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-script-relationship-update');
	}),
	canReadFamily: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-family-relationship-read');
	}),
	canUpdateFamily: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-family-relationship-update');
	}),
	canReadLocalization: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-localization-relationship-read');
	}),
	canUpdateLocalization: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-localization-relationship-update');
	}),
	canAddLocalization: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-localization-relationship-add');
	}),
	canRemoveLocalization: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language-to-localization-relationship-remove');
	})
});
