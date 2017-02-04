/**
 * @module {function} table.pagination Table Cell
 *
 * @description
 * A table pagination component. Renders either a th or td (perhaps refactor?) depending on the type passed in.
 *
 * @signature '<can-data-context-pagination> <content/> </can-data-context-pagination>'
 *
 * The table pagination component should contain these attributes along with the tag:
 *
 * @param {String} class-name
 * @param {Number} lowerBounds
 * @param {Number} rowsPerPage
 * @param {Number} rowCount
 * @param {DefineList} tableFilters - A DefineList of table filter functions
 *
 *
 * @body
 *
 * ## Use
 *
 * ```js
 *   <can-data-context-pagination
 *	 	class="pagination"
 *	 	{lower-bounds}="lowerBounds"
 *	 	{rows-per-page}="rowsPerPage"
 *	 	{row-count}="rowCount"
 *	 	{^table-filters}="@tableFilters"/>
 * ```
 *
 */
import Component from 'can/component/';
import template from './pagination.stache!';
import viewModel from './pagination-viewmodel';

export default Component.extend({
    tag: 'can-data-context-pagination',
    template,
    viewModel,
    events: {
		/**
		 * @desc Sets the correct upper bounds on init
		 */
		init: function init() {
            this.viewModel.upperBounds = this.viewModel.rowsPerPage -1;
        }
    }
});
