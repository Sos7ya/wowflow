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
import MainContentDisclaymer from './components/main/MainContentDisclaymer';
import reducers from './components/reducers';

const container = document.getElementById('root');
const root = createRoot(container);
const store = createStore(reducers, compose(applyMiddleware(thunk)));

root.render(
    <Provider store={store}>
      <div className='main'>
      <div className='msg'>
            <div className='msg-logo'>
              <a href="https://flowwow.com/pionomania?utm_source=pionopad&utm_medium=landing_desktop&utm_campaign=logo_header" onClick={()=> {window.ym(93758518,'reachGoal','HeaderLinkClick')}}><img  src="/img/Vector.png" alt=""/></a>
              <div className='msg-star-logo'>
                <img src="img/star.svg" alt="" />
              </div>
            </div>
            <h1 className='msg-title'>ПИОНОПАД</h1>
            <p>Для участия в акции перейдите в мобильное приложение <br /> Flowwow</p>
            <div className='qr-code'><img src="/img/QRCode.png" alt="" /></div>
            <div className='links'>
              <a href="https://play.google.com/store/apps/details?id=com.flowwow"><img src="/img/google.png" alt="" /></a>
              <a href="https://apps.apple.com/ru/app/flowwow-%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%B0%D1%8F-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0/id1201155481"><img src="/img/app.png" alt="" /></a>
            </div>
      </div>
      <div className='main-content'>
        <Header />
          
        <GamePlate />

        <MainContentDisclaymer />
        </div>
        <Footer/>
      </div>
    </Provider>
);