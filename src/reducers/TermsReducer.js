/**
 * Created by zkirilov on 11.4.2017 г..
 */
import {findTerm} from '../selectors/Terms';

export const removeTerm = (enteredTerms, selectedTerm) => {

	const term = findTerm(selectedTerm, enteredTerms);
	let filtered = enteredTerms.slice();
	filtered.splice(term.index, 1);
	return filtered;
};

export const enterTerm = (enteredTerms, payload) => {
	const updatedTerms = enteredTerms
	.concat(payload);
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

export const changeTermTitle = (term, newTitle, all_terms) => {
	const {targetTerm, index} = findTerm(term, all_terms);
	const updatedTerm = Object.assign({}, targetTerm, {
		value: newTitle
	});
	const updatedTerms = all_terms.slice();
	updatedTerms[index] = updatedTerm;
	return {
		updatedTerms,
		updatedTerm
	}
};

export const composeTerms = (payload) => {
	const result = payload
	.value
	.replace(/ and /gi, ' AND ')
	.split(' AND ')
	.map(elem => {
		return elem.split(':');
	})
	.map(elem => {
		const value = elem.length > 1 ? elem[1] : elem[0];
		return {
			label: elem.length > 1 ? elem[0] : null,
			value,
			uniqueID: value + new Date().getTime() + Math.random()
		}
	});
	return result;
};
