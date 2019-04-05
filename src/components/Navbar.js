import React from 'react';
import {  /* Link, */ NavLink} from "react-router-dom";


const Navbar = () => {
    return (
       

<nav className="navbar navbar-default" >
        <div className="container-fluid container dodgerblue">

        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#alignment-example" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/home">Dhiren's React App</a>
        </div>

        <div className="collapse navbar-collapse" id="alignment-example">

            <ul className="nav navbar-nav right">
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to='/PostList'>Posts</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                {/* <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Us <span className="caret"></span></a>
                    <ul className="dropdown-menu" aria-labelledby="about-us">
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </li> */}
            </ul>


        </div>

    </div>
</nav>

 )
}
export default Navbar