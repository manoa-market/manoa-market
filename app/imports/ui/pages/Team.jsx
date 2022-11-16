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
          <Card.Body>I am studying for a B.S. in Computer Science in the Department of Information and Computer Sciences at the University of Hawaii. I expect to graduate in Fall 2023.</Card.Body>
        </Card>
      </Col>
      <Col xs={4}>
        <Card className="h-100">
          <Card.Header className="background-color: yellow">
            <Image src="https://avatars.githubusercontent.com/u/89759095?v=4" width="100px" />
            <Card.Title>Christian Reasoner</Card.Title>
          </Card.Header>
          <Card.Body>I am studying for a B.S. in Computer Science in the Department of Information and Computer Sciences at the University of Hawaii. I expect to graduate in Spring, 2024.</Card.Body>
        </Card>
      </Col>
      <Col xs={4}>
        <Card className="h-100">
          <Card.Header>
            <Image src="https://avatars.githubusercontent.com/u/10895962?v=4" width="100px" />
            <Card.Title>Daniel Luong</Card.Title>
          </Card.Header>
          <Card.Body>I am studying for a B.S. in Computer Engineering in the Department of Electrical Engineering at the University of Hawaii at Manoa. I expect to graduate in Fall, 2022.</Card.Body>
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
          <Card.Body>I am studying for a B.A. in Computer Science in the Department of Information and Computer Sciences at the University of Hawaii. I expect to graduate in Spring, 2024.</Card.Body>
        </Card>
      </Col>
      <Col xs={4}>
        <Card className="h-100">
          <Card.Header>
            <Image src="https://avatars.githubusercontent.com/u/99471168?v=4" width="100px" />
            <Card.Title>Melvin Alhambra</Card.Title>
          </Card.Header>
          <Card.Body>I am a Computer Engineering senior at the University of Hawaii at Manoa. I expect to graduate Fall 2022.</Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Team;
