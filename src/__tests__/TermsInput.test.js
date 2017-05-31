/**
 * Created by zkirilov on 7.4.2017 г..
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TermsInput from '../components_DEPRECATED/TermsInput';

let onChangeCallback = jest.fn();
let onEnterPress = jest.fn();
let onArrowKey = jest.fn();
const onEscapeKey = jest.fn();

const value = 'Bulgaria';

beforeEach(() => {
	onChangeCallback = jest.fn();
	onEnterPress = jest.fn();
});

const render = (div) => {
	ReactDOM.render(<TermsInput
		value={value}
		onChangeCallback={onChangeCallback}
		onEnterPress={onEnterPress}
		onArrowKey={onArrowKey}
		onEscapeKey={onEscapeKey}
	/>, div);
};

it('renders without crashing', () => {
	const div = document.createElement('div');
	render(div);
});

it('renders correct value', () => {
	const div = document.createElement('div');
	render(div);

	const DOMvalue = div.querySelector('input').value;
	expect(DOMvalue).toEqual(value);
});