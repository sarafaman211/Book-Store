import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Provider } from "react-redux";
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

