import React from 'react';
import './styles/menu.css'
const Menu = props => {

    return(
        <ul className="menu">
            <li className="toggle-nightmode"
            onClick={toggleNightMode}>Night Mode</li>
            <li>About Me</li>
        </ul>
    )
}

export default Menu;

const toggleNightMode = () => {
    document.querySelector(":root").classList.toggle('night-mode');
}
