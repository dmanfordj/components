import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "./style.css";


export default function Navbar(){
    return (
        <>
      <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="google.com">Navbar Component</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
        </>
    )
}
