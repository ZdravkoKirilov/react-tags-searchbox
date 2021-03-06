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

var TermLabel = function (_Component) {
	_inherits(TermLabel, _Component);

	function TermLabel() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TermLabel);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TermLabel.__proto__ || Object.getPrototypeOf(TermLabel)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
			var cssClass = _this.props.isSelected ? 'tag-label btn selected-element' : 'tag-label btn';
			return _react2.default.createElement(
				'p',
				{ style: _this.props.style,
					className: cssClass,
					onClick: _this.onClick,
					tabIndex: 0,
					onKeyUp: _this.onKeyUp
				},
				_this.props.value
			);
		}, _this.onClick = function () {
			var value = _this.props.value === 'None' ? '' : _this.props.value;
			_this.props.onLabelClick(value);
		}, _this.onKeyUp = function (event) {
			event.stopPropagation();
			if (event.key === 'Enter') {
				_this.onClick();
			}
			if (event.keyCode === TermLabel.keycodes.escape) {
				_this.props.onKeyUp(event);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return TermLabel;
}(_react.Component);

TermLabel.keycodes = {
	escape: 27
};
TermLabel.propTypes = {
	style: _propTypes2.default.object,
	value: _propTypes2.default.string.isRequired,
	onLabelClick: _propTypes2.default.func.isRequired,
	isSelected: _propTypes2.default.bool.isRequired,
	onKeyUp: _propTypes2.default.func
};
exports.default = TermLabel;
module.exports = exports['default'];