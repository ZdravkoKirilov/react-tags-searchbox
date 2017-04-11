/**
 * Created by zkirilov on 11.4.2017 г..
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import TermSettings from '../components/TermSettings';

let onTermRemove = jest.fn();
let onClose = jest.fn();
let onLabelClick = jest.fn();

beforeEach(() => {
	onTermRemove = jest.fn();
	onClose = jest.fn();
	onLabelClick = jest.fn();
});

const selectedTerm = {
	value: 'Sofia',
	label: 'City'
};

const labels = {
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

const render = (div, isVisible) => {
	ReactDOM.render(<TermSettings
		onTermRemove={onTermRemove}
		onClose={onClose}
		onLabelClick={onLabelClick}
		isVisible={isVisible}
		selectedTerm={selectedTerm}
		labels={labels}
		title={selectedTerm.value}
	/>, div);
};

it('renders without crashing', () => {
	const div = document.createElement('div');
	render(div, false);
	render(div, true);
});

it('renders correct labels', () => {
	const div = document.createElement('div');
	render(div, true);

	const DOMLabels = div.querySelectorAll('.tag-label');
	expect(DOMLabels.length).toBeGreaterThanOrEqual(2);
	expect(DOMLabels[0].textContent).toBe(labels.City.value);
	expect(DOMLabels[1].textContent).toBe(labels.Country.value);
});

it('renders a "Remove" button', () => {
	const div = document.createElement('div');
	render(div, true);

	const button = div.querySelectorAll('.remove');
	expect(button.length).toBe(1);
});

it('renders a "Done" button', () => {
	const div = document.createElement('div');
	render(div, true);

	const button = div.querySelectorAll('.done');
	expect(button.length).toBe(1);
});

it('Clicking "Done" button fires the correct callback', () => {
	const div = document.createElement('div');
	render(div, true);

	const button = div.querySelector('.done');
	ReactTestUtils.Simulate.click(button);

	expect(onClose.mock.calls.length).toBe(1);
});

it('Clicking "Remove" button fires the correct callback', () => {
	const div = document.createElement('div');
	render(div, true);

	const button = div.querySelector('.remove');
	ReactTestUtils.Simulate.click(button);

	expect(onTermRemove.mock.calls.length).toBe(1);
});

it('Clicking on a label fires the correct callback', () => {
	const div = document.createElement('div');
	render(div, true);

	const label1 = div.querySelectorAll('.tag-label')[0];
	const label2 = div.querySelectorAll('.tag-label')[1];
	ReactTestUtils.Simulate.click(label1);
	ReactTestUtils.Simulate.click(label2);

	expect(onLabelClick.mock.calls.length).toBe(2);
});

it('Clicking on a label fires the correct callback with correct parameters', () => {
	const div = document.createElement('div');
	render(div, true);

	const label1 = div.querySelectorAll('.tag-label')[0];
	const label2 = div.querySelectorAll('.tag-label')[1];
	ReactTestUtils.Simulate.click(label1);
	ReactTestUtils.Simulate.click(label2);

	expect(onLabelClick.mock.calls[0][0]).toBe('City');
	expect(onLabelClick.mock.calls[1][0]).toBe('Country');
});