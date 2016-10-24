import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-paginate');
	}),
	canCreate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-create');
	}),
	canRead: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-read');
	}),
	canUpdate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-update');
	}),
	canDelete: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-delete');
	}),
	canReadLocalization: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-localization-relationship-read');
	}),
	canUpdateLocalization: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-localization-relationship-update');
	}),
	canAddLocalization: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-localization-relationship-add');
	}),
	canRemoveLocalization: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-localization-relationship-remove');
	}),
	canReadParent: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-parent-relationship-read');
	}),
	canUpdateParent: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-parent-relationship-update');
	}),
	canReadLanguage: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-language-relationship-read');
	}),
	canUpdateLanguage: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-language-relationship-update');
	}),
	canReadExtLang: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-ext_lang-relationship-read');
	}),
	canUpdateExtLang: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-ext_lang-relationship-update');
	}),
	canReadScript: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-script-relationship-read');
	}),
	canUpdateScript: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-script-relationship-update');
	}),
	canReadLanguageVariant: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-language_variant-relationship-read');
	}),
	canUpdateLanguageVariant: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-language_variant-relationship-update');
	}),
	canAddLanguageVariant: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-language_variant-relationship-add');
	}),
	canRemoveLanguageVariant: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-language_variant-relationship-remove');
	}),
	canReadApplicationUri: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-application_uri-relationship-read');
	}),
	canUpdateApplicationUri: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-application_uri-relationship-update');
	}),
	canAddApplicationUri: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-application_uri-relationship-add');
	}),
	canRemoveApplicationUri: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-application_uri-relationship-remove');
	})
});
