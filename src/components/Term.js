import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Cogwheel from '../assets/cogwheel.svg';

class Term extends Component {
	static propTypes = {
		onSettingsClick: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired,
		label: PropTypes.string,
		labels: PropTypes.object,
		isSelected: PropTypes.bool.isRequired
	};
	static defaultProps = {
		labels: {},
		isSelected: false
	};
	render = () => {

		const currentLabel = this.props.label ? this.props.label.toLowerCase() : '';
		const capitalizedLabel = currentLabel.charAt(0).toUpperCase() + currentLabel.slice(1);
		const label = this.props.labels[currentLabel] || this.props.labels[capitalizedLabel];
		const labelStyle = label ? label.style : undefined;
		const CSSClass = this.props.isSelected ? 'search-term selected-element' : 'search-term';

		return <div className={CSSClass} style={labelStyle}>
			<span>{this.props.value}</span>
			<img
				className="toggle-tag-settings"
				alt="Click for Term Settings"
				src={Cogwheel}
				title="Click for Term Settings"
				onClick={this.onSettingsClick}/>
		</div>
	};

	onSettingsClick = () => {
		const {value, label} = this.props;
		this.props.onSettingsClick({
			value,
			label
		});
	};
}

export default Term;