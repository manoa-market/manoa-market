import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import Team from '../pages/Team';
import AddListing from '../pages/AddListing';
import FAQ from '../pages/FAQ';
import EditListing from '../pages/EditListing';
import MyListings from '../pages/MyListings';
import AllListings from '../pages/AllListings';
import ListingsSport from '../pages/ListingsSport';
import ListingsBooks from '../pages/ListingsBooks';
import ListingsClothing from '../pages/ListingsClothing';
import ListingsFurniture from '../pages/ListingsFurniture';
import ListingsMisc from '../pages/ListingsMisc';
import ListingsElectronics from '../pages/ListingsEletronics';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/team" element={<Team />} />
        <Route path="/allListings" element={<AllListings />} />
        <Route path="/myListings" element={<ProtectedRoute><MyListings /></ProtectedRoute>} />
        <Route path="/clothingListings" element={<ProtectedRoute><ListingsClothing /></ProtectedRoute>} />
        <Route path="/bookListings" element={<ProtectedRoute><ListingsBooks /></ProtectedRoute>} />
        <Route path="/electronicsListings" element={<ProtectedRoute><ListingsElectronics /></ProtectedRoute>} />
        <Route path="/furnitureListings" element={<ProtectedRoute><ListingsFurniture /></ProtectedRoute>} />
        <Route path="/miscListings" element={<ProtectedRoute><ListingsMisc /></ProtectedRoute>} />
        <Route path="/sportListings" element={<ProtectedRoute><ListingsSport /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><Landing /></ProtectedRoute>} />
        <Route path="/addlisting" element={<ProtectedRoute><AddListing /></ProtectedRoute>} />
        <Route path="/list" element={<ProtectedRoute><Landing /></ProtectedRoute>} />
        <Route path="/edit/:_id" element={<ProtectedRoute><EditListing /></ProtectedRoute>} />
        <Route path="/notauthorized" element={<NotAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  children: <Landing />,
};

export default App;
