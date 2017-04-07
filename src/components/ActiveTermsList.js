import React from 'react';
import Term from './Term';

const ActiveTermsList = (props) => {
    const terms = props
        .terms
        .map((term, index) => {
            return <Term
             key={index} {...term} 
             onSettingsClick={props.onSettingsClick}
             labels={props.labels}
             />
        });
    return (

        <div className="active-tags" style={props.style}>
            {terms}
        </div>
    );
};

ActiveTermsList.propTypes = {
    style: React.PropTypes.object.isRequired,
    onSettingsClick: React.PropTypes.func.isRequired,
    labels: React.PropTypes.object
};

export default ActiveTermsList;