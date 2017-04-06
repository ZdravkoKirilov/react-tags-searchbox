import React from 'react';
import ActiveTag from './ActiveTag';

const ActiveTagsList = (props) => {
    const tags = props
        .terms
        .map((term, index) => {
            return <ActiveTag key={index} {...term} onSettingsClick={props.onSettingsClick}/>
        });
    return (

        <div className="active-tags" style={props.style}>
            {tags}
        </div>
    );
}

ActiveTagsList.propTypes = {
    style: React.PropTypes.object.isRequired,
    onSettingsClick: React.PropTypes.func.isRequired
}

export default ActiveTagsList;