import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Controls extends Component {
    render = () => {
        return (
            <div>
                <button className="btn btn-basic add-term" onClick={this.props.onAddClick}>Add term</button>
                <button className="btn btn-success start-search" onClick={this.props.onSearchPress}>Search</button>
            </div>
        );
    }
}

Controls.propTypes = {
    onAddClick: PropTypes.func.isRequired,
    onSearchPress: PropTypes.func.isRequired
};

export default Controls;