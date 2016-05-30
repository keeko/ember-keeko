import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
	name: attr('string'),
	countries: hasMany('core/country'),
	subdivisions: hasMany('core/subdivision'),
	area: belongsTo('core/region-area')
});
