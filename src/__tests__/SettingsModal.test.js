/**
 * Created by zkirilov on 8.6.2017 г..
 */
import SettingsModal from '../components/SettingsModal'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

let div = document.createElement('div');
let isVisible = true;
let onLabelClick = jest.fn();
let onTitleChange = jest.fn();
let onClose = jest.fn();
let onTermRemove = jest.fn();
let onArrowKey = jest.fn();
let selectedTerm = {
	value: 'Sofia',
	label: 'city'
};
let labels = {
	city: {
		value: 'City'
	},
	country: {
		value: 'Country'
	}
};

beforeEach(function () {

});

function render(div) {
	ReactDOM.render(<SettingsModal
		isVisible={isVisible}
		onLabelClick={onLabelClick}
		onTitleChange={onTitleChange}
		onClose={onClose}
		onTermRemove={onTermRemove}
		onArrowKey={onArrowKey}
		labels={labels}
		selectedTerm={selectedTerm}
	/>, div);
}

it ('renders without crashing', () => {
	render(div);
});

it ('displays correct title', () => {
	render(div);
	expect(div.querySelector('.modal-title').textContent).toBe(selectedTerm.value);
});

it ('displays correct labels', () => {
	render(div);
	expect(div.querySelectorAll('.tag-label').length).toBe(3);
	expect(div.querySelectorAll('.tag-label')[0].textContent).toBe(labels.city.value);
	expect(div.querySelectorAll('.tag-label')[1].textContent).toBe(labels.country.value);
	expect(div.querySelectorAll('.tag-label')[2].textContent).toBe('None');
	expect(div.querySelectorAll('.tag-label.selected-element')[0].textContent).toBe(labels.city.value);
});

it('calls a callback after clicking on "Remove"', () => {
	render(div);
	TestUtils.Simulate.click(div.querySelector('.remove'));
	expect(onTermRemove.mock.calls.length).toBe(1);
	expect(onTermRemove.mock.calls[0][0]).toEqual(selectedTerm);
});

it('calls a callback after clicking on a label', () => {
	render(div);
	const DOMLabels = div.querySelectorAll('.tag-label');
	TestUtils.Simulate.click(DOMLabels[0]);
	TestUtils.Simulate.click(DOMLabels[1]);
	TestUtils.Simulate.click(DOMLabels[2]);

	expect(onLabelClick.mock.calls.length).toBe(3);
	expect(onLabelClick.mock.calls[0][0]).toBe('City');
	expect(onLabelClick.mock.calls[1][0]).toBe('Country');
	expect(onLabelClick.mock.calls[2][0]).toBe('');
});

it('calls a callback after clicking on "Close', () => {
	render(div);
	TestUtils.Simulate.click(div.querySelector('.close'));
	expect(onClose.mock.calls.length).toBe(1);
});

