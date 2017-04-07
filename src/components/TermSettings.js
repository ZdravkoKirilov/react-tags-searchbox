import React, {Component} from 'react';
import TermLabel from './TermLabel';

class TermSettings extends Component {
    static propTypes = {
        isVisible: React.PropTypes.bool.isRequired,
        title: React.PropTypes.string,
        labels: React.PropTypes.object,
        onLabelClick: React.PropTypes.func.isRequired,
        onClose: React.PropTypes.func.isRequired,
        onTermRemove: React.PropTypes.func.isRequired
    };

    static defaultProps = {
        labels: []
    };
    render = () => {
        const {isVisible, title} = this.props;
        const cssClass = isVisible
            ? 'tag-settings'
            : 'tag-settings hidden-left';

        let labels = [];
        for (let key in this.props.labels) {
            const component = <TermLabel
                {...this.props.labels[key]}
                key={key}
                onLabelClick={this.props.onLabelClick}/>;
            labels.push(component);
        }

        return <div className={cssClass}>

            <div className="tag-settings-header">
                <h3 className="tag-settings-title">{title}</h3>
                <span className="close-sign" onClick={this.onClose}></span>
            </div>

            <div className="tag-settings-body">
                <div className="tag-settings-body-left">
                    <h5>Pick label</h5>
                    {labels}
                </div>
                <div className="tag-settings-body-right">
                    <h5>Edit</h5>
                    <p className="btn btn-danger" onClick={this.props.onTermRemove}>Remove</p>
                </div>
            </div>
        </div>
    };

    onClose = () => {
        this.props.onClose('');
    }
}

export default TermSettings;