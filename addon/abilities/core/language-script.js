import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_script-paginate');
	}),
	canRead: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_script-read');
	}),
	canReadLanguage: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_script-to-language-relationship-read');
	}),
	canUpdateLanguage: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_script-to-language-relationship-update');
	}),
	canAddLanguage: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_script-to-language-relationship-add');
	}),
	canRemoveLanguage: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_script-to-language-relationship-remove');
	}),
	canReadLocalization: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_script-to-localization-relationship-read');
	}),
	canUpdateLocalization: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_script-to-localization-relationship-update');
	}),
	canAddLocalization: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_script-to-localization-relationship-add');
	}),
	canRemoveLocalization: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_script-to-localization-relationship-remove');
	})
});
