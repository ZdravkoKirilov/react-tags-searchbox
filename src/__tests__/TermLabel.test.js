/**
 * Created by zkirilov on 8.6.2017 г..
 */
import TermLabel from '../components/TermLabel'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

let div = document.createElement('div');
let value = 'Test label';
let selectedClass = 'selected-element';
let isSelected = true;
let onLabelClick = jest.fn();

beforeEach(function () {
	div = document.createElement('div');
});

function render(div) {
	ReactDOM.render(<TermLabel
		value={value}
		onLabelClick={onLabelClick}
		isSelected={isSelected}/>, div);
}

it ('renders without crashing', () => {
	render(div);
});

it('renders correct value', () => {
	render(div);
	expect(div.querySelector('p').textContent).toBe(value);
});

it ('renders correct selected indicator', () => {
	render(div);
	expect(div.querySelector('p').className).toContain(selectedClass);
});

it ('calls correct callback when clicked', () => {
	render(div);
	TestUtils.Simulate.click(div.querySelector('p'));
	expect(onLabelClick.mock.calls.length).toBe(1);
	expect(onLabelClick.mock.calls[0][0]).toBe(value);
});