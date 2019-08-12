/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => (
  <header id="header">
    <div className="container main-menu">
      <div className="row align-items-center d-flex">
        <div id="logo">
          <NavLink to="/">
            <img src="/public/img/logo.png" alt="" title="" />
          </NavLink>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li>
              <NavLink to="/about">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/blog">PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink to="/blog">CAREERS</NavLink>
            </li>
            <li>
              <NavLink to="/blog">CONTACT US</NavLink>
            </li>
            <li>
              <NavLink to="/blog">PRIVACY POLICY</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
