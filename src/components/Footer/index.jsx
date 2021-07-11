import React from 'react';
import { Section, Container, Column, Title } from 'rbx';

function Header() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Column.Group>
            <Column size={3}>
              <Title size={5}>
                Company
              </Title>
              <ul>
                <li>
                  <a href="#" className="navbar-item pl-0">About the company</a>
                </li>
                <li>
                  <a href="#" className="navbar-item pl-0">Work with us</a>
                </li>
                <li>
                  <a href="#" className="navbar-item pl-0">Contact</a>
                </li>
              </ul>
            </Column>
            <Column size={3}>
              <Title size={5}>
                Product
              </Title>
              <ul>
                <li>
                  <a href="#" className="navbar-item pl-0">Why Javascript Notes?</a>
                </li>
                <li>
                  <a href="#" className="navbar-item pl-0">Javascript Notes Starter</a>
                </li>
                <li>
                  <a href="#" className="navbar-item pl-0">Javascript Notes Pro</a>
                </li>
                <li>
                  <a href="#" className="navbar-item pl-0">Javascript Notes Business</a>
                </li>
                <li>
                  <a href="#" className="navbar-item pl-0">Download App</a>
                </li>
              </ul>
            </Column>
            <Column size={3}>
              <Title size={5}>
                Community
              </Title>
              <ul>
                <li>
                  <a href="#" className="navbar-item pl-0">Our Community</a>
                </li>
                <li>
                  <a href="#" className="navbar-item pl-0">Beta Program</a>
                </li>
                <li>
                  <a href="#" className="navbar-item pl-0">Contribute</a>
                </li>
                <li>
                  <a href="#" className="navbar-item pl-0">Oficial Forum</a>
                </li>
              </ul>
            </Column>
            <Column size={3}>
              <Title size={5}>
                Support
              </Title>
              <ul>
                <li>
                  <a href="#" className="navbar-item pl-0">Help and Learn</a>
                </li>
                <li>
                  <a href="#" className="navbar-item pl-0">FAQ</a>
                </li>
                <li>
                  <a href="#" className="navbar-item pl-0">Solving Problems</a>
                </li>
                <li>
                  <a href="#" className="navbar-item pl-0">Blog</a>
                </li>
              </ul>
            </Column>
          </Column.Group>
        </Container>
      </footer>
      <Section className=" py-4 has-background-light">
        © 2021 Javascript Notes. Alguns direitos reservados.
      </Section>
    </>
  );
}

export default Header;
