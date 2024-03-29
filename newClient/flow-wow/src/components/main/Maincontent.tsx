import React from "react";
import '../style/maincontent.css'


export default function MainContent(){
    return(
        <>
        <div className="maincontent-wraper">
            <div className="maincontent-title">
                <h2>ПИОНОПАД</h2>
            </div>
            <div className="maincontent-description">
                <p className="disc-text">Подставляйте руки — это Пионопад! Ожидаются осадки в виде охапок пионов и крутых призов.
                </p>
                <p className="added-disc">
                Ловите бутон, кликайте <p>и забирайте подарок!</p>
                </p>
            </div>
        </div>
    </>

    )
}