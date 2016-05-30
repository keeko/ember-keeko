import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	numeric: attr('number'),
	alpha3: attr('string'),
	name: attr('string'),
	symbolLeft: attr('string'),
	symbolRight: attr('string'),
	decimalDigits: attr('number'),
	subDivisor: attr('number'),
	subSymbolLeft: attr('string'),
	subSymbolRight: attr('string'),
	countries: hasMany('core/country')
});
