import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const CategorySearchBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  const menuStyle = { marginBottom: '0px' };
  // const navbarClassName = loggedIn ? 'bg-dark' : 'bg-light';
  const navbarClassName = 'bg-dark align-items-center';
  return (
    <Navbar expand="lg" style={menuStyle} className={navbarClassName}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            <Nav.Link id="all-listings-nav" as={NavLink} to="/allListings" key="allListings">All</Nav.Link>
            <Nav.Link id="book-listing" as={NavLink} to="/bookListings" key="bookListings">Books</Nav.Link>,
            <Nav.Link id="clothing-listing" as={NavLink} to="/clothingListings" key="clothingListings">Clothing</Nav.Link>,
            <Nav.Link id="furniture-listing" as={NavLink} to="/furnitureListings" key="furnitureListings">Furniture</Nav.Link>,
            <Nav.Link id="sport-listing" as={NavLink} to="/sportListings" key="sportListings">Sporting</Nav.Link>,
            <Nav.Link id="misc-listing" as={NavLink} to="/miscListings" key="miscListings">Miscellaneous</Nav.Link>,
            {currentUser ? ([
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Nav.Link id="list-stuff-admin-nav" as={NavLink} to="/admin" key="admin">Admin</Nav.Link>
            ) : ''}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CategorySearchBar;
