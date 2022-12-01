import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { _ } from 'meteor/underscore';
import LoadingSpinner from '../components/LoadingSpinner';
import { Listings } from '../../api/listing/Listing';
import Listing from '../components/Listing';
import CategorySearchBar from '../components/CategorySearchBar';

/* Renders a table containing all of the Listing documents. Use <ListingItem> to render each row. */
const AllListings = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, listings } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Listings.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const Items = Listings.collection.find({}).fetch();
    const unsoldItems = _.filter(Items, function (data) { return data.sold === false; });
    return {
      listings: unsoldItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container id="alllistings-page" className="py-3">
      <Col>
        <CategorySearchBar />
      </Col>
      <Col>
        <Row className="justify-content-center">
          <Col md={7}>
            <Col className="text-center">
              <h2>All Listings</h2>
            </Col>
            <Row xs={1} md={2} lg={3} className="g-4">
              {listings.map((listing) => (<Col key={listing._id}><Listing listing={listing} /></Col>))}
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  ) : <LoadingSpinner />);
};

export default AllListings;
