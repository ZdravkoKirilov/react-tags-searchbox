"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Created by zkirilov on 10.4.2017 г..
 */

var findTerm = exports.findTerm = function findTerm(term, allTerms) {
	var index = -1;
	var element = null;
	allTerms.forEach(function (elem, _index) {
		var sameValue = elem.value === term.value;
		var sameLabel = elem.label === term.label;
		var matches = sameValue && (sameLabel || !!elem.label === !!term.label);
		if (matches) {
			index = _index;
			element = elem;
		}
	});
	return {
		index: index,
		targetTerm: element
	};
};

var termsHaveChanged = exports.termsHaveChanged = function termsHaveChanged(oldTerms, newTerms) {

	var _oldTerms = oldTerms.slice();
	var _newTerms = newTerms.slice();
};