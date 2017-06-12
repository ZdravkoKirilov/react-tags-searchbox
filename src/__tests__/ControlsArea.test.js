/**
 * Created by zkirilov on 8.6.2017 г..
 */
import ControlsArea from '../components/ControlsArea'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

let onAddClick = jest.fn();
let onSearchPress = jest.fn();
let termsCount = 3;
let div = document.createElement('div');

beforeEach(function () {
	div = document.createElement('div');
});

function render(div) {
	ReactDOM.render(<ControlsArea
		onAddClick={onAddClick}
		onSearchPress={onSearchPress}
		termsCount={termsCount} />, div);
}

it ('renders without crashing', () => {
	render(div);
});

it ('renders correct terms count', () => {
	render(div);
	expect(div.querySelector('.badge').textContent).toBe(termsCount.toString());
});

it('calls onAddClick', () => {
	render(div);
	TestUtils.Simulate.click(div.querySelector('.add-term'));
	expect(onAddClick.mock.calls.length).toBe(1);
});

it('calls onSearchPress', () => {
	render(div);
	TestUtils.Simulate.click(div.querySelector('.start-search'));
	expect(onSearchPress.mock.calls.length).toBe(1);
});
