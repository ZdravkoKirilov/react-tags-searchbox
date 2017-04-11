import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TermsInput extends Component {
	static propTypes = {
		onChangeCallback: PropTypes.func.isRequired,
		onEnterPress: PropTypes.func.isRequired,
		onArrowKey: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired,
		onEscapeKey: PropTypes.func.isRequired
	};
	keycodes = {
		up_arrow: 38,
		down_arrow: 40,
		escape: 55
	};

	render = () => {
		return (
			<div>
				<input
					type="text"
					placeholder="Enter search terms"
					onChange={this.onChange}
					onKeyUp={this.onKeyUp}
					value={this.props.value}
					className="form-control insert-term"/>
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
			this
			.props
			.onEnterPress();
		}
		if (event.keyCode === this.keycodes.up_arrow) {
			this.props.onArrowKey({
				direction: 'up'
			});
		}
		if (event.keyCode === this.keycodes.down_arrow) {
			this.props.onArrowKey({
				direction: 'down'
			});
		}
		if (event.keyCode === 27) {
			this.props.onEscapeKey();
		}
	};
}

export default TermsInput;