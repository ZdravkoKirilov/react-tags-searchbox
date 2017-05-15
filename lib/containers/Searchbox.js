'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TermsReducer = require('../reducers/TermsReducer');

require('../styles/index.css');

require('bootstrap/dist/css/bootstrap.min.css');

var _TermsArea = require('../components1/TermsArea');

var _TermsArea2 = _interopRequireDefault(_TermsArea);

var _ControlsArea = require('../components1/ControlsArea');

var _ControlsArea2 = _interopRequireDefault(_ControlsArea);

var _SettingsModal = require('../components1/SettingsModal');

var _SettingsModal2 = _interopRequireDefault(_SettingsModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Searchbox = function (_Component) {
	_inherits(Searchbox, _Component);

	function Searchbox(props) {
		_classCallCheck(this, Searchbox);

		var _this = _possibleConstructorReturn(this, (Searchbox.__proto__ || Object.getPrototypeOf(Searchbox)).call(this, props));

		_this.onEscapeKey = function () {
			_this.setState(function (prevState) {
				return Object.assign({}, prevState, { selectedSuggestion: '', suggestions: [] });
			});
		};

		_this.onModalArrowKey = function (data) {
			var direction = data.direction;

			direction === 'left' && _this.moveSelectedTermLeft();
			direction === 'right' && _this.moveSelectedTermRight();
		};

		_this.moveSelectedTermLeft = function () {
			var _this$state = _this.state,
			    selectedTerm = _this$state.selectedTerm,
			    enteredTerms = _this$state.enteredTerms;

			var prevTerm = (0, _TermsReducer.getLeftTerm)(selectedTerm, enteredTerms);
			prevTerm && _this.setState(function (prevState) {
				return Object.assign({}, prevState, {
					selectedTerm: prevTerm
				});
			});
		};

		_this.moveSelectedTermRight = function () {
			var _this$state2 = _this.state,
			    selectedTerm = _this$state2.selectedTerm,
			    enteredTerms = _this$state2.enteredTerms;

			var nextTerm = (0, _TermsReducer.getRightTerm)(selectedTerm, enteredTerms);
			nextTerm && _this.setState(function (prevState) {
				return Object.assign({}, prevState, {
					selectedTerm: nextTerm
				});
			});
		};

		_this.onArrowKey = function (data) {
			var direction = data.direction;

			direction === 'up' && _this.moveSelectedSuggestionUp();
			direction === 'down' && _this.moveSelectedSuggestionDown();
		};

		_this.moveSelectedSuggestionUp = function () {
			var current = _this.state.suggestions.indexOf(_this.state.selectedSuggestion);
			var prevIndex = current - 1;
			var value = _this.state.suggestions[prevIndex];

			value && _this.setState(function (prevState) {
				return Object.assign({}, prevState, {
					selectedSuggestion: value,
					currentInputValue: value
				});
			});
		};

		_this.moveSelectedSuggestionDown = function () {
			var current = _this.state.suggestions.indexOf(_this.state.selectedSuggestion);
			var nextIndex = current + 1;
			var value = _this.state.suggestions[nextIndex];

			value && _this.setState(function (prevState) {
				return Object.assign({}, prevState, {
					selectedSuggestion: value,
					currentInputValue: value
				});
			});
		};

		_this.onLabelClick = function (label) {
			var data = (0, _TermsReducer.addTermLabel)(label, _this.state.enteredTerms, _this.state.selectedTerm);
			_this.setState(function (prevState) {
				return Object.assign({}, prevState, {
					enteredTerms: data.updatedTerms,
					selectedTerm: data.updatedTerm
				});
			});
		};

		_this.onTermListToggle = function () {
			_this.setState(function (prevState) {
				return Object.assign({}, prevState, {
					expandedTerms: !prevState.expandedTerms
				});
			});
		};

		_this.onSettingsToggle = function (term, fromModal) {

			_this.setState(function (prevState) {
				var data = {};
				if (fromModal) {
					data = Object.assign({}, prevState, {
						settingsVisible: false,
						selectedTerm: term
					});
				} else {
					data = Object.assign({}, prevState, { selectedTerm: term });
					data.settingsVisible = !!prevState.settingsVisible || true;
				}

				return data;
			});
		};

		_this.onSuggestionClick = function (value) {
			_this.onTermEnter({ value: value });
			_this.setState(function (prevState) {
				return Object.assign({}, prevState, {
					currentInputValue: '',
					suggestions: [],
					selectedSuggestion: null
				});
			});
		};

		_this.onTermChange = function (value) {
			var suggestions = [];
			if (value || value === '') {
				_this.setState(function (prevState) {
					return Object.assign({}, prevState, {
						currentInputValue: value,
						selectedSuggestion: null
					});
				});
			}
			if (value && value.length >= 3) {
				suggestions = _this.props.suggestionsPool.filter(function (elem) {
					return elem.toLowerCase().includes(value.toLowerCase());
				});

				suggestions.length > 0 && suggestions.unshift(value);
			}
			_this.setState(function (prevState) {
				return Object.assign({}, prevState, {
					suggestions: suggestions,
					selectedSuggestion: null
				});
			});
		};

		_this.onTermEnter = function (payload) {
			(payload || _this.state.currentInputValue) && _this.setState(function (prevState) {
				payload = payload || { value: _this.state.currentInputValue };
				if (prevState.enteredTerms.includes(payload)) {
					return prevState;
				} else {
					var updatedTerms = (0, _TermsReducer.enterTerm)(prevState.enteredTerms, _this.composeTerm(payload));
					_this.props.onTermsChange(updatedTerms);
					return Object.assign({}, prevState, {
						enteredTerms: updatedTerms,
						currentInputValue: '',
						suggestions: []
					});
				}
			});
		};

		_this.onTermRemove = function () {
			_this.setState(function (prevState) {
				var filtered = (0, _TermsReducer.removeTerm)(prevState.enteredTerms, prevState.selectedTerm);
				_this.props.onTermsChange(filtered);
				return Object.assign({}, prevState, {
					enteredTerms: filtered,
					settingsVisible: !prevState.settingsVisible,
					selectedTerm: null
				});
			});
		};

		_this.onSearchPress = function () {
			var terms = _this.state.enteredTerms;

			_this.props.onSearchPress(terms);
		};

		_this.composeTerm = function (payload) {
			var parts = payload.value.split(':');
			var value = void 0,
			    label = void 0;
			if (parts.length > 1) {
				label = parts.shift();
				value = parts.join('');
			} else {
				label = '';
				value = payload.value;
			}
			return {
				value: value,
				label: label
			};
		};

		_this.state = {
			enteredTerms: [],
			expandedTerms: false,
			settingsVisible: false,
			selectedTerm: {},
			currentInputValue: '',
			suggestions: [],
			selectedSuggestion: null
		};
		return _this;
	}

	_createClass(Searchbox, [{
		key: 'render',
		value: function render() {
			var onSearchPress = this.onSearchPress,
			    onTermEnter = this.onTermEnter,
			    onTermChange = this.onTermChange,
			    onModalArrowKey = this.onModalArrowKey,
			    onTermRemove = this.onTermRemove,
			    onLabelClick = this.onLabelClick,
			    onSettingsToggle = this.onSettingsToggle,
			    onArrowKey = this.onArrowKey,
			    onEscapeKey = this.onEscapeKey,
			    onSuggestionClick = this.onSuggestionClick;
			var _props = this.props,
			    labels = _props.labels,
			    searchEnabled = _props.searchEnabled;
			var _state = this.state,
			    currentInputValue = _state.currentInputValue,
			    enteredTerms = _state.enteredTerms,
			    settingsVisible = _state.settingsVisible,
			    selectedSuggestion = _state.selectedSuggestion,
			    suggestions = _state.suggestions,
			    selectedTerm = _state.selectedTerm;

			var RootCSS = 'searchbox-component';

			return _react2.default.createElement(
				'div',
				{ className: RootCSS },
				_react2.default.createElement(_TermsArea2.default, {
					onTermEnter: onTermEnter,
					onTermChange: onTermChange,
					currentInputValue: currentInputValue,
					enteredTerms: enteredTerms,
					onSettingsClick: onSettingsToggle,
					suggestions: suggestions,
					onArrowKey: onArrowKey,
					onEscapeKey: onEscapeKey,
					onSuggestionClick: onSuggestionClick,
					selectedSuggestion: selectedSuggestion,
					selectedTerm: selectedTerm,
					labels: labels
				}),
				_react2.default.createElement(_ControlsArea2.default, {
					onTermEnter: onTermEnter,
					onSearchPress: onSearchPress,
					searcEnabled: searchEnabled,
					onAddClick: onTermEnter
				}),
				_react2.default.createElement(_SettingsModal2.default, { isVisible: settingsVisible,
					onLabelClick: onLabelClick,
					onClose: onSettingsToggle,
					onTermRemove: onTermRemove,
					labels: labels,
					selectedTerm: selectedTerm,
					onArrowKey: onModalArrowKey
				})
			);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {

			this.setState(function (prevState) {
				var enteredTerms = this.props.enteredTerms;
				return Object.assign({}, prevState, {
					enteredTerms: prevState.enteredTerms.concat(enteredTerms)
				});
			});
		}
	}]);

	return Searchbox;
}(_react.Component);

Searchbox.propTypes = {
	suggestionsPool: _propTypes2.default.arrayOf(_propTypes2.default.string),
	onSearchPress: _propTypes2.default.func.isRequired,
	enteredTerms: _propTypes2.default.arrayOf(_propTypes2.default.object),
	onTermsChange: _propTypes2.default.func,
	labels: _propTypes2.default.object,
	searchEnabled: _propTypes2.default.bool
};
Searchbox.defaultProps = {
	suggestionsPool: [],
	enteredTerms: [],
	searchEnabled: true,
	labels: {}
};
exports.default = Searchbox;
module.exports = exports['default'];