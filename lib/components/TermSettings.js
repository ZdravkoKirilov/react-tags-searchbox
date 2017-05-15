'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TermLabel = require('./TermLabel');

var _TermLabel2 = _interopRequireDefault(_TermLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TermSettings = function (_Component) {
	_inherits(TermSettings, _Component);

	function TermSettings() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TermSettings);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TermSettings.__proto__ || Object.getPrototypeOf(TermSettings)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
			var _this$props = _this.props,
			    isVisible = _this$props.isVisible,
			    title = _this$props.title,
			    labels = _this$props.labels,
			    selectedTerm = _this$props.selectedTerm,
			    onLabelClick = _this$props.onLabelClick,
			    onTermRemove = _this$props.onTermRemove;

			var cssClass = isVisible ? 'tag-settings col-sm-12 col-lg-10 col-xs-10 visible-modal' : 'tag-settings hidden-top col-sm-8 col-lg-6 col-xs-10';

			var _labels = _this.composeLabels(labels, selectedTerm, onLabelClick);
			var labelSectionTitle = _labels.length > 0 ? 'Pick a label' : 'No labels to show';

			return _react2.default.createElement(
				'div',
				{ className: cssClass },
				_react2.default.createElement('div', { className: 'modal sb-overlay' }),
				_react2.default.createElement(
					'div',
					{ className: 'modal-content' },
					_react2.default.createElement(
						'div',
						{ className: 'tag-settings-header modal-header' },
						_react2.default.createElement(
							'h3',
							{ className: 'tag-settings-title' },
							title
						),
						_react2.default.createElement(
							'span',
							{ className: 'close', onClick: _this.onClose },
							'x'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'tag-settings-body modal-body' },
						_react2.default.createElement(
							'div',
							{ className: 'tag-settings-body-left' },
							_react2.default.createElement(
								'h5',
								null,
								labelSectionTitle
							),
							_labels
						),
						_react2.default.createElement(
							'div',
							{ className: 'tag-settings-body-right' },
							_react2.default.createElement(
								'h5',
								null,
								'Edit'
							),
							_react2.default.createElement(
								'p',
								{ className: 'btn btn-danger remove pull-right', onClick: onTermRemove },
								_react2.default.createElement('span', {
									className: 'glyphicon glyphicon-trash' }),
								_react2.default.createElement(
									'span',
									{ className: 'remove-text' },
									'Remove'
								)
							)
						)
					)
				)
			);
		}, _this.composeLabels = function (labels, selectedTerm, onLabelClick) {
			var _labels = [];
			var hasSelectedLabel = false;
			for (var key in labels) {
				var isSelected = selectedTerm && selectedTerm.label ? selectedTerm.label.toLowerCase() === key.toLowerCase() : false;
				if (isSelected) {
					hasSelectedLabel = true;
				}
				var component = _react2.default.createElement(_TermLabel2.default, _extends({}, labels[key], {
					key: key,
					onLabelClick: onLabelClick,
					isSelected: isSelected
				}));
				_labels.push(component);
			}
			if (_labels.length > 0) {

				_labels.push(_react2.default.createElement(_TermLabel2.default, {
					value: 'None',
					style: { background: '#ccc' },
					key: 'None',
					onLabelClick: onLabelClick,
					isSelected: !hasSelectedLabel
				}));
			}
			return _labels;
		}, _this.onClose = function () {
			_this.props.onClose('');
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return TermSettings;
}(_react.Component);

TermSettings.propTypes = {
	isVisible: _propTypes2.default.bool.isRequired,
	title: _propTypes2.default.string,
	labels: _propTypes2.default.object,
	onLabelClick: _propTypes2.default.func.isRequired,
	onClose: _propTypes2.default.func.isRequired,
	onTermRemove: _propTypes2.default.func.isRequired,
	selectedTerm: _propTypes2.default.any
};
TermSettings.defaultProps = {
	labels: {}
};
exports.default = TermSettings;
module.exports = exports['default'];