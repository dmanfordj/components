import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import "./style.css";
import Navbar from './Navbar' ;
import LeftSide from './LeftSide'

function App(){
    return (
        <>
        <Navbar/>
       <center> <h4>In this project we explore the basics of components in React-JS</h4> </center>
       <LeftSide/>
        </>
    )
}
ReactDOM.render(<App/> , document.getElementById("root")) ;