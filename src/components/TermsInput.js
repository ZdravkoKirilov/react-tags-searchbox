import React, {Component} from 'react';

class TermsInput extends Component {
    render = () => {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Enter search terms"
                    onChange={this.onChange}
                    onKeyUp={this.onEnterPress}
                    value={this.props.value}
                    className="form-control"/>
            </div>
        );
    }

    onChange = (event) => {
        const value = event.target.value;
        this.props.onChangeCallback(value);
    }

    onEnterPress = (event) => {
       if (event.key === 'Enter') {
           this.props.onEnterPress();
       }
    }

    static propTypes = {
        onChangeCallback: React.PropTypes.func.isRequired,
        onEnterPress: React.PropTypes.func.isRequired,
        value: React.PropTypes.string.isRequired
    }
};

export default TermsInput;