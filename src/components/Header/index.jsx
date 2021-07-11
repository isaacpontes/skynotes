import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'rbx';
import LogoImage from '../../assets/images/logo.png';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Navbar className="is-spaced">
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
          <Navbar.Segment
            as="div"
            align="right"
            className="navbar-end"
          >
            <a href="#" className="navbar-item">Features</a>
            <a href="#" className="navbar-item">Pricing</a>
            <a href="#" className="navbar-item mr-2">Support</a>
            <div className="buttons">
              <Link to="/register" className="button is-primary is-outlined">Register</Link>
              <Link to="/login" className="button is-secondary">Login</Link>
            </div>
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
}

export default Header;
