import React, {useEffect, useState} from "react";
import '../style/gameplate.css'
import Modal from "../modal/modal";
import MainContent from "../main/Maincontent";
import { Linear, TweenLite, TweenMax, Sine } from "gsap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// import { fetchUser } from "../actions/userData";
import { getReward } from "../actions/reward";

export default function GamePlate(){
    const dispatch = useDispatch();
    const userData = useSelector((state)=>state.userData);
    const reward = useSelector((state)=> state.reward);

    useEffect(()=>{
        const papa =  document.getElementById('container')
        function R(min,max) {return min+Math.random()*(max-min)};
        const w = 10;
        const total = 21;
        for(let i=0; i<total; i++){
            const test = document.createElement('div');
            TweenLite.set(test,{attr:{class:'element'},x:R(-10,w),y:-100});
            anim(test);
            test.style.cursor = 'pointer';
            test.addEventListener('click',()=>{
                play()
                setModal(true)
                console.log()
            })
            test.innerHTML = `<img src = "/img/flowers/flower_${i}.png" alt = "no img"></img>`
            papa?.appendChild(test);
        }
        function anim(elm){
            TweenMax.to(elm,R(10,25),{y:250,ease:Linear.easeNone,repeat:-1,delay:-30});
            TweenMax.to(elm,R(2,8),{rotation:(360),repeat:-1,yoyo:false,ease:Sine.easeInOut,delay:-5});
            TweenMax.to(elm, {scale:R(1, 1.9)});
            }
        },[])

        const play = (e) =>{
            dispatch(getReward())
            console.log(`${reward}`)
        }
        
    const [isModal, setModal] = useState(false);
    let mockText = 'ой-ой!';
    

    return(
        <>
        <MainContent />
        <Modal
            isVisible={isModal}
            title={reward.title === undefined?mockText:reward.title}
            ContentText={reward.text === undefined?'Кажется что-то пошло не так... Давай попробуем сыграть еще раз!': reward.text}
            content={reward.promo}
            
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