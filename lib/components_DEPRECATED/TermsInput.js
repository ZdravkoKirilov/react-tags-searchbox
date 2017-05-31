'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TermsInput = function (_Component) {
	_inherits(TermsInput, _Component);

	function TermsInput() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TermsInput);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TermsInput.__proto__ || Object.getPrototypeOf(TermsInput)).call.apply(_ref, [this].concat(args))), _this), _this.keycodes = {
			up_arrow: 38,
			down_arrow: 40,
			escape: 55
		}, _this.render = function () {
			return _react2.default.createElement(
				'div',
				{ className: 'terms-input' },
				_react2.default.createElement('input', {
					type: 'text',
					placeholder: 'type here to search...',
					onChange: _this.onChange,
					onKeyUp: _this.onKeyUp,
					value: _this.props.value,
					className: 'form-control insert-term' })
			);
		}, _this.onChange = function (event) {
			event.stopPropagation();
			var value = event.target.value;
			_this.props.onChangeCallback(value);
		}, _this.onKeyUp = function (event) {
			if (event.key === 'Enter') {
				_this.props.onEnterPress();
			}
			if (event.keyCode === _this.keycodes.up_arrow) {
				_this.props.onArrowKey({
					direction: 'up'
				});
			}
			if (event.keyCode === _this.keycodes.down_arrow) {
				_this.props.onArrowKey({
					direction: 'down'
				});
			}
			if (event.keyCode === 27) {
				_this.props.onEscapeKey();
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return TermsInput;
}(_react.Component);

TermsInput.propTypes = {
	onChangeCallback: _propTypes2.default.func.isRequired,
	onEnterPress: _propTypes2.default.func.isRequired,
	onArrowKey: _propTypes2.default.func.isRequired,
	value: _propTypes2.default.string.isRequired,
	onEscapeKey: _propTypes2.default.func.isRequired
};
exports.default = TermsInput;
module.exports = exports['default'];