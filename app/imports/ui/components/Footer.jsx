import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-dark">
    <Container>
      <Row>
        <Col>
          <Image src="/images/uhm-footer.png" width="200px" />
        </Col>
        <Col className="text-center">
          Manoa Market
          {' '}
          <br />
          University of Hawaii
          <br />
          Honolulu, HI 96822
          {' '}
        </Col>
        <Col className="text-center">
          About Us
          {' '}
          <br />
          <a href="https://github.com/manoa-market">GitHub</a>
          <br />
          <a href="/team"> Meet the Team </a>
          {' '}
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
