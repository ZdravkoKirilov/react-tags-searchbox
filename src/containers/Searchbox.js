import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InteractionArea from '../containers/InteractionArea';
import OutputArea from '../containers/OutputArea';
import {removeTerm, enterTerm, addTermLabel} from '../reducers/TermsReducer';
import '../styles/Searchbox.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
		searchEnabled: true
	};

	constructor(props) {
		super(props);

		this.state = {
			enteredTerms: [],
			expandedTerms: false,
			settingsVisible: false,
			selectedTerm: null
		}
	}

	render() {
		const {onSearchPress, onTermEnter, onTermRemove, onLabelClick, onTermListToggle, onSettingsClick} = this;
		const {suggestionsPool, labels, searchEnabled} = this.props;
		const {enteredTerms, settingsVisible, selectedTerm} = this.state;
		const RootCSS = 'searchbox-root container-fluid';

		return (
			<div className={RootCSS}>

					<OutputArea
						terms={enteredTerms}
						onTermRemove={onTermRemove}
						onLabelClick={onLabelClick}
						onTermListToggle={onTermListToggle}
						labels={labels}
						settingsVisible={settingsVisible}
						selectedTerm={selectedTerm}
						onSettingsClick={onSettingsClick}/>

					<InteractionArea
						onSearchPress={onSearchPress}
						onTermEnter={onTermEnter}
						suggestionsPool={suggestionsPool}
						termsCount={enteredTerms.length}
						searchEnabled={searchEnabled}
					/>
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

	onLabelClick = (label) => {
		const data = addTermLabel(label, this.state.enteredTerms, this.state.selectedTerm);
		this.setState(prevState => {
			return Object.assign({}, prevState, {enteredTerms: data.updatedTerms, selectedTerm: data.updatedTerm});
		});
	};

	onTermListToggle = () => {
		this.setState(prevState => {
			return Object.assign({}, prevState, {
				expandedTerms: !prevState.expandedTerms
			});
		});
	};

	onSettingsClick = (term) => {

		this.setState(prevState => {
			return Object.assign({}, prevState, {
				settingsVisible: !prevState.settingsVisible,
				selectedTerm: term
			});
		});
	};

	onTermEnter = (payload) => {
		this.setState(prevState => {
			if (prevState.enteredTerms.includes(payload)) {
				return prevState;
			} else {
				const updatedTerms = enterTerm(prevState.enteredTerms, this.composeTerm(payload));
				this
				.props
				.onTermsChange(updatedTerms);
				return Object.assign({}, prevState, {enteredTerms: updatedTerms})
			}
		});
	};

	onTermRemove = () => {
		this.setState(prevState => {
			const filtered = removeTerm(prevState.enteredTerms, prevState.selectedTerm)
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
