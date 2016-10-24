import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	userName: attr('string'),
	password: attr('string'),
	givenName: attr('string'),
	familyName: attr('string'),
	nickName: attr('string'),
	displayName: attr('string'),
	displayNameUserSelect: attr('string'),
	email: attr('string'),
	birth: attr('string'),
	sex: attr('number', {defaultValue: -1}),
	slug: attr('string'),
	passwordRecoverToken: attr('string'),
	passwordRecoverTime: attr('date'),
	createdAt: attr('date'),
	updatedAt: attr('date'),
	sessions: hasMany('core/session'),
	groups: hasMany('core/group'),
	activities: hasMany('core/activity')
});
