import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './Footer';
import { render } from "react-dom";
import registerServiceWorker from './registerServiceWorker';


// const Footer = () => (
//
//
// );

//ReactDOM.render(<App />, document.getElementById('root'));
render([<App key="1" />, <Footer key="2" />], document.getElementById("root"));

registerServiceWorker();
