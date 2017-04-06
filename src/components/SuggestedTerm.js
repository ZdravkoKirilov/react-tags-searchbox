import React, {Component} from 'react';

class SuggestedTerm extends Component {
    render = () => {
        return <p onClick={this.onClick} className="suggested-term">{this.props.value}</p>;
    }

    onClick = () => {
        this.props.onSuggestionClick(this.props.value);
    }

    static propTypes = {
        onSuggestionClick: React.PropTypes.func.isRequired,
        value: React.PropTypes.string.isRequired
    }
}

export default SuggestedTerm;