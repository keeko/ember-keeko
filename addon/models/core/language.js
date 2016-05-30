import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
	alpha2: attr('string'),
	alpha3T: attr('string'),
	alpha3B: attr('string'),
	alpha3: attr('string'),
	macrolanguageStatus: attr('string'),
	name: attr('string'),
	nativeName: attr('string'),
	collate: attr('string'),
	subtag: attr('string'),
	prefix: attr('string'),
	sublanguages: hasMany('core/language'),
	parent: belongsTo('core/language', {inverse: null}),
	scope: belongsTo('core/language-scope'),
	type: belongsTo('core/language-type'),
	script: belongsTo('core/language-script'),
	family: belongsTo('core/language-family'),
	localizations: hasMany('core/localization')
});
