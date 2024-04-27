/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import '../styles/card.css'

export default function Card({ path, name, callback, round}){
    // console.log('yo')
    const [clicked, setClicked] = useState(false)

    useEffect( () => {
        setClicked(false)
    }, [round])

    function clickCard(){
        callback(clicked)
        setClicked(true)
    }
    
    return (
        <div className="card" onClick={clickCard}>
            <img src={path} />
            {name}
        </div>
    )
}