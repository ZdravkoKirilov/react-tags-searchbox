'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SuggestionsList = require('./SuggestionsList');

var _SuggestionsList2 = _interopRequireDefault(_SuggestionsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputControl = function (_Component) {
	_inherits(InputControl, _Component);

	function InputControl() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, InputControl);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputControl.__proto__ || Object.getPrototypeOf(InputControl)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
			var _this$props = _this.props,
			    suggestions = _this$props.suggestions,
			    onSuggestionClick = _this$props.onSuggestionClick,
			    value = _this$props.value,
			    selectedSuggestion = _this$props.selectedSuggestion;

			return _react2.default.createElement(
				'div',
				{ className: 'input-control' },
				_react2.default.createElement('input', {
					type: 'text',
					placeholder: 'type here to search...',
					onChange: _this.onChange,
					onKeyUp: _this.onKeyUp,
					value: value,
					className: 'insert-term' }),
				_react2.default.createElement(_SuggestionsList2.default, {
					suggestions: suggestions,
					onSuggestionClick: onSuggestionClick,
					selectedSuggestion: selectedSuggestion
				})
			);
		}, _this.onChange = function (event) {
			event.stopPropagation();
			var value = event.target.value;
			_this.props.onChangeCallback(value);
		}, _this.onKeyUp = function (event) {
			if (event.key === 'Enter') {
				_this.props.onEnterPress({
					value: _this.props.value
				});
			}
			if (event.keyCode === InputControl.keycodes.up_arrow) {
				_this.props.onArrowKey({
					direction: 'up'
				});
			}
			if (event.keyCode === InputControl.keycodes.down_arrow) {
				_this.props.onArrowKey({
					direction: 'down'
				});
			}
			if (event.keyCode === InputControl.keycodes.escape) {
				_this.props.onEscapeKey();
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return InputControl;
}(_react.Component);

InputControl.defaultProps = {
	value: ''
};
InputControl.propTypes = {
	onChangeCallback: _propTypes2.default.func.isRequired,
	onEnterPress: _propTypes2.default.func.isRequired,
	onSuggestionClick: _propTypes2.default.func,
	onArrowKey: _propTypes2.default.func.isRequired,
	value: _propTypes2.default.string.isRequired,
	onEscapeKey: _propTypes2.default.func.isRequired,
	suggestions: _propTypes2.default.arrayOf(_propTypes2.default.string),
	selectedSuggestion: _propTypes2.default.string
};
InputControl.keycodes = {
	up_arrow: 38,
	down_arrow: 40,
	escape: 27
};
exports.default = InputControl;
module.exports = exports['default'];