import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Listings table. See pages/MyListings.jsx. */
const Listing = ({ listing }) => (
  <Card className="h-100">
    <Card.Img variant="top" src={listing.itemImage} width={100} />
    <Card.Header>
      <Card.Title>{listing.itemName}</Card.Title>
      <Card.Subtitle>Price: ${listing.price} </Card.Subtitle>
      <Card.Subtitle>Negotiable: {listing.negotiable}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Subtitle>Condition: {listing.condition}</Card.Subtitle>
      <Card.Text>{listing.description}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Link to={`/edit/${listing._id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

// Require a document to be passed to this component.
Listing.propTypes = {
  listing: PropTypes.shape({
    itemName: PropTypes.string,
    itemImage: PropTypes.string,
    price: PropTypes.number,
    negotiable: PropTypes.string,
    condition: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Listing;
