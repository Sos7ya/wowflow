import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './components/store/store';
import './index.css';
import GamePlate from './components/game/GamePlate';
import Header from './components/header/Header';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Provider store={store()}>
      <div className='main'>
        <div className='main-content'>
          <Header />
          <GamePlate />
          </div>
        <footer>
          <ul className='footer'>
           <li>ПРАВИЛА ПРОВЕДЕНИЯ АКЦИИ</li>
           <li>LOGO</li>
          </ul>
        </footer>
      </div>
    </Provider>
);