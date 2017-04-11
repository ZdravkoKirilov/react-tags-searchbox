/**
 * Created by zkirilov on 10.4.2017 г..
 */

/** Created by zkirilov on 10.4.2017 г. ...*/

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Term from '../components/Term';

const onSettingsClick = jest.fn();
const value = 'Sofia';

const render = (div) => {
	ReactDOM.render(<Term
		value={value}
		onSettingsClick={onSettingsClick}
	/>, div);
};

it('renders without crashing', () => {
	const div = document.createElement('div');
	render(div);
});

it('renders correct value', () => {
	const div = document.createElement('div');
	render(div);

	const term = div.querySelector('.search-term span').textContent;
	expect(term).toBe(value);
});

it('fires callback after clicking on settings', () => {
	const div = document.createElement('div');
	render(div);

	const settingsToggle = div.querySelector('.toggle-tag-settings');
	ReactTestUtils.Simulate.click(settingsToggle);

	expect(onSettingsClick.mock.calls.length).toBe(1);
});


