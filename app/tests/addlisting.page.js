import { Selector } from 'testcafe';

class AddlistingPage {
  constructor() {
    this.pageId = '#add-listing-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Fills out and submits the form to add listing, then checks to see that addition was successful. */
  async addListing(testController, name, price, image, description) {
    await this.isDisplayed(testController);
    await testController.typeText('#add-form-name', name);
    await testController.typeText('#add-form-price', price);
    await testController.typeText('#add-form-img', image);
    await testController.typeText('#add-form-desc', description);
    await testController.click('#add-form-submit');
  }
}

export const addlistingPage = new AddlistingPage();
