/**
 * Created by zkirilov on 10.4.2017 г..
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import InteractionArea from '../containers/InteractionArea';

const onTermEnter = jest.fn();
const onSearchPress = jest.fn();
const suggestions = ['Sofia', 'Bulgaria', 'London', 'England'];

const render = (div) => {
	ReactDOM.render(<InteractionArea
		onTermEnter={onTermEnter}
		onSearchPress={onSearchPress}
		suggestionsPool={suggestions}
	/>, div);
};

it('Suggestions are shown after typing in the input', () => {
	const div = document.createElement('div');
	render(div);

	const DOMInput = div.querySelector('.insert-term');
	DOMInput.value = suggestions[0].slice(0, 3);
	ReactTestUtils.Simulate.change(DOMInput);

	const renderedSuggestions = div.querySelectorAll('.suggested-term');
	expect(renderedSuggestions.length).toBe(2);
	expect(renderedSuggestions[1].textContent).toBe(suggestions[0]);
});