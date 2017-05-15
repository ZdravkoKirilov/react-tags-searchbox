import React from 'react';
import ReactDOM from 'react-dom';
import Searchbox from './containers/Searchbox';

const terms = [
	{
		value: 'Paris',
		label: 'city'
	}, {
		value: 'France',
		label: null
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
}

const suggestions = ['city:Sofia', 'Sofia', 'country:Bulgaria', 'Bulgaria', 'London', 'England'];
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

ReactDOM.render(
	<Searchbox
		enteredTerms={terms}
		labels={labels}
		onSearchPress={onSearchPress}
		suggestionsPool={suggestions}
		onTermsChange={onTermsChange}
		searchEnabled={true}
	/>, document.getElementById('root'));
