import React, {Component} from 'react';
import ActiveTagsList from '../components/ActiveTagsList';
import TagSettings from '../components/TagSettings';

class OutputArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            settingsVisible: false,
            selectedTag: null
        }
    }

    render() {
        let {terms, onTermRemove} = this.props;
        let toggleClass = 'expand';
        let style = {
            overflow: 'hidden'
        }

        if (this.state.expanded) {
            toggleClass = "shrink";
            style = {
                overflow: 'visible'
            }
        }

        return (
            <div className="output-area">
                <ActiveTagsList
                    terms={terms}
                    style={style}
                    onSettingsClick={this.onSettingsClick}/>
                <TagSettings
                    isVisible={this.state.settingsVisible}
                    title={this.state.selectedTag}
                    labels={this.props.labels}
                    onTermRemove={onTermRemove}
                    onLabelClick={this.onLabelClick}/>

                <span className="terms-count">{terms.length}</span>

                <div className="toggle-terms">
                    <div onClick={this.onToggle} className={toggleClass}></div>
                </div>
            </div>
        );
    }

    onLabelClick = (label) => {
        console.log(label);
    }

    onSettingsClick = (tag) => {
        this.setState(prevState => {
            return Object.assign({}, prevState, {
                settingsVisible: !prevState.settingsVisible,
                selectedTag: tag.title
            });
        });
    }

    onToggle = () => {
        this.setState(prevState => {
            return Object.assign({}, prevState, {
                expanded: !prevState.expanded
            });
        });
    }

    static propTypes = {
        terms: React
            .PropTypes
            .arrayOf(React.PropTypes.object),
        onTermRemove: React.PropTypes.func.isRequired
    }
}

export default OutputArea;