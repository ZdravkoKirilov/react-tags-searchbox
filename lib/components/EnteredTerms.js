'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by zkirilov on 11.5.2017 г..
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Term = require('./Term');

var _Term2 = _interopRequireDefault(_Term);

var _InputControl = require('./InputControl');

var _InputControl2 = _interopRequireDefault(_InputControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnteredTerms = function EnteredTerms(props) {
	var _ref = props.selectedTerm || {},
	    value = _ref.value,
	    label = _ref.label;

	var enteredTerms = props.enteredTerms,
	    onTermEnter = props.onTermEnter,
	    currentInputValue = props.currentInputValue,
	    onTermChange = props.onTermChange;

	var terms = enteredTerms.map(function (term, index) {
		var isSelected = term.value === value && term.label === label;
		return _react2.default.createElement(_Term2.default, _extends({
			key: index }, term, {
			onSettingsClick: props.onSettingsClick,
			labels: props.labels,
			isSelected: isSelected
		}));
	});
	return _react2.default.createElement(
		'div',
		{ className: 'entered-terms' },
		terms,
		_react2.default.createElement(_InputControl2.default, { onEnterPress: onTermEnter,
			value: currentInputValue,
			onChangeCallback: onTermChange })
	);
};

EnteredTerms.propTypes = {
	onSettingsClick: _propTypes2.default.func.isRequired,
	enteredTerms: _propTypes2.default.arrayOf(_propTypes2.default.object),
	labels: _propTypes2.default.object,
	selectedTerm: _propTypes2.default.any
};

EnteredTerms.defaultProps = {
	onSettingsClick: function onSettingsClick() {
		return null;
	},
	terms: [],
	labels: {},
	selectedTerm: {}
};

exports.default = EnteredTerms;
module.exports = exports['default'];