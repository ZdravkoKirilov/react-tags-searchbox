/**
 * Created by zkirilov on 10.4.2017 г..
 */

export const findTerm = (term, allTerms) => {
	let index = -1;
	let element = null;
	allTerms.forEach((elem, _index) => {
		let sameValue = elem.value === term.value;
		let sameLabel = elem.label === term.label;
		let matches = sameValue && (sameLabel || (!!elem.label === !!term.label));
		if (matches) {
			index = _index;
			element = elem;
		}
	});
	return {
		index,
		targetTerm: element
	}
};

export const termsHaveChanged =(oldTerms, newTerms) => {

	let _oldTerms = oldTerms.slice();
	let _newTerms = newTerms.slice();

};
