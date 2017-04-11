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
		labels: []
	};
	render = () => {
		const {isVisible, title, labels, selectedTerm, onLabelClick, onTermRemove} = this.props;
		const cssClass = isVisible ? 'tag-settings' : 'tag-settings hidden-left';

		let _labels = [];
		for (let key in labels) {
			let isSelected = (selectedTerm && selectedTerm.label) ? (selectedTerm.label.toLowerCase() === key.toLowerCase()) : false;
			const component = <TermLabel
				{...labels[key]}
				key={key}
				onLabelClick={onLabelClick}
				isSelected={isSelected}
			/>;
			_labels.push(component);
		}
		const labelSectionTitle = _labels.length > 0 ? 'Pick a label' : 'No labels to show';

		return <div className={cssClass}>

			<div className="tag-settings-header">
				<h3 className="tag-settings-title">{title}</h3>
				<p className="btn btn-default done" onClick={this.onClose}>Done</p>
			</div>

			<div className="tag-settings-body">
				<div className="tag-settings-body-left">
					<h5>{labelSectionTitle}</h5>
					{_labels}
				</div>
				<div className="tag-settings-body-right">
					<h5>Edit</h5>
					<p className="btn btn-danger remove" onClick={onTermRemove}>Remove</p>
				</div>
			</div>
		</div>
	};

	onClose = () => {
		this.props.onClose('');
	}
}

export default TermSettings;