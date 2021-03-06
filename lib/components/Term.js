'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Term = function (_Component) {
	_inherits(Term, _Component);

	function Term() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Term);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Term.__proto__ || Object.getPrototypeOf(Term)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
			var labelStyle = _this.props.labelStyle;

			var CSSClass = (0, _classnames2.default)('search-term');

			return _react2.default.createElement(
				'div',
				{ className: CSSClass, style: labelStyle },
				_react2.default.createElement(
					'span',
					{ className: 'term-title',
						onClick: _this.onSettingsClick,
						title: 'Click to edit'
					},
					_this.props.value
				),
				_react2.default.createElement('span', { className: 'glyphicon glyphicon-remove remove-term',
					onClick: _this.onRemove,
					title: 'Remove' })
			);
		}, _this.onRemove = function (event) {
			var _this$props = _this.props,
			    value = _this$props.value,
			    label = _this$props.label;

			_this.props.onRemove({
				value: value,
				label: label
			});
		}, _this.onSettingsClick = function () {
			var _this$props2 = _this.props,
			    value = _this$props2.value,
			    label = _this$props2.label;

			_this.props.onSettingsClick({
				value: value,
				label: label
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return Term;
}(_react.Component);

Term.propTypes = {
	onSettingsClick: _propTypes2.default.func.isRequired,
	onRemove: _propTypes2.default.func.isRequired,
	value: _propTypes2.default.string.isRequired,
	label: _propTypes2.default.string,
	labelStyle: _propTypes2.default.object
};
Term.defaultProps = {
	value: '',
	label: ''
};
exports.default = Term;
module.exports = exports['default'];