import React, {Component} from 'react';

class TermLabel extends Component {
    render = () => {
        const cssClass = `tag-label`;
        return <p style={this.props.style} className={cssClass} onClick={this.onClick}>{this.props.value}</p>
    }

    onClick = () => {
        this.props.onLabelClick(this.props.value);
    }

    static propTypes = {

    }
}

export default TermLabel;