import React from 'react';
import {  NavLink} from "react-router-dom";
import brandlogo from '../dhirencorp.png'


const Navbar = () => {
    return (
       
<>
    <nav className="navbar navbar-default" >
        <div className="nav-wrapper container">

           
        <a className="logo-container" href="/home"><img src={brandlogo} alt="brand logo" style={{ 'width': '100px'}} /></a>
        
        <ul className="right" id="topnavbar">
            <li><NavLink to="/home">Todo</NavLink></li>
            <li><NavLink to="/cards">Cards</NavLink></li>
            <li><NavLink to='/PostList'>Posts</NavLink></li>
            <li><NavLink to='/OrderStatus'>Order Status</NavLink></li>
            <li><NavLink to='/contact'>About me</NavLink></li>
            
        </ul>

        </div>
    </nav>
    <ul id="slide-out" className="sidenav">

        <li><NavLink className="waves-effect sidenav-close" to="/home">Todo</NavLink></li>
        <li><NavLink className="waves-effect sidenav-close" to="/cards">Cards</NavLink></li>
        <li><NavLink className="waves-effect sidenav-close" to='/PostList'>Posts</NavLink></li>
        <li><NavLink className="waves-effect sidenav-close" to='/OrderStatus'>Order Status</NavLink></li>
        <li><NavLink className="waves-effect sidenav-close" to='/contact'>About me</NavLink></li>
      
    </ul>

    <a href=";" data-target="slide-out" className="sidenav-trigger">
        <span className="glyphicon glyphicon-align-justify"></span>
    </a>
</>

 )
}
export default Navbar