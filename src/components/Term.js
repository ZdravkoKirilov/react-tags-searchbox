import React, {Component} from 'react';
import Cogwheel from '../assets/cogwheel.svg';

class Term extends Component {

    render = () => {
        // return <div className="search-term">     <span>{this.props.value}</span>
        // <span className="close-sign" onClick={this.onTermRemove}></span> </div>
        
        let style = this.props.labels[this.props.label];
        style = style ? style.style : undefined;
        return <div className="search-term" style={style}>
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
        this.props.onSettingsClick(this.props.value);
    };

    static propTypes = {
        onSettingsClick: React.PropTypes.func.isRequired,
        value: React.PropTypes.string.isRequired
    }
}

export default Term;