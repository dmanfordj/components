import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "./style.css";
import reactjs_bg from './react_js.png';


export default function Slider(){
    return (
        <div className="slider">
          
          <img src={reactjs_bg} alt="React JS Logo" className="img--slider" />
        </div>
    )
}