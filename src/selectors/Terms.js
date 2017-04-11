/**
 * Created by zkirilov on 10.4.2017 г..
 */

export const findTerm = (term, allTerms) => {
	let index = -1;
	let element = null;
	allTerms.forEach((elem, _index) => {
		let matches = elem.value === term.value && elem.label === term.label;
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
