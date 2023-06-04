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
        const total = 5;
        for(let i=1; i<total; i++){
            const test = document.createElement('div');
            for(let z=1; z<11; z++){
                const pic = document.createElement('img');
                pic.src = `/img/flowers/Peony_${z}.png`
                TweenLite.set(test,{attr:{class:'element'},x:R(-10,w),y:-600});
                anim(pic);
                pic.style.cursor = 'pointer';
                pic.addEventListener('click',()=>{
                    play()
                    setModal(true)
                    window.ym(93758518,'reachGoal','FlowerClick')
                })
                test?.appendChild(pic)
            }
            papa?.appendChild(test);
        }

        function anim(elm){
            TweenMax.to(elm,R(10,25),{y:1250,ease:Linear.easeNone,repeat:-1,delay:-30});
            TweenMax.to(elm,R(2,8),{rotation:(360),repeat:-1,yoyo:false,ease:Sine.easeInOut,delay:-5});
        }

        dispatch(fetchUser())
        setTimeout(()=> getPlayerData(), 1000)
        
    }, [])

        const play = (e) =>{
            dispatch(getReward())
        }

        function getPlayerData(){
            let lastPlayed = new Date(userData.lastTimePlayed)
            let today = new Date()
            console.log(userData)
            let timeDiff = today.getTime() - lastPlayed.getTime()
            hoursDiff = timeDiff/(1000*3600)
            console.log(hoursDiff)
            if(hoursDiff>24){
                return true
            }
            else{
                return false
            }
        }
    const [isModal, setModal] = useState(false);
    let mockText = 'Следующая попытка доступна через 24 часа';

    

    return(
        <>
            <MainContent />
            <Modal
                isVisible={isModal}
                title={getPlayerData()? result.title: mockText}
                ContentText={getPlayerData()? result.text: result.text1}
                promo={result.promocode===undefined? result.text1 : result.promocode}
                isFact={result.isFact}
                isRules={false}
                onClose={() => setModal(false)}
                is24 ={getPlayerData()}
                discription={result.discription}
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