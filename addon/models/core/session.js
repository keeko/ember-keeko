import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
	ip: attr('string'),
	userAgent: attr('string'),
	browser: attr('string'),
	device: attr('string'),
	os: attr('string'),
	location: attr('string'),
	createdAt: attr('date'),
	updatedAt: attr('date'),
	user: belongsTo('core/user', {inverse: 'sessions'})
});
