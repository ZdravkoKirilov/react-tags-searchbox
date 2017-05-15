import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

class Term extends Component {
	static propTypes = {
		onSettingsClick: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired,
		label: PropTypes.string,
		labels: PropTypes.object,
		isSelected: PropTypes.bool.isRequired,
		labelStyle: PropTypes.object
	};
	static defaultProps = {
		labels: {},
		isSelected: false,
		value: '',
		label: ''
	};
	render = () => {
		const labelStyle = this.getLabelStyle();
		const CSSClass = classNames('search-term', {
			'selected': this.props.isSelected
		});

		return (
			<div className={CSSClass} style={labelStyle}>
				<span>{this.props.value}</span>
				<span className="glyphicon glyphicon-pencil toggle-tag-settings" onClick={this.onSettingsClick}></span>
			</div>
		)
	};

	onSettingsClick = () => {
		const {value, label} = this.props;
		this.props.onSettingsClick({
			value,
			label
		});
	};

	getLabelStyle = () => {
		const currentLabel = this.props.label ? this.props.label.toLowerCase() : '';
		const capitalizedLabel = currentLabel.charAt(0).toUpperCase() + currentLabel.slice(1);
		const label = this.props.labels[currentLabel] || this.props.labels[capitalizedLabel];
		const labelStyle = label ? label.style : undefined;
		return labelStyle;
	}
}

export default Term;