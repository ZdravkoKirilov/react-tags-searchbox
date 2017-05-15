'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getLeftTerm = exports.getRightTerm = exports.addTermLabel = exports.enterTerm = exports.removeTerm = undefined;

var _Terms = require('../selectors/Terms');

var removeTerm = exports.removeTerm = function removeTerm(enteredTerms, selectedTerm) {
	var value = selectedTerm.value,
	    label = selectedTerm.label;

	var filtered = enteredTerms.filter(function (elem) {
		var notSameValue = elem.value !== value;
		var notSameLabel = elem.label !== label;
		var bothFalsy = !!elem.label !== !!label;
		return notSameValue || notSameLabel || bothFalsy;
	});
	return filtered;
}; /**
    * Created by zkirilov on 11.4.2017 г..
    */
var enterTerm = exports.enterTerm = function enterTerm(enteredTerms, payload) {
	var updatedTerms = enteredTerms.concat([payload]);
	return updatedTerms;
};

var addTermLabel = exports.addTermLabel = function addTermLabel(label, enteredTerms, selectedTerm) {
	var _findTerm = (0, _Terms.findTerm)(selectedTerm, enteredTerms),
	    targetTerm = _findTerm.targetTerm,
	    index = _findTerm.index;

	var updatedTerm = Object.assign({}, targetTerm, { label: label });
	var updatedTerms = enteredTerms.slice();
	updatedTerms[index] = updatedTerm;
	return {
		updatedTerms: updatedTerms,
		updatedTerm: updatedTerm
	};
};

var getRightTerm = exports.getRightTerm = function getRightTerm(current, allTerms) {
	var _findTerm2 = (0, _Terms.findTerm)(current, allTerms),
	    index = _findTerm2.index;

	return allTerms[index + 1] || allTerms[0];
};

var getLeftTerm = exports.getLeftTerm = function getLeftTerm(current, allTerms) {
	var _findTerm3 = (0, _Terms.findTerm)(current, allTerms),
	    index = _findTerm3.index;

	return allTerms[index - 1] || allTerms[allTerms.length - 1];
};