import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TermLabel extends Component {
	static keycodes = {
		escape: 27
	};
	render = () => {
		const cssClass = this.props.isSelected ? `tag-label btn selected-element` : 'tag-label btn';
		return <p style={this.props.style}
				  className={cssClass}
				  onClick={this.onClick}
				  tabIndex={0}
				  onKeyUp={this.onKeyUp}
		>{this.props.value}</p>
	};

	onClick = () => {
		let value = this.props.value === 'None' ? '' : this.props.value;
		this.props.onLabelClick(value);
	};

	onKeyUp = (event) => {
		event.stopPropagation();
		if (event.key === 'Enter') {
			this.onClick();
		}
		if (event.keyCode === TermLabel.keycodes.escape) {
			this.props.onKeyUp(event);
		}
	};

	static propTypes = {
		style: PropTypes.object,
		value: PropTypes.string.isRequired,
		onLabelClick: PropTypes.func.isRequired,
		isSelected: PropTypes.bool.isRequired,
		onKeyUp: PropTypes.func
	}
}

export default TermLabel;