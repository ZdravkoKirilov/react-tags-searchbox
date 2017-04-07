import React, {Component} from 'react';
import InteractionArea from '../containers/InteractionArea';
import OutputArea from '../containers/OutputArea';
import '../styles/Searchbox.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//TODO PropTypes TESTS search term tooltop. search term with keyword:

class Searchbox extends Component {

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
		const {suggestionsPool, labels} = this.props;
		const {enteredTerms, settingsVisible, selectedTerm, expandedTerms} = this.state;

		return (
			<div className="searchbox-root">
				<OutputArea
					terms={enteredTerms}
					onTermRemove={onTermRemove}
					onLabelClick={onLabelClick}
					onTermListToggle={onTermListToggle}
					labels={labels}
					expanded={expandedTerms}
					settingsVisible={settingsVisible}
					selectedTerm={selectedTerm}
					onSettingsClick={onSettingsClick}/>
				<InteractionArea
					onSearchPress={onSearchPress}
					onTermEnter={onTermEnter}
					suggestionsPool={suggestionsPool}/>
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
		const targetTerm = this.findTerm(this.state.selectedTerm, this.state.enteredTerms);
		const index = this
		.state
		.enteredTerms
		.indexOf(targetTerm);

		const updatedTerm = Object.assign({}, targetTerm, {label: label});
		const updatedTerms = this
		.state
		.enteredTerms
		.slice();
		updatedTerms[index] = updatedTerm;
		this.setState(prevState => {
			return Object.assign({}, prevState, {enteredTerms: updatedTerms});
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

	findTerm = (term, terms) => {
		return terms.filter(elem => {
			return elem.value === term;
		})[0];
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

	onTermEnter = (payload) => {
		this.setState(prevState => {
			if (prevState.enteredTerms.includes(payload)) {
				return prevState;
			} else {
				const updatedTerms = prevState
				.enteredTerms
				.concat([this.composeTerm(payload)]);

				this
				.props
				.onTermsChange(updatedTerms);

				return Object.assign({}, prevState, {enteredTerms: updatedTerms})
			}
		});
	};

	onTermRemove = () => {
		const name = this.state.selectedTerm;
		this.setState(prevState => {
			const filtered = prevState
			.enteredTerms
			.filter(elem => {
				return elem.value !== name;
			});
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

	static propTypes = {
		suggestionsPool: React
		.PropTypes
		.arrayOf(React.PropTypes.string),
		onSearchPress: React.PropTypes.func.isRequired,
		enteredTerms: React
		.PropTypes
		.arrayOf(React.PropTypes.object),
		onTermsChange: React.PropTypes.func,
		labels: React.PropTypes.object
	};

	static defaultProps = {
		suggestionsPool: [],
		enteredTerms: []
	}
}

export default Searchbox;
