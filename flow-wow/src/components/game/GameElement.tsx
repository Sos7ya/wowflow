import React, {useState} from "react";
// import { useEffect } from "react";
// import Modal from "../modal/modal";
import "../style/gameelement.css";
// import { TActionDetali } from "../store/type";



const GameElement=()=>{
    const [picture, setPicture] = useState(false);
    return (
      <div className = "flower1">
        <button className="flower-btn"><img src={!picture ? "/flower.png":"/flower2.png"} alt="no img" onClick={()=>setPicture(true)}></img></button>
      </div>
    );
  };
export default GameElement;