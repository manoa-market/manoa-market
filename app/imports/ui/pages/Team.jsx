import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Team = () => (
  <Container id="aboutus" fluid className="py-3">
    <Row className="align-middle text-center">
      <Col xs={4}>
        <Card className="h-100">
          <Card.Header>
            <Image src="https://avatars.githubusercontent.com/u/89875776?v=4" width="100px" />
            <Card.Title>Jamie Laurin</Card.Title>
          </Card.Header>
          <Card.Body>This is a brief description</Card.Body>
        </Card>
      </Col>
      <Col xs={4}>
        <Card className="h-100">
          <Card.Header>
            <Image src="https://avatars.githubusercontent.com/u/89759095?v=4" width="100px" />
            <Card.Title>Christian Reasoner</Card.Title>
          </Card.Header>
          <Card.Body>This is a brief description</Card.Body>
        </Card>
      </Col>
      <Col xs={4}>
        <Card className="h-100">
          <Card.Header>
            <Image src="https://avatars.githubusercontent.com/u/10895962?v=4" width="100px" />
            <Card.Title>Daniel Luong</Card.Title>
          </Card.Header>
          <Card.Body>This is a brief description</Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="align-middle text-center py-5">
      <Col xs={4}>
        <Card className="h-100">
          <Card.Header>
            <Image src="https://avatars.githubusercontent.com/u/112609431?v=4" width="100px" />
            <Card.Title>Evan Araki</Card.Title>
          </Card.Header>
          <Card.Body>This is a brief description</Card.Body>
        </Card>
      </Col>
      <Col xs={4}>
        <Card className="h-100">
          <Card.Header>
            <Image src="https://avatars.githubusercontent.com/u/99471168?v=4" width="100px" />
            <Card.Title>Melvin Alhambra</Card.Title>
          </Card.Header>
          <Card.Body>This is a brief description</Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Team;
