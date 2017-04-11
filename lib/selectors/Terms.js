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
		var matches = elem.value === term.value && elem.label === term.label;
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