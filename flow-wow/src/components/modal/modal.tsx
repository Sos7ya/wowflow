import React, { ReactNode, useEffect, useState } from "react";
import  "../style/modal.css";
import { keyboardKey } from "@testing-library/user-event";

interface IProps{
    isVisible: boolean
    title: ReactNode,
    ContentText: ReactNode,
    promo: string,
    onClose: ()=> void
    isRules: boolean
    isFact: boolean
}


const Modal = ({ isVisible = false, title, ContentText ,promo, onClose, isFact, isRules }:IProps) => {
     
    const keydownHandler = ({ key }:keyboardKey) => {
      switch (key) {
        case 'Escape':
          onClose();
          break;
        default:
      }
    };
  
    useEffect(() => {
      document.addEventListener('keydown', keydownHandler);
      return () => document.removeEventListener('keydown', keydownHandler);
    });
    
    // const [gotPromo, setNonVisable] = useState(false)
    // promo! ? setNonVisable(false) : setNonVisable(true)
    const [done, copyDone] = useState(false)
    const [rules, setStyle] = useState(false)
    const[fact, setFact] = useState(false)

    useEffect(()=>{
      isRules? setStyle(true) : setStyle(false)
      isFact? setFact(true) : setFact(false)
    },[isRules, isFact])

    return !isVisible ? null : (
      <div className="modal">
        <div className={`${!rules?"modal-dialog":'modal-body-rules'}`} onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <span className={`${!isRules?'NONcopy-btn':"modal-close"}`} onClick={onClose}>
              &times;
            </span>
          </div>
          <div className='modal-body'>
            <div className="modal-content-text">{ContentText}</div>
            <div className={`${!fact?"modal-promo-title":'NONcopy-btn'}`}><p>промокод:</p></div>
            <div id="content" className="modal-content">{promo}</div>
          </div>

          {<div className={`${!fact ? "modal-footer":'NONcopy-btn'}`}><button className={`copy-btn ${done? 'done' : 'wait'}`} onClick={()=> {
            copyDone(true);
            setInterval(()=> copyDone(false), 700);
            navigator.clipboard.writeText(promo);
            }}>Копировать<span className="copy-msg" aria-hidden="true">Готово!</span></button></div>}
          </div>

        <div><button className="app-btn" onClick={() => window.open('https://flowwow.com/')}>Вернуться назад! <img src="/img/arrow.svg" alt=""/></button></div>
      </div>
    );
  };

  export default Modal;