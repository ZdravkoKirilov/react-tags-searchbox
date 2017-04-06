import React, {Component} from 'react';
import InteractionArea from '../containers/InteractionArea';
import OutputArea from '../containers/OutputArea';
import '../styles/Searchbox.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//TODO PropTypes TESTS search term tooltop. search term with keyword:

class Searchbox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      enteredTerms: []
    }
  }

  render() {
    const {onSearchPress, onTermEnter, onTermRemove} = this;
    const {suggestionsPool, labels} = this.props;
    return (
      <div className="searchbox-root">
        <OutputArea terms={this.state.enteredTerms} onTermRemove={onTermRemove} labels={labels}/>
        <InteractionArea
          onSearchPress={onSearchPress}
          onTermEnter={onTermEnter}
          suggestionsPool={suggestionsPool}/>
      </div>
    );
  }

  componentWillMount() {
    this
      .setState(function (prevState) {
        const enteredTerms = this.props.enteredTerms;
        return Object.assign({}, prevState, {
          enteredTerms: prevState
            .enteredTerms
            .concat(enteredTerms)
        });
      });
  }

  onTermEnter = (payload) => {
    this.setState(prevState => {
      if (prevState.enteredTerms.includes(payload)) {
        return prevState;
      } else {
        const updatedTerms = prevState
          .enteredTerms
          .concat([payload]);
        this
          .props
          .onTermsChange(updatedTerms);
        return Object.assign({}, prevState, {enteredTerms: updatedTerms})
      }
    });
  }

  onTermRemove = (name) => {

    this.setState(prevState => {
      const index = prevState
        .enteredTerms
        .indexOf(name);
      if (index !== -1) {
        const updatedTerms = prevState
          .enteredTerms
          .slice();
        updatedTerms.splice(index, 1);
        this
          .props
          .onTermsChange(updatedTerms);
        return Object.assign({}, prevState, {enteredTerms: updatedTerms})
      } else {
        return prevState;
      }
    });
  }

  onClearAllTerms = () => {
    this.setState(prevState => {
      this
        .props
        .onTermsChange([]);
      return Object.assign({}, prevState, {enteredTerms: []})
    });
  }

  onSearchPress = () => {
    const terms = this.state.enteredTerms;

    this
      .props
      .onSearchPress(terms);
  }

  static propTypes = {
    suggestionsPool: React
      .PropTypes
      .arrayOf(React.PropTypes.string),
    onSearchPress: React.PropTypes.func.isRequired,
    enteredTerms: React
      .PropTypes
      .arrayOf(React.PropTypes.object),
    onTermsChange: React.PropTypes.func
  }

  static defaultProps = {
    suggestionsPool: [],
    enteredTerms: []
  }
}

export default Searchbox;
