import React, {Component} from 'react';

class SuggestedTerm extends Component {
	static propTypes = {
		onSuggestionClick: React.PropTypes.func.isRequired,
		value: React.PropTypes.string.isRequired
	}

    render = () => {
        return <p onClick={this.onClick} className="suggested-term">{this.props.value}</p>;
    };

    onClick = () => {
        this.props.onSuggestionClick(this.props.value);
    };
}

export default SuggestedTerm;