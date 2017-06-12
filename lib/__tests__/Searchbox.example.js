// import React from 'react';
// import ReactDOM from 'react-dom';
// import Searchbox from '../containers/Searchbox';
//
// const terms = [
// 	{
// 		value: 'Paris',
// 		label: 'City'
// 	}, {
// 		value: 'France',
// 		label: null
// 	}, {
// 		value: 'Spain',
// 		label: null
// 	}, {
// 		value: 'Madrid1',
// 		label: null
// 	}
// ];
//
// function onSearchPress(terms) {
// 	console.log(terms);
// }
// function onTermsChange(terms) {
// 	console.log(terms);
// }
//
// const suggestions = ['Sofia', 'Bulgaria', 'London', 'England'];
//
// const render = (div) => {
// 	ReactDOM.render(<Searchbox
// 		enteredTerms={terms}
// 		labels={labels}
// 		onSearchPress={onSearchPress}
// 		suggestionsPool={suggestions}
// 		onTermsChange={onTermsChange}/>, div);
// };
//
// const labels = {
// 	City: {
// 		style: {
// 			border: '2px dashed red',
// 			background: 'lightblue'
// 		},
// 		value: 'City'
// 	},
// 	Country: {
// 		style: {
// 			border: '2px dashed green',
// 			background: 'white'
// 		},
// 		value: 'Country'
// 	}
// };

// it('renders without crashing', () => {
// 	const div = document.createElement('div');
// 	render(div);
// });
//
// it('renders correct predefined terms', () => {
// 	const div = document.createElement('div');
// 	render(div);
//
// 	const DOM_terms = div.querySelectorAll('.search-term');
// 	const termsAsArray = Array.prototype.slice.call(DOM_terms, 0);
//
// 	termsAsArray.forEach((elem, index) => {
// 		const value = terms[index].value;
// 		expect(elem.querySelector('span').textContent).toEqual(value);
// 	});
// });
//
// it('renders correct terms count number', () => {
// 	const div = document.createElement('div');
// 	render(div);
//
// 	const DOMCounter = div.querySelector('.terms-count').textContent;
// 	expect(Number(DOMCounter)).toEqual(terms.length);
// });
//
// it('renders correct label styles to terms', () => {
// 	const div = document.createElement('div');
// 	render(div);
//
// 	const firstTerm = div.querySelector('.search-term');
// 	expect(firstTerm.style.border).toContain(labels.City.style.border);
// });
"use strict";