import React, {useEffect, useState} from "react";
import '../style/gameplate.css'
import Modal from "../modal/modal";
import MainContent from "../main/Maincontent";
import { Linear, TweenLite, TweenMax, Sine } from "gsap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchUser } from "../actions/userData";
import { getReward } from "../actions/reward";

export default function GamePlate(){
    const dispatch = useDispatch();
    const userData = useSelector((state)=>state.userData);
    const result = useSelector((state)=> state.result);
    let hoursDiff
    
    
    useEffect(()=>{
        
        const papa =  document.getElementById('container')
        function R(min,max) {return min+Math.random()*(max-min)};
        const w = 10;
        const total = 25;
        for(let i=1; i<total; i++){
            const test = document.createElement('div');
            TweenLite.set(test,{attr:{class:'element'},x:R(-10,w),y:-500});
            anim(test);
            test.style.cursor = 'pointer';
            test.addEventListener('click',()=>{
                getData()
                play()
                setModal(true)
            })
            test.innerHTML = `<img src = "/img/smol/Peony_${i}.png" alt = "no img"></img>`
            papa?.appendChild(test);
        }

        function anim(elm){
            TweenMax.to(elm,R(10,25),{y:850,ease:Linear.easeNone,repeat:-1,delay:-30});
            TweenMax.to(elm,R(2,8),{rotation:(360),repeat:-1,yoyo:false,ease:Sine.easeInOut,delay:-5});
            // TweenMax.to(elm, {scale:R(3, 6)});
        }
        })

        const play = (e) =>{
            dispatch(getReward())
            // if(result.isFact){
            //     result.promo = result.promocode
            // }
            // else{
            //     result.promo = result.text1
            // }
    
            console.log(`${result}`)
        }

        const getData = ()=>{
            dispatch(fetchUser())
            let lastPlayed = new Date(userData.lastTimePlayed)
            let today = new Date()
    
            let timeDiff = Math.abs(lastPlayed.getTime() - today.getTime())
            hoursDiff = Math.ceil(timeDiff/(1000*3600))
            console.log(hoursDiff)
            if(hoursDiff>24){
                return true
            }
        }
        
        
    const [isModal, setModal] = useState(false);
    let mockText = 'Следующая попытка доступна через 24 часа';

    

    return(
        <>
            <MainContent />
            <Modal
                isVisible={isModal}
                title={getData ? mockText: result.title && result.title === undefined ? mockText:result.title}
                ContentText={result.text === undefined ? 'Кажется что-то пошло не так... Давай попробуем сыграть еще раз!': result.text}
                promo={result.promo === undefined? 'sorry': result.promo}
                isFact={result.isFact}
                isRules={false}
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