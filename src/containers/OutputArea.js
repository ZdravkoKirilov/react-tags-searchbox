import React, {Component} from 'react';
import ActiveTermsList from '../components/ActiveTermsList';
import TermSettings from '../components/TermSettings';

class OutputArea extends Component {

    static propTypes = {
        terms: React
            .PropTypes
            .arrayOf(React.PropTypes.object),
        settingsVisible: React.PropTypes.bool.isRequired,
        selectedTerm: React.PropTypes.string,
        labels: React.PropTypes.object,
        expanded: React.PropTypes.bool.isRequired,
        onTermListToggle: React.PropTypes.func.isRequired,
        onLabelClick: React.PropTypes.func,
        onTermRemove: React.PropTypes.func.isRequired,
        onSettingsClick: React.PropTypes.func.isRequired
    }

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
                    labels={labels}/>
                <TermSettings
                    isVisible={settingsVisible}
                    title={selectedTerm}
                    labels={labels}
                    onTermRemove={onTermRemove}
                    onLabelClick={onLabelClick}
                    onClose={onSettingsClick}/>

                <span className="terms-count">{terms.length}</span>

                <div className="toggle-terms">
                    <div onClick={onTermListToggle} className={toggleClass}></div>
                </div>
            </div>
        );
    }
}

export default OutputArea;