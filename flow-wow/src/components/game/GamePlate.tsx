import React, { ReactNode, useEffect, useState} from "react";
import '../style/gameplate.css'
import Modal from "../modal/modal";
import MainContent from "../main/Maincontent";
import { Linear, TweenLite, TweenMax, Sine } from "gsap";
// import GameElement from "./GameElement";

import { useAppDispatch } from "../store/hook";
// import { getGameData } from "../store/slice";
// import { fetchData } from "../store/GameApi";

export default function GamePlate(){
    const disp = useAppDispatch()
    useEffect(()=>{
        const papa =  document.getElementById('container')
        function R(min:number,max:number) {return min+Math.random()*(max-min)};
        const w = 10;
        const total: number = 30;
        for(let i=0; i<total; i++){
            const test = document.createElement('div');
            TweenLite.set(test,{attr:{class:'element'},x:R(-10,w),y:-100});
            anim(test);
            test.style.cursor = 'pointer';
            test.addEventListener('click',()=>{
                setModal(true)
            })
            test.innerHTML = '<img src = "/flower.png" alt = "no img"></img>'
            papa?.appendChild(test);
        }
        function anim(elm:any){
            TweenMax.to(elm,R(10,25),{y:250,ease:Linear.easeNone,repeat:-1,delay:-30});
            TweenMax.to(elm,R(2,8),{rotation:(360),repeat:-1,yoyo:false,ease:Sine.easeInOut,delay:-5});
            TweenMax.to(elm, {scale:R(1, 1.9)});
            }
        },[])
        
    const [isModal, setModal] = useState(false);
    let mockText :string = 'угадали!';
    

    return(
        <>
        <MainContent />
        <Modal
            isVisible={isModal}
            title={mockText}
            ContentText="Это правильный призовой пион.
            Глаз у вас — алмаз :)"
            content={'promo'}
            
            onClose={() => setModal(false)}
            />
            <div className="game-area">
                <img className="handUp" src="/img/handUp.png" alt="hand" />
                <img className="cloudLeft" src="/img/cloudLeft.png" alt="cloud" />
                <div className='main-wraper'>
                    <div className="game-wraper"  id="container">
                    {/* Here comes the game! */}
                    </div>
                </div>
                <img className="handDown" src="/img/handDown.png" alt="some picks" />
                <img className="cloudRight" src="/img/cloudRighteft.png" alt="cloud" />
            </div>
        </>
    )
}