/**
 * Created by zkirilov on 8.6.2017 г..
 */
import SuggestedTerm from '../components/SuggestedTerm'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

let value = 'Test suggestion';
let isActive = true;
let onSuggestionClick = jest.fn();
let div = document.createElement('div');

function render(div) {
	ReactDOM.render(<SuggestedTerm
		onSuggestionClick={onSuggestionClick}
		value={value}
		isActive={isActive} />, div);
}

it ('renders without crashing', () => {
	render(div);
});

it ('renders correct value', () => {
	render(div);
	expect(div.querySelector('p').textContent).toBe(value);
});

it ('renders correctly when active', () => {
	render(div);
	expect(div.querySelector('p').className).toContain('active-suggested-term');
});

it ('calls a calback when clicked', () => {
	render(div);
	TestUtils.Simulate.click(div.querySelector('p'));
	expect(onSuggestionClick.mock.calls.length).toBe(1);
	expect(onSuggestionClick.mock.calls[0][0]).toBe(value);
});