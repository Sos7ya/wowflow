import React from "react";
import '../style/maincontent.css'

export default function MainContent(){
    return(
        <div className="maincontent-wraper">
            <div className="maincontent-title">
            <h2>ПИОНОПАД</h2>
            </div>
            <div className="maincontent-description">
                <p>Подставляйте руки — это Пионопад!
                    Ожидаются осадки в виде охапок пионов
                        и крутых призов.
                    Ловите бутон, кликайте и забирайте подарок!
                </p>
            </div>
            <div className="maincontent-disclaymer">
                <h3>
                У вас есть только 1 попытка каждые 24 часа
                </h3>
            </div>
        </div>

    )
}