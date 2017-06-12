import React from 'react';
import ReactDOM from 'react-dom';
import Searchbox from './containers/Searchbox';

const terms = [
	{
		value: 'Paris',
		label: 'city'
	}, {
		value: 'France'
	}, {
		value: 'Spain',
		label: null
	}, {
		value: 'Madrid',
		label: null
	}, {
		value: 'England',
		label: 'country'
	}, {
		value: 'Germany',
		label: null
	}
];

function onSearchPress(terms) {
	console.log(terms);
}
function onTermsChange(terms) {
	console.log(terms);
	render([]);
}

const suggestions = ['city:Sofia', 'Sofia', 'country:Bulgaria', 'Bulgaria', 'London', 'England'];

function onUserInput(value) {
	setTimeout(function () {

		const _suggestions = value ?
			suggestions
			.filter(elem => {
				return elem
				.toLowerCase()
				.includes(value.toLowerCase());
			}) : [];

		_suggestions.length > 0 && _suggestions.unshift(value);
		render(_suggestions);
	}, 200);
}

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

render([]);

function render(_suggestions) {
	ReactDOM.render(
		<Searchbox
			enteredTerms={terms}
			labels={labels}
			onSearchPress={onSearchPress}
			suggestionsPool={_suggestions}
			onTermsChange={onTermsChange}
			searchEnabled={true}
			onUserInput={onUserInput}
		/>, document.getElementById('root'));
}


