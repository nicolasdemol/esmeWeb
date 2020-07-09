import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css'

import App from './components/App';
import Firebase, { FirebaseContext } from './Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
