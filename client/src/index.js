import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import InteractionsContext from './Utilities/InteractionsContext.js';
import Interactions from './Utilities/Interactions.js';
import App from './App';


ReactDOM.render(
  <InteractionsContext.Provider value={Interactions}>
    <App />
  </ InteractionsContext.Provider>,
  document.getElementById('app'));

