import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Listings table. See pages/ListListing.jsx. */
const Listing = ({ listing }) => (
  <Card className="h-100">
    <Card.Header>
      <Card.Title>{listing.itemName}</Card.Title>
      <Card.Subtitle>Price: ${listing.price}</Card.Subtitle>
      <Card.Subtitle>Condition: {listing.condition}</Card.Subtitle>
      <Card.Subtitle>Owner: {listing.owner}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Image src={listing.itemImage} width={100} />
      <Card.Text>{listing.description}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Listing.propTypes = {
  listing: PropTypes.shape({
    itemName: PropTypes.string,
    itemImage: PropTypes.string,
    price: PropTypes.number,
    condition: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Listing;
