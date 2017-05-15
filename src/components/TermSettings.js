import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TermLabel from './TermLabel';

class TermSettings extends Component {
	static propTypes = {
		isVisible: PropTypes.bool.isRequired,
		title: PropTypes.string,
		labels: PropTypes.object,
		onLabelClick: PropTypes.func.isRequired,
		onClose: PropTypes.func.isRequired,
		onTermRemove: PropTypes.func.isRequired,
		selectedTerm: PropTypes.any
	};

	static defaultProps = {
		labels: {}
	};

	render = () => {
		const {isVisible, title, labels, selectedTerm, onLabelClick, onTermRemove} = this.props;
		const cssClass = isVisible ? 'tag-settings col-sm-12 col-lg-10 col-xs-10 visible-modal' : 'tag-settings hidden-top col-sm-8 col-lg-6 col-xs-10';

		const _labels = this.composeLabels(labels, selectedTerm, onLabelClick);
		const labelSectionTitle = _labels.length > 0 ? 'Pick a label' : 'No labels to show';

		return (

			<div className={cssClass}>

				<div className="modal sb-overlay">

				</div>
				<div className="modal-content">
					<div className="tag-settings-header modal-header">
						<h3 className="tag-settings-title">{title}</h3>
						<span className="close" onClick={this.onClose}>x</span>
					</div>

					<div className="tag-settings-body modal-body">
						<div className="tag-settings-body-left">
							<h5>{labelSectionTitle}</h5>
							{_labels}
						</div>
						<div className="tag-settings-body-right">
							<h5>Edit</h5>
							<p className="btn btn-danger remove pull-right" onClick={onTermRemove}>
						<span
							className="glyphicon glyphicon-trash"></span>
								<span className="remove-text">Remove</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		)
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

	onClose = () => {
		this.props.onClose('');
	}
}

export default TermSettings;