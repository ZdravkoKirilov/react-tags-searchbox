/**
 * Created by zkirilov on 12.6.2017 г..
 */
import Searchbox from '../containers/Searchbox'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

let div = document.createElement('div');

let onSearchPress, onTermsChange, onUserInput, enteredTerms, suggestionsPool, labels;

beforeEach(function () {
	onSearchPress = jest.fn();
	onTermsChange = jest.fn();
	onUserInput = jest.fn();
	enteredTerms = [
		{
			value: 'Paris',
			label: 'city'
		}, {
			value: 'France',
			label: 'Country'
		}, {
			value: 'Spain',
			label: null
		}
	];
	suggestionsPool = ['city:Sofia', 'Sofia', 'country:Bulgaria'];
	labels = {
		City: {
			style: {
				border: '2px dashed red',
				background: 'lightblue'
			},
			value: 'City'
		},
		Country: {
			style: {
				border: '2px dashed green',
				background: 'white'
			},
			value: 'Country'
		}
	};
});


function render(div) {
	ReactDOM.render(<Searchbox
		onSearchPress={onSearchPress}
		onTermsChange={onTermsChange}
		onUserInput={onUserInput}
		labels={labels}
		enteredTerms={enteredTerms}
		suggestionsPool={suggestionsPool}
	/>, div);
}

it('renders without crashing', () => {
	render(div);
});

it('renders correct search terms', () => {
	render(div);
	const DOMTerms = div.querySelectorAll('.search-term');
	expect(DOMTerms.length).toBe(enteredTerms.length);
	expect(DOMTerms[0].querySelector('.term-title').textContent).toBe(enteredTerms[0].value);
	expect(DOMTerms[1].querySelector('.term-title').textContent).toBe(enteredTerms[1].value);
	expect(DOMTerms[2].querySelector('.term-title').textContent).toBe(enteredTerms[2].value);
});

it('renders correct suggestions', () => {
	render(div);
	const DOMSuggestions = div.querySelectorAll('.suggested-term');
	expect(DOMSuggestions.length).toBe(suggestionsPool.length);
	expect(DOMSuggestions[0].textContent).toBe(suggestionsPool[0]);
	expect(DOMSuggestions[1].textContent).toBe(suggestionsPool[1]);
	expect(DOMSuggestions[2].textContent).toBe(suggestionsPool[2]);
});