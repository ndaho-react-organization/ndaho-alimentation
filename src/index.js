import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "./lib/store"
import { addToCart } from './lib/actions';

//
console.log(store.getState());

const unsubscribe = () => store.unsubscribe(() => console.log(store.getState()));
store.dispatch(addToCart({ name: "Citron", prix: "1€" }, 2))
console.log(store.getState());
store.dispatch(addToCart({ name: "Kiwi", prix: "1€" }, 5))
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);