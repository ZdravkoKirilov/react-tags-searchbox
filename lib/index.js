'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Searchbox = require('./containers/Searchbox');

var _Searchbox2 = _interopRequireDefault(_Searchbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var terms = [{
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
}];

function onSearchPress(terms) {
	console.log(terms);
}
function onTermsChange(terms) {
	console.log(terms);
	render([]);
}

var suggestions = ['city:Sofia', 'Sofia', 'country:Bulgaria', 'Bulgaria', 'London', 'England'];

function onUserInput(value) {
	setTimeout(function () {

		var _suggestions = value ? suggestions.filter(function (elem) {
			return elem.toLowerCase().includes(value.toLowerCase());
		}) : [];

		_suggestions.length > 0 && _suggestions.unshift(value);
		render(_suggestions);
	}, 200);
}

var labels = {
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
	_reactDom2.default.render(_react2.default.createElement(_Searchbox2.default, {
		enteredTerms: terms,
		labels: labels,
		onSearchPress: onSearchPress,
		suggestionsPool: _suggestions,
		onTermsChange: onTermsChange,
		searchEnabled: true,
		onUserInput: onUserInput
	}), document.getElementById('root'));
}