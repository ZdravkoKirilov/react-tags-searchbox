'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InputControl = require('./InputControl');

var _InputControl2 = _interopRequireDefault(_InputControl);

var _Term = require('./Term');

var _Term2 = _interopRequireDefault(_Term);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zkirilov on 11.5.2017 г..
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var TermsArea = function (_Component) {
	_inherits(TermsArea, _Component);

	function TermsArea() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TermsArea);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TermsArea.__proto__ || Object.getPrototypeOf(TermsArea)).call.apply(_ref, [this].concat(args))), _this), _this.isSelected = function (term, selectedTerm) {
			term = term || {};
			selectedTerm = selectedTerm || {};
			var hasSameValue = term.value === selectedTerm.value;
			var hasSameLabel = term.label === selectedTerm.label || !!term.label === !!selectedTerm.label;
			return hasSameValue && hasSameLabel;
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TermsArea, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    onTermEnter = _props.onTermEnter,
			    currentInputValue = _props.currentInputValue,
			    onTermChange = _props.onTermChange,
			    onSuggestionClick = _props.onSuggestionClick,
			    selectedSuggestion = _props.selectedSuggestion,
			    enteredTerms = _props.enteredTerms,
			    onSettingsClick = _props.onSettingsClick,
			    suggestions = _props.suggestions,
			    onArrowKey = _props.onArrowKey,
			    onEscapeKey = _props.onEscapeKey,
			    selectedTerm = _props.selectedTerm,
			    labels = _props.labels,
			    onTermRemove = _props.onTermRemove;

			var terms = enteredTerms.map(function (term, index) {
				var isSelected = _this2.isSelected(term, selectedTerm);
				return _react2.default.createElement(_Term2.default, {
					key: '' + term.uniqueID,
					value: term.value,
					onSettingsClick: onSettingsClick,
					onRemove: onTermRemove,
					isSelected: isSelected,
					label: term.label,
					labels: labels
				});
			});

			return _react2.default.createElement(
				'div',
				{ className: 'terms-area' },
				_react2.default.createElement(
					'div',
					{ className: 'entered-terms' },
					_react2.default.createElement(
						_reactAddonsCssTransitionGroup2.default,
						{
							transitionName: 'slide',
							transitionEnterTimeout: 200,
							transitionLeaveTimeout: 200
						},
						terms
					),
					_react2.default.createElement(_InputControl2.default, { onEnterPress: onTermEnter,
						value: currentInputValue,
						onChangeCallback: onTermChange,
						suggestions: suggestions,
						onArrowKey: onArrowKey,
						onEscapeKey: onEscapeKey,
						onSuggestionClick: onSuggestionClick,
						selectedSuggestion: selectedSuggestion
					})
				)
			);
		}
	}]);

	return TermsArea;
}(_react.Component);

TermsArea.propTypes = {
	onTermEnter: _propTypes2.default.func.isRequired,
	onTermRemove: _propTypes2.default.func.isRequired,
	currentInputValue: _propTypes2.default.string,
	onTermChange: _propTypes2.default.func,
	enteredTerms: _propTypes2.default.arrayOf(_propTypes2.default.object),
	suggestions: _propTypes2.default.arrayOf(_propTypes2.default.string),
	onArrowKey: _propTypes2.default.func,
	onEscapeKey: _propTypes2.default.func,
	onSuggestionClick: _propTypes2.default.func,
	selectedSuggestion: _propTypes2.default.string,
	selectedTerm: _propTypes2.default.any,
	labels: _propTypes2.default.object
};
exports.default = TermsArea;
module.exports = exports['default'];