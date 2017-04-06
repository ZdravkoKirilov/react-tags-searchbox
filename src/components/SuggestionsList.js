import React from 'react';
import SuggestedTerm from './SuggestedTerm';

const Suggestions = (props) => {
    const suggestions = props
        .suggestions
        .map((elem, index) => {
            return <SuggestedTerm
                onSuggestionClick={props.onSuggestionClick}
                key={index}
                value={elem}/>

        });
    return (
        <div className="suggestions">
            {suggestions}
        </div>
    );
}
Suggestions.propTypes = {
    suggestions: React
        .PropTypes
        .arrayOf(React.PropTypes.string),
    onSuggestionClick: React.PropTypes.func
};

Suggestions.defaultProps = {
    suggestions: []
};

export default Suggestions;