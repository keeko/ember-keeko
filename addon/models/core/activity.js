import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
	verb: attr('string'),
	actor: belongsTo('core/user'),
	object: belongsTo('core/activity-object', {inverse: null}),
	target: belongsTo('core/activity-object', {inverse: null})
});
