'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Term = require('./Term');

var _Term2 = _interopRequireDefault(_Term);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActiveTermsList = function ActiveTermsList(props) {
    var _ref = props.selectedTerm || {},
        value = _ref.value,
        label = _ref.label;

    var terms = props.terms.map(function (term, index) {
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
        { className: 'active-tags' },
        terms
    );
};

ActiveTermsList.propTypes = {
    onSettingsClick: _propTypes2.default.func.isRequired,
    labels: _propTypes2.default.object,
    selectedTerm: _propTypes2.default.any
};

exports.default = ActiveTermsList;
module.exports = exports['default'];