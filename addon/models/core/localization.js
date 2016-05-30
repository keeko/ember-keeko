import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
	name: attr('string'),
	locale: attr('string'),
	region: attr('string'),
	isDefault: attr('boolean'),
	localizations: hasMany('core/localization'),
	parent: belongsTo('core/localization', {inverse: null}),
	language: belongsTo('core/language', {inverse: null}),
	extLang: belongsTo('core/language', {inverse: null}),
	script: belongsTo('core/language-script'),
	languageVariants: hasMany('core/language-variant'),
	applicationUris: hasMany('core/application-uri')
});
