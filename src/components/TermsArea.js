/**
 * Created by zkirilov on 11.5.2017 г..
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import InputControl from './InputControl'
import Term from './Term';

export default class TermsArea extends Component {

	static propTypes = {
		onTermEnter: PropTypes.func.isRequired,
		onTermRemove: PropTypes.func.isRequired,
		currentInputValue: PropTypes.string,
		onTermChange: PropTypes.func,
		enteredTerms: PropTypes.arrayOf(PropTypes.object),
		suggestions: PropTypes.arrayOf(PropTypes.string),
		onArrowKey: PropTypes.func,
		onEscapeKey: PropTypes.func,
		onSuggestionClick: PropTypes.func,
		selectedSuggestion: PropTypes.string,
		selectedTerm: PropTypes.any,
		labels: PropTypes.object
	};

	render() {
		const {onTermEnter, currentInputValue, onTermChange, onSuggestionClick, selectedSuggestion,
			enteredTerms, onSettingsClick, suggestions, onArrowKey, onEscapeKey, selectedTerm, labels, onTermRemove} = this.props;
		const terms = enteredTerms.map((term, index) => {
			const isSelected = this.isSelected(term, selectedTerm);
			return <Term
				key={index}
				value={term.value}
				onSettingsClick={onSettingsClick}
				onRemove={onTermRemove}
				isSelected={isSelected}
				label={term.label}
				labels={labels}
			/>
		});

		return (
			<div className="terms-area">
				<div className="entered-terms">
					{terms}
					<InputControl onEnterPress={onTermEnter}
								  value={currentInputValue}
								  onChangeCallback={onTermChange}
								  suggestions={suggestions}
								  onArrowKey={onArrowKey}
								  onEscapeKey={onEscapeKey}
								  onSuggestionClick={onSuggestionClick}
								  selectedSuggestion={selectedSuggestion}
					/>
				</div>
			</div>
		)
	}

	isSelected = (term, selectedTerm) => {
		term = term || {};
		selectedTerm = selectedTerm || {};
		const hasSameValue = term.value === selectedTerm.value;
		const hasSameLabel = term.label === selectedTerm.label || !!term.label === !!selectedTerm.label;
		return hasSameValue && hasSameLabel;
	};
}