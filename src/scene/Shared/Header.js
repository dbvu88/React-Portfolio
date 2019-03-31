import React from 'react';
import './styles/logo.css';

const Header = props => {
    return(
        <header>            
            {/* <h3>Duc Vu</h3> */}
            <span className="logo">
                
                <h1>Duc Vu</h1>
                <h2>Software Engineer</h2>
            </span>
        </header>
    )
} 


export default Header;

document.addEventListener('scroll', () => {


    // document.querySelector(".logo h1").style = "transform:rotateX(-180deg);transition: transform 0.5s";
})

