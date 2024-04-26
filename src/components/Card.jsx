import { useState } from "react";

export default function Card(src, name){
    const [clicked, setClicked] = useState(false)
    function clickCard(){
        if(clicked === false) setClicked(true); else return// LOSE GAME
    }
    
    return (
        <div className="card" onClick={clickCard}>
            <img src={src} />
            {name}
        </div>
    )
}