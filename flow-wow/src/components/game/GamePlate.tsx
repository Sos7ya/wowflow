import React, { ReactNode, createElement, useState} from "react";
import GameElement from './GameElement';
import '../style/gameplate.css'
import Modal from "../modal/modal";

// import { Skeleton } from 'antd';

// import {getActionDetaliSource} from '../store/selectors';
// import { useAppSelector } from '../store/hook';

import {mockAction} from '../store/thunk'

const GamePlate = () =>{
    // const data = useAppSelector(getActionDetaliSource);
    // // function checkData(){
    // //     const error ={
    // //         id: 1,
    // //         value: 'error',
    // //         quantity: 0
    // //     }
    // //     if(!data){
    // //         return  {...error}
    // //     }
    // //     else{
    // //         return {...data}
    // //     }
    // // }
    const [isModal, setModal] = useState(false);
    // setTimeout(()=>{let target = document.querySelector('.game-wraper'); let newFlower = createElement(`<div className = "flower10" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>`); console.log('added flower')}, 2000)
    let mockText :string = 'Поздравляю, ваш приз %приз_имя% !';
    let mockFooter: ReactNode = <div><button className="modal-btn" onClick={() => window.open('https://flowwow.com/')}>Вперед!</button></div>;

    if (mockAction.quantity===0){
    mockAction.value = 'Но вот тебе %другая_информация%';
    mockText = 'Ого, кажется в этот раз тебе не повезло!';
    mockFooter = '';
    }

    // if(!data){
    //     return <Skeleton active/>
    // }

    return(
        <div className='main-wraper'>
            <p>Нажми на пион, чтобы получить приз!</p>
            <Modal
                isVisible={isModal}
                title={mockText}
                content={<p>{mockAction.value}</p>}
                footer={mockFooter}
                onClose={() => setModal(false)}
            />
            <div className="game-wraper">
                <div className = "flower1" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>
                <div className = "flower2" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>
                <div className = "flower3" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>
                <div className = "flower4" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>
                <div className = "flower5" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>
                <div className = "flower6" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>
                <div className = "flower7" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>
                <div className = "flower8" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>
                <div className = "flower9" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>
                <div className = "flower10" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>
                <div className = "flower11" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>
                <div className = "flower12" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>
                <div className = "flower13" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>
                <div className = "flower14" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>
                <div className = "flower15" onClick={() => setTimeout(()=>setModal(true), 300)}><GameElement/></div>
            </div>
            <p>1 попытка каждые 24 часа</p>
        </div>
    )
}

export default GamePlate;