import React from 'react';
import { render } from 'react-dom';
import './style.css';
import PeopleEditor from './PeopleEditor';
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <PeopleEditor />
    </Provider>
  );
}

render(<App />, document.getElementById('root'));
