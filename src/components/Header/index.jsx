import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'rbx';
import LogoImage from '../../assets/images/logo.png';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/" className="navbar-item">
            <img src={LogoImage} alt="Logo" />
          </Link>
          <Navbar.Burger
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </Navbar.Burger>
        </Navbar.Brand>

        <Navbar.Menu
          id="navbar-menu"
          active={openMenu.toString()}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Navbar.Segment as="div" className="navbar-end buttons is-flex is-justify-content-space-evenly is-align-items-center">
            <Link to="/register" className="button is-white has-text-sky-blue">Register</Link>
            <Link to="/login" className="button is-outlined is-sky-blue">Login</Link>
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
}

export default Header;
