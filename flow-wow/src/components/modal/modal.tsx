import React, { ReactNode, useEffect, useState } from "react";
import  "../style/modal.css";
import { keyboardKey } from "@testing-library/user-event";

interface IProps{
    isVisible: boolean
    title: ReactNode,
    content: string,
    footer: ReactNode,
    onClose: ()=> void
}


const Modal = ({ isVisible = false, title, content, footer, onClose }:IProps) => {
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
          
          {footer && <div className="modal-footer">{footer} <button className={`copy-btn ${done? 'done' : 'wait'}`} onClick={()=> {
            copyDone(true);
            setInterval(()=> copyDone(false), 700);
            navigator.clipboard.writeText(content);
            }}>Скопировать<span className="copy-msg" aria-hidden="true">Готово!</span></button></div>}
        </div>
      </div>
    );
  };

  export default Modal;