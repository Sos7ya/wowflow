import React, {useState} from "react";
// import { useEffect } from "react";
// import Modal from "../modal/modal";
import "../style/gameelement.css";
// import { TActionDetali } from "../store/type";



const GameElement=()=>{
    const [picture, setPicture] = useState(false);
    return (
      <>
        <button className="flower-btn"><img src={!picture ? "/flower.png":"/flower2.png"} alt="no img" onClick={()=>setPicture(true)}></img></button>
      </>
    );
  };
export default GameElement;