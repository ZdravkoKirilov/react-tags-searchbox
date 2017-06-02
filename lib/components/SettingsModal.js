'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TermLabel = require('./TermLabel');

var _TermLabel2 = _interopRequireDefault(_TermLabel);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSimpleContenteditable = require('react-simple-contenteditable');

var _reactSimpleContenteditable2 = _interopRequireDefault(_reactSimpleContenteditable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by zkirilov on 11.5.2017 г..
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SettingsModal = function (_Component) {
	_inherits(SettingsModal, _Component);

	function SettingsModal() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, SettingsModal);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SettingsModal.__proto__ || Object.getPrototypeOf(SettingsModal)).call.apply(_ref, [this].concat(args))), _this), _this.root = null, _this.render = function () {
			var _this$props = _this.props,
			    isVisible = _this$props.isVisible,
			    labels = _this$props.labels,
			    selectedTerm = _this$props.selectedTerm,
			    onLabelClick = _this$props.onLabelClick;

			var CSSClass = (0, _classnames2.default)('settings-modal', {
				'visible-modal': isVisible,
				'hidden-modal': !isVisible
			});

			var _labels = _this.composeLabels(labels, selectedTerm, onLabelClick);
			var labelSectionTitle = _labels.length > 0 ? 'Pick a label' : 'No labels to show';

			return _react2.default.createElement(
				'div',
				{ className: CSSClass,
					tabIndex: 0,
					ref: function ref(e) {
						return _this.wrapper = e;
					},
					onKeyUp: _this.onKeyUp
				},
				_react2.default.createElement(
					'div',
					{ className: 'modal-content' },
					_react2.default.createElement(
						'div',
						{ className: 'modal-header' },
						_react2.default.createElement(
							'span',
							{
								className: 'close',
								onClick: _this.onClose,
								tabIndex: 0,
								onKeyUp: _this.onClose_keyboard
							},
							'x'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'modal-body' },
						_react2.default.createElement(
							'div',
							{ className: 'modal-body-left' },
							_react2.default.createElement(
								'h5',
								null,
								labelSectionTitle
							),
							_labels
						),
						_react2.default.createElement(
							'div',
							{ className: 'modal-body-right' },
							_react2.default.createElement(
								'h5',
								null,
								'Edit'
							),
							_react2.default.createElement(
								'p',
								{ className: 'btn btn-danger remove',
									onClick: _this.onTermRemove,
									tabIndex: 0,
									onKeyUp: _this.onTermRemove_keyboard
								},
								_react2.default.createElement('span', { className: 'glyphicon glyphicon-trash' }),
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
		}, _this.onTitleChange = function (event) {
			event.stopPropagation();
			event.preventDefault();
			var newTitle = event.target.textContent;
			_this.props.onTitleChange({
				value: _this.props.selectedTerm.value,
				label: _this.props.selectedTerm.label
			}, newTitle);
		}, _this.onClose = function () {
			_this.props.onClose('', true);
		}, _this.onClose_keyboard = function (event) {
			event.stopPropagation();
			if (event.key === 'Enter' || event.keyCode === SettingsModal.keycodes.escape) {
				_this.onClose();
			}
		}, _this.onTermRemove = function () {
			_this.props.onTermRemove({
				value: _this.props.selectedTerm.value,
				label: _this.props.selectedTerm.label
			});
		}, _this.onTermRemove_keyboard = function (event) {
			event.stopPropagation();
			if (event.key === 'Enter') {
				_this.props.onTermRemove({
					value: _this.props.selectedTerm.value,
					label: _this.props.selectedTerm.label
				});
			}
			if (event.keyCode === SettingsModal.keycodes.escape) {
				_this.onClose();
			}
		}, _this.onKeyUp = function (event) {
			if (event.keyCode === SettingsModal.keycodes.left_arrow) {
				_this.props.onArrowKey({
					direction: 'left'
				});
			}
			if (event.keyCode === SettingsModal.keycodes.right_arrow) {
				_this.props.onArrowKey({
					direction: 'right'
				});
			}
			// if (event.keyCode === SettingsModal.keycodes.backspace && event.target.className !== 'modal-title') {
			// 	this.props.onArrowKey({
			// 		direction: 'right'
			// 	});
			// }

			if (event.keyCode === SettingsModal.keycodes.escape) {
				_this.onClose();
			}

			if (event.keyCode === SettingsModal.keycodes.del) {
				_this.props.onTermRemove({
					value: _this.props.selectedTerm.value,
					label: _this.props.selectedTerm.label
				});
			}
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
					isSelected: isSelected,
					onKeyUp: _this.onKeyUp
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
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(SettingsModal, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.isVisible !== this.props.isVisible) {
				this.wrapper.focus();
			}
		}
	}]);

	return SettingsModal;
}(_react.Component);

SettingsModal.propTypes = {
	isVisible: _propTypes2.default.bool.isRequired,
	labels: _propTypes2.default.object,
	onLabelClick: _propTypes2.default.func.isRequired,
	onTitleChange: _propTypes2.default.func.isRequired,
	onClose: _propTypes2.default.func.isRequired,
	onTermRemove: _propTypes2.default.func.isRequired,
	selectedTerm: _propTypes2.default.any,
	onArrowKey: _propTypes2.default.func
};
SettingsModal.defaultProps = {
	labels: {},
	selectedTerm: {}
};
SettingsModal.keycodes = {
	left_arrow: 37,
	right_arrow: 39,
	escape: 27,
	del: 46,
	backspace: 32
};
exports.default = SettingsModal;
module.exports = exports['default'];