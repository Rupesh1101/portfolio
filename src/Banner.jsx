import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './Banner.css';
import Home from './Home';
import About from './About';
import {Link} from 'react-router-dom';
import Skills from './Skills';
import Experience from './Experience';
import Project from './Project';
import Contact from './Contact';

function Banner() {
    return (
        <>
        <Router>
        <header className='banner'>
        <div className='banner--content'>
            <div className='banner--box'>
                <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/skills' element={<Skills />} />
                <Route exact path='/experience' element={<Experience />} />
                <Route exact path='/projects' element={<Project />} />
                <Route exact path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </div>    
        </header>
        <div className='banner--options'>
            
            <div className='menu--box'>
            <Link to='/' style={{textDecoration: 'none'}}>
                <p className='menu--title'>  Home</p>
                </Link>
            </div>
            
            <div className='menu--box'>
            <Link to='/about' style={{textDecoration: 'none'}}>
                <p className='menu--title'>  About</p>
                </Link>
            </div>

            <div className='menu--box'>
            <Link to='/skills' style={{textDecoration: 'none'}}>
                <p className='menu--title'>  Skills</p>
                </Link>
            </div>
           
            <div className='menu--box'>
            <Link to='/experience' style={{textDecoration: 'none'}}>
                <p className='menu--title'>  Experience</p>
                </Link>
            </div>
           
            <div className='menu--box'>
            <Link to='/projects' style={{textDecoration: 'none'}}>
                <p className='menu--title'>  Projects</p>
                </Link>
            </div>
            
            <div className='menu--box'>
            <Link to='/contact' style={{textDecoration: 'none'}}>
                <p className='menu--title'>  Contact</p>
            </Link>
            </div>
           
        </div>
        </Router>
        </>
    )
}

export default Banner
