import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Listings } from '../../api/listing/Listing';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};
// Initialize the database with a default data document.
const addListingData = (data) => {
  console.log(`  Adding: ${data.itemName} (${data.owner})`);
  Listings.collection.insert(data);
};


// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}
// Initialize the ListingsCollection if empty.
if (Listings.collection.find().count() === 0) {
  if (Meteor.settings.defaultListing) {
    console.log('Creating default listing data.');
    Meteor.settings.defaultListing.forEach(data => addListingData(data));
  }
}
