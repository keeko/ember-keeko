import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	className: attr('string'),
	type: attr('string'),
	displayName: attr('string'),
	url: attr('string'),
	referenceId: attr('number'),
	version: attr('number'),
	extra: attr('string'),
	activities: hasMany('core/activity')
});
