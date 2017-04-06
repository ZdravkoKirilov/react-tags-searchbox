import React, {Component} from 'react';
import TermsInput from '../components/TermsInput';
import Controls from '../components/Controls';
import SuggestionsList from '../components/SuggestionsList';

class InteractionArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            suggestions: []
        }
    }

    render() {
        return (
            <div className="interaction-area">

                <div>
                    <TermsInput
                        value={this.state.inputValue}
                        onChangeCallback={this.onInputChange}
                        onEnterPress={this.onTermEnter}/>
                    <SuggestionsList
                        suggestions={this.state.suggestions}
                        onSuggestionClick={this.onSuggestionClick}/>
                </div>

                <Controls onAddClick={this.onTermAdd}/>
            </div>
        );
    }

    onInputChange = (value) => {

        if (value || value === '') {
            this.setState(prevState => {
                return Object.assign({}, prevState, {inputValue: value});
            });
        }
        if (value && value.length >= 3) {
            const suggetions = this
                .props
                .suggestionsPool
                .filter(elem => {
                    return elem
                        .toLowerCase()
                        .includes(value.toLowerCase());
                });
            this.setState(prevState => {
                return Object.assign({}, prevState, {suggestions: suggetions});
            });
        } else {
            this.setState(prevState => {
                return Object.assign({}, prevState, {suggestions: []});
            });
        }
    }

    onSuggestionClick = (term) => {
        this
            .props
            .onTermEnter({value: term});

        this.setState(prevState => {
            return {inputValue: '', suggestions: []}
        });
    }

    onTermAdd = () => {
        if (this.state.inputValue) {
            const enteredTerm = this.state.inputValue;
            this
                .props
                .onTermEnter({value: enteredTerm});

            this.setState(prevState => {
                return {inputValue: '', suggestions: []}
            });
        }
    }
    onTermEnter = () => {
        if (this.state.inputValue) {
            const enteredTerm = this.state.inputValue;
            this
                .props
                .onTermEnter({value: enteredTerm});

            this.setState(prevState => {
                return {inputValue: '', suggestions: []}
            });
        }
    }

    static propTypes = {
        onTermEnter: React.PropTypes.func.isRequired,
        suggestionsPool: React
            .PropTypes
            .arrayOf(React.PropTypes.string)
    }
}

export default InteractionArea;