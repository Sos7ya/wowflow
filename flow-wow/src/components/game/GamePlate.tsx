import React, { ReactNode, useEffect, useState} from "react";
import '../style/gameplate.css'
import Modal from "../modal/modal";

import { Linear, TweenLite, TweenMax, Sine } from "gsap";

import {mockAction} from '../store/thunk'

export default function GamePlate(){
    
    useEffect(()=>{
        const papa = document.getElementById('container')
        function R(min:number,max:number) {return min+Math.random()*(max-min)};
        // const h = 100;
        const w = 10;
        const total: number = 30;
        for(let i=0; i<total; i++){
            const test = document.createElement('div')
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
            TweenMax.to(elm,R(10,25),{y:150,ease:Linear.easeNone,repeat:-1,delay:-30});
            TweenMax.to(elm,R(2,8),{rotation:(360),repeat:-1,yoyo:false,ease:Sine.easeInOut,delay:-5});
            TweenMax.to(elm, {scale:R(1, 1.9)});
            }
        },[])
        
    const [isModal, setModal] = useState(false);
    let mockText :string = 'Поздравляю, ваш приз %приз_имя% !';
    let mockFooter: ReactNode = <div><button className="modal-btn" onClick={() => window.open('https://flowwow.com/')}>Перейти в пиложение!</button></div>;
    let txt = mockAction.value;
    
    return(
        <div className='main-wraper'>
            <p>Нажми на пион, чтобы получить приз!</p>
            <Modal
                isVisible={isModal}
                title={mockText}
                content={txt}
                footer={mockFooter}
                onClose={() => setModal(false)}
            />
            <div  className="game-wraper"  id="container">
            </div>
            <p>1 попытка каждые 24 часа</p>
        </div>
    )
}