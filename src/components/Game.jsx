/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect} from "react";
import Card from "./Card";
import '../styles/game.css'

import MonkeyDLuffy from '../public/Monkey_D._Luffy.png';
import Blackbeard from '../public/Blackbeard.png';
import BigMom from '../public/Big_Mom.png';
import TrafalgarLaw from '../public/Trafalgar_Law.jpg';
import Shanks from '../public/Shanks.png';
import Zoro from '../public/Zoro.png';
import Usopp from '../public/Usopp.png';
import Nami from '../public/Nami.png';
import EustassKid from '../public/Eustass_Kid.jpg';
import PortgasDAce from '../public/Portgas_D._Ace.jpg';
import Jimbei from '../public/Jimbei.png';
import Kuzan from '../public/Kuzan.png';

let images = [
    { name: 'Monkey D. Luffy', src: MonkeyDLuffy},
    { name: 'Blackbeard', src: Blackbeard},
    { name: 'Big Mom', src: BigMom},
    { name: 'Trafalgar Law', src: TrafalgarLaw},
    { name: 'Shanks', src: Shanks},
    { name: 'Zoro', src: Zoro},
    { name: 'Usopp', src: Usopp},
    { name: 'Nami', src: Nami}, 
    { name: 'Eustass Kid', src: EustassKid},
    { name: 'Portgas D. Ace', src: PortgasDAce},
    { name: 'Jimbei', src: Jimbei},
    { name: 'Kuzan', src: Kuzan}
];

export default function Game(){
    const [score, setScore] = useState({current: 0, high: 0})
    const [key, setKey] = useState(0)

    function shuffle(arr) {
        let array = [...arr]
        let currentIndex = array.length;
      
        while (currentIndex != 0) {
      
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array
      }

    function gameLost(){ 
        setScore({...score, current: 0})
        setKey(key + 1)
    }



    function handleClick(isClicked){
        images = shuffle(images)
        // console.log(images)
        if(isClicked){
            gameLost()
        }else{
            if(score.current + 1 > score.high){
                const newScore = {...score, current: score.current + 1, high: score.current + 1}
                setScore(newScore)
            }else{
                const newScore = {...score, current: score.current + 1}
                setScore(newScore)
            }
        }
    }
    
    

    return (
        <div className="bigbox">
            <div className="header">
                <div className="headerText">
                    <p className="title"> One Piece Memory Game </p>
                    <p className="instructions"> Get points by clicking on an image but don't click on any more than once! </p>
                </div>
                <div className="score"> 
                    <p> Score: {score.current} </p>
                    <p> Best: {score.high} </p>
                </div>
                
            </div>
            <div className="game">              
                {images.map( (image) => {
                    return <Card key={image.name[0] + image.name[1]} round={key} path={image.src} name={image.name} callback={handleClick} />
                })}
            </div>
        </div>
    )
}