import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
	className: attr('string'),
	name: attr('string'),
	title: attr('string'),
	description: attr('string'),
	installedVersion: attr('string'),
	applicationUris: hasMany('core/application-uri')
});
