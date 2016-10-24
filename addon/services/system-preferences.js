import Ember from 'ember';

export default Ember.Service.extend({
	preferences: Ember.inject.service(),

	LOGIN_USERNAME: 'username',
	LOGIN_EMAIL: 'email',
	LOGIN_USERNAME_EMAIL: 'username_email',

	DISPLAY_USERNAME: 'username',
	DISPLAY_NICKNAME: 'nickname',
	DISPLAY_GIVENFAMILYNAME: 'given_family',
	DISPLAY_FAMILYGIVENNAME: 'family_given',
	DISPLAY_USERSELECT: 'user_select',

	VALUE_REQUIRED: 'required',
	VALUE_OPTIONAL: 'optional',
	VALUE_NONE: 'none',

	NORMALIZE_TITLECASE: 'titlecase',
	NORMALIZE_UPPERCASE: 'uppercase',
	NORMALIZE_LOWERCASE: 'lowercase',

	platformName: Ember.computed('preferences.systemPreferences.platform_name', function () {
		return this.get('preferences.systemPreferences.platform_name') || '';
	}),

	platformEmail: Ember.computed('preferences.systemPreferences.platform_email', function () {
		return this.get('preferences.systemPreferences.platform_email') || '';
	}),

	version: Ember.computed('preferences.systemPreferences.version', function () {
		return this.get('preferences.systemPreferences.version') || '';
	}),

	rootUrl: Ember.computed('preferences.systemPreferences.root_url', function () {
		return this.get('preferences.systemPreferences.root_url') || '';
	}),

	accountUrl: Ember.computed('preferences.systemPreferences.account_url', function () {
		return this.get('preferences.systemPreferences.account_url') || '';
	}),

	developerUrl: Ember.computed('preferences.systemPreferences.developer_url', function () {
		return this.get('preferences.systemPreferences.developer_url') || '';
	}),

	apiUrl: Ember.computed('preferences.systemPreferences.api_url', function () {
		return this.get('preferences.systemPreferences.api_url') || '';
	}),

	apiVersion: Ember.computed('preferences.systemPreferences.api_version', function () {
		return this.get('preferences.systemPreferences.api_version') || '';
	}),

	userLogin: Ember.computed('preferences.systemPreferences.user_login', function () {
		return this.get('preferences.systemPreferences.user_login') || '';
	}),

	userEmail: Ember.computed('preferences.systemPreferences.user_email', function () {
		return this.get('preferences.systemPreferences.user_email') || '';
	}),

	userNames: Ember.computed('preferences.systemPreferences.user_names', function () {
		return this.get('preferences.systemPreferences.user_names') || '';
	}),

	userNickname: Ember.computed('preferences.systemPreferences.user_nickname', function () {
		return this.get('preferences.systemPreferences.user_nickname') || '';
	}),

	userBirth: Ember.computed('preferences.systemPreferences.user_birth', function () {
		return this.get('preferences.systemPreferences.user_birth') || '';
	}),

	userSex: Ember.computed('preferences.systemPreferences.user_sex', function () {
		return this.get('preferences.systemPreferences.user_sex') || '';
	}),

	userDisplayName: Ember.computed('preferences.systemPreferences.user_display_name', function () {
		return this.get('preferences.systemPreferences.user_display_name') || '';
	}),

	userDisplayOptUsername: Ember.computed('preferences.systemPreferences.user_display_opt_username', function () {
		return this.get('preferences.systemPreferences.user_display_opt_username') || '';
	}),

	userDisplayOptNickname: Ember.computed('preferences.systemPreferences.user_display_opt_nickname', function () {
		return this.get('preferences.systemPreferences.user_display_opt_nickname') || '';
	}),

	userDisplayOptGivenFamilyName: Ember.computed('preferences.systemPreferences.user_display_opt_givenfamilyname', function () {
		return this.get('preferences.systemPreferences.user_display_opt_givenfamilyname') || '';
	}),

	userDisplayOptFamilyGivenName: Ember.computed('preferences.systemPreferences.user_display_opt_familygivenname', function () {
		return this.get('preferences.systemPreferences.user_display_opt_familygivenname') || '';
	}),

	paginationSize: Ember.computed('preferences.systemPreferences.pagination_size', function () {
		return this.get('preferences.systemPreferences.pagination_size') || '';
	})
});
