import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {removeTerm, enterTerm, addTermLabel, getLeftTerm, getRightTerm} from '../reducers/TermsReducer';
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TermsArea from '../components1/TermsArea'
import ControlsArea from '../components1/ControlsArea'
import SettingsModal from '../components1/SettingsModal'

class Searchbox extends Component {
	static propTypes = {
		suggestionsPool: PropTypes
		.arrayOf(PropTypes.string),
		onSearchPress: PropTypes.func.isRequired,
		enteredTerms: PropTypes
		.arrayOf(PropTypes.object),
		onTermsChange: PropTypes.func,
		labels: PropTypes.object,
		searchEnabled: PropTypes.bool
	};

	static defaultProps = {
		suggestionsPool: [],
		enteredTerms: [],
		searchEnabled: true,
		labels: {}
	};

	constructor(props) {
		super(props);

		this.state = {
			enteredTerms: [],
			expandedTerms: false,
			settingsVisible: false,
			selectedTerm: {},
			currentInputValue: '',
			suggestions: [],
			selectedSuggestion: null
		}
	}

	render() {
		const {
			onSearchPress, onTermEnter, onTermChange, onModalArrowKey,
			onTermRemove, onLabelClick, onSettingsToggle, onArrowKey, onEscapeKey, onSuggestionClick
		} = this;
		const {labels, searchEnabled} = this.props;
		const {currentInputValue, enteredTerms, settingsVisible, selectedSuggestion, suggestions, selectedTerm} = this.state;
		const RootCSS = 'searchbox-component';

		return (
			<div className={RootCSS}>

				<TermsArea
					onTermEnter={onTermEnter}
					onTermChange={onTermChange}
					currentInputValue={currentInputValue}
					enteredTerms={enteredTerms}
					onSettingsClick={onSettingsToggle}
					suggestions={suggestions}
					onArrowKey={onArrowKey}
					onEscapeKey={onEscapeKey}
					onSuggestionClick={onSuggestionClick}
					selectedSuggestion={selectedSuggestion}
					selectedTerm={selectedTerm}
					labels={labels}
				/>
				<ControlsArea
					onTermEnter={onTermEnter}
					onSearchPress={onSearchPress}
					searcEnabled={searchEnabled}
					onAddClick={onTermEnter}
				/>
				<SettingsModal isVisible={settingsVisible}
							   onLabelClick={onLabelClick}
							   onClose={onSettingsToggle}
							   onTermRemove={onTermRemove}
							   labels={labels}
							   selectedTerm={selectedTerm}
							   onArrowKey={onModalArrowKey}
				/>

				{/*<OutputArea*/}
				{/*terms={enteredTerms}*/}
				{/*onTermRemove={onTermRemove}*/}
				{/*onLabelClick={onLabelClick}*/}
				{/*onTermListToggle={onTermListToggle}*/}
				{/*labels={labels}*/}
				{/*settingsVisible={settingsVisible}*/}
				{/*selectedTerm={selectedTerm}*/}
				{/*onSettingsClick={onSettingsClick}/>*/}

				{/*<InteractionArea*/}
				{/*onSearchPress={onSearchPress}*/}
				{/*onTermEnter={onTermEnter}*/}
				{/*suggestionsPool={suggestionsPool}*/}
				{/*termsCount={enteredTerms.length}*/}
				{/*searchEnabled={searchEnabled}*/}
				{/*/>*/}
			</div>
		);
	}

	componentWillMount() {

		this
		.setState(function (prevState) {
			const enteredTerms = this.props.enteredTerms;
			return Object.assign({}, prevState, {
				enteredTerms: prevState
				.enteredTerms
				.concat(enteredTerms)
			});
		});
	}

	onEscapeKey = () => {
		this.setState(prevState => {
			return Object.assign({}, prevState, {selectedSuggestion: '', suggestions: []});
		});
	};

	onModalArrowKey =(data) => {
		const direction = data.direction;

		direction === 'left' && this.moveSelectedTermLeft();
		direction === 'right' && this.moveSelectedTermRight();
	};

	moveSelectedTermLeft = () => {
		const {selectedTerm, enteredTerms} = this.state;
		const prevTerm = getLeftTerm(selectedTerm, enteredTerms);
		prevTerm && this.setState(prevState => {
			return Object.assign({}, prevState, {
				selectedTerm: prevTerm
			});
		});
	};

