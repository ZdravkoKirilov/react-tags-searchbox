import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

class Term extends Component {
	static propTypes = {
		onSettingsClick: PropTypes.func.isRequired,
		onRemove: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired,
		label: PropTypes.string,
		labelStyle: PropTypes.object
	};
	static defaultProps = {
		value: '',
		label: ''
	};
	render = () => {
		const {labelStyle} = this.props;
		const CSSClass = classNames('search-term');

		return (
			<div className={CSSClass} style={labelStyle}>
				<span className="term-title"
					  onClick={this.onSettingsClick}
					  title="Click to edit"
				>{this.props.value}</span>
				<span className="glyphicon glyphicon-remove remove-term"
					  onClick={this.onRemove}
					  title="Remove"></span>
			</div>
		)
	};

	onRemove = (event) => {
		const {value, label} = this.props;
		this.props.onRemove({
			value,
			label
		});
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