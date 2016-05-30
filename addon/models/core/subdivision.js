import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
	code: attr('string'),
	name: attr('string'),
	nativeName: attr('string'),
	altNames: attr('string'),
	parentId: attr('number'),
	country: belongsTo('core/country'),
	type: belongsTo('core/region-type')
});
