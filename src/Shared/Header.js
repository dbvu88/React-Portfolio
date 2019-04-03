import React from 'react';
import './styles/logo.css';
import github from './svg/github_2.svg'
import linkedin from './svg/linkedin.svg'
import codepen from './svg/codepen.svg'
import pinterest from './svg/pinterest.svg'
import twitter from './svg/twitter.svg'
// import github from './svg/github_2.svg'
const Header = props => {
    
    return(
        <header>
            {/* <p>Follow me: </p>
            <a href=""><img src={github}/></a>
            <a href=""><img src={linkedin}/></a>
            <a href=""><img src={codepen}/></a>
            <a href=""><img src={pinterest}/></a>
            <a href=""><img src={twitter}/></a> */}
            
            {/* <h3>Duc Vu</h3> */}
            <span className="logo">
                <h1>D&nbsp;U&nbsp;C&nbsp;&nbsp;V&nbsp;U</h1>
                <h2>Software Engineer</h2>
            </span>
        </header>
    )
} 


export default Header;

document.addEventListener('scroll', () => {


    // document.querySelector(".logo h1").style = "transform:rotateX(-180deg);transition: transform 0.5s";
})

