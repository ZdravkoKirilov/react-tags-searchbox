/**
 * Created by zkirilov on 11.5.2017 г..
 */

import React from 'react';
import PropTypes from 'prop-types';
import Term from './Term';
import InputControl from './InputControl'

const EnteredTerms = (props) => {
	const {value, label} = props.selectedTerm || {};
	const {enteredTerms, onTermEnter, currentInputValue, onTermChange} = props;
	const terms = enteredTerms.map((term, index) => {
		let isSelected = term.value === value && term.label === label;
		return <Term
			key={index} {...term}
			onSettingsClick={props.onSettingsClick}
			labels={props.labels}
			isSelected={isSelected}
		/>
	});
	return (

		<div className="entered-terms">
			{terms}
			<InputControl onEnterPress={onTermEnter}
						  value={currentInputValue}
						  onChangeCallback={onTermChange}/>
		</div>
	);
};

EnteredTerms.propTypes = {
	onSettingsClick: PropTypes.func.isRequired,
	enteredTerms: PropTypes.arrayOf(PropTypes.object),
	labels: PropTypes.object,
	selectedTerm: PropTypes.any
};

EnteredTerms.defaultProps = {
	onSettingsClick: () => null,
	terms: [],
	labels: {},
	selectedTerm: {}
};

export default EnteredTerms;