import React from 'react';
import { Navbar, Container } from 'rbx';
import LogoImage from '../../assets/images/logo.png';

function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <a className="navbar-item" href="/">
            <img src={LogoImage} alt="Logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Segment as="div" className="navbar-end">
          <a className="navbar-item" href="/">
            Entrar
          </a>
        </Navbar.Segment>
      </Container>
    </Navbar>
  );
}

export default Header;
