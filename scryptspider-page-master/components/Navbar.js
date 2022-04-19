import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [show, setShow] = useState(true);

  const handleNavbar = () => {
    setShow(!show);
  };

  return (
    <nav className='navbar'>
      <div className='container-fluid'>
        <Link href='/'>
          <a className='navbar-brand'>
            <img src='/logo-white.svg' className='logo' />
          </a>
        </Link>
        <div className={`col-md-auto ml-auto ${show ? 'active' : ''}`}>
          <ul className={`navbar-nav right-nav`}>
            <div className='navbar-nav d-lg-flex  d-none' id='mainMenu'>
              <li className='nav-item px-3 '>
                <Link href='/work'>
                  <a className='nav-link'>work</a>
                </Link>
              </li>
              <li className='nav-item px-3'>
                <Link href='/team'>
                  <a className='nav-link'>team</a>
                </Link>
              </li>
              <li className='nav-item px-3'>
                <Link href='/news'>
                  <a className='nav-link'>news</a>
                </Link>
              </li>
              <li className='nav-item px-3'>
                <Link href='/contact'>
                  <a className='nav-link'>contact</a>
                </Link>
              </li>
            </div>

            <div className='minus ' onClick={handleNavbar}>
              <i className='las la-minus '></i>
              <i className={`las la-minus minus-2 ${show ? '' : 'second'}`}></i>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
