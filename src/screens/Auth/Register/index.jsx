import React from 'react';
import {
  Column, Section, Title, Container, Card, Hero,
} from 'rbx';
import Header from '../../../components/Header';
import RegisterForm from '../../../components/RegisterForm';
import LogoImage from '../../../assets/images/logo.png';

const Register = () => (
  <>
    <Header />
    <Hero color="primary" size="fullheight-with-navbar" gradient>
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

                    <Column.Group centered>
                      <RegisterForm />
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

export default Register;
