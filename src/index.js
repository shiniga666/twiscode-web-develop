/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { CookiesProvider } from 'react-cookie';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Routes from './routes/Routes';
import reducers from './reducers';
import './styles/main.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.hydrate(
  <CookiesProvider>
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
    </Provider>
  </CookiesProvider>,
  document.querySelector('#root')
);
