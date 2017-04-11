'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addTermLabel = exports.enterTerm = exports.removeTerm = undefined;

var _Terms = require('../selectors/Terms');

var removeTerm = exports.removeTerm = function removeTerm(enteredTerms, selectedTerm) {
	var value = selectedTerm.value,
	    label = selectedTerm.label;

	var filtered = enteredTerms.filter(function (elem) {
		return elem.value !== value || elem.label !== label;
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