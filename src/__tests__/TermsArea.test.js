/**
 * Created by zkirilov on 7.6.2017 г..
 */
import TermsArea from '../components/TermsArea'
import React from 'react'
import ReactDOM from 'react-dom'

let onTermEnter = jest.fn();
let onTermRemove = jest.fn();
let onTermChange = jest.fn();
let onArrowKey = jest.fn();
let onEscapeKey = jest.fn();
let onSuggestionClick = jest.fn();
let onSettingsClick = jest.fn();
let suggestions = [
	'One', 'Two', 'Three'
];
let div;
let currentInputValue = 'Test';
let selectedSuggestion = 'Two';
let enteredTerms = [
	{
		value: 'Sofia',
		label: 'city',
		uniqueID: 1
	}, {
		value: 'Bulgaria',
		label: 'country',
		uniqueID: 2
	}, {
		value: 'Unlabeled',
		uniqueID: 3
	}
];
let labels = {
	city: {
		color: 'red'
	}
};

beforeEach(function () {
	onTermEnter = jest.fn();
	onTermRemove = jest.fn();
	onTermChange = jest.fn();
	onArrowKey = jest.fn();
	onEscapeKey = jest.fn();
	onSuggestionClick = jest.fn();
	onSettingsClick = jest.fn();
	div = document.createElement('div');
});

function render(div) {
	ReactDOM.render(<TermsArea
		onTermEnter={onTermEnter}
		onTermRemove={onTermRemove}
		onTermChange={onTermChange}
		onArrowKey={onArrowKey}
		onEscapeKey={onEscapeKey}
		onSuggestionClick={onSuggestionClick}
		onSettingsClick={onSettingsClick}
		suggestions={suggestions}
		currentInputValue={currentInputValue}
		selectedSuggestion={selectedSuggestion}
		enteredTerms={enteredTerms}
		labels={labels}
	/>, div)
}

it('renders without crashing', () => {
	render(div);
});

it('renders correct terms', () => {
	render(div);

	const terms = div.querySelectorAll('.search-term');
	expect(terms.length).toBe(enteredTerms.length);
	expect(terms[0].querySelector('.term-title').textContent).toBe(enteredTerms[0].value);
	expect(terms[1].querySelector('.term-title').textContent).toBe(enteredTerms[1].value);
	expect(terms[2].querySelector('.term-title').textContent).toBe(enteredTerms[2].value);
});


