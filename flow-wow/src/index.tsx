import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createRoot } from 'react-dom/client';
import './index.css';
import GamePlate from './components/game/GamePlate';
import Header from './components/header/Header';
import Footer from './components/footer/footer';

import reducers from './components/reducers';

const container = document.getElementById('root')!;
const root = createRoot(container);
const store = createStore(reducers, compose(applyMiddleware(thunk)));

root.render(
    <Provider store={store}>
      <div className='main'>
        <div className='main-content'>
          <Header />
          <GamePlate />
          </div>
          <Footer/>
      </div>
    </Provider>
);