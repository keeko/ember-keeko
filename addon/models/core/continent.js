import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	parentId: attr('number'),
	numeric: attr('number'),
	name: attr('string'),
	countries: hasMany('core/country')
});
