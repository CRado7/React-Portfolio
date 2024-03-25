import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import React, { useState, useEffect, useRef } from 'react';
// import { CSSTransition } from 'react-transition-group';


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
       <a href="/"><img src="/src/assets/home.svg" alt="home"  id="homebtn"/></a>
      <button className="dropdown-toggle" onClick={toggleMenu}>
       <img src="/src/assets/menu.svg" alt="menu icon"  id="menu"/>
      </button>
        {/* <CSSTransition
          in={isOpen}
          timeout={300}
          classNames="dropdown-animation"
          unmountOnExit
          > */}
          <Navbar
            links={[
              <Link key={1} class="navlink"  id="home" activeClassName="active" to="/">
                Home
              </Link>,
              <Link key={2} class="navlink" activeClassName="active" to="/portfolio">
                Portfolio
              </Link>,
              <Link key={3} class="navlink" activeClassName="active" to="/resume">
                Resume
              </Link>,
              <Link key={4} class="navlink" activeClassName="active" to="/contact">
                Contact
              </Link>,
            ]}
          />
        {/* </CSSTransition> */}
    </div>
  );
}
