'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TermsInput = require('../components_DEPRECATED/TermsInput');

var _TermsInput2 = _interopRequireDefault(_TermsInput);

var _Controls = require('../components_DEPRECATED/Controls');

var _Controls2 = _interopRequireDefault(_Controls);

var _SuggestionsList = require('../components_DEPRECATED/SuggestionsList');

var _SuggestionsList2 = _interopRequireDefault(_SuggestionsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InteractionArea = function (_Component) {
	_inherits(InteractionArea, _Component);

	function InteractionArea(props) {
		_classCallCheck(this, InteractionArea);

		var _this = _possibleConstructorReturn(this, (InteractionArea.__proto__ || Object.getPrototypeOf(InteractionArea)).call(this, props));

		_this.onInputChange = function (value) {

			if (value || value === '') {
				_this.setState(function (prevState) {
					return Object.assign({}, prevState, { inputValue: value, selectedSuggestion: null });
				});
			}
			if (value && value.length >= 3) {
				var suggestions = _this.props.suggestionsPool.filter(function (elem) {
					return elem.toLowerCase().includes(value.toLowerCase());
				});
				if (suggestions.length) {
					suggestions.unshift(value);
				}
				_this.setState(function (prevState) {
					return Object.assign({}, prevState, { suggestions: suggestions, selectedSuggestion: null });
				});
			} else {
				_this.setState(function (prevState) {
					return Object.assign({}, prevState, { suggestions: [], selectedSuggestion: null });
				});
			}
		};

		_this.onSuggestionClick = function (term) {
			_this.props.onTermEnter({ value: term });

			_this.setState(function (prevState) {
				return Object.assign({}, prevState, { inputValue: '', suggestions: [], selectedSuggestion: null });
			});
		};

		_this.onTermAdd = function () {
			if (_this.state.inputValue) {
				var enteredTerm = _this.state.inputValue;
				_this.props.onTermEnter({ value: enteredTerm });

				_this.setState(function (prevState) {
					return Object.assign({}, prevState, { inputValue: '', suggestions: [], selectedSuggestion: null });
				});
			}
		};

		_this.onTermEnter = function () {
			if (_this.state.inputValue) {
				var enteredTerm = _this.state.inputValue;
				_this.props.onTermEnter({ value: enteredTerm });

				_this.setState(function (prevState) {
					return { inputValue: '', suggestions: [], selectedSuggestion: null };
				});
			}
		};

		_this.onEscapeKey = function () {
			_this.setState(function (prevState) {
				return Object.assign({}, prevState, { selectedSuggestion: '', suggestions: [] });
			});
		};

		_this.onArrowKey = function (data) {
			var direction = data.direction;

			if (direction === 'up') {
				_this.moveSelectedSuggestionUp();
			}
			if (direction === 'down') {
				_this.moveSelectedSuggestionDown();
			}
		};

		_this.moveSelectedSuggestionUp = function () {
			var current = _this.state.suggestions.indexOf(_this.state.selectedSuggestion);
			var prevIndex = current - 1;
			var value = _this.state.suggestions[prevIndex];
			if (value) {
				_this.setState(function (prevState) {
					return Object.assign({}, prevState, { selectedSuggestion: value, inputValue: value });
				});
			}
		};

		_this.moveSelectedSuggestionDown = function () {
			var current = _this.state.suggestions.indexOf(_this.state.selectedSuggestion);
			var nextIndex = current + 1;
			var value = _this.state.suggestions[nextIndex];
			if (value) {
				_this.setState(function (prevState) {
					return Object.assign({}, prevState, { selectedSuggestion: value, inputValue: value });
				});
			}
		};

		_this.state = {
			inputValue: '',
			suggestions: [],
			selectedSuggestion: null
		};
		return _this;
	}

	_createClass(InteractionArea, [{
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'interaction-area container-fluid col-sm-7 col-xs-12 col-md-8' },
				_react2.default.createElement(_TermsInput2.default, {
					value: this.state.inputValue,
					onChangeCallback: this.onInputChange,
					onEnterPress: this.onTermEnter,
					onArrowKey: this.onArrowKey,
					onEscapeKey: this.onEscapeKey
				}),
				_react2.default.createElement(_SuggestionsList2.default, {
					suggestions: this.state.suggestions,
					onSuggestionClick: this.onSuggestionClick,
					selectedSuggestion: this.state.selectedSuggestion
				}),
				_react2.default.createElement(_Controls2.default, { onAddClick: this.onTermAdd,
					onSearchPress: this.props.onSearchPress,
					termsCount: this.props.termsCount,
					searchEnabled: this.props.searchEnabled
				})
			);
		}
	}]);

	return InteractionArea;
}(_react.Component);

InteractionArea.propTypes = {
	onTermEnter: _propTypes2.default.func.isRequired,
	suggestionsPool: _propTypes2.default.arrayOf(_propTypes2.default.string),
	termsCount: _propTypes2.default.number.isRequired,
	onSearchPress: _propTypes2.default.func.isRequired,
	searchEnabled: _propTypes2.default.bool
};
exports.default = InteractionArea;
module.exports = exports['default'];