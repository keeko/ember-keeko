import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	numeric: attr('number'),
	alpha2: attr('string'),
	alpha3: attr('string'),
	shortName: attr('string'),
	ioc: attr('string'),
	tld: attr('string'),
	phone: attr('string'),
	capital: attr('string'),
	postalCodeFormat: attr('string'),
	postalCodeRegex: attr('string'),
	formalName: attr('string'),
	formalNativeName: attr('string'),
	shortNativeName: attr('string'),
	bboxSwLat: attr('number'),
	bboxSwLng: attr('number'),
	bboxNeLat: attr('number'),
	bboxNeLng: attr('number'),
	continent: belongsTo('core/continent', {inverse: 'countries'}),
	currency: belongsTo('core/currency', {inverse: 'countries'}),
	type: belongsTo('core/region-type'),
	subtype: belongsTo('core/region-type', {inverse: 'countries'}),
	subordinates: hasMany('core/country', {inverse: 'country'}),
	country: belongsTo('core/country', {inverse: 'subordinates'}),
	subdivisions: hasMany('core/subdivision')
});
