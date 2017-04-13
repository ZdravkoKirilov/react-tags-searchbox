import React from 'react';
import PropTypes from 'prop-types';
import SuggestedTerm from './SuggestedTerm';

const Suggestions = (props) => {
	const suggestions = props
	.suggestions
	.map((elem, index) => {
		let isActive = false;

		if (elem === props.selectedSuggestion) {
			isActive = true;
		}

		return <SuggestedTerm
			onSuggestionClick={props.onSuggestionClick}
			key={index}
			value={elem}
			isActive={isActive}
		/>
	})
	.slice(0, 10);

	return (
		<div className="suggestions">
			{suggestions}
		</div>
	);
};

Suggestions.propTypes = {
	suggestions: PropTypes
	.arrayOf(PropTypes.string),
	onSuggestionClick: PropTypes.func,
	selectedSuggestion: PropTypes.string
};

Suggestions.defaultProps = {
	suggestions: []
};

export default Suggestions;