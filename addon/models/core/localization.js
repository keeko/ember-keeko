import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
	name: attr('string'),
	locale: attr('string'),
	region: attr('string'),
	isDefault: attr('boolean'),
	localizations: hasMany('core/localization', {inverse: 'parent'}),
	parent: belongsTo('core/localization', {inverse: 'localizations'}),
	language: belongsTo('core/language'),
	extLang: belongsTo('core/language', {inverse: 'localizations'}),
	script: belongsTo('core/language-script', {inverse: 'localizations'}),
	languageVariants: hasMany('core/language-variant'),
	applicationUris: hasMany('core/application-uri')
});
