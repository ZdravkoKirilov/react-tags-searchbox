/**
 * Created by zkirilov on 8.6.2017 г..
 */
import InputControl from '../components/InputControl'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'

let div;
let onChangeCallback = jest.fn();
let onEnterPress = jest.fn();
let onArrowKey = jest.fn();
let onEscapeKey = jest.fn();
let value = 'Test value';

beforeEach(function () {
	div = document.createElement('div');
	onChangeCallback = jest.fn();
	onEnterPress = jest.fn();
	onArrowKey = jest.fn();
	onEscapeKey = jest.fn();
});

function render(div) {
	ReactDOM.render(<InputControl
		onChangeCallback={onChangeCallback}
		onEnterPress={onEnterPress}
		onArrowKey={onArrowKey}
		value={value}
		onEscapeKey={onEscapeKey}
	/>, div)
}

it('renders without crashing', () => {
	render(div);
});

it('renders correct value', () => {
	render(div);
	const DOMvalue = div.querySelector('input').value;
	expect(DOMvalue).toBe(value);
});

it('calls correct callback after input value change', () => {
	render(div);
	const DOMInput = div.querySelector('input');
	const newValue = 'Changed value';
	DOMInput.value = newValue;
	TestUtils.Simulate.change(DOMInput);

	expect(onChangeCallback.mock.calls.length).toBe(1);
	expect(onChangeCallback.mock.calls[0][0]).toBe(newValue);
});

it('calls correct callback after input keypress[Enter] event', () => {
	render(div);
	const DOMInput = div.querySelector('input');

	TestUtils.Simulate.keyUp(DOMInput, {
		key: "Enter", keyCode: 13, which: 13
	});

	expect(onEnterPress.mock.calls.length).toBe(1);
	expect(onEnterPress.mock.calls[0][0]).toEqual({
		value
	});
});

it('calls correct callback after input keypress[Escape] event', () => {
	render(div);
	const DOMInput = div.querySelector('input');

	TestUtils.Simulate.keyUp(DOMInput, {
		keyCode: InputControl.keycodes.escape, which: InputControl.keycodes.escape
	});

	expect(onEscapeKey.mock.calls.length).toBe(1);
});

it('calls correct callback after input keypress[Up Arrow] event', () => {
	render(div);
	const DOMInput = div.querySelector('input');

	TestUtils.Simulate.keyUp(DOMInput, {
		keyCode: InputControl.keycodes.up_arrow, which: InputControl.keycodes.up_arrow
	});

	expect(onArrowKey.mock.calls.length).toBe(1);
	expect(onArrowKey.mock.calls[0][0]).toEqual({
		direction: 'up'
	});
});

it('calls correct callback after input keypress[Down Arrow] event', () => {
	render(div);
	const DOMInput = div.querySelector('input');

	TestUtils.Simulate.keyUp(DOMInput, {
		keyCode: InputControl.keycodes.down_arrow, which: InputControl.keycodes.down_arrow
	});

	expect(onArrowKey.mock.calls.length).toBe(1);
	expect(onArrowKey.mock.calls[0][0]).toEqual({
		direction: 'down'
	});
});