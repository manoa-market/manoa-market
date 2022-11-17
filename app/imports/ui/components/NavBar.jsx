import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  const menuStyle = { marginBottom: '0px' };
  // const navbarClassName = loggedIn ? 'bg-dark' : 'bg-light';
  const navbarClassName = 'bg-dark';
  return (
    <Navbar expand="lg" style={menuStyle} className={navbarClassName}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="align-items-center">
          <span style={{ fontWeight: 800, fontSize: '24px' }}><Image src="/images/logo.png" width={100} style={{ marginBottom: 0 }} /></span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser ? ([
              <Nav.Link id="add-stuff-nav" as={NavLink} to="/listlisting" key="listlisting">Listings</Nav.Link>,
              <Nav.Link id="list-stuff-nav" as={NavLink} to="/list" key="list">Categories</Nav.Link>,
              <Nav.Link id="add-stuff-nav" as={NavLink} to="/addlisting" key="addlisting">List an Item</Nav.Link>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Nav.Link id="list-stuff-admin-nav" as={NavLink} to="/admin" key="admin">Admin</Nav.Link>
            ) : ''}
            <Nav.Link id="faq-nav" as={NavLink} to="/faq" key="faq">FAQs</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  <PersonFill />
                  Sign
                  in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                  <PersonPlusFill />
                  Sign
                  up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="navbar-current-user" title={currentUser}>
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign
                  out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

/*
<Navbar expand="lg" style={menuStyle} className={navbarClassName}>
  <Container>
    <Navbar.Brand as={NavLink} to="/" className="align-items-center">
      <span style={{ fontWeight: 800, fontSize: '24px' }}><Image src="/images/logo.png" width={100} style={{ marginBottom: 0 }} /></span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls={ComponentIDs.basicNavbarNav} />
    <Navbar.Collapse id={ComponentIDs.basicNavbarNav}>
      <Nav className="me-auto justify-content-start">
        {currentUser ? (
          <Nav.Link as={NavLink} id={ComponentIDs.homeMenuItem} to="/myprofile" key="myprofile">My Profile</Nav.Link>
        ) : ''}
        <Nav.Link as={NavLink} id={ComponentIDs.profilesMenuItem} to="/listings" key="listings">Listings</Nav.Link>
        <Nav.Link as={NavLink} id={ComponentIDs.projectsMenuItem} to="/projects" key="projects">Projects</Nav.Link>
        <Nav.Link as={NavLink} id={ComponentIDs.interestsMenuItem} to="/interests" key="interests">Interests</Nav.Link>
        {currentUser ? (
          [<Nav.Link as={NavLink} id={ComponentIDs.addProjectMenuItem} to="/addProject" key="addP">Add Project</Nav.Link>,
            <Nav.Link as={NavLink} id={ComponentIDs.filterMenuItem} to="/filter" key="filter">Filter</Nav.Link>]
        ) : ''}
      </Nav>
      <Nav className="justify-content-end">
        {currentUser === '' ? (
          <NavDropdown id={ComponentIDs.loginDropdown} title="Login">
            <NavDropdown.Item id={ComponentIDs.loginDropdownSignIn} as={NavLink} to="/signin">
              <PersonFill />
              Sign
              in
            </NavDropdown.Item>
            <NavDropdown.Item id={ComponentIDs.loginDropdownSignUp} as={NavLink} to="/signup">
              <PersonPlusFill />
              Sign
              up
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          <NavDropdown id={ComponentIDs.currentUserDropdown} title={currentUser}>
            <NavDropdown.Item id={ComponentIDs.currentUserDropdownSignOut} as={NavLink} to="/signout">
              <BoxArrowRight />
              {' '}
              Sign
              out
            </NavDropdown.Item>
          </NavDropdown>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
*/
