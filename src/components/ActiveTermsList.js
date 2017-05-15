import React from 'react';
import PropTypes from 'prop-types';
import Term from './Term';

const ActiveTermsList = (props) => {
	const {value, label} = props.selectedTerm || {};
    const terms = props
        .terms
        .map((term, index) => {
    	    let isSelected = term.value === value && term.label === label;
            return <Term
             key={index} {...term} 
             onSettingsClick={props.onSettingsClick}
             labels={props.labels}
			 isSelected={isSelected}
             />
        });
    return (

        <div className="active-tags">
            {terms}
        </div>
    );
};

ActiveTermsList.propTypes = {
    onSettingsClick: PropTypes.func.isRequired,
    labels: PropTypes.object,
	selectedTerm: PropTypes.any
};

export default ActiveTermsList;