import React, { ReactNode, useState} from "react";
// import { useEffect } from "react";
import Modal from "../modal/modal";
import "../style/gameelement.css"
import { TActionDetali } from "../store/type";



const GameElement=({id, value, quantity}: TActionDetali)=>{
  let mockText :string = 'Поздравляю, ваш приз %приз_имя% !'
  let mockFooter: ReactNode = <div><button className="modal-btn" onClick={() => window.open('https://flowwow.com/')}>Вперед!</button></div>
  if (quantity===0){
    value = 'Но вот тебе %другая_информация%'
    mockText = 'Ого, кажется в этот раз тебе не повезло!'
    mockFooter = ''
  }
    const [isModal, setModal] = useState(false);
    const [picture, setPicture] = useState(false)
    return (
      <>
        <button className="flower-btn" onClick={() => setTimeout(()=>setModal(true), 500)}><img src={!picture ? "/flower.png":"/flower2.png"} alt="no img" onClick={()=>setPicture(true)}></img></button>
        <Modal
          isVisible={isModal}
          title={mockText}
          content={<p>{value}</p>}
          footer={mockFooter}
          onClose={() => setModal(false)}
        />
      </>
    );
  };
export default GameElement;