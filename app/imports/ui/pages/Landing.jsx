import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <div className="landing-lightgreen-background">
    <Container className="text-center">
      <h2 style={{ color: 'white', fontSize: '30pt', fontWeight: '200' }}>
          Welcome to Manoa Market
      </h2>
      <h3 style={{ paddingBottom: '20px', color: 'white', fontWeight: '200' }}>
          Buy, Sell, and Trade items in the UH Community
      </h3>
    </Container>
  </div>

);

export default Landing;

/*
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { PageIDs } from '../utilities/ids';

const Landing = () => (
  <div id={PageIDs.landingPage}>
    <div className="landing-lightgreen-background">
      <Container className="text-center">
        <h2 style={{ color: 'white', fontSize: '30pt', fontWeight: '200' }}>
          Welcome to Manoa Market
        </h2>
        <h3 style={{ paddingBottom: '20px', color: 'white', fontWeight: '200' }}>
          Buy, Sell, and Trade items in the UH Community
        </h3>
      </Container>
    </div>
    <div className="landing-white-background">
      <Container className="justify-content-center text-center">
        <Row md={1} lg={2}>
          <Col xs={3}>
            <Image src="/images/furniture2.png" width={600} />
          </Col>
          <Col xs={3}>
            <Image src="/images/furniture.png" width={600} height={420} />
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Landing;
*/

