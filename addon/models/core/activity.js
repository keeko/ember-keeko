import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
	verb: attr('string'),
	createdAt: attr('date'),
	updatedAt: attr('date'),
	actor: belongsTo('core/user', {inverse: 'activities'}),
	object: belongsTo('core/activity-object'),
	target: belongsTo('core/activity-object', {inverse: 'activities'})
});
