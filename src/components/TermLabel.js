import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TermLabel extends Component {
    render = () => {
        const cssClass = this.props.isSelected ? `tag-label selected-element` : 'tag-label';
        return <p style={this.props.style} className={cssClass} onClick={this.onClick}>{this.props.value}</p>
    };

    onClick = () => {
        this.props.onLabelClick(this.props.value);
    };

    static propTypes = {
        style: PropTypes.object,
		value: PropTypes.string.isRequired,
		onLabelClick: PropTypes.func.isRequired,
		isSelected: PropTypes.bool.isRequired
    }
}

export default TermLabel;