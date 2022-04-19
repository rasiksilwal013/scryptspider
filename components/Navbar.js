import React, { useState } from 'react';
import Link from 'next/link';
import SSlogo from './SSlogo';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [logo, setLogo] = useState(true);

  const handleNavbar = () => {
    setShow(!show);
    setLogo(!logo);
  };

  const navHandler = () => {
    setShow(!show);
  };

  const logoNavHandler = () => {
    if (show === false) {
      setShow(!show);
    } else {
      return null;
    }
  };

  const hideLogoScroll = () => {
    if (window.scrollY >= 94) {
      setLogo(false);
      setShow(false);
    } else {
      setLogo(true);
      setShow(true);
    }
  };

  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.onscroll = hideLogoScroll;
    }
  }, []);

  return (
    <nav className='navbar pt-3 fixed-top'>
      <div
        className={`container-fluid ${show ? '' : 'opened'}`}
        onClick={logoNavHandler}
      >
        <Link href='/'>
          <a className='navbar-brand'>
            <SSlogo logo={logo} className='logo' />
          </a>
        </Link>
        <div
          className={`col-md-auto ml-auto d-md-block d-none ${
            show ? 'active' : ''
          }`}
        >
          <ul className='navbar-nav right-nav'>
            <div className='navbar-nav d-md-flex  d-none' id='mainMenu'>
              <li className='nav-item px-3 '>
                <Link href='/work'>
                  <a className='nav-link'>work</a>
                </Link>
              </li>
              <li className='nav-item px-3'>
                <Link href='/services'>
                  <a className='nav-link'>services</a>
                </Link>
              </li>
              <li className='nav-item px-3'>
                <Link href='/team'>
                  <a className='nav-link'>team</a>
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
      <div
        className={`mob-nav d-block d-md-none container-fluid ${
          show ? '' : 'toggled'
        }`}
      >
        <div className={`row mob-menu ${show ? 'd-none' : 'd-flex vh-100'}`}>
          <div className='col-12'>
            <ul className='menu-list'>
              <li>
                <Link href='/work'>
                  <a onClick={navHandler}>work</a>
                </Link>
              </li>
              <li>
                <Link href='/services'>
                  <a onClick={navHandler}>Services</a>
                </Link>
              </li>
              <li>
                <Link href='/team'>
                  <a onClick={navHandler}>team</a>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <a onClick={navHandler}>contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`mob-minus mob-toggle ${show ? '' : 'mob-toggle-active'}`}
          onClick={handleNavbar}
        >
          <i className='las la-minus '></i>
          <i className={`las la-minus mob-minus-2 ${show ? 'second' : ''}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
