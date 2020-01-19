require('./js/validate_form');

import Lookup     from "./js/Lookup";

//import {uniqueID} from "./js/utilities";
//import {uniqueID, add} from "./js/utilities";
import * as utils from "./js/utilities";

//export {Lookup, utils, add};
export {Lookup, utils};

let search = new Lookup({url: 'my/api/link/here/or/whatever'});
let search_area = $("#search_results_area");
let search_box = $("#input_query");

$().ready(function () {
	$("#btn_code").on('click', function () {
		$("#code_area").text(utils.uniqueID());
	});
	
	search.changeAPI('oh/this/is/better/');
	search.subscribe(showResults);
	
});

$("#btn_search").on('click', function () {
	search.search(search_box.val());
	search_area.empty();
	search_area.append('<div class="loader"></div>');
});

function showResults(results) {
	// Remove old content.
	search_area.empty();
	// Add Header section
	search_area.append("<b>Search Results</b>");
	search_area.append("<br/>");
	// Load results, which is just some pre-formatted text
	search_area.append(results);
}