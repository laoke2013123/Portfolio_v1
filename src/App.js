import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footers from "./components/Footers"
import "./style.css"

export default function App(){
    return(
        <body>
            <Info/>
            <About/>
            <Interests/>
            <Footers/>
        </body>
    )
}