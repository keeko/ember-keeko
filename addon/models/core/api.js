import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
	route: attr('string'),
	method: attr('string'),
	requiredParams: attr('string'),
	action: belongsTo('core/action')
});
