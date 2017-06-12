/**
 * Created by zkirilov on 8.6.2017 г..
 */
import SuggestionsList from '../components/SuggestionsList'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

let div;
let suggestions = [
	'One', 'Two', 'Three'
];
let selectedSuggestion = 'Two';
let onSuggestionClick = jest.fn();

beforeEach(function () {
	div = document.createElement('div');
	onSuggestionClick = jest.fn();
});

function render(div) {
	ReactDOM.render(<SuggestionsList
		onSuggestionClick={onSuggestionClick}
		suggestions={suggestions}
		selectedSuggestion={selectedSuggestion}
	/>, div)
}

it('renders without crashing', () => {
	render(div);
});

it ('renders correct suggestions', () => {
	render(div);
	const DOMsuggestions = div.querySelectorAll('.suggested-term');
	expect(DOMsuggestions.length).toBe(suggestions.length);
	expect(DOMsuggestions[0].textContent).toBe(suggestions[0]);
	expect(DOMsuggestions[1].textContent).toBe(suggestions[1]);
	expect(DOMsuggestions[2].textContent).toBe(suggestions[2]);
});

it('renders correct selected suggestion', () => {
	render(div);
	const DOMsuggestions = div.querySelectorAll('.suggested-term');
	expect(DOMsuggestions[1].className).toContain('active-suggested-term');
	expect(DOMsuggestions[0].className).not.toContain('active-suggested-term');
	expect(DOMsuggestions[2].className).not.toContain('active-suggested-term');
});

it('calls correct callback after a suggestion is clicked', () => {
	render(div);
	const DOMsuggestions = div.querySelectorAll('.suggested-term');
	TestUtils.Simulate.click(DOMsuggestions[0]);
	expect(onSuggestionClick.mock.calls.length).toBe(1);
	expect(onSuggestionClick.mock.calls[0][0]).toBe(DOMsuggestions[0].textContent);
});


