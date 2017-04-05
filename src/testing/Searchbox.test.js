import React from 'react';
import ReactDOM from 'react-dom';
import Searchbox from '../components/Searchbox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Searchbox />, div);
});
