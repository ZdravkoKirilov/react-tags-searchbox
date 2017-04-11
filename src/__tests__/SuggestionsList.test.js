/**
 * Created by zkirilov on 10.4.2017 г..
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import SuggestionsList from '../components/SuggestionsList';

let suggestions = ['London', 'England'];
let onSuggestionClick = jest.fn();

const render = (div, suggestions, onSuggestionClick) => {
	ReactDOM.render(<SuggestionsList
		suggestions={suggestions}
		onSuggestionClick={onSuggestionClick}
	/>, div);
};

it('renders without crashing', () => {
	const div = document.createElement('div');
	render(div, suggestions, onSuggestionClick);
});

it('renders correct number of suggestions', () => {
	const div = document.createElement('div');
	render(div, suggestions, onSuggestionClick);
	const renderedSuggestions = div.querySelectorAll('.suggested-term');
	expect(renderedSuggestions.length).toBe(suggestions.length);
});

it('renders correct suggestions', () => {
	const div = document.createElement('div');
	render(div, suggestions, onSuggestionClick);
	const renderedSuggestions = div.querySelectorAll('.suggested-term');
	expect(renderedSuggestions[0].textContent).toBe(suggestions[0]);
	expect(renderedSuggestions[1].textContent).toBe(suggestions[1]);
});

it('fires callback after a suggestion is clicked', () => {
	const div = document.createElement('div');
	render(div, suggestions, onSuggestionClick);
	const renderedSuggestions = div.querySelectorAll('.suggested-term');
	const targetSuggestion = renderedSuggestions[0];

	TestUtils.Simulate.click(targetSuggestion);

	expect(onSuggestionClick.mock.calls.length).toBe(1);
});
