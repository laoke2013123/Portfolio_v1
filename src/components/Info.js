import React from "react"


export default function Info(){
    return(
        <nav>
            <img src="./IMG_6298.jpg" className="Info--Picture"/>
            <h1 className="Info--Name">Leo Kuo</h1>
            <p className="Info--Position">Frontend Developer</p>
            <p className="Info--web">Leokuo.website</p>
            <button className="Info-button--1"><img src="./Icon.png" width="16px"/>Email</button>
            <button className="Info-button--2"><img src="./linkedin.png" width="16px"/>LinkedIn</button>
        </nav>
    )
}