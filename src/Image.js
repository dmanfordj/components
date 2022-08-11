import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "./style.css";
import reactbg from './react-bg.jpg';


export default function Image(){
    return (
        <div className="image">
          Image Component On the Right :
          <img src={reactbg} alt="React JS Logo"/>
        </div>
    )
}