import React, { ReactNode, useEffect, useState } from "react";
import  "../style/modal.css";
import { keyboardKey } from "@testing-library/user-event";

// interface IProps{
//     isVisible: boolean
//     title: ReactNode,
//     ContentText: ReactNode,
//     promo: string,
//     onClose: ()=> void,
//     isRules: boolean,
//     isFact: boolean,
//     is24: boolean
// }


const Modal = ({ isVisible = false, title, ContentText ,promo, onClose, isFact, isRules, is24, discription }) => {
     
    const keydownHandler = ({ key }) => {
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
    const[isTime, setText] = useState(false)

    useEffect(()=>{
      is24? setText(true): setText(false)
      isRules? setStyle(true) : setStyle(false)
      isFact? setFact(true) : setFact(false)
    },[isRules, isFact, is24])

    return !isVisible ? null : (
      <div className="modal" onClick={()=> {window.location.reload()}}>
        <div className={`${!rules?"modal-dialog":'modal-body-rules'}`} onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <span className={`${isTime?'NONcopy-btn':`${isFact?"line":'NONcopy-btn'}`}`}></span>
            <span className={`${!isRules?'NONcopy-btn':"modal-close"}`} onClick={onClose}>
              &times;
            </span>
          </div>
          <div className='modal-body'>
            <div className={`${isTime? "modal-content-text":"modal-content-text-italic"}`}>{ContentText}
            <span className={`${isTime?`${isFact?"line":'NONcopy-btn'}`:'NONcopy-btn'}`}></span>
            </div>
            
            <div className={`${!fact?"modal-promo-title":'NONcopy-btn'}`}><p>промокод</p></div>
            <div id="content" className={`${isTime?`${fact? 'modal-fact':"modal-content"}`:'NONcopy-btn'}`}>{promo}</div>
            <div className={`${!fact?"modal-promo-title":'NONcopy-btn'}`}><p>{discription}</p></div>
          </div>

          {<div className={`${!fact ? "modal-footer":'NONcopy-btn'}`}><button className={`copy-btn ${done? 'done' : 'wait'}`} onClick={ async ()=> {
            await navigator.clipboard.writeText(promo)
              .then(()=>{ copyDone(true);
              setInterval(()=> copyDone(false), 700)});
            window.ym(93758518,'reachGoal','CuponCopyClick');
            }}>Копировать<span className="copy-msg" aria-hidden="true">Готово!</span></button></div>}
          </div>

        {/* <a href="https://gj8u.adj.st?adj_t=4f36o8o&adj_campaign=pionopad&adj_adgroup=back_button&adj_creative=main" onClick={() => { window.ym(93758518,'reachGoal','BackToAppClick')}}><div><button className={`${isRules?'NONcopy-btn':"app-btn"}`}>В приложение <img src="/img/arrow.svg" alt=""/></button></div></a> */}
      </div>
    );
  };

  export default Modal;