	moveSelectedTermRight = () => {
		const {selectedTerm, enteredTerms} = this.state;
		const nextTerm = getRightTerm(selectedTerm, enteredTerms);
		nextTerm && this.setState(prevState => {
			return Object.assign({}, prevState, {
				selectedTerm: nextTerm
			});
		});
	};

	onArrowKey = (data) => {
		const direction = data.direction;

		direction === 'up' && this.moveSelectedSuggestionUp();
		direction === 'down' && this.moveSelectedSuggestionDown();
	};

	moveSelectedSuggestionUp = () => {
		const current = this.state.suggestions.indexOf(this.state.selectedSuggestion);
		const prevIndex = current - 1;
		const value = this.state.suggestions[prevIndex];

		value && this.setState(prevState => {
			return Object.assign({}, prevState, {
				selectedSuggestion: value,
				currentInputValue: value
			});
		});

	};

	moveSelectedSuggestionDown = () => {
		const current = this.state.suggestions.indexOf(this.state.selectedSuggestion);
		const nextIndex = current + 1;
		const value = this.state.suggestions[nextIndex];

		value && this.setState(prevState => {
			return Object.assign({}, prevState, {
				selectedSuggestion: value,
				currentInputValue: value
			});
		});
	};

	onLabelClick = (label) => {
		const data = addTermLabel(label, this.state.enteredTerms, this.state.selectedTerm);
		this.setState(prevState => {
			return Object.assign({}, prevState, {
				enteredTerms: data.updatedTerms,
				selectedTerm: data.updatedTerm
			});
		});
	};

	onTermListToggle = () => {
		this.setState(prevState => {
			return Object.assign({}, prevState, {
				expandedTerms: !prevState.expandedTerms
			});
		});
	};

	onSettingsToggle = (term, fromModal) => {

		this.setState(prevState => {
			let data = {};
			if (fromModal) {
				data = Object.assign({}, prevState, {
					settingsVisible: false,
					selectedTerm: term
				});
			} else {
				data = Object.assign({}, prevState, {selectedTerm: term});
				data.settingsVisible = !!prevState.settingsVisible || true;
			}

			return data;
		});
	};

	onSuggestionClick = (value) => {
		this.onTermEnter({value});
		this.setState(prevState => {
			return Object.assign({}, prevState, {
				currentInputValue: '',
				suggestions: [],
				selectedSuggestion: null
			});
		});
	};

	onTermChange = (value) => {
		let suggestions = [];
		if (value || value === '') {
			this.setState(prevState => {
				return Object.assign({}, prevState, {
					currentInputValue: value,
					selectedSuggestion: null
				});
			});
		}
		if (value && value.length >= 3) {
			suggestions = this
			.props
			.suggestionsPool
			.filter(elem => {
				return elem
				.toLowerCase()
				.includes(value.toLowerCase());
			});

			suggestions.length > 0 && suggestions.unshift(value);
		}
		this.setState(prevState => {
			return Object.assign({}, prevState, {
				suggestions: suggestions,
				selectedSuggestion: null
			});
		});
	};

	onTermEnter = (payload) => {
		(payload || this.state.currentInputValue) && this.setState(prevState => {
			payload = payload || {value: this.state.currentInputValue};
			if (prevState.enteredTerms.includes(payload)) {
				return prevState;
			} else {
				const updatedTerms = enterTerm(prevState.enteredTerms, this.composeTerm(payload));
				this
				.props
				.onTermsChange(updatedTerms);
				return Object.assign({}, prevState, {
					enteredTerms: updatedTerms,
					currentInputValue: '',
					suggestions: []
				})
			}
		});
	};

	onTermRemove = () => {
		this.setState(prevState => {
			const filtered = removeTerm(prevState.enteredTerms, prevState.selectedTerm);
			this
			.props
			.onTermsChange(filtered);
			return Object.assign({}, prevState, {
				enteredTerms: filtered,
				settingsVisible: !prevState.settingsVisible,
				selectedTerm: null
			})
		});
	};

	onSearchPress = () => {
		const terms = this.state.enteredTerms;

		this
		.props
		.onSearchPress(terms);
	};

	composeTerm = (payload) => {
		const parts = payload.value.split(':');
		let value, label;
		if (parts.length > 1) {
			label = parts.shift();
			value = parts.join('');
		} else {
			label = '';
			value = payload.value;
		}
		return {
			value,
			label
		}
	};
}

export default Searchbox;
