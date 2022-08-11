import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "./style.css";


export default function LeftSide(){
    return (
        <div className="left">
          In this project I learent:
          <ul>
            <li>What React Is.</li>
            <li>Set up a react project using npm and create-react-app.</li>
            <li>Using Component to render UI. </li>
          </ul>
          This is a side component on the left side ..! <br/>
          <button id="btn"> Click Here..!</button>
        </div>
    )
}