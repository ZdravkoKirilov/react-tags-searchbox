/**
 * Created by zkirilov on 11.5.2017 г..
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TermLabel from './TermLabel'
import classNames from 'classnames'
import ContentEditable from 'react-simple-contenteditable'

export default class SettingsModal extends Component {
	static propTypes = {
		isVisible: PropTypes.bool.isRequired,
		labels: PropTypes.object,
		onLabelClick: PropTypes.func.isRequired,
		onTitleChange: PropTypes.func.isRequired,
		onClose: PropTypes.func.isRequired,
		onTermRemove: PropTypes.func.isRequired,
		selectedTerm: PropTypes.any,
		onArrowKey: PropTypes.func
	};

	static defaultProps = {
		labels: {},
		selectedTerm: {}
	};

	static keycodes = {
		left_arrow: 37,
		right_arrow: 39,
		escape: 27,
		del: 46,
		backspace: 32
	};

	root = null;

	render = () => {
		const {isVisible, labels, selectedTerm, onLabelClick} = this.props;
		const CSSClass = classNames('settings-modal', {
			'visible-modal': isVisible,
			'hidden-modal': !isVisible
		});

		const _labels = this.composeLabels(labels, selectedTerm, onLabelClick);
		const labelSectionTitle = _labels.length > 0 ? 'Pick a label' : 'No labels to show';

		return (

			<div className={CSSClass}
				 tabIndex={0}
				 ref={e => (this.wrapper = e)}
				 onKeyUp={this.onKeyUp}
			>

				<div className="modal-content">

					<div className="modal-header">
						{/*<h3 contentEditable={true}*/}
							{/*className="modal-title"*/}
							{/*title="Click to edit"*/}
							{/*onBlur={this.onTitleChange}*/}
						{/*>{selectedTerm ? selectedTerm.value : ''}</h3>*/}
						{/*<ContentEditable*/}
							{/*html={selectedTerm ? selectedTerm.value : ''}*/}
							{/*className="modal-title"*/}
							{/*title="Click to edit"*/}
							{/*onChange={this.onTitleChange}*/}
							{/*contentEditable="plaintext-only"*/}
						{/*/>*/}
						<span
							className="close"
							onClick={this.onClose}
							tabIndex={0}
							onKeyUp={this.onClose_keyboard}
						>x</span>
					</div>

					<div className="modal-body">

						<div className="modal-body-left">
							<h5>{labelSectionTitle}</h5>
							{_labels}
						</div>

						<div className="modal-body-right">
							<h5>Edit</h5>
							<p className="btn btn-danger remove"
							   onClick={this.onTermRemove}
							   tabIndex={0}
							   onKeyUp={this.onTermRemove_keyboard}
							>
								<span className="glyphicon glyphicon-trash"></span>
								<span className="remove-text">Remove</span>
							</p>
						</div>

					</div>
				</div>
			</div>
		)
	};

	onTitleChange = (event) => {
		event.stopPropagation();
		event.preventDefault();
		const newTitle = event.target.textContent;
		this.props.onTitleChange({
			value: this.props.selectedTerm.value,
			label: this.props.selectedTerm.label
		}, newTitle);
	};
	onClose = () => {
		this.props.onClose('', true);
	};

	onClose_keyboard = (event) => {
		event.stopPropagation();
		if (event.key === 'Enter' || event.keyCode === SettingsModal.keycodes.escape) {
			this.onClose();
		}
	};

	onTermRemove = () => {
		this.props.onTermRemove({
			value: this.props.selectedTerm.value,
			label: this.props.selectedTerm.label
		});
	};

	onTermRemove_keyboard = (event) => {
		event.stopPropagation();
		if (event.key === 'Enter') {
			this.props.onTermRemove({
				value: this.props.selectedTerm.value,
				label: this.props.selectedTerm.label
			});
		}
		if (event.keyCode === SettingsModal.keycodes.escape) {
			this.onClose();
		}
	};

	onKeyUp = (event) => {
		if (event.keyCode === SettingsModal.keycodes.left_arrow) {
			this.props.onArrowKey({
				direction: 'left'
			});
		}
		if (event.keyCode === SettingsModal.keycodes.right_arrow) {
			this.props.onArrowKey({
				direction: 'right'
			});
		}
		// if (event.keyCode === SettingsModal.keycodes.backspace && event.target.className !== 'modal-title') {
		// 	this.props.onArrowKey({
		// 		direction: 'right'
		// 	});
		// }

		if (event.keyCode === SettingsModal.keycodes.escape) {
			this.onClose();
		}

		if (event.keyCode === SettingsModal.keycodes.del) {
			this.props.onTermRemove({
				value: this.props.selectedTerm.value,
				label: this.props.selectedTerm.label
			});
		}
	};

	composeLabels = (labels, selectedTerm, onLabelClick) => {
		let _labels = [];
		let hasSelectedLabel = false;
		for (let key in labels) {
			let isSelected = (selectedTerm && selectedTerm.label) ? (selectedTerm.label.toLowerCase() === key.toLowerCase()) : false;
			if (isSelected) {
				hasSelectedLabel = true;
			}
			const component = <TermLabel
				{...labels[key]}
				key={key}
				onLabelClick={onLabelClick}
				isSelected={isSelected}
				onKeyUp={this.onKeyUp}
			/>;
			_labels.push(component);
		}
		if (_labels.length > 0) {

			_labels.push(<TermLabel
				value={'None'}
				style={{background: '#ccc'}}
				key={'None'}
				onLabelClick={onLabelClick}
				isSelected={!hasSelectedLabel}
			/>);
		}
		return _labels;
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.isVisible !== this.props.isVisible) {
			this.wrapper.focus();
		}
	}
}