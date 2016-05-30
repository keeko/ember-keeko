import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'language_family-paginate');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'language_family-read');
	}),
	canReadLanguage: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'language_family-to-language-relationship-read');
	}),
	canUpdateLanguage: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'language_family-to-language-relationship-update');
	}),
	canAddLanguage: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'language_family-to-language-relationship-add');
	}),
	canRemoveLanguage: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'language_family-to-language-relationship-remove');
	})
});
