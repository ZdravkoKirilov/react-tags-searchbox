import React from 'react';
import ReactDOM from 'react-dom';
import Searchbox from './components/Searchbox';

const terms = [
  {
    value: 'Sofia',
    label: null
  }, {
    value: 'Burgas',
    label: null
  }
];
//const terms = [];

function onSearchPress(terms) {
  console.log(terms);
}
function onTermsChange(terms) {
  console.log(terms);
}

const suggestions = ['Blagoevgrad', 'Radomir', 'Pernik'];
const labels = [
  {
    value: 'Red'
  }, {
    value: 'Green'
  }
];

ReactDOM.render(
  <Searchbox
  enteredTerms={terms}
  labels={labels}
  onSearchPress={onSearchPress}
  suggestionsPool={suggestions}
  onTermsChange={onTermsChange}/>, document.getElementById('root'));
