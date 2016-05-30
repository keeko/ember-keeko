import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-paginate');
	}),
	canCreate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-create');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-read');
	}),
	canUpdate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-update');
	}),
	canDelete: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-delete');
	}),
	canReadLocalization: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-localization-relationship-read');
	}),
	canUpdateLocalization: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-localization-relationship-update');
	}),
	canAddLocalization: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-localization-relationship-add');
	}),
	canRemoveLocalization: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-localization-relationship-remove');
	}),
	canReadParent: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-parent-relationship-read');
	}),
	canUpdateParent: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-parent-relationship-update');
	}),
	canReadLanguage: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-language-relationship-read');
	}),
	canUpdateLanguage: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-language-relationship-update');
	}),
	canReadExtLang: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-ext_lang-relationship-read');
	}),
	canUpdateExtLang: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-ext_lang-relationship-update');
	}),
	canReadScript: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-script-relationship-read');
	}),
	canUpdateScript: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-script-relationship-update');
	}),
	canReadLanguageVariant: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-language_variant-relationship-read');
	}),
	canUpdateLanguageVariant: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-language_variant-relationship-update');
	}),
	canAddLanguageVariant: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-language_variant-relationship-add');
	}),
	canRemoveLanguageVariant: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-language_variant-relationship-remove');
	}),
	canReadApplicationUri: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-application_uri-relationship-read');
	}),
	canUpdateApplicationUri: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-application_uri-relationship-update');
	}),
	canAddApplicationUri: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-application_uri-relationship-add');
	}),
	canRemoveApplicationUri: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'localization-to-application_uri-relationship-remove');
	})
});
