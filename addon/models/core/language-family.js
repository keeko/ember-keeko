import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	parentId: attr('number'),
	alpha3: attr('string'),
	name: attr('string'),
	languages: hasMany('core/language')
});
