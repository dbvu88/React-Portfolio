import React from 'react';
import './styles/menu-button.css'
import './styles/nav.css'
const Navigation = props => {

    return(
        <nav>
            <button className="menu-btn" onClick={toggleMenu}>
                Menu
            </button>

            <span className="search-box">
                <input type="search"
                placeholder="Start Typing ..."
                name="search"/>
            </span>
        
        </nav>
    )
}

const toggleMenu = () => {
    document.querySelector(".menu-btn").classList.toggle('menu-btn-active');
    document.querySelector(".menu").classList.toggle('menu-active');
    console.log('menu-toggle');
}



export default Navigation;
