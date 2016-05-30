import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
	canPaginate: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'language_variant-paginate');
	}),
	canRead: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'language_variant-read');
	}),
	canReadLocalization: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'language_variant-to-localization-relationship-read');
	}),
	canUpdateLocalization: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'language_variant-to-localization-relationship-update');
	}),
	canAddLocalization: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'language_variant-to-localization-relationship-add');
	}),
	canRemoveLocalization: Ember.computed(function() {
		return this.get('session').hasPermission('keeko/core', 'language_variant-to-localization-relationship-remove');
	})
});
