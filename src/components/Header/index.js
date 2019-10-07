import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <Link to="/" className="title__link">
      <h1 className="title__text">Театр раскольников</h1>
    </Link>

    <nav className="menu">
      <NavLink
        to="/platform"
        className="menu__item"
        activeClassName="menu__item_active"
      >
        Актёрская платформа
      </NavLink>
      {/*<NavLink*/}
      {/*  to="/studio"*/}
      {/*  className="menu__item"*/}
      {/*  activeClassName="menu__item_active"*/}
      {/*>*/}
      {/*  Студия*/}
      {/*</NavLink>*/}
      {/*<NavLink*/}
      {/*  to="/courses"*/}
      {/*  className="menu__item"*/}
      {/*  activeClassName="menu__item_active"*/}
      {/*>*/}
      {/*  Курсы*/}
      {/*</NavLink>*/}
      <NavLink
        to="/about"
        className="menu__item menu__item-about"
        activeClassName="menu__item_active"
      >
        О Театре
      </NavLink>
    </nav>
  </header>
);

export default Header;
