import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SuggestionsList from './SuggestionsList'

export default class InputControl extends Component {

	static defaultProps = {
		value: '',
	};

	static propTypes = {
		onChangeCallback: PropTypes.func.isRequired,
		onEnterPress: PropTypes.func.isRequired,
		onSuggestionClick: PropTypes.func,
		onArrowKey: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired,
		onEscapeKey: PropTypes.func.isRequired,
		suggestions: PropTypes.arrayOf(PropTypes.string),
		selectedSuggestion: PropTypes.string
	};

	static keycodes = {
		up_arrow: 38,
		down_arrow: 40,
		escape: 27
	};

	render = () => {
		const {suggestions, onSuggestionClick, value, selectedSuggestion} = this.props;
		return (
			<div className="input-control">
				<input
					type="text"
					placeholder="type here to search..."
					onChange={this.onChange}
					onKeyUp={this.onKeyUp}
					value={value}
					className="insert-term"/>
				<SuggestionsList
					suggestions={suggestions}
					onSuggestionClick={onSuggestionClick}
					selectedSuggestion={selectedSuggestion}
				/>
			</div>
		);
	};

	onChange = (event) => {
		event.stopPropagation();
		const value = event.target.value;
		this
		.props
		.onChangeCallback(value);
	};

	onKeyUp = (event) => {

		if (event.key === 'Enter') {
			this.props.onEnterPress({
				value: this.props.value
			});
		}
		if (event.keyCode === InputControl.keycodes.up_arrow) {
			this.props.onArrowKey({
				direction: 'up'
			});
		}
		if (event.keyCode === InputControl.keycodes.down_arrow) {
			this.props.onArrowKey({
				direction: 'down'
			});
		}

		if (event.keyCode === InputControl.keycodes.escape) {
			this.props.onEscapeKey();
		}
	};
}