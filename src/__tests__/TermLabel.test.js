/**
 * Created by zkirilov on 11.4.2017 г..
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import TermLabel from '../components_DEPRECATED/TermLabel';

const value = 'City';
const onLabelClick = jest.fn();
const style = {color: 'red'};

const render = (div, isSelected) => {
	ReactDOM.render(<TermLabel
		isSelected={isSelected}
		value={value}
		onLabelClick={onLabelClick}
		style={style}
	/>, div);
};

it('renders without crashing', () => {
	const div = document.createElement('div');
	render(div, false);
	render(div, true);
});

it('renders correct value', () => {
	const div = document.createElement('div');
	render(div, true);

	const DOMvalue = div.querySelector('.tag-label').textContent;
	expect(DOMvalue).toEqual(value);
});

it('renders correct styles', () => {
	const div = document.createElement('div');
	render(div, true);

	const DOMelement = div.querySelector('.tag-label');
	expect(DOMelement.style.color).toEqual(style.color);
});

it('fires a callback on click', () => {
	const div = document.createElement('div');
	render(div, true);
	const DOMelement = div.querySelector('.tag-label');

	ReactTestUtils.Simulate.click(DOMelement);
	expect(onLabelClick.mock.calls.length).toBe(1);
});

it('renders a "selected" indicator when the label is selected', () => {
	const div = document.createElement('div');
	render(div, true);
	const DOMelement = div.querySelector('.tag-label');

	expect(DOMelement.classList).toContain('selected-element');
});