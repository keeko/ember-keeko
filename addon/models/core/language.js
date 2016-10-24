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
	sublanguages: hasMany('core/language', {inverse: 'parent'}),
	parent: belongsTo('core/language', {inverse: 'sublanguages'}),
	scope: belongsTo('core/language-scope', {inverse: 'languages'}),
	type: belongsTo('core/language-type', {inverse: 'languages'}),
	script: belongsTo('core/language-script', {inverse: 'languages'}),
	family: belongsTo('core/language-family', {inverse: 'languages'}),
	localizations: hasMany('core/localization')
});
