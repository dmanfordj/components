import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import "./style.css";
import Navbar from './Navbar' ;
import LeftSide from './LeftSide' ;
import Image from './Image' ;
import Footer from './Footer';

function App(){
    return (
        <>
        <Navbar/>
       <center> <h4 class="heading">In this project we explore the basics of components in React-JS</h4> </center>
       <LeftSide/>
       <Image/>
       <Footer/>
        </>
    )
}
ReactDOM.render(<App/> , document.getElementById("root")) ;