import React from "react";
import '../style/maincontent.css'

export default function MainContent(){
    return(
        <div className="maincontent-wraper">
            <div className="maincontent-title">
            <h2>ПИОНОПАД</h2>
            </div>
            <div className="maincontent-description">
                <p className="disc-text">Подставляйте руки — это Пионопад!
                    Ожидаются осадки в виде охапок пионов
                        и крутых призов.
                </p>
                <p className="added-disc">
                Ловите бутон, кликайте и забирайте подарок!
                </p>
            </div>
            <div className="maincontent-disclaymer">
                <p>
                У вас есть только 1 попытка каждые 24 часа
                </p>
            </div>
        </div>

    )
}