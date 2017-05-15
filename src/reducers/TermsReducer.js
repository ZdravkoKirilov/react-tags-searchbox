/**
 * Created by zkirilov on 11.4.2017 г..
 */
import {findTerm} from '../selectors/Terms';

export const removeTerm = (enteredTerms, selectedTerm) => {
	const {value, label} = selectedTerm;
	const filtered = enteredTerms
	.filter(elem => {
		const notSameValue = elem.value !== value;
		const notSameLabel = elem.label !== label;
		const bothFalsy = !!elem.label !== !!label;
		return notSameValue || notSameLabel || bothFalsy;
	});
	return filtered;
};

export const enterTerm = (enteredTerms, payload) => {
	const updatedTerms = enteredTerms
	.concat([payload]);
	return updatedTerms;
};

export const addTermLabel = (label, enteredTerms, selectedTerm) => {
	const {targetTerm, index} = findTerm(selectedTerm, enteredTerms);
	const updatedTerm = Object.assign({}, targetTerm, {label: label});
	const updatedTerms = enteredTerms.slice();
	updatedTerms[index] = updatedTerm;
	return {
		updatedTerms,
		updatedTerm
	}
};

export const getRightTerm = (current, allTerms) => {
	const {index} = findTerm(current, allTerms);
	return allTerms[index + 1] || allTerms[0];
};

export const getLeftTerm = (current, allTerms) => {
	const {index} = findTerm(current, allTerms);
	return allTerms[index - 1] || allTerms[allTerms.length - 1];
};
