import React, {Component} from 'react';
import Cogwheel from '../assets/cogwheel.svg';

class ActiveTag extends Component {

    render = () => {
        // return <div className="search-term">     <span>{this.props.value}</span>
        // <span className="close-sign" onClick={this.onTermRemove}></span> </div>

        return <div className="search-term">
            <span>{this.props.value}</span>
            <img
                className="toggle-tag-settings"
                alt="Click for Tag Settings"
                src={Cogwheel}
                title="Click for Tag Settings"
                onClick={this.onSettingsClick}/>
        </div>
    }

    onSettingsClick = () => {
        this
            .props
            .onSettingsClick({title: this.props.value});
    }

    static propTypes = {
        onSettingsClick: React.PropTypes.func.isRequired,
        value: React.PropTypes.string.isRequired
    }
}

export default ActiveTag;