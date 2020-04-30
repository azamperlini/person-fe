import React from 'react';
import './App.css';

import Logo from '../components/templates/logo/Logo'
import NavBar from '../components/templates/nav/Nav'
import Footer from '../components/templates/footer/Footer'

export default props =>
<div className="app">
    <Logo />
    <NavBar />
    <Footer />
</div>