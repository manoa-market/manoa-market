import React from 'react';
import { Container } from 'react-bootstrap';
import Map from '../components/Map';

const FAQ = () => (
  <Container id="faq-page" className="py-5">
    <h1 className="text-center py-2">Frequently Asked Questions</h1>
    <h4>What is the Manoa Market?</h4>
    <p>
      It is a web application used to trade, sell, and purchase goods with the community.
      We wanted create an environment that allows for “campus-specific” goods to be recycled and reused effectively.
    </p>
    <h4>Who is allowed to use this application?</h4>
    <p>
      Users are obligated to connect their accounts with UH credentials.
      This web application was intended for those in the UH community, from our students to staff and faculty members.
    </p>
    <h4>How do I make a purchase?</h4>
    <p>
      When you come across a listing which interests you, please contact seller via email to discuss transaction details.
      Depending on listing details, buyers may be open to trade or negotiate items up for sale.
      Payment methods are to be decided by the seller.
      Recommended methods of payment are venmo, paypal, or in person with cash.
    </p>
    <h4>Is it safe/trustworthy?</h4>
    <p>
      Yes. To ensure the safety of our users, there is an explicit expectation that all transactions should occur on campus grounds.
    </p>
    <h4>Where should transactions occur?</h4>
    <p>Both users must check-in into the any of the following facilities:</p>
    <Map />
  </Container>

);

export default FAQ;
