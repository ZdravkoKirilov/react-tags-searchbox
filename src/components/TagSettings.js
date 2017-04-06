import React, {Component} from 'react';
import TagLabel from './TagLabel';

class TagSettings extends Component {
    render = () => {
        const {isVisible, title} = this.props;
        const cssClass = isVisible
            ? 'tag-settings'
            : 'tag-settings hidden';
        const labels = this
            .props
            .labels
            .map((label, index) => {
                return <TagLabel {...label} key={index} onLabelClick={this.props.onLabelClick}/>
            });

        return <div className={cssClass}>

            <div className="tag-settings-header">
                <h4>{title}</h4>
            </div>

            <div className="tag-settings-body">
                <div className="tag-settings-body-left">
                    <h7>Pick label</h7>
                    <ul>
                        {labels}
                    </ul>
                </div>
                <div className="tag-settings-body-right">
                    <p>Remove</p>
                </div>
            </div>
        </div>
    }

    static propTypes = {
        isVisible: React.PropTypes.bool.isRequired,
        title: React.PropTypes.string,
        labels: React
            .PropTypes
            .arrayOf(React.PropTypes.object),
        onLabelClick: React.PropTypes.func.isRequired
    }

    static defaultProps = {
        labels: []
    }
}

export default TagSettings;