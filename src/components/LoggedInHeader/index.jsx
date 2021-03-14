/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Navbar } from 'rbx';
import { FaList, FaSignOutAlt, FaUser } from 'react-icons/fa';
import LogoImage from '../../assets/images/logo-white.png';
import UsersService from '../../services/users';

function LoggedInHeader({ setIsOpen }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [redirectHome, setRedirectHome] = useState(false);

  async function handleLogout() {
    await UsersService.logout();
    setRedirectHome(true);
  }

  if (redirectHome) return <Redirect to={{ pathname: '/' }} />;

  return (
    <Navbar color="primary" fixed="top">
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
        <Navbar.Segment as="div" className="navbar-start" align="start">
          <Navbar.Item
            onClick={() => setIsOpen(true)}
          >
            <FaList className="mr-2" />
            My Notes
          </Navbar.Item>
        </Navbar.Segment>
        <Navbar.Segment
          as="div"
          className="navbar-end is-flex is-justify-content-space-evenly"
          align="end"
        >
          <Link
            to="/"
            className="navbar-item"
          >
            <FaUser className="mr-2" />
            My Profile
          </Link>
          <Navbar.Item
            as="a"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  );
}

export default LoggedInHeader;
