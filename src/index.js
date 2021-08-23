import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import Framework7 from 'framework7/lite-bundle';
import 'framework7/framework7-bundle.min.css';
import Framework7React from 'framework7-react';
import MyApp from './App';

Framework7.use(Framework7React);

// Mount React App
ReactDOM.render(
  React.createElement(MyApp),
  document.getElementById('app')
)