import React, { useRef, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar({openModal}) {
  const navRef = useRef();


  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const [show, handleShow] = useState(false);

  const trasnitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', trasnitionNavBar);
    return () => window.removeEventListener('scroll', trasnitionNavBar);
  }, []);

  return (
    <header  >
      <div className={`wrapper ${show && "nav_white"}`} >
      <img src="./logo.jpg" alt="Logo" />
      <div>
        <nav ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/works">Our Works</Link>
          

          
          <Link to="/contact">
          <button class="button">
  <h1 class="text">contact us</h1>
  <span class="icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-icon="paper-plane" width="20px" aria-hidden="true"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" fill="currentColor"></path></svg></span>
</button>

          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <span>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </span>
      </div>
      </div>
    </header>
  );
}




export default Navbar;