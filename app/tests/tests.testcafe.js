import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { faqPage } from './FAQ.Page';
import { alllistingsPage } from './alllistings.page';
import { mylistingsPage } from './mylistings.page';
import { addlistingPage } from './addlisting.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };

const sampleitem = { name: 'math book', price: '50', image: 'https://www.mheducation.com/cover-images/Jpeg_400-high/125967651X.jpeg', description: 'math textbook' };

fixture('meteor-react-bootstrap-template localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the FAQ page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotofaqPage(testController);
  await faqPage.isDisplayed(testController);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the all listings page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoalllistingsPage(testController);
  await alllistingsPage.isDisplayed(testController);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the my listings page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotomylistingsPage(testController);
  await mylistingsPage.isDisplayed(testController);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the add listing page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoaddlistingPage(testController);
  await addlistingPage.isDisplayed(testController);
  await addlistingPage.addListing(testController, sampleitem.name, sampleitem.price, sampleitem.image, sampleitem.description);
});
