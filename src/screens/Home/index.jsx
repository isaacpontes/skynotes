import React from 'react';
import { Link } from 'react-router-dom';
import {
  Column, Title, Hero, Section, Container,
} from 'rbx';
import Header from '../../components/Header';
import presentation from '../../assets/images/presentation.png';

function HomeScreen() {
  return (
    <>
      <Header />
      <Hero color="primary" size="fullheight-with-navbar" gradient>
        <Section className="mt-5">
          <Container>
            <Column.Group>
              <Column size={5}>
                <Title
                  size={2}
                  spaced
                  className="has-text-white"
                >
                  Create notes easily and access them anywhere and anytime.
                </Title>
                <Title
                  size={5}
                  spaced
                  className="has-text-light"
                  subtitle
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, nam incidunt sequi officia sapiente a eum recusandae facilis
                  modi aliquid sunt eligendi debitis ex hic ratione dolores libero autem. Facere!
                </Title>
                <Link
                  to="/register"
                  className="button is-outlined is-light is-large has-text-weight-bold"
                >
                  Register Now
                </Link>
              </Column>
              <Column
                size={6}
                offset={1}
              >
                <img src={presentation} alt="Hero" />
              </Column>
            </Column.Group>
          </Container>
        </Section>
      </Hero>
    </>
  );
}

export default HomeScreen;
