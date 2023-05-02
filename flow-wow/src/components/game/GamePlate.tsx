import GameElement from './GameElement';
import '../style/gameplate.css'

import {getActionDetaliSource} from '../store/selectors'
import { useAppSelector } from '../store/hook';

import {mockAction} from '../store/thunk'


const GamePlate = () =>{
    const data = useAppSelector(getActionDetaliSource);
    function checkData(){
        const error ={
            id: 1,
            value: 'error',
            quantity: 0
        }
        if(!data){
            return  {...error}
        }
        else{
            return {...data}
        }
    }
    return(
        <>
        <div className='main-wraper'>
            <h2>ПИОНОМАНИЯ</h2>
            <p>Нажми на пион чтобы получить приз!</p>
            <div className="game-wraper">
                <div className = "flower"><GameElement {...checkData()}/></div>
                <div className = "flower"><GameElement {...mockAction}/></div>
                <div className = "flower"><GameElement {...mockAction}/></div>
                <div className = "flower"><GameElement {...mockAction}/></div>
                <div className = "flower"><GameElement {...mockAction}/></div>
                <div className = "flower"><GameElement {...mockAction}/></div>
                <div className = "flower"><GameElement {...mockAction}/></div>
                <div className = "flower"><GameElement {...mockAction}/></div>
                <div className = "flower"><GameElement {...mockAction}/></div>
            </div>
            <p>1 попытка каждые 24 часа</p>
        </div>
        </>
    )
}

export default GamePlate;