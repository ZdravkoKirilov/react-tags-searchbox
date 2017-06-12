/**
 * Created by zkirilov on 11.5.2017 г..
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import InputControl from './InputControl'
import Term from './Term';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
		labels: PropTypes.object,
		onSuggestionClick: PropTypes.func
	};

	render() {
		const {onTermEnter, currentInputValue, onTermChange, onSuggestionClick, selectedSuggestion,
			enteredTerms, onSettingsClick, suggestions, onArrowKey, onEscapeKey, labels, onTermRemove} = this.props;
		const terms = enteredTerms.map((term) => {
			return <Term
				key={`${term.uniqueID}`}
				value={term.value}
				onSettingsClick={onSettingsClick}
				onRemove={onTermRemove}
				label={term.label}
				labelStyle={this.findTermLabelStyle(term.label, labels)}
			/>
		});

		return (
			<div className="terms-area">
				<div className="entered-terms">
					<ReactCSSTransitionGroup
						transitionName="slide"
						transitionEnterTimeout={200}
						transitionLeaveTimeout={200}
					>
						{terms}
					</ReactCSSTransitionGroup>

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

	findTermLabelStyle = (_label, total_labels) => {
		const currentLabel = _label ? _label.toLowerCase() : '';
		const capitalizedLabel = currentLabel.charAt(0).toUpperCase() + currentLabel.slice(1);
		const label = total_labels[currentLabel] || total_labels[capitalizedLabel];
		return label ? label.style : undefined;
	}
}