import React, {Component} from 'react';

class Controls extends Component {
    render = () => {
        return (
            <div>
                <button className="btn btn-basic" onClick={this.props.onAddClick}>Add term</button>
                <button className="btn btn-success">Search</button>
            </div>
        );
    }
}

Controls.propTypes = {
    onAddClick: React.PropTypes.func.isRequired
}

export default Controls;