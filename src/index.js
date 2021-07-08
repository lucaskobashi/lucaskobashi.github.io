import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'

ReactDOM.render(<Navbar />, document.getElementById("navbarComponent"));
ReactDOM.render(<Home />, document.getElementById("homeComponent"));