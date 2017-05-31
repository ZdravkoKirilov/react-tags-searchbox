import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Controls extends Component {
	render = () => {
		return (
			<div className="controls">
				<button className="btn btn-basic add-term" onClick={this.props.onAddClick}><span
					className="badge">{this.props.termsCount}</span>
					<span>Add</span>
				</button>
				{this.props.searchEnabled ?
					<button className="btn btn-success start-search" onClick={this.props.onSearchPress}>
						<span className="glyphicon glyphicon-search"></span>
						<span>Find</span>
					</button> : null}
			</div>
		);
	}
}

Controls.propTypes = {
	onAddClick: PropTypes.func.isRequired,
	onSearchPress: PropTypes.func.isRequired,
	termsCount: PropTypes.number.isRequired,
	searchEnabled: PropTypes.bool
};

export default Controls;