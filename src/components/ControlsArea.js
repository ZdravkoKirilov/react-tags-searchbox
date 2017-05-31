/**
 * Created by zkirilov on 11.5.2017 г..
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Controls extends Component {
	render = () => {
		return (
			<div className="controls-area">
				<button className="btn btn-basic add-term" onClick={this.onAddClick}><span
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
	};
	onAddClick = () => {
		this.props.onAddClick();
	}
}

Controls.defaultProps = {
	termsCount: 0,
	searchEnabled: true
};

Controls.propTypes = {
	onAddClick: PropTypes.func.isRequired,
	onSearchPress: PropTypes.func.isRequired,
	termsCount: PropTypes.number.isRequired,
	searchEnabled: PropTypes.bool
};

export default Controls;