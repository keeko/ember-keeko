import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	alpha4: attr('string'),
	numeric: attr('number'),
	name: attr('string'),
	alias: attr('string'),
	direction: attr('string'),
	languages: hasMany('core/language'),
	localizations: hasMany('core/localization')
});
