'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InteractionArea = require('../containers/InteractionArea');

var _InteractionArea2 = _interopRequireDefault(_InteractionArea);

var _OutputArea = require('../containers/OutputArea');

var _OutputArea2 = _interopRequireDefault(_OutputArea);

var _TermsReducer = require('../reducers/TermsReducer');

require('../styles/Searchbox.css');

require('bootstrap/dist/css/bootstrap.min.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Searchbox = function (_Component) {
	_inherits(Searchbox, _Component);

	function Searchbox(props) {
		_classCallCheck(this, Searchbox);

		var _this = _possibleConstructorReturn(this, (Searchbox.__proto__ || Object.getPrototypeOf(Searchbox)).call(this, props));

		_this.onLabelClick = function (label) {
			var data = (0, _TermsReducer.addTermLabel)(label, _this.state.enteredTerms, _this.state.selectedTerm);
			_this.setState(function (prevState) {
				return Object.assign({}, prevState, { enteredTerms: data.updatedTerms, selectedTerm: data.updatedTerm });
			});
		};

		_this.onTermListToggle = function () {
			_this.setState(function (prevState) {
				return Object.assign({}, prevState, {
					expandedTerms: !prevState.expandedTerms
				});
			});
		};

		_this.onSettingsClick = function (term) {

			_this.setState(function (prevState) {
				return Object.assign({}, prevState, {
					settingsVisible: !prevState.settingsVisible,
					selectedTerm: term
				});
			});
		};

		_this.onTermEnter = function (payload) {
			_this.setState(function (prevState) {
				if (prevState.enteredTerms.includes(payload)) {
					return prevState;
				} else {
					var updatedTerms = (0, _TermsReducer.enterTerm)(prevState.enteredTerms, _this.composeTerm(payload));
					_this.props.onTermsChange(updatedTerms);
					return Object.assign({}, prevState, { enteredTerms: updatedTerms });
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
			selectedTerm: null
		};
		return _this;
	}

	_createClass(Searchbox, [{
		key: 'render',
		value: function render() {
			var onSearchPress = this.onSearchPress,
			    onTermEnter = this.onTermEnter,
			    onTermRemove = this.onTermRemove,
			    onLabelClick = this.onLabelClick,
			    onTermListToggle = this.onTermListToggle,
			    onSettingsClick = this.onSettingsClick;
			var _props = this.props,
			    suggestionsPool = _props.suggestionsPool,
			    labels = _props.labels,
			    searchEnabled = _props.searchEnabled;
			var _state = this.state,
			    enteredTerms = _state.enteredTerms,
			    settingsVisible = _state.settingsVisible,
			    selectedTerm = _state.selectedTerm;

			var RootCSS = 'searchbox-root container-fluid';

			return _react2.default.createElement(
				'div',
				{ className: RootCSS },
				_react2.default.createElement(_OutputArea2.default, {
					terms: enteredTerms,
					onTermRemove: onTermRemove,
					onLabelClick: onLabelClick,
					onTermListToggle: onTermListToggle,
					labels: labels,
					settingsVisible: settingsVisible,
					selectedTerm: selectedTerm,
					onSettingsClick: onSettingsClick }),
				_react2.default.createElement(_InteractionArea2.default, {
					onSearchPress: onSearchPress,
					onTermEnter: onTermEnter,
					suggestionsPool: suggestionsPool,
					termsCount: enteredTerms.length,
					searchEnabled: searchEnabled
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
	searchEnabled: true
};
exports.default = Searchbox;
module.exports = exports['default'];