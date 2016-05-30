import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	className: attr('string'),
	activatedVersion: attr('string'),
	defaultAction: attr('string'),
	slug: attr('string'),
	api: attr('boolean'),
	name: attr('string'),
	title: attr('string'),
	description: attr('string'),
	installedVersion: attr('string'),
	actions: hasMany('core/action')
});
