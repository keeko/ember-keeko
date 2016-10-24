import ServerModelsTable from 'ember-models-table/components/models-table-server-paginated';
import Ember from 'ember';

export default ServerModelsTable.extend({

	// settings
	pageSize: 50,
	metaItemsCountProperty: 'total',

	filterQueryParameters: {
		globalFilter: 'filter[search]',
		sort: 'sort',
		// sortDirection: 'sortDirection',
		page: 'page[number]',
		pageSize: 'page[size]'
	},

	// sorting
	sortingWrapper(query, sortBy, sortDirection) {
		let sort = sortBy;
		if (sortDirection === 'DESC') {
			sort = '-' + sortBy;
		}
	    query[Ember.get(this, 'filterQueryParameters.sort')] = sort;

	    return query;
	},

	// classes and icons
	customClasses: Ember.Object.create({
		"table": "table table-striped table-bordered table-sm",
		"columnsDropdownButtonWrapper": "dropdown",
		"buttonDefault": "btn btn-secondary",
	}),

	customIcons: Ember.Object.create({
		"sort-asc": "fa fa-caret-up",
		"sort-desc": "fa fa-caret-down",
		"column-visible": "fa fa-check-square-o",
		"column-hidden": "fa fa-square-o",
		"nav-first": "fa fa-angle-double-left",
		"nav-prev": "fa fa-angle-left",
		"nav-next": "fa fa-angle-right",
		"nav-last": "fa fa-angle-double-right",
		"caret": "caret"
	}),

	// templates
	columnsDropdownTemplate: 'components/keeko-admin-table/columns-dropdown',
	headerFilteringRowTemplate: 'components/keeko-admin-table/header-row-filtering',
	globalFilterTemplate: 'components/keeko-admin-table/global-filter',
	pageSizeTemplate: 'components/keeko-admin-table/page-size',


	// bugfixes:
	arrangedContentLength: Ember.computed('filteredContent.meta', function() {
		var itemsCountProperty = Ember.get(this, 'metaItemsCountProperty');
		var meta = Ember.get(this, 'filteredContent.meta') ||  {};
		return Ember.get(meta, itemsCountProperty) || 0;
	}),

	pagesCount: Ember.computed('filteredContent.meta', function() {
		var pagesCountProperty = Ember.get(this, 'metaPagesCountProperty');
		var meta = Ember.get(this, 'filteredContent.meta') ||  {};
		return Ember.get(meta, pagesCountProperty) || 1;
	})
});
