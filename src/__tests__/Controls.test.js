/**
 * Created by zkirilov on 10.4.2017 г..
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Controls from '../components_DEPRECATED/Controls';

let onAddClick = jest.fn();
let onSearchPress = jest.fn();

const render = (div) => {
	ReactDOM.render(<Controls
		onAddClick={onAddClick}
		onSearchPress={onSearchPress}
	/>, div);
};

it('renders without crashing', () => {
	const div = document.createElement('div');
	render(div);
});

it('add button fires correct callback on click', () => {
	const div = document.createElement('div');
	render(div);

	const button = div.querySelector('.add-term');
	ReactTestUtils.Simulate.click(button);
	expect(onAddClick.mock.calls.length).toBe(1);
});

it('search button fires correct callback on click', () => {
	const div = document.createElement('div');
	render(div);

	const button = div.querySelector('.start-search');
	ReactTestUtils.Simulate.click(button);
	expect(onSearchPress.mock.calls.length).toBe(1);
});
