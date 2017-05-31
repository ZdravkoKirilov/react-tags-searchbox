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

var Controls = function (_Component) {
	_inherits(Controls, _Component);

	function Controls() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Controls);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Controls.__proto__ || Object.getPrototypeOf(Controls)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
			return _react2.default.createElement(
				'div',
				{ className: 'controls' },
				_react2.default.createElement(
					'button',
					{ className: 'btn btn-basic add-term', onClick: _this.props.onAddClick },
					_react2.default.createElement(
						'span',
						{
							className: 'badge' },
						_this.props.termsCount
					),
					_react2.default.createElement(
						'span',
						null,
						'Add'
					)
				),
				_this.props.searchEnabled ? _react2.default.createElement(
					'button',
					{ className: 'btn btn-success start-search', onClick: _this.props.onSearchPress },
					_react2.default.createElement('span', { className: 'glyphicon glyphicon-search' }),
					_react2.default.createElement(
						'span',
						null,
						'Find'
					)
				) : null
			);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return Controls;
}(_react.Component);

Controls.propTypes = {
	onAddClick: _propTypes2.default.func.isRequired,
	onSearchPress: _propTypes2.default.func.isRequired,
	termsCount: _propTypes2.default.number.isRequired,
	searchEnabled: _propTypes2.default.bool
};

exports.default = Controls;
module.exports = exports['default'];