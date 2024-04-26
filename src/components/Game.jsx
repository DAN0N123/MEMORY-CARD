// import { useState } from "react";
import Card from "./Card";
import '../game.css';

export default function Game(){
    const images = [
        { name: 'Blackbeard', src: '../static/Blackbeard' },
        { name: 'Big Mom', src: '../static/Big Mom' },
        { name: 'Trafalgar Law', src: '../static/Trafalgar Law' },
        { name: 'Shanks', src: '../static/Shanks' },
        { name: 'Zoro', src: '../static/Zoro' },
        { name: 'Usopp', src: '../static/Usopp' },
        { name: 'Nami', src: '../static/Nami' },
        { name: 'Eustass Kid', src: '../static/Eustass Kid' },
        { name: 'Portgas D. Ace', src: '../static/Portgas D. Ace' },
        { name: 'Jimbei', src: '../static/Jimbei' },
        { name: 'Kuzan', src: '../static/Kuzan' }
      ];
    return (
        <div className="game">
            {images.map( (image, index) => {
                <Card key={index} src={image.src} name={image.name}/>
            })}
        </div>
    )
}