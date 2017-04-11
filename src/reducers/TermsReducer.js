/**
 * Created by zkirilov on 11.4.2017 г..
 */
import {findTerm} from '../selectors/Terms';

export const removeTerm = (enteredTerms, selectedTerm) => {
	const {value, label} = selectedTerm;
	const filtered = enteredTerms
	.filter(elem => {
		return elem.value !== value || elem.label !== label;
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
