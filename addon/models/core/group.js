import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	ownerId: attr('number'),
	name: attr('string'),
	isGuest: attr('boolean'),
	isDefault: attr('boolean'),
	isActive: attr('boolean', {defaultValue: true}),
	isSystem: attr('boolean', {defaultValue: false}),
	createdAt: attr('date'),
	updatedAt: attr('date'),
	users: hasMany('core/user'),
	actions: hasMany('core/action')
});
