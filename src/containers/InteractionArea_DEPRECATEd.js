import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TermsInput from '../components_DEPRECATED/TermsInput';
import Controls from '../components_DEPRECATED/Controls';
import SuggestionsList from '../components_DEPRECATED/SuggestionsList';

class InteractionArea extends Component {
	static propTypes = {
		onTermEnter: PropTypes.func.isRequired,
		suggestionsPool: PropTypes
		.arrayOf(PropTypes.string),
		termsCount: PropTypes.number.isRequired,
		onSearchPress: PropTypes.func.isRequired,
		searchEnabled: PropTypes.bool
	};

	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
			suggestions: [],
			selectedSuggestion: null
		}
	}

	render() {

		return (
			<div className="interaction-area container-fluid col-sm-7 col-xs-12 col-md-8">

				<TermsInput
					value={this.state.inputValue}
					onChangeCallback={this.onInputChange}
					onEnterPress={this.onTermEnter}
					onArrowKey={this.onArrowKey}
					onEscapeKey={this.onEscapeKey}
				/>

				<SuggestionsList
					suggestions={this.state.suggestions}
					onSuggestionClick={this.onSuggestionClick}
					selectedSuggestion={this.state.selectedSuggestion}
				/>

				<Controls onAddClick={this.onTermAdd}
						  onSearchPress={this.props.onSearchPress}
						  termsCount={this.props.termsCount}
						  searchEnabled={this.props.searchEnabled}
				/>
			</div>
		);
	}

	onInputChange = (value) => {

		if (value || value === '') {
			this.setState(prevState => {
				return Object.assign({}, prevState, {inputValue: value, selectedSuggestion: null});
			});
		}
		if (value && value.length >= 3) {
			const suggestions = this
			.props
			.suggestionsPool
			.filter(elem => {
				return elem
				.toLowerCase()
				.includes(value.toLowerCase());
			});
			if (suggestions.length) {
				suggestions.unshift(value);
			}
			this.setState(prevState => {
				return Object.assign({}, prevState, {suggestions: suggestions, selectedSuggestion: null});
			});
		} else {
			this.setState(prevState => {
				return Object.assign({}, prevState, {suggestions: [], selectedSuggestion: null});
			});
		}
	};

	onSuggestionClick = (term) => {
		this
		.props
		.onTermEnter({value: term});

		this.setState(prevState => {
			return Object.assign({}, prevState, {inputValue: '', suggestions: [], selectedSuggestion: null});
		});
	};

	onTermAdd = () => {
		if (this.state.inputValue) {
			const enteredTerm = this.state.inputValue;
			this
			.props
			.onTermEnter({value: enteredTerm});

			this.setState(prevState => {
				return Object.assign({}, prevState, {inputValue: '', suggestions: [], selectedSuggestion: null});
			});
		}
	};

	onTermEnter = () => {
		if (this.state.inputValue) {
			const enteredTerm = this.state.inputValue;
			this
			.props
			.onTermEnter({value: enteredTerm});

			this.setState(prevState => {
				return {inputValue: '', suggestions: [], selectedSuggestion: null}
			});
		}
	};

	onEscapeKey = () => {
		this.setState(prevState => {
			return Object.assign({}, prevState, {selectedSuggestion: '', suggestions: []});
		});
	};

	onArrowKey = (data) => {
		const direction = data.direction;

		if (direction === 'up') {
			this.moveSelectedSuggestionUp();
		}
		if (direction === 'down') {
			this.moveSelectedSuggestionDown();
		}
	};

	moveSelectedSuggestionUp = () => {
		const current = this.state.suggestions.indexOf(this.state.selectedSuggestion);
		const prevIndex = current - 1;
		const value = this.state.suggestions[prevIndex];
		if (value) {
			this.setState(prevState => {
				return Object.assign({}, prevState, {selectedSuggestion: value, inputValue: value});
			});
		}
	};

	moveSelectedSuggestionDown = () => {
		const current = this.state.suggestions.indexOf(this.state.selectedSuggestion);
		const nextIndex = current + 1;
		const value = this.state.suggestions[nextIndex];
		if (value) {
			this.setState(prevState => {
				return Object.assign({}, prevState, {selectedSuggestion: value, inputValue: value});
			});
		}
	};
}

export default InteractionArea;