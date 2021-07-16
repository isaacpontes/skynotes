import React from 'react';
import { Link } from 'react-router-dom';
import {
  Column, Title, Section, Container, Card, Button,
} from 'rbx';
import { CardHeaderTitle } from 'rbx/components/card/card-header-title';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import heroImg from '../../assets/images/hero.svg';
import presentationImg from '../../assets/images/presentation.png';
import typewriterImg from '../../assets/images/undraw_typewriter_i8xd.svg';
import devicesImg from '../../assets/images/undraw_Sync_re_492g.svg';
import serverImg from '../../assets/images/undraw_server_status_5pbv.svg';
import company1Img from '../../assets/images/company1.svg';
import company2Img from '../../assets/images/company2.svg';
import company3Img from '../../assets/images/company3.svg';
import company4Img from '../../assets/images/company4.svg';
import company5Img from '../../assets/images/company5.svg';
import { FaCheckCircle } from 'react-icons/fa';


function HomeScreen() {
  return (
    <>
      <Header />
      <Section className="my-3">
        <Container>
          <Column.Group className="is-vcentered">
            <Column size={5}>
              <Title
                size={2}
                spaced
                className="has-text-primary has-text-weight-bold"
              >
                Your Next Golden Idea Can Come Anywhere
              </Title>
              <Title
                size={5}
                spaced
                subtitle
              >
                With Javascript Notes you can write and save it immediately so you won&lsquo;t forget, no matter where you are. <strong>Try now for free!</strong>
              </Title>
              <Link
                to="/register"
                className="button is-primary is-large"
              >
                Start Now
              </Link>
            </Column>
            <Column
              size={6}
              offset={1}
            >
              <img src={heroImg} alt="Hero" width="826" height="505" />
            </Column>
          </Column.Group>
        </Container>
      </Section>
      <Section>
        <Container>
          <img src={presentationImg} alt="App Presentation" />
        </Container>
      </Section>
      <Section id="presentation" className="presentation-section has-background-light">
        <Container>
          <Column.Group className="is-centered mb-0">
            <Column size={5} className="py-6 has-text-right">
              <Title size="3">
                Write Wathever You Want
              </Title>
              <p>
                Your study topics, tasks from work, shopping lists, or even annotations for that awesome novel you were working on. With Javascript Notes&lsquo; rich text editor you have the power to write anything that comes to your mind!
              </p>
            </Column>
            <Column size={1} className="p-0">
              <span className="presentation-section__divider"></span>
            </Column>
            <Column size={5} className="mb-6 pb-6">
              <figure className="image">
                <img src={typewriterImg} alt="Write" />
              </figure>
            </Column>
          </Column.Group>
          <Column.Group className="is-centered mb-0">
            <Column size={5} className="mb-6 pb-6">
              <figure className="image">
                <img src={devicesImg} alt="Write" />
              </figure>
            </Column>
            <Column size={1} className="p-0">
              <span className="presentation-section__divider"></span>
            </Column>
            <Column size={5} className="py-6">
              <Title size="3">
                With Any Device
              </Title>
              <p>
                Javascript Notes works directly from the browser, making it 100% cross-platform. You can access the app in any type of device, be it your smartphone or your office&lsquo;s desktop PC. It also works with every OS that has a web browser, allowing you to write anywhere and anytime you want.
              </p>
            </Column>
          </Column.Group>
          <Column.Group className="is-centered">
            <Column size={5} className="mb-6 py-6 has-text-right">
              <Title size="3">
                Always Available
              </Title>
              <p>
                Javascript Notes uses the power of Cloud Computing to store your data and make it available for your immediatelly at all times. We also make sure that your data is completelly secure and will stay that way forever.
              </p>
            </Column>
            <Column size={1}>
              <span className="presentation-section__divider"></span>
            </Column>
            <Column size={5} className="pb-6">
              <figure className="image">
                <img src={serverImg} alt="Write" />
              </figure>
            </Column>
          </Column.Group>
        </Container>
      </Section>
      <Section id="customers" className="has-background-primary">
        <Container>
          <Title size="3" textAlign="centered" className="has-separator-light has-text-white mb-6">
            Companies That Trust Our Solutions
          </Title>
          <Column.Group className="is-vcentered">
            <Column className="px-6">
              <img src={company1Img} alt="Company Logo" />
            </Column>
            <Column className="px-6">
              <img src={company2Img} alt="Company Logo" />
            </Column>
            <Column className="px-6">
              <img src={company3Img} alt="Company Logo" />
            </Column>
            <Column className="px-6">
              <img src={company4Img} alt="Company Logo" />
            </Column>
            <Column className="px-6">
              <img src={company5Img} alt="Company Logo" />
            </Column>
          </Column.Group>
        </Container>
      </Section>
      <Section id="customers" className="has-background-white">
        <Container>
          <Title size="3" textAlign="centered" className="has-separator mb-6">
            Pricing and Plans
          </Title>

          <Column.Group className="is-centered">
            <Column size={3}>
              <Card backgroundColor="primary">
                <CardHeaderTitle align="centered" textColor="white">
                  Starter
                </CardHeaderTitle>
                <Card.Content>
                  <Title textColor="white">
                    Free. Forever.
                  </Title>
                </Card.Content>
                <article className="has-background-white">
                  <Card.Content>
                    <ul className="mb-5">
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Create unlimited notes
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Easily search for your notes
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Powerfull rich-text editor
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Up to 10MB notes
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        1GB of cloud storage
                      </li>
                    </ul>
                    <Button color="secondary" fullwidth>
                      Create an Account
                    </Button>
                  </Card.Content>
                </article>
              </Card>
            </Column>
            <Column size={3}>
              <Card backgroundColor="primary">
                <CardHeaderTitle align="centered" textColor="white">
                  Pro
                </CardHeaderTitle>
                <Card.Content>
                  <Title textColor="white">
                    <span className="is-size-6">US$ </span>
                    2.99/
                    <span className="is-size-6">month</span>
                  </Title>
                </Card.Content>
                <article className="has-background-white">
                  <Card.Content>
                    <ul className="mb-5">
                      <li className="is-flex is-align-items-center mb-2 has-text-weight-bold">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Everything from Starter
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Offline access
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Share your notes
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Organize with folders
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Notes with images
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Up to 100MB notes
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        10GB of cloud storage
                      </li>
                    </ul>
                    <Button color="secondary" fullwidth>
                      Try for free
                    </Button>
                  </Card.Content>
                </article>
              </Card>
            </Column>
            <Column size={3}>
              <Card backgroundColor="primary">
                <CardHeaderTitle align="centered" textColor="white">
                  Enterprise
                </CardHeaderTitle>
                <Card.Content>
                  <Title textColor="white">
                    <span className="is-size-6">US$ </span>
                    9.99/
                    <span className="is-size-6">user / month</span>
                  </Title>
                </Card.Content>
                <article className="has-background-white">
                  <Card.Content>
                    <ul className="mb-5">
                      <li className="is-flex is-align-items-center mb-2 has-text-weight-bold">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Everything from Pro
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Share work with a team
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Team activity history
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Manage your team&lsquo;s users
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Multiple access levels
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        Interface customization
                      </li>
                      <li className="is-flex is-align-items-center mb-2">
                        <FaCheckCircle className="has-text-success mr-3" />
                        20GB storage + 2GB / user
                      </li>
                    </ul>
                    <Button color="secondary" fullwidth>
                      Try for free
                    </Button>
                  </Card.Content>
                </article>
              </Card>
            </Column>
          </Column.Group>
        </Container>
      </Section>
      <Footer />
    </>
  );
}

export default HomeScreen;
