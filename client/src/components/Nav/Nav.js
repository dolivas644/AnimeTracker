import NavCss from './Nav.css'
import { Link } from 'react-router-dom'
import React from "react";
import Header from '../Header/Header';
function NavBar() {
    return (
        <>
        <Header /> 
            <div className="navbar">
                <ul>
                <li><Link to="/">Home</Link></li>
                
                <li><Link to="/TopAnime">Top 25 Anime</Link></li>
                
                <li><Link to="/UserInfo">User Info</Link></li>
                
                <li><Link to="/Contact">Contact</Link></li>
                </ul>
                
            </div>
        </>

    );
}

export default NavBar;
