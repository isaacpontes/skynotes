import React from 'react';
import {
  Hero, Section, Container, Column, Card, Title,
} from 'rbx';
import Header from '../../../components/Header';
import LogoImage from '../../../assets/images/logo.png';
import LoginForm from '../../../components/LoginForm';

const Login = () => (
  <>
    <Header />
    <Hero size="fullheight-with-navbar" color="primary" gradient>
      <Section>
        <Container>
          <Column.Group centered>
            <Column size={4}>
              <Card>
                <Card.Content>
                  <Section>
                    <Column.Group centered>
                      <Column size={12}>
                        <img src={LogoImage} alt="Logo" />
                      </Column>
                    </Column.Group>

                    <Column.Group>
                      <Column size={12}>
                        <Title size={6} className="has-text-grey has-text-centered">
                          Your notes on the cloud
                        </Title>
                      </Column>
                    </Column.Group>

                    <Column.Group>
                      <LoginForm />
                    </Column.Group>
                  </Section>
                </Card.Content>
              </Card>
            </Column>
          </Column.Group>
        </Container>
      </Section>
    </Hero>
  </>
);

export default Login;
