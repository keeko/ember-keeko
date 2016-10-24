import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_type-paginate');
	}),
	canRead: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_type-read');
	}),
	canReadLanguage: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_type-to-language-relationship-read');
	}),
	canUpdateLanguage: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_type-to-language-relationship-update');
	}),
	canAddLanguage: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_type-to-language-relationship-add');
	}),
	canRemoveLanguage: Ember.computed('session.permissions', function() {
		return this.get('session').hasPermission('keeko/core', 'language_type-to-language-relationship-remove');
	})
});
