import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';
import { store } from './components/store/store';
import './index.css';
import GamePlate from './components/game/GamePlate';
import Header from './components/header/Header';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <Provider store={store()}>
      <Header />
      <div><h2>раздел</h2><p>Наполнение раздела</p></div>
      <div><h2>раздел</h2><p>Наполнение раздела</p></div>
      <GamePlate />
      <div><h2>раздел</h2><p>Наполнение раздела</p></div>
      <div><h2>раздел</h2><p>Наполнение раздела</p></div>
      <footer>
        <ul className='footer'>
          <li>Политика конфиденциальности</li>
          <li>Контакты</li>
          <li>Общая информация</li>
          <li>Дпугая информация</li>
          <li>Партнеры</li>
        </ul>
      </footer>
      {/* <App /> */}
    </Provider>
);