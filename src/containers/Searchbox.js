import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
	removeTerm,
	enterTerm,
	addTermLabel,
	getLeftTerm,
	getRightTerm,
	changeTermTitle,
	composeTerms
} from '../reducers/TermsReducer';
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TermsArea from '../components/TermsArea'
import ControlsArea from '../components/ControlsArea'
import SettingsModal from '../components/SettingsModal'

class Searchbox extends Component {
	static propTypes = {
		suggestionsPool: PropTypes
		.arrayOf(PropTypes.string),
		onSearchPress: PropTypes.func.isRequired,
		enteredTerms: PropTypes
		.arrayOf(PropTypes.object),
		onTermsChange: PropTypes.func,
		onUserInput: PropTypes.func,
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
			selectedSuggestion: null
		}
	}

	render() {
		const {
			onSearchPress, onTermEnter, onTermChange, onModalArrowKey, onTitleChange,
			onTermRemove, onLabelClick, onSettingsToggle, onArrowKey, onEscapeKey, onSuggestionClick
		} = this;
		const {labels, searchEnabled, suggestionsPool} = this.props;
		const {currentInputValue, enteredTerms, settingsVisible, selectedSuggestion, selectedTerm} = this.state;
		const RootCSS = 'searchbox-component';

		return (
			<div className={RootCSS}>

				<TermsArea
					onTermEnter={onTermEnter}
					onTermChange={onTermChange}
					onTermRemove={onTermRemove}
					currentInputValue={currentInputValue}
					enteredTerms={enteredTerms}
					onSettingsClick={onSettingsToggle}
					suggestions={suggestionsPool}
					onArrowKey={onArrowKey}
					onEscapeKey={onEscapeKey}
					onSuggestionClick={onSuggestionClick}
					selectedSuggestion={selectedSuggestion}
					selectedTerm={selectedTerm}
					labels={labels}
				/>
				<ControlsArea
					onSearchPress={onSearchPress}
					searcEnabled={searchEnabled}
					onAddClick={onTermEnter}
					termsCount={enteredTerms.length}
				/>
				<SettingsModal isVisible={settingsVisible}
							   onLabelClick={onLabelClick}
							   onTitleChange={onTitleChange}
							   onClose={onSettingsToggle}
							   onTermRemove={onTermRemove}
							   labels={labels}
							   selectedTerm={selectedTerm}
							   onArrowKey={onModalArrowKey}
				/>
			</div>
		);
	}

	onTitleChange = (oldTerm, newTitle) => {
		const {updatedTerms, updatedTerm} = changeTermTitle(oldTerm, newTitle, this.state.enteredTerms);
		this.setState(prevState => {
			return Object.assign({}, prevState, {
				enteredTerms: updatedTerms,
				selectedTerm: updatedTerm
			});
		});
	};

	onEscapeKey = () => {
		this.setState(prevState => {
			return Object.assign({}, prevState, {selectedSuggestion: '', suggestions: []});
		});
		this.props.onUserInput();
	};

	onModalArrowKey = (data) => {
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
		const current = this.props.suggestionsPool.indexOf(this.state.selectedSuggestion);
		const prevIndex = current - 1;
		const value = this.props.suggestionsPool[prevIndex];

		value && this.setState(prevState => {
			return Object.assign({}, prevState, {
				selectedSuggestion: value,
				currentInputValue: value
			});
		});
	};

	moveSelectedSuggestionDown = () => {
		const current = this.props.suggestionsPool.indexOf(this.state.selectedSuggestion);
		const nextIndex = current + 1;
		const value = this.props.suggestionsPool[nextIndex];

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
		if (value || value === '') {
			this.setState(prevState => {
				return Object.assign({}, prevState, {
					currentInputValue: value,
					selectedSuggestion: null
				});
			});
		}

		this.props.onUserInput(value);
	};

	onTermEnter = (payload) => {
		(payload.value || this.state.currentInputValue) && this.setState(prevState => {
			payload = payload || {value: this.state.currentInputValue};
			if (prevState.enteredTerms.includes(payload)) {
				return prevState;
			} else {
				const updatedTerms = enterTerm(prevState.enteredTerms, composeTerms(payload));
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

	onTermRemove = (term) => {
		this.setState(prevState => {
			const filtered = removeTerm(prevState.enteredTerms, term);
			this
			.props
			.onTermsChange(filtered);
			return Object.assign({}, prevState, {
				enteredTerms: filtered,
				settingsVisible: false,
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

	componentWillMount() {
		this
		.setState(function (prevState) {
			const enteredTerms = this.props.enteredTerms.map(({value, label}) => {
					return {
						value,
						label,
						uniqueID: value + new Date().getTime()
					}
				}
			);
			return Object.assign({}, prevState, {
				enteredTerms: prevState
				.enteredTerms
				.concat(enteredTerms)
			});
		});
	}
}

export default Searchbox;
