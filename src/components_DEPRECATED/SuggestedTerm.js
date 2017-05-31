import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SuggestedTerm extends Component {
	static propTypes = {
		onSuggestionClick: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired,
		isActive: PropTypes.bool.isRequired
	};

	render = () => {
		const CSSClass = this.props.isActive ? 'suggested-term active-suggested-term' : 'suggested-term';
		return <p onClick={this.onClick} className={CSSClass}>{this.props.value}</p>;
	};

	onClick = () => {
		this.props.onSuggestionClick(this.props.value);
	};
}

export default SuggestedTerm;