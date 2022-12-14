import { Meteor } from 'meteor/meteor';
import { Listings } from '../../api/listing/Listing';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addListingData = (data) => {
  console.log(`  Adding: ${data.itemName} (${data.owner})`);
  Listings.collection.insert(data);
};

// Initialize the ListingsCollection if empty.
if (Listings.collection.find().count() === 0) {
  if (Meteor.settings.defaultListing) {
    console.log('Creating default listing data.');
    Meteor.settings.defaultListing.forEach(data => addListingData(data));
  }
}
