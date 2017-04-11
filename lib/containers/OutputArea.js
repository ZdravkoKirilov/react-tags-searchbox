'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ActiveTermsList = require('../components/ActiveTermsList');

var _ActiveTermsList2 = _interopRequireDefault(_ActiveTermsList);

var _TermSettings = require('../components/TermSettings');

var _TermSettings2 = _interopRequireDefault(_TermSettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OutputArea = function (_Component) {
	_inherits(OutputArea, _Component);

	function OutputArea() {
		_classCallCheck(this, OutputArea);

		return _possibleConstructorReturn(this, (OutputArea.__proto__ || Object.getPrototypeOf(OutputArea)).apply(this, arguments));
	}

	_createClass(OutputArea, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    terms = _props.terms,
			    settingsVisible = _props.settingsVisible,
			    selectedTerm = _props.selectedTerm,
			    labels = _props.labels,
			    expanded = _props.expanded,
			    onTermListToggle = _props.onTermListToggle,
			    onLabelClick = _props.onLabelClick,
			    onTermRemove = _props.onTermRemove,
			    onSettingsClick = _props.onSettingsClick;


			var toggleClass = 'expand';
			var style = {
				height: '38px'
			};

			if (expanded) {
				toggleClass = "shrink";
				style = {
					height: '200px'
				};
			}

			return _react2.default.createElement(
				'div',
				{ className: 'output-area' },
				_react2.default.createElement(_ActiveTermsList2.default, {
					terms: terms,
					style: style,
					onSettingsClick: onSettingsClick,
					selectedTerm: selectedTerm,
					labels: labels }),
				_react2.default.createElement(_TermSettings2.default, {
					isVisible: settingsVisible,
					title: selectedTerm ? selectedTerm.value : null,
					labels: labels,
					onTermRemove: onTermRemove,
					onLabelClick: onLabelClick,
					onClose: onSettingsClick,
					selectedTerm: selectedTerm
				}),
				_react2.default.createElement(
					'span',
					{ className: 'terms-count' },
					terms.length
				),
				_react2.default.createElement(
					'div',
					{ className: 'toggle-terms' },
					_react2.default.createElement('div', { onClick: onTermListToggle, className: toggleClass })
				)
			);
		}
	}]);

	return OutputArea;
}(_react.Component);

OutputArea.propTypes = {
	terms: _propTypes2.default.arrayOf(_propTypes2.default.object),
	settingsVisible: _propTypes2.default.bool.isRequired,
	selectedTerm: _propTypes2.default.any,
	labels: _propTypes2.default.object,
	expanded: _propTypes2.default.bool.isRequired,
	onTermListToggle: _propTypes2.default.func.isRequired,
	onLabelClick: _propTypes2.default.func,
	onTermRemove: _propTypes2.default.func.isRequired,
	onSettingsClick: _propTypes2.default.func.isRequired
};
exports.default = OutputArea;
module.exports = exports['default'];