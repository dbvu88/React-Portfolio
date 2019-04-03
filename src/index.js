import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './/Shared/Navigation'
import Header from './/Shared/Header'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Header/>
        <Navigation/>
        <App />
    </div>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
