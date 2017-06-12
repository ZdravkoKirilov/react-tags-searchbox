/**
 * Created by zkirilov on 7.6.2017 г..
 */
import Term from '../components/Term'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'

function onSettingsClick() {

}

function onRemove() {

}

const value = 'Test';
const label = 'TestLabel';
const labels = {
	'TestLabel': {
		'color': 'red'
	}
};

beforeEach(function () {
	onSettingsClick = jest.fn();
	onRemove = jest.fn();
});


function render(div, value, label) {
	ReactDOM.render(<Term onSettingsClick={onSettingsClick}
						  onRemove={onRemove}
						  value={value}
						  label={label}
						  labels={labels}
	/>, div)
}

it('renders without crashing', () => {
	const div = document.createElement('div');
	render(div, 'Test');
});

it('renders correct value', () => {
	const div = document.createElement('div');
	const value = 'Test';
	render(div, value);
	expect(div.querySelector('.term-title').textContent).toBe(value);
});

it('calls onSettingsClick with correct params. Case value + label', () => {
	const div = document.createElement('div');
	const value = 'Test';
	const label = 'TestLabel';
	render(div, value, label);

	const title = div.querySelector('.term-title');
	ReactTestUtils.Simulate.click(title);
	expect(onSettingsClick.mock.calls.length).toBe(1);
	expect(onSettingsClick.mock.calls[0][0]).toEqual({
		value,
		label
	});
});

it('calls onSettingsClick with correct params. Case value only', () => {
	const div = document.createElement('div');
	let label;
	render(div, value, label);

	const title = div.querySelector('.term-title');
	ReactTestUtils.Simulate.click(title);
	expect(onSettingsClick.mock.calls.length).toBe(1);
	expect(onSettingsClick.mock.calls[0][0]).toEqual({
		value,
		label: ''
	});
});

it('calls onRemove after close is clicked. Case value + label exist', () => {
	const div = document.createElement('div');
	render(div, value, label);

	const remove = div.querySelector('.remove-term');
	ReactTestUtils.Simulate.click(remove);
	expect(onRemove.mock.calls.length).toBe(1);
	expect(onRemove.mock.calls[0][0]).toEqual({
		value,
		label
	});
});

it('calls onRemove after close is clicked. Case value only', () => {
	const div = document.createElement('div');
	let label;
	render(div, value, label);

	const remove = div.querySelector('.remove-term');
	ReactTestUtils.Simulate.click(remove);
	expect(onRemove.mock.calls.length).toBe(1);
	expect(onRemove.mock.calls[0][0]).toEqual({
		value,
		label: ''
	});
});