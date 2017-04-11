import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ActiveTermsList from '../components/ActiveTermsList';
import TermSettings from '../components/TermSettings';

class OutputArea extends Component {

	static propTypes = {
		terms: PropTypes
		.arrayOf(PropTypes.object),
		settingsVisible: PropTypes.bool.isRequired,
		selectedTerm: PropTypes.any,
		labels: PropTypes.object,
		expanded: PropTypes.bool.isRequired,
		onTermListToggle: PropTypes.func.isRequired,
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
			expanded,
			onTermListToggle,
			onLabelClick,
			onTermRemove,
			onSettingsClick
		} = this.props;

		let toggleClass = 'expand';
		let style = {
			height: '38px'
		};

		if (expanded) {
			toggleClass = "shrink";
			style = {
				height: '200px'
			}
		}

		return (
			<div className="output-area">
				<ActiveTermsList
					terms={terms}
					style={style}
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

				<span className="terms-count">{terms.length}</span>

				<div className="toggle-terms">
					<div onClick={onTermListToggle} className={toggleClass}></div>
				</div>
			</div>
		);
	}
}

export default OutputArea;