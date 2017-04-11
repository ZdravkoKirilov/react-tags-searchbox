'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Searchbox = require('./components/Searchbox');

var _Searchbox2 = _interopRequireDefault(_Searchbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var terms = [{
    value: 'Paris',
    label: 'City'
}, {
    value: 'France',
    label: null
}, {
    value: 'Spain',
    label: null
}, {
    value: 'Madrid',
    label: null
}];

function onSearchPress(terms) {
    console.log(terms);
}
function onTermsChange(terms) {
    console.log(terms);
}

var suggestions = ['city:Sofia', 'Sofia', 'country:Bulgaria', 'Bulgaria', 'London', 'England'];
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

_reactDom2.default.render(_react2.default.createElement(_Searchbox2.default, {
    enteredTerms: terms,
    labels: labels,
    onSearchPress: onSearchPress,
    suggestionsPool: suggestions,
    onTermsChange: onTermsChange }), document.getElementById('root'));