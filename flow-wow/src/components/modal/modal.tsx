import React, { ReactNode, useEffect, useState } from "react";
import  "../style/modal.css";
import { keyboardKey } from "@testing-library/user-event";

interface IProps{
    isVisible: boolean
    title: ReactNode,
    content: string,
    onClose: ()=> void
}


const Modal = ({ isVisible = false, title, content, onClose }:IProps) => {
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
    
    const [done, copyDone] = useState(false)
    return !isVisible ? null : (
      <div className="modal" onClick={onClose}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            {/* <span className="modal-close" onClick={onClose}>
              &times;
            </span> */}
          </div>
          <div className="modal-body">
            <div id="content" className="modal-content">{content}</div>
          </div>

          {<div className="modal-footer"><button className={`copy-btn ${done? 'done' : 'wait'}`} onClick={()=> {
            copyDone(true);
            setInterval(()=> copyDone(false), 700);
            navigator.clipboard.writeText(content);
            }}>Скопировать<span className="copy-msg" aria-hidden="true">Готово!</span></button></div>}
        </div>
            <div><button className="app-btn" onClick={() => window.open('https://flowwow.com/')}>Вернуться назад!</button></div>
      </div>
    );
  };

  export default Modal;