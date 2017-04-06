import React, {Component} from 'react';

class TagLabel extends Component {
    render = () => {
        const cssClass = `tag-label ${this.props.value}`;
        return <p className={cssClass} onClick={this.onClick}>{this.props.value}</p>
    }

    onClick = () => {
        this.props.onLabelClick(this.props.value);
    }

    static propTypes = {

    }
}

export default TagLabel;