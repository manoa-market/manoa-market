import React from 'react';
import { Container } from 'react-bootstrap';
import Map from '../components/Map';

const FAQ = () => (
  <Container id="faq-page" className="py-5">
    <h1 className="text-center">Frequently Asked Questions</h1>
    <h3>What is the Manoa Market?</h3>
    <p>
      It is a web application used to trade, sell, and purchase goods with the community.
      We wanted create an environment that allows for “campus-specific” goods to be recycled and reused effectively.
    </p>
    <h3>Who is allowed to use this application?</h3>
    <p>
      Users are obligated to connect their accounts with UH credentials.
      This web application was intended for those in the UH community, from our students to staff and faculty members.
    </p>
    <h3>Is it safe/trustworthy?</h3>
    <p>
      Yes. To ensure the safety of our users, there is an explicit expectation that all transactions should occur on campus grounds.
    </p>
    <h3>Where should transactions occur?</h3>
    <Map />
  </Container>

);

export default FAQ;
