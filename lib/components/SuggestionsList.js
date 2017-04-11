'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SuggestedTerm = require('./SuggestedTerm');

var _SuggestedTerm2 = _interopRequireDefault(_SuggestedTerm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Suggestions = function Suggestions(props) {
	var suggestions = props.suggestions.map(function (elem, index) {
		var isActive = false;

		if (elem === props.selectedSuggestion) {
			isActive = true;
		}

		return _react2.default.createElement(_SuggestedTerm2.default, {
			onSuggestionClick: props.onSuggestionClick,
			key: index,
			value: elem,
			isActive: isActive
		});
	});
	return _react2.default.createElement(
		'div',
		{ className: 'suggestions' },
		suggestions
	);
};

Suggestions.propTypes = {
	suggestions: _propTypes2.default.arrayOf(_propTypes2.default.string),
	onSuggestionClick: _propTypes2.default.func,
	selectedSuggestion: _propTypes2.default.string
};

Suggestions.defaultProps = {
	suggestions: []
};

exports.default = Suggestions;
module.exports = exports['default'];