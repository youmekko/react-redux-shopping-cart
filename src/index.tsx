import React from 'react';
import ReactDOM from 'react-dom';
import Class101App from './components/Class101App'
import './styles.css'

import { Provider } from "react-redux";
import store from "./redux/store";
import { fetchProducts } from './redux/actions';

const rootElement = document.getElementById('root')

store.dispatch(fetchProducts())

ReactDOM.render(
  <Provider store={store}>
    <Class101App />
  </Provider>,
  rootElement
);
