import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
	httphost: attr('string'),
	basepath: attr('string'),
	secure: attr('boolean'),
	application: belongsTo('core/application'),
	localization: belongsTo('core/localization')
});
