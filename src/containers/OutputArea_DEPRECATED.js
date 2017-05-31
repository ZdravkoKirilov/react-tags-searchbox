import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ActiveTermsList from '../components_DEPRECATED/ActiveTermsList';
import TermSettings from '../components_DEPRECATED/TermSettings';

class OutputArea extends Component {

	static propTypes = {
		terms: PropTypes
		.arrayOf(PropTypes.object),
		settingsVisible: PropTypes.bool.isRequired,
		selectedTerm: PropTypes.any,
		labels: PropTypes.object,
		onLabelClick: PropTypes.func,
		onTermRemove: PropTypes.func.isRequired,
		onSettingsClick: PropTypes.func.isRequired
	};

	render() {
		let {
			terms,
			settingsVisible,
			selectedTerm,
			labels,
			onLabelClick,
			onTermRemove,
			onSettingsClick
		} = this.props;

		return (
			<div className="output-area col-sm-5 col-xs-12 col-md-4">
				<ActiveTermsList
					terms={terms}
					onSettingsClick={onSettingsClick}
					selectedTerm={selectedTerm}
					labels={labels}/>
				<TermSettings
					isVisible={settingsVisible}
					title={selectedTerm ? selectedTerm.value : null}
					labels={labels}
					onTermRemove={onTermRemove}
					onLabelClick={onLabelClick}
					onClose={onSettingsClick}
					selectedTerm={selectedTerm}
				/>

			</div>
		);
	}
}

export default OutputArea